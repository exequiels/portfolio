import { useEffect, useState } from 'react'

const useReferralSource = () => {
  const [source, setSource] = useState('default')

  useEffect(() => {
    const referrer = document.referrer

    const plataformas: Record<string, string> = {
      'linkedin.com': 'linkedin',
      'facebook.com': 'facebook',
      'instagram.com': 'instagram',
      'youtube.com': 'youtube',
      'google.com': 'google',
    }

    if (referrer) {
      const match = Object.entries(plataformas).find(([key]) =>
        referrer.includes(key)
      )
      if (match) setSource(match[1])
    }

    const urlParams = new URLSearchParams(window.location.search)
    const sourceParam = urlParams.get('source')
    if (sourceParam) setSource(sourceParam)
  }, [])
  return source
}

export default useReferralSource
