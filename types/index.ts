// API Response Types
export interface VideoData {
  videoUrl: string
  thumbnail: string
  title: string
  author?: string
  duration?: number
}

export interface ApiResponse {
  success: boolean
  videoUrl?: string
  thumbnail?: string
  title?: string
  author?: string
  duration?: number
  error?: string
}

export interface DownloadRequest {
  url: string
}

export interface ErrorResponse {
  error: string
  statusCode?: number
}

// Component Props Types
export interface FeatureCardProps {
  icon: React.ComponentType<{ className?: string }>
  title: string
  description: string
  accent?: boolean
}

export interface ToastOptions {
  duration?: number
  position?: 'top-center' | 'top-right' | 'bottom-center' | 'bottom-right'
}
