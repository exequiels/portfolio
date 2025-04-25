import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react'
import useReferralSource from '../hooks/useReferralSource'

type LenguajeFormalType = {
  isLenguajeFormal: boolean
}

export const LenguajeFormalContext = createContext<LenguajeFormalType>({
  isLenguajeFormal: false,
})

export const LenguajeFormalProvider = ({
  children,
}: {
  children: ReactNode
}) => {
  const source = useReferralSource()
  const [isLenguajeFormal, setEsLenguajeFormal] = useState(false)

  useEffect(() => {
    if (source === 'linkedin' || source === 'google') {
      setEsLenguajeFormal(true)
    } else {
      setEsLenguajeFormal(false)
    }
  }, [source])

  const value = { isLenguajeFormal }

  return (
    <LenguajeFormalContext.Provider value={value}>
      {children}
    </LenguajeFormalContext.Provider>
  )
}

export const useLenguajeFormal = () => useContext(LenguajeFormalContext)
