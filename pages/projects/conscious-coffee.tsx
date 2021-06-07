import { Layout } from '@components/common'
import { NextSeo } from 'next-seo'

import { GlobeIcon } from '@heroicons/react/outline'
import { GitHub } from '@components/icons'
import { Badge } from '@components/ui'

import Image from 'next/image'

const ConsciousCoffee = () => {
  return (
    <>
      <NextSeo
        title="Conscious Coffee"
        description="The Conscious Coffee project for the HTML &amp; CSS CA."
      />
      <div className="relative py-16 lg:py-24 bg-white dark:bg-black overflow-hidden">
        <div className="relative py-6 px-4 sm:px-6 lg:px-8">
          <div className="text-lg max-w-prose mx-auto">
            <div className="flex flex-col gap-y-4 md:gap-y-0 md:flex-row justify-between items-center">
              <h1>
                <span className="block text-6xl sm:text-7xl text-center font-extrabold tracking-tight text-black dark:text-white">
                  Conscious Coffee
                </span>
              </h1>
              <div className="mt-4 flex items-center gap-x-10">
                <div className="flex items-center gap-x-2">
                  <GlobeIcon className="w-6 h-6 text-black dark:text-white" />
                  <a
                    className="text-gray-900 hover:text-opacity-60 dark:text-gray-100 dark:hover:text-opacity-60 focus:outline-none focus:ring-transparent"
                    href="https://portfolio-conscious-coffee.vercel.app"
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
                    href="https://github.com/AdaptCharm/portfolio-conscious-coffee"
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
                className="w-full object-cover object-left rounded-lg"
                src="/conscious-coffee/packages-version-bump.png"
                alt="Packages version bump"
                width={1310}
                height={873}
                layout="responsive"
              />
              <figcaption className="text-black dark:text-white">
                All packages are now using the latest version.
              </figcaption>
            </figure>
            <h2 className="flex flex-col items-start text-black dark:text-white">
              <Badge className="mb-3" variant="fix">
                Fix
              </Badge>
              Mobile menu not closing upon navigation
            </h2>
            <p>
              On my HTML &amp; CSS CA, I received feedback that the mobile menu
              was not closing whenever a user moved to a different page. This
              issue has been fixed and the mobile menu is now closing as
              expected.
            </p>
            <figure>
              <video width={1310} height={873} controls>
                <source
                  src="/conscious-coffee/mobile-menu-functionality.mov"
                  type="video/mp4"
                />
              </video>
              <figcaption className="text-black dark:text-white">
                The mobile menu closes upon navigation.
              </figcaption>
            </figure>
            <h2 className="flex flex-col items-start text-black dark:text-white">
              <Badge className="mb-3" variant="fix">
                Fix
              </Badge>
              Width of images
            </h2>
            <p>
              The width of the images on the{' '}
              <code className="text-black dark:text-white">/locations</code>{' '}
              page has been fixed. Now both of the images have an equal width.
            </p>
            <p>
              I also updated the styling and added the{' '}
              <code className="text-black dark:text-white">
                object-fit: cover
              </code>{' '}
              and{' '}
              <code className="text-black dark:text-white">
                object-position: center
              </code>{' '}
              properties. Now the images are positioned correctly as well.
            </p>
            <p>
              Lastly, I made sure that the images have rounded corners on mobile
              devices. To be honest, I think the visual aspect is much better
              with rounded corners than squared corners.
            </p>
            <div className="grid items-center grid-cols-1 lg:grid-cols-2 lg:gap-5">
              <figure className="p-4 shadow-medium rounded-lg">
                <Image
                  className="w-full object-cover object-left rounded-lg"
                  src="/conscious-coffee/before/locations-section.png"
                  alt="Feature component"
                  width={1310}
                  height={873}
                  layout="responsive"
                />
                <figcaption className="text-black dark:text-white">
                  Before picture
                </figcaption>
              </figure>
              <figure className="p-4">
                <Image
                  className="w-full object-cover object-left rounded-lg"
                  src="/conscious-coffee/after/locations-section.png"
                  alt="Feature component"
                  width={1310}
                  height={873}
                  layout="responsive"
                />
                <figcaption className="text-black dark:text-white">
                  After picture
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ConsciousCoffee

ConsciousCoffee.Layout = Layout
