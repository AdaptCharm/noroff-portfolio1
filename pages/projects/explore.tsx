import { Layout } from '@components/common'
import { NextSeo } from 'next-seo'

import { GlobeIcon } from '@heroicons/react/outline'
import { GitHub } from '@components/icons'
import { Badge } from '@components/ui'

import Image from 'next/image'

const Explore = () => {
  return (
    <>
      <NextSeo
        title="Explore"
        description="The Explore project for the Project Exam."
      />
      <div className="relative py-16 lg:py-24 bg-white dark:bg-black overflow-hidden">
        <div className="relative py-6 px-4 sm:px-6 lg:px-8">
          <div className="text-lg max-w-prose mx-auto">
            <div className="flex flex-col gap-y-4 md:gap-y-0 md:flex-row justify-between items-center">
              <h1>
                <span className="block text-6xl sm:text-7xl text-center font-extrabold tracking-tight text-black dark:text-white">
                  Explore
                </span>
              </h1>
              <div className="mt-4 flex items-center gap-x-10">
                <div className="flex items-center gap-x-2">
                  <GlobeIcon className="w-6 h-6 text-black dark:text-white" />
                  <a
                    className="text-gray-900 hover:text-opacity-60 dark:text-gray-100 dark:hover:text-opacity-60 focus:outline-none focus:ring-transparent"
                    href="https://portfolio-explore.vercel.app"
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
                    href="https://github.com/AdaptCharm/portfolio-explore"
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
              <Badge className="mb-3" variant="fix">
                Fix
              </Badge>
              Text color of subheadings not displaying
            </h2>
            <p>
              Fixed a bug where the h2 subheading wasn't displaying its proper
              text color. The issue was related to the
              `components/ui/Feature/Feature.tsx` component.
            </p>
            <figure>
              <Image
                className="object-cover object-left rounded-lg"
                src="/explore/github/iris_001.png"
                alt="Feature component"
                width={1310}
                height={873}
                layout="responsive"
                priority={true}
              />
              <figcaption className="text-black dark:text-white">
                Clearly, interpolation does not work the same way as it does
                with Sass.
              </figcaption>
            </figure>
            <p>
              After the fix was pushed, the result is exactly as expected. The
              `Exotic travel destinations` subheading has a pink color, while
              the `White sand beaches` subheading has a blue color.
            </p>
            <p>
              Now both subheadings matches the background color of its pictures.
            </p>
            <div className="grid items-center grid-cols-1 lg:grid-cols-2 lg:gap-5">
              <figure className="p-4 shadow-medium rounded-lg">
                <Image
                  className="object-cover object-left rounded-lg"
                  src="/explore/before/exotic-travel-destinations.png"
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
                  className="object-cover object-left rounded-lg"
                  src="/explore/after/exotic-travel-destinations.png"
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
            <div className="grid items-center grid-cols-1 lg:grid-cols-2 lg:gap-5">
              <figure className="p-4">
                <Image
                  className="object-cover object-left rounded-lg"
                  src="/explore/before/white-sand-beaches.png"
                  alt="White sand beaches"
                  width={1310}
                  height={873}
                  layout="responsive"
                />
                <figcaption className="text-black dark:text-white">
                  Before picture
                </figcaption>
              </figure>
              <figure className="p-4 shadow-medium rounded-lg">
                <Image
                  className="object-cover object-left rounded-lg"
                  src="/explore/after/white-sand-beaches.png"
                  alt="White sand beaches"
                  width={1310}
                  height={873}
                  layout="responsive"
                />
                <figcaption className="text-black dark:text-white">
                  After picture
                </figcaption>
              </figure>
            </div>
            <h2 className="flex flex-col items-start text-black dark:text-white">
              <Badge className="mb-3" variant="improvement">
                Improvement
              </Badge>
              Minor refactoring
            </h2>
            <p>
              Moved the{' '}
              <code className="text-black dark:text-white">constants.ts</code>{' '}
              file out of the wordpress directory. Previously, it was only used
              by the WordPress API. With this change, the constants are now
              globally accessible by any future API integrations.
            </p>
            <Image
              className="object-cover object-left rounded-lg"
              src="/explore/github/iris_002.png"
              alt="Constants configuration file"
              width={1310}
              height={873}
              layout="responsive"
            />
            <p>Before:</p>
            <code className="text-black dark:text-white">
              import {'{ ... }'} from ../constants
            </code>{' '}
            <p>After:</p>
            <code className="text-black dark:text-white">
              import {'{ ... }'} from @config/constants
            </code>{' '}
            <h2 className="flex flex-col items-start text-black dark:text-white">
              <Badge className="mb-3" variant="feature">
                Feature
              </Badge>
              Newsletter functionality
            </h2>
            <p>
              After reviewing the Hotjar recording, I noticed MJ trying to
              subscribe to the newsletter, without success. Not surprisingly,
              the reason for this was that the newsletter had no functionality
              implemented.
            </p>
            <p>
              Although I did not receive any feedback regarding the newsletter,
              I have now added proper functionality that let’s the user
              subscribe to the newsletter
            </p>
            <figure>
              <Image
                className="object-cover object-right rounded-lg"
                src="/explore/newsletter-form-functionality.png"
                alt="Newsletter functionality"
                width={1310}
                height={873}
                layout="responsive"
              />
              <figcaption className="text-black dark:text-white">
                As seen in the picture, you are now able to subscribe to the
                newsletter.
              </figcaption>
            </figure>
            <h2 className="flex flex-col items-start text-black dark:text-white">
              <Badge className="mb-3" variant="fix">
                Fix
              </Badge>
              Contact form validation
            </h2>
            <p>
              On my PE1 submission I received feedback that my contact form
              validation was not showing. After doing some investigation, I
              quickly realized that the reason the validation messages did not
              show, was because I was not calling the{' '}
              <code className="text-black dark:text-white">{'<Alert />'}</code>{' '}
              component.
            </p>
            <p>
              This stupid one-liner mistake was the reason why the validation
              failed:
            </p>
            <blockquote>
              <code className="text-black dark:text-white">
                {'{alert && <Alert type="info" message="{alert}" />}'}
              </code>
            </blockquote>
            <p>
              Although it is a very small mistake, it emphasizes how important
              it is to always check the source code and its functionality before
              submission. One thing I can definitely get better at is unit
              testing and debugging along the way. It is not always the case
              that theoretical code works practically. Lessons learned.
            </p>
            <p>
              In addition to that, I also decided to rewrite the whole contact
              component using a third party library. The reason is simple:{' '}
              <strong className="text-black dark:text-white">
                why reinvent the wheel?
              </strong>{' '}
              Another reason is that the current code was getting quite long and
              difficult to read.
            </p>
            <p>
              I spent a couple of hours trying to figure out how I would
              approach this implementation. After conducting some research I
              figured the best approach would be to use the{' '}
              <code className="text-black dark:text-white">
                react-hook-form
              </code>{' '}
              package. It is lightweight, has type definitions (yes,
              ✨typescript✨), it's easier to work with, makes the code look
              cleaner, easier to read — and a bunch of more reasons.
            </p>
            <p>
              Once that had been figured out, I started reading the API
              documentation at the{' '}
              <a
                className="text-gray-900 hover:text-opacity-60 dark:text-gray-100 dark:hover:text-opacity-60 focus:outline-none focus:ring-transparent"
                href="https://react-hook-form.com/api/useform"
                target="_blank"
                rel="noopener"
              >
                React Hook Form
              </a>{' '}
              website. Then I put the pieces together, one by one.
            </p>
            <p>End result:</p>
            <figure>
              <video width={1310} height={873} controls>
                <source
                  src="/explore/contact-form-functionality.mov"
                  type="video/mp4"
                />
              </video>
              <figcaption className="text-black dark:text-white">
                Contact form validation is now working as expected.
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </>
  )
}

export default Explore

Explore.Layout = Layout
