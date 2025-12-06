import { NextRequest, NextResponse } from 'next/server'
import type { ApiResponse, DownloadRequest } from '@/types'

// Rate limiting (simple in-memory store)
const rateLimit = new Map<string, number[]>()
const RATE_LIMIT_WINDOW = 60000 // 1 minute
const MAX_REQUESTS = 10

function checkRateLimit(ip: string): boolean {
  const now = Date.now()
  const requests = rateLimit.get(ip) || []
  const recentRequests = requests.filter(time => now - time < RATE_LIMIT_WINDOW)
  
  if (recentRequests.length >= MAX_REQUESTS) {
    return false
  }
  
  recentRequests.push(now)
  rateLimit.set(ip, recentRequests)
  return true
}

export async function POST(request: NextRequest) {
  // Rate limiting
  const ip = request.headers.get('x-forwarded-for') || 'unknown'
  if (!checkRateLimit(ip)) {
    return NextResponse.json(
      { error: 'Too many requests. Please try again later.' } as ApiResponse,
      { status: 429 }
    )
  }
  try {
    const body: DownloadRequest = await request.json()
    const { url } = body

    // Validate Instagram URL
    if (!url || typeof url !== 'string' || !url.includes('instagram.com')) {
      return NextResponse.json(
        { 
          success: false,
          error: 'Please enter a valid Instagram Reel URL' 
        } as ApiResponse,
        { status: 400 }
      )
    }

    // Sanitize URL
    const sanitizedUrl = url.trim()

    // RapidAPI credentials
    const RAPIDAPI_KEY = process.env.RAPIDAPI_KEY || '0c93098c7cmsh6f155e7026aea8cp144223jsn9aeda1d206a1'
    const RAPIDAPI_HOST = 'instagram-reels-downloader-api.p.rapidapi.com'

    // Encode the Instagram URL
    const encodedUrl = encodeURIComponent(sanitizedUrl)
    const apiUrl = `https://${RAPIDAPI_HOST}/download?url=${encodedUrl}`

    console.log('Fetching from:', apiUrl)

    // Call RapidAPI Instagram Reels Downloader
    const apiResponse = await fetch(apiUrl, {
      method: 'GET',
      headers: {
        'x-rapidapi-key': RAPIDAPI_KEY,
        'x-rapidapi-host': RAPIDAPI_HOST,
      },
    })

    const responseText = await apiResponse.text()
    console.log('Raw API Response:', responseText)

    if (!apiResponse.ok) {
      console.error('API Error:', apiResponse.status, responseText)
      
      // Return more specific error message
      if (apiResponse.status === 404) {
        return NextResponse.json(
          { error: 'Could not find the video. Please check the URL and try again.' },
          { status: 404 }
        )
      }
      
      if (apiResponse.status === 403) {
        return NextResponse.json(
          { error: 'API access denied. Please check your API key.' },
          { status: 403 }
        )
      }
      
      return NextResponse.json(
        { error: `API error: ${apiResponse.status}. Please try again.` },
        { status: apiResponse.status }
      )
    }

    let data
    try {
      data = JSON.parse(responseText)
    } catch (parseError) {
      console.error('JSON Parse Error:', parseError)
      return NextResponse.json(
        { error: 'Invalid response from API' },
        { status: 500 }
      )
    }

    console.log('Parsed API Response:', JSON.stringify(data, null, 2))

    // Check if API call was successful
    if (!data.success || !data.data) {
      console.error('API returned unsuccessful response:', data)
      return NextResponse.json(
        { error: 'Could not fetch video. Please try again.' },
        { status: 404 }
      )
    }

    // Extract video URL from medias array (highest quality video)
    const videoMedia = data.data.medias?.find((media: any) => media.type === 'video')
    
    if (!videoMedia || !videoMedia.url) {
      console.error('No video found in medias array:', data.data.medias)
      return NextResponse.json(
        { error: 'Could not extract video URL from response.' },
        { status: 404 }
      )
    }

    const successResponse: ApiResponse = {
      success: true,
      videoUrl: videoMedia.url,
      thumbnail: data.data.thumbnail || '',
      title: data.data.title || 'Instagram Reel',
      author: data.data.author || '',
      duration: data.data.duration || 0,
    }

    return NextResponse.json(successResponse)

  } catch (error) {
    console.error('Download error:', error)
    
    const errorResponse: ApiResponse = {
      success: false,
      error: error instanceof Error ? error.message : 'Failed to download. Please try again.',
    }
    
    return NextResponse.json(errorResponse, { status: 500 })
  }
}
