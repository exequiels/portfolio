import { createContext, ReactNode, useContext, useState } from 'react'
import { getInitialLanguage } from '../utils/getInitialLanguage'

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
  const [isLenguajeFormal] = useState(getInitialLanguage())

  return (
    <LenguajeFormalContext.Provider value={{ isLenguajeFormal }}>
      {children}
    </LenguajeFormalContext.Provider>
  )
}

export const useLenguajeFormal = () => useContext(LenguajeFormalContext)
