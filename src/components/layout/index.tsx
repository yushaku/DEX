import React from 'react'
import useLocalStorage from 'use-local-storage'
import { Footer } from './footer'
import { Header } from './header'
import { Sidebar } from './sidebar'
import { useLocation } from 'react-router-dom'

export const Layout = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation().pathname
  const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches
  const [theme, setTheme] = useLocalStorage(
    'theme',
    defaultDark ? 'dark' : 'light'
  )

  const switchTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
  }

  if (location === '/') return <main data-theme={theme}>{children}</main>

  return (
    <main data-theme={theme}>
      <section className="flex h-screen overflow-hidden bg-background">
        <Sidebar />
        <div className="no-scrollbar container overflow-y-scroll">
          <Header theme={theme} switchTheme={switchTheme} />
          {children}
          <Footer />
        </div>
      </section>
    </main>
  )
}
