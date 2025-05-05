import { useEffect, useState } from 'react'
import { REFERER_DOMAINS } from '../constants/referralSources'

const useReferralSource = () => {
  const [source, setSource] = useState('default')

  useEffect(() => {
    const referrer = document.referrer

    if (referrer) {
      const match = Object.entries(REFERER_DOMAINS).find(([key]) =>
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
