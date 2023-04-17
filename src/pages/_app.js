import '@/styles/globals.css'
import { createContext, useState } from 'react'

export const userContext = createContext()

export default function App({ Component, pageProps }) {
  const [token, setToken] = useState('lalala')

  return (
    <userContext.Provider value={{token, setToken}}>
      <Component {...pageProps} />
    </userContext.Provider>
  )
}
