import { Layout } from '@components/common'
import { NextSeo } from 'next-seo'

import { GlobeIcon } from '@heroicons/react/outline'
import { GitHub } from '@components/icons'
import { Badge } from '@components/ui'

import Image from 'next/image'

const CommunityScienceMuseum = () => {
  return (
    <>
      <NextSeo
        title="Community Science Museum"
        description="The Community Science Museum project for the Semester Project."
      />
      <div className="relative py-16 lg:py-24 bg-white dark:bg-black overflow-hidden">
        <div className="relative py-6 px-4 sm:px-6 lg:px-8">
          <div className="text-lg max-w-prose mx-auto">
            <div className="flex flex-col gap-y-4 md:gap-y-0 md:flex-row justify-between items-center">
              <h1>
                <span className="block text-6xl sm:text-7xl text-center font-extrabold tracking-tight text-black dark:text-white">
                  Community Science Museum
                </span>
              </h1>
              <div className="mt-4 flex items-center gap-x-10">
                <div className="flex items-center gap-x-2">
                  <GlobeIcon className="w-6 h-6 text-black dark:text-white" />
                  <a
                    className="text-gray-900 hover:text-opacity-60 dark:text-gray-100 dark:hover:text-opacity-60 focus:outline-none focus:ring-transparent"
                    href="https://portfolio-community-science-museum.vercel.app"
                    target="_blank"
                    rel="noopener"
                  >
                    Website
                  </a>
                </div>
                <div className="flex items-center gap-x-2">
                  <GitHub className="w-6 h-6 text-black dark:text-white" />
                  <a
                    className="text-gray-900 hover:text-opacity-60 dark:text-gray-100 dark:hover:text-opacity-60 focus:outline-none focus:ring-transparent"
                    href="https://github.com/AdaptCharm/portfolio-community-science-museum"
                    target="_blank"
                    rel="noopener"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 prose prose-lg text-black dark:text-white mx-auto">
            <h2 className="flex flex-col items-start text-black dark:text-white">
              <Badge className="mb-3" variant="improvement">
                Improvement
              </Badge>
              Upgrade version of dependencies
            </h2>
            <p>
              Bumped the version of all packages. The reason for this is to
              ensure that the site is always up-to-date, and to prevent
              vulnerabilities from showing up.
            </p>
            <figure>
              <Image
                className="object-cover object-left rounded-lg"
                src="/community-science-museum/packages-version-bump.png"
                alt="Packages version bump"
                width={1310}
                height={873}
                layout="responsive"
                priority={true}
              />
              <figcaption className="text-black dark:text-white">
                All packages are now using the latest version.
              </figcaption>
            </figure>
            <h2 className="flex flex-col items-start text-black dark:text-white">
              <Badge className="mb-3" variant="improvement">
                Improvement
              </Badge>
              Image optimization
            </h2>
            <p>
              Optimized all the images on the entire site. This was achieved by
              using multiple optimization algorithms. In addition to that, I
              also used the{' '}
              <a
                className="text-gray-900 hover:text-opacity-60 dark:text-gray-100 dark:hover:text-opacity-60 focus:outline-none focus:ring-transparent"
                href="https://kraken.io/"
                target="_blank"
                rel="noopener"
              >
                Kraken
              </a>{' '}
              platform, combined with the{' '}
              <a
                className="text-gray-900 hover:text-opacity-60 dark:text-gray-100 dark:hover:text-opacity-60 focus:outline-none focus:ring-transparent"
                href="https://tinypng.com/"
                target="_blank"
                rel="noopener"
              >
                TinyPNG
              </a>{' '}
              platform.
            </p>
            <p>
              The total file size is now reduced by{' '}
              <strong className="text-black dark:text-white">9.11</strong> MB.
            </p>
            <figure>
              <Image
                className="object-cover object-left rounded-lg"
                src="/community-science-museum/images-optimized.png"
                alt="Images optimized"
                width={1310}
                height={873}
                layout="responsive"
              />
              <figcaption className="text-black dark:text-white">
                All packages are now using the latest version.
              </figcaption>
            </figure>
            <p>
              Judging by the metrics from Lighthouse, it seems the page load got
              decreased by{' '}
              <strong className="text-black dark:text-white">0.1</strong> ms.
            </p>
            <figure>
              <Image
                className="object-cover object-center rounded-lg"
                src="/community-science-museum/lighthouse.png"
                alt="Images optimized"
                width={1310}
                height={873}
                layout="responsive"
              />
              <figcaption className="text-black dark:text-white">
                As seen above, the performance is magnificent.
              </figcaption>
            </figure>
            <p>
              I think it's safe to conclude that the performance is even way
              better than what it initially used to be.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default CommunityScienceMuseum

CommunityScienceMuseum.Layout = Layout
