import { LightContext } from '@/contexts/lightContext'
import { useContext, useEffect } from 'react'

export default function useLight() {
  const { isLight, setIsLight } = useContext(LightContext)

  function renderLight() {
    setIsLight(true)
    localStorage.setItem('theme', JSON.stringify(true))
  }

  function renderNight() {
    setIsLight(false)
    localStorage.setItem('theme', JSON.stringify(false))
  }


  useEffect(() => {
    const theme = localStorage.getItem('theme')
    if (theme) {
      setIsLight(JSON.parse(theme))
    }
  }, [])

  return {
    renderLight,
    renderNight
  }
}