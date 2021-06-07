import { FC, useState, useEffect } from 'react'
import cn from 'classnames'

import { useTheme } from 'next-themes'
import Mousetrap from 'mousetrap'

import { Tooltip } from 'react-tippy'
import { SunIcon, MoonIcon } from '@heroicons/react/outline'

interface Props {
  className?: string
}

const ThemeWidget: FC<Props> = ({ className }) => {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    Mousetrap.bind(['ctrl+t'], () =>
      setTheme(theme === 'light' ? 'dark' : 'light')
    )

    return () => {
      Mousetrap.unbind(['ctrl+t'])
    }
  })

  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  return (
    <>
      <Tooltip
        title={theme === 'light' ? 'Activate dark mode' : 'Activate light mode'}
        position="bottom"
        size="small"
        animation="scale"
        duration={10}
        style={{ display: 'inline-flex' }}
      >
        <button
          className={cn(
            'flex items-center justify-center bg-transparent rounded-md w-10 h-10 border-none transition ease-default duration-400 text-gray-700 hover:p-2 hover:shadow-small focus:outline-none focus:ring-transparent',
            className
          )}
          onClick={() => {
            setTheme(theme === 'light' ? 'dark' : 'light')
          }}
          aria-label={
            theme === 'light' ? 'Activate dark mode' : 'Activate light mode'
          }
        >
          {theme === 'light' ? (
            <MoonIcon className="w-6 h-6" />
          ) : (
            <SunIcon className="w-6 h-6" />
          )}
        </button>
      </Tooltip>
    </>
  )
}

export default ThemeWidget
