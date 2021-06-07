import { FC } from 'react'

const Footer: FC = () => {
  return (
    <footer
      className="bg-white bg-opacity-90 dark:bg-black dark:bg-opacity-80 lg:fixed bottom-0 left-0 right-0"
      style={{
        backdropFilter: 'saturate(180%) blur(5px)',
      }}
    >
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          <p className="text-black dark:text-white">
            &copy; {new Date().getFullYear()} Portfolio | Jamie Isaksen
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
