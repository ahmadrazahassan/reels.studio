'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowDown, Loader2, Check, AlertCircle, Link as LinkIcon, Download, Copy, Clipboard, CheckCircle, Image } from 'lucide-react'
import toast from 'react-hot-toast'
import type { VideoData } from '@/types'

export default function DownloadForm() {
  const [url, setUrl] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [downloadProgress, setDownloadProgress] = useState(0)
  const [videoData, setVideoData] = useState<VideoData | null>(null)
  const [error, setError] = useState('')
  const inputRef = useRef<HTMLInputElement>(null)
  const [retryCount, setRetryCount] = useState(0)
  const [isMounted, setIsMounted] = useState(false)

  // Set mounted state
  useEffect(() => {
    setIsMounted(true)
  }, [])

  // Keyboard shortcut: Ctrl/Cmd + V to focus and paste
  useEffect(() => {
    if (!isMounted) return

    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'v') {
        if (document.activeElement !== inputRef.current) {
          e.preventDefault()
          inputRef.current?.focus()
          
          // Try to read clipboard
          navigator.clipboard.readText().then(text => {
            if (text.includes('instagram.com')) {
              setUrl(text)
              toast.success('Instagram URL detected and pasted!', {
                icon: <Clipboard className="w-5 h-5" />,
              })
            }
          }).catch(() => {
            // Clipboard access denied, just focus
          })
        }
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isMounted])

  // Auto-detect clipboard content on mount
  useEffect(() => {
    if (!isMounted) return

    const checkClipboard = async () => {
      try {
        const text = await navigator.clipboard.readText()
        if (text.includes('instagram.com') && !url) {
          toast('Instagram URL detected in clipboard!', {
            icon: <Clipboard className="w-5 h-5" />,
            duration: 3000,
          })
        }
      } catch (err) {
        // Clipboard access not available
      }
    }
    
    checkClipboard()
  }, [isMounted])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setVideoData(null)
    setDownloadProgress(0)
    
    if (!url.includes('instagram.com')) {
      toast.error('Please enter a valid Instagram Reel URL')
      setError('Please enter a valid Instagram Reel URL')
      return
    }

    setIsLoading(true)
    const loadingToast = toast.loading('Fetching your Reel...')

    try {
      // Simulate progress
      const progressInterval = setInterval(() => {
        setDownloadProgress(prev => {
          if (prev >= 90) {
            clearInterval(progressInterval)
            return 90
          }
          return prev + 10
        })
      }, 200)

      const response = await fetch('/api/download', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ url }),
      })

      clearInterval(progressInterval)
      setDownloadProgress(100)

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Failed to fetch video')
      }

      setVideoData({
        videoUrl: data.videoUrl,
        thumbnail: data.thumbnail,
        title: data.title || 'Instagram Reel',
      })
      
      toast.success('Video ready to download!', {
        id: loadingToast,
        icon: <CheckCircle className="w-5 h-5" />,
      })
      setRetryCount(0)
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to download. Please try again.'
      setError(errorMessage)
      toast.error(errorMessage, {
        id: loadingToast,
      })
    } finally {
      setIsLoading(false)
      setDownloadProgress(0)
    }
  }

  const handleRetry = () => {
    setRetryCount(prev => prev + 1)
    handleSubmit(new Event('submit') as any)
  }

  const handleDownload = async (type: 'video' | 'thumbnail' = 'video') => {
    if (!videoData) return

    const downloadToast = toast.loading(type === 'video' ? 'Downloading video...' : 'Downloading thumbnail...')

    try {
      setIsLoading(true)
      
      const downloadUrl = type === 'video' ? videoData.videoUrl : videoData.thumbnail
      const fileExtension = type === 'video' ? 'mp4' : 'jpg'
      const filename = `${videoData.title.replace(/[^a-z0-9]/gi, '_').substring(0, 50)}_${type}.${fileExtension}`
      
      // Use our proxy API to download the file
      const response = await fetch('/api/proxy-download', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          url: downloadUrl,
          filename: filename,
        }),
      })
      
      if (!response.ok) {
        throw new Error(`Failed to fetch ${type}`)
      }

      const blob = await response.blob()
      
      // Create a blob URL and trigger download
      const blobUrl = window.URL.createObjectURL(blob)
      const link = document.createElement('a')
      link.href = blobUrl
      link.download = filename
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
      
      // Clean up the blob URL
      window.URL.revokeObjectURL(blobUrl)
      
      toast.success(`${type === 'video' ? 'Video' : 'Thumbnail'} downloaded successfully!`, {
        id: downloadToast,
        icon: <Check className="w-5 h-5" />,
      })
      
      setIsLoading(false)
    } catch (err) {
      setIsLoading(false)
      const errorMsg = `Failed to download ${type}. Please try again.`
      setError(errorMsg)
      toast.error(errorMsg, {
        id: downloadToast,
      })
    }
  }

  const handlePasteFromClipboard = async () => {
    try {
      const text = await navigator.clipboard.readText()
      if (text.includes('instagram.com')) {
        setUrl(text)
        toast.success('URL pasted from clipboard!')
      } else {
        toast.error('No Instagram URL found in clipboard')
      }
    } catch (err) {
      toast.error('Unable to access clipboard')
    }
  }

  return (
    <div className="w-full" suppressHydrationWarning>
      <form onSubmit={handleSubmit} className="space-y-4" suppressHydrationWarning>
        {/* URL Input with Modern Design */}
        <div className="relative group" suppressHydrationWarning>
          <div className="absolute left-5 top-1/2 -translate-y-1/2 text-dark/40 group-focus-within:text-dark-deep transition-colors">
            <LinkIcon className="w-5 h-5" />
          </div>
          <input
            ref={inputRef}
            type="text"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="instagram.com/reel/... (Ctrl+V to paste)"
            className="w-full pl-14 pr-24 py-5 rounded-[20px] bg-light-gray border-2 border-dark/5 focus:border-primary focus:bg-light focus:outline-none transition-all duration-200 font-display font-medium text-base text-dark-deep placeholder:text-dark/30 placeholder:font-light shadow-soft"
            disabled={isLoading}
            suppressHydrationWarning
          />
          {/* Paste Button */}
          <button
            type="button"
            onClick={handlePasteFromClipboard}
            className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-[12px] bg-dark/5 hover:bg-dark/10 transition-colors"
            disabled={isLoading}
            title="Paste from clipboard"
          >
            <Copy className="w-4 h-4 text-dark/60" />
          </button>
          {/* Animated Border Effect */}
          <div className="absolute inset-0 rounded-[20px] border-2 border-primary opacity-0 group-focus-within:opacity-100 transition-opacity pointer-events-none shadow-[0_0_20px_rgba(140,255,46,0.3)]" />
        </div>

        {/* Progress Bar */}
        {isLoading && downloadProgress > 0 && (
          <div className="w-full h-1 bg-dark/5 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-primary shadow-[0_0_10px_rgba(140,255,46,0.5)]"
              initial={{ width: 0 }}
              animate={{ width: `${downloadProgress}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>
        )}

        {/* Submit Button with Modern Style */}
        <motion.button
          type="submit"
          disabled={isLoading || !url}
          className="relative w-full bg-dark-deep text-primary font-display font-bold text-base py-5 rounded-[20px] overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed group shadow-soft hover:shadow-soft-md"
          whileHover={{ scale: isLoading || !url ? 1 : 1.02 }}
          whileTap={{ scale: isLoading || !url ? 1 : 0.98 }}
        >
          {/* Hover Effect Background */}
          <div className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-10 transition-opacity" />
          
          <div className="relative flex items-center justify-center gap-2">
            {isLoading ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                <span>Processing</span>
              </>
            ) : (
              <>
                <ArrowDown className="w-5 h-5" />
                <span>Download Reel</span>
              </>
            )}
          </div>
        </motion.button>
      </form>

      {/* Success State with Video Preview */}
      <AnimatePresence>
        {videoData && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="mt-6 space-y-4"
          >
            {/* Status Badge */}
            <div className="flex items-center gap-3 p-4 bg-cream-50 rounded-[20px] border border-black/5">
              <div className="w-12 h-12 rounded-[16px] bg-primary flex items-center justify-center flex-shrink-0">
                <Check className="w-6 h-6 text-black" />
              </div>
              <div className="flex-1">
                <h3 className="font-display font-bold text-base mb-0.5">Ready to Download</h3>
                <p className="text-black/50 text-sm">Video processed successfully</p>
              </div>
            </div>

            {/* Video Preview Card */}
            <div className="relative rounded-[24px] overflow-hidden bg-black border-2 border-black/10">
              <video
                src={videoData.videoUrl}
                controls
                className="w-full max-h-[450px] object-contain"
                preload="metadata"
              >
                Your browser does not support the video tag.
              </video>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3">
              {/* Download Buttons Grid */}
              <div className="grid grid-cols-2 gap-3">
                {/* Download Video Button */}
                <motion.button
                  onClick={() => handleDownload('video')}
                  disabled={isLoading}
                  className="relative bg-primary text-black font-display font-bold px-4 py-4 rounded-[20px] overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed group"
                  whileHover={{ scale: isLoading ? 1 : 1.02 }}
                  whileTap={{ scale: isLoading ? 1 : 0.98 }}
                >
                  <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-5 transition-opacity" />
                  <div className="relative flex flex-col items-center justify-center gap-2">
                    {isLoading ? (
                      <Loader2 className="w-5 h-5 animate-spin" />
                    ) : (
                      <Download className="w-5 h-5" />
                    )}
                    <span className="text-sm">Video</span>
                  </div>
                </motion.button>

                {/* Download Thumbnail Button */}
                <motion.button
                  onClick={() => handleDownload('thumbnail')}
                  disabled={isLoading || !videoData.thumbnail}
                  className="relative bg-black text-primary font-display font-bold px-4 py-4 rounded-[20px] overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed group"
                  whileHover={{ scale: isLoading ? 1 : 1.02 }}
                  whileTap={{ scale: isLoading ? 1 : 0.98 }}
                >
                  <div className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-10 transition-opacity" />
                  <div className="relative flex flex-col items-center justify-center gap-2">
                    <Image className="w-5 h-5" />
                    <span className="text-sm">Thumbnail</span>
                  </div>
                </motion.button>
              </div>

              {/* Reset Button */}
              <button
                onClick={() => {
                  setVideoData(null)
                  setUrl('')
                }}
                className="w-full text-black/50 hover:text-black text-sm font-display font-medium py-3 transition-colors rounded-[20px] hover:bg-cream-50"
              >
                Download Another Reel
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Error State with Retry */}
      <AnimatePresence>
        {error && !videoData && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="mt-4 p-5 bg-red-50 rounded-2xl border border-red-200"
          >
            <div className="flex items-start gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-red-100 flex items-center justify-center flex-shrink-0">
                <AlertCircle className="w-5 h-5 text-red-600" />
              </div>
              <div className="flex-1">
                <h3 className="font-display font-bold text-base mb-1">Oops!</h3>
                <p className="text-black/60 text-sm">{error}</p>
              </div>
            </div>
            <button
              onClick={handleRetry}
              className="w-full bg-black text-white font-display font-medium text-sm px-4 py-2.5 rounded-xl hover:bg-black/90 transition-colors"
            >
              Try Again {retryCount > 0 && `(Attempt ${retryCount + 1})`}
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Instructions - Only show when no video */}
      {!videoData && (
        <div className="mt-6 p-5 bg-cream-50 rounded-[20px] border border-black/5">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-1.5 h-1.5 rounded-full bg-black" />
            <h4 className="font-display font-bold text-xs uppercase tracking-wider text-black/50">
              How to Use
            </h4>
          </div>
          <ol className="space-y-2 text-black/60 text-sm">
            <li className="flex gap-3">
              <span className="font-display font-bold text-black">1</span>
              <span>Open Instagram and find your Reel</span>
            </li>
            <li className="flex gap-3">
              <span className="font-display font-bold text-black">2</span>
              <span>Tap (•••) and select "Copy Link"</span>
            </li>
            <li className="flex gap-3">
              <span className="font-display font-bold text-black">3</span>
              <span>Paste the link above and click Fetch</span>
            </li>
          </ol>
        </div>
      )}
    </div>
  )
}
