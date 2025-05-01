import { FORMAL_SOURCES, REFERER_DOMAINS } from '../constants/referralSources'

export function getInitialLanguage(): boolean {
  // Busca primero en ?source
  const urlParams = new URLSearchParams(window.location.search)
  const sourceParam = urlParams.get('source')
  if (sourceParam && FORMAL_SOURCES.includes(sourceParam)) return true

  // Si no, revisa el referrer
  const referrer = document.referrer
  if (referrer) {
    const match = Object.entries(REFERER_DOMAINS).find(([key]) =>
      referrer.includes(key)
    )
    if (match && FORMAL_SOURCES.includes(match[1])) return true
  }
  return false
}
