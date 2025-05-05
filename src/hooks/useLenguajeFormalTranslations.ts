import { useTranslation } from 'react-i18next'
import { useLenguajeFormal } from '../context/LenguajeFormalContext'
import { TOptions } from 'i18next'

const useLenguajeFormalTranslations = (namespace: string) => {
  const { t, i18n } = useTranslation(namespace)
  const { isLenguajeFormal } = useLenguajeFormal()

  const lenguajeT = (key: string, options?: TOptions) => {
    if (isLenguajeFormal) {
      const formalKey = `${key}_formal`
      if (i18n.exists(`${namespace}:${formalKey}`)) {
        return t(formalKey, options)
      }
    }
    return t(key, options)
  }
  return { t: lenguajeT, i18n }
}

export default useLenguajeFormalTranslations
