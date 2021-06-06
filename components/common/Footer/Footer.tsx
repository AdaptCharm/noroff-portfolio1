import { FC } from 'react'

const Footer: FC = () => {
  return (
    <footer className="bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          <p className="text-gray-500">&copy; {new Date().getFullYear()} Portfolio | Jamie Isaksen</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer