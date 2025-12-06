'use client'

import { Toaster } from 'react-hot-toast'

export default function ToastProvider() {
  return (
    <Toaster
      position="top-center"
      toastOptions={{
        duration: 4000,
        style: {
          background: '#000',
          color: '#CDFF00',
          borderRadius: '20px',
          padding: '16px 24px',
          fontFamily: 'var(--font-montserrat)',
          fontWeight: '600',
        },
        success: {
          iconTheme: {
            primary: '#CDFF00',
            secondary: '#000',
          },
        },
        error: {
          iconTheme: {
            primary: '#ef4444',
            secondary: '#000',
          },
          style: {
            background: '#000',
            color: '#fff',
          },
        },
      }}
    />
  )
}
