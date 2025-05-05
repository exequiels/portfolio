import {
  FORMAL_SOURCES,
  REDES_SOCIALES,
  REFERER_DOMAINS,
} from '../constants/referralSources'

export function getInitialTheme(): 'default' | 'formal' | 'redes' {
  const urlParams = new URLSearchParams(window.location.search)
  const sourceParam = urlParams.get('source')
  if (sourceParam && FORMAL_SOURCES.includes(sourceParam)) return 'formal'
  if (sourceParam && REDES_SOCIALES.includes(sourceParam)) return 'redes'

  const referrer = document.referrer
  if (referrer) {
    const match = Object.entries(REFERER_DOMAINS).find(([key]) =>
      referrer.includes(key)
    )
    if (match) {
      if (FORMAL_SOURCES.includes(match[1])) return 'formal'
      if (REDES_SOCIALES.includes(match[1])) return 'redes'
    }
  }

  return 'default'
}
