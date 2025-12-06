export function cn(...classes: (string | undefined | null | false)[]) {
  return classes.filter(Boolean).join(' ')
}

export function formatNumber(num: number): string {
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1) + 'M'
  }
  if (num >= 1000) {
    return (num / 1000).toFixed(1) + 'K'
  }
  return num.toString()
}

export function animateCounter(
  element: HTMLElement,
  start: number,
  end: number,
  duration: number
) {
  const startTime = performance.now()
  
  const updateCounter = (currentTime: number) => {
    const elapsed = currentTime - startTime
    const progress = Math.min(elapsed / duration, 1)
    
    const easeOutQuad = (t: number) => t * (2 - t)
    const current = Math.floor(start + (end - start) * easeOutQuad(progress))
    
    element.textContent = formatNumber(current)
    
    if (progress < 1) {
      requestAnimationFrame(updateCounter)
    }
  }
  
  requestAnimationFrame(updateCounter)
}
