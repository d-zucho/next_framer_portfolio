'use client'
import { useState } from 'react'
import { cn } from '@/utils/cn'
import { BackgroundGradientAnimation } from './GradientBg'
import { Globe } from './Globe'
import { GridGlobe } from './GridGlobe'
import { div } from 'three/examples/jsm/nodes/Nodes.js'
import Lottie from 'react-lottie'
import animationData from '@/data/confetti.json'
import MagicButton from './MagicButton'
import { IoCopyOutline } from 'react-icons/io5'

const LEFT_LIST = ['React.js', 'Next,js', 'TypeScript']
const RIGHT_LIST = ['Vue.js', 'MongoDB', 'AWS']

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string
  children?: React.ReactNode
}) => {
  return (
    <div
      className={cn(
        'grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto',
        className
      )}
    >
      {children}
    </div>
  )
}

export const BentoGridItem = ({
  className,
  id,
  title,
  description,

  imgClassName,
  img,
  spareImg,
  titleClassName,
}: {
  className?: string
  id: string
  title?: string | React.ReactNode
  description?: string | React.ReactNode
  header?: React.ReactNode
  icon?: React.ReactNode
  imgClassName?: string
  img?: string
  spareImg?: string
  titleClassName?: string
}) => {
  //state for lottie animation
  const [copied, setCopied] = useState(false)

  const defaultOptions = {
    loop: copied,
    autoplay: copied,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  }

  const handleCopy = () => {
    navigator.clipboard.writeText('danny.nicodev@gmail.com')
    setCopied(true)
  }

  return (
    <div
      className={cn(
        'row-span-1 relative rounded-3xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none overflow-hidden border border-white/0.1 justify-between flex flex-col space-y-4',
        className
      )}
      style={{
        background: 'rgb(4, 7, 29)',
        backgroundColor:
          'linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)',
      }}
    >
      <div className={`${id === '6' && 'flex justify-center'} h-full`}>
        <div className='w-full h-full absolute'>
          {img && (
            <img
              src={img}
              alt={img}
              className={cn('object-cover object-center', imgClassName)}
            />
          )}
        </div>
        <div
          className={`absolute right-0 -bottom-5 ${
            id === '5' && 'w-full opacity-80'
          }`}
        >
          {spareImg && (
            <img
              src={spareImg}
              alt={spareImg}
              className={cn(
                'object-cover object-center w-full h-full',
                imgClassName
              )}
            />
          )}
        </div>

        {id === '6' && (
          <BackgroundGradientAnimation>
            <div className='absolute z-50 flex items-center justify-center text-white-100 font-bold' />
          </BackgroundGradientAnimation>
        )}
        <div
          className={cn(
            titleClassName,
            'group-hover/bento:translate-x-2 transition duration-200 relative  min-h-40 flex flex-col px-5 p-5 lg:p-10'
          )}
        >
          <div className='font-sans font-extralight text-[#c1c2d3] text-sm md:text-xs lg:text-base z-10 dark:text-neutral-300'>
            {description}
          </div>
          <div className='font-sans font-bold text-lg lg:text-3xl max-w-96 z-10'>
            {title}
          </div>

          {/* GLOBE - communications */}
          {id === '2' && <GridGlobe />}

          {/* TECH STACK */}
          {id === '3' && (
            <div className='flex gap-1 lg:gap-5 w-fit absolute -right-3 lg:-right-2'>
              <div className='flex flex-col gap-3 lg:gap-8'>
                {LEFT_LIST.map((item, index) => (
                  <span
                    key={index}
                    className='py-2 lg:py-3 lg:px-3 px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132E]'
                  >
                    {item}
                  </span>
                ))}
                <span className='py-4 px-3 rounded-lg text-center bg-[#10132E]' />
              </div>
              <div className='flex flex-col gap-3 lg:gap-8'>
                <span className='py-4 px-3 rounded-lg text-center bg-[#10132E]' />
                {RIGHT_LIST.map((item, index) => (
                  <span
                    key={index}
                    className='py-2 lg:py-3 lg:px-3 px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132E]'
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          )}

          {id === '6' && (
            <div className='mt-5 relative'>
              {/* button border magic from tailwind css buttons  */}
              {/* add rounded-md h-8 md:h-8, remove rounded-full */}
              {/* remove focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 */}
              {/* add handleCopy() for the copy the text */}
              <div
                className={`absolute -bottom-5 right-0 ${
                  copied ? 'block' : 'block'
                }`}
              >
                {/* <img src="/confetti.gif" alt="confetti" /> */}
                <Lottie options={defaultOptions} height={200} width={400} />
              </div>

              <MagicButton
                title={copied ? 'Email is Copied!' : 'Copy my email address'}
                icon={<IoCopyOutline />}
                position='left'
                handleClick={handleCopy}
                otherClasses='!bg-[#161A31] transition duration-200'
              />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
