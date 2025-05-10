export const REDES_SOCIALES = ['facebook', 'instagram', 'youtube', 'whatsapp']
export const FORMAL_SOURCES = ['linkedin', 'google', 'newsletter']
export const TODAS_SOURCES = [...REDES_SOCIALES, ...FORMAL_SOURCES]

export const REFERER_DOMAINS: Record<string, string> = {
  'linkedin.com': 'linkedin',
  'facebook.com': 'facebook',
  'instagram.com': 'instagram',
  'youtube.com': 'youtube',
  'google.com': 'google',
  'whatsapp.com': 'whatsapp',
}
