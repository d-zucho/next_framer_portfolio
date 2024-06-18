import { companies, testimonials } from '@/data'
import { InfiniteMovingCards } from './ui/InfiniteMovingCards'
import { div } from 'three/examples/jsm/nodes/Nodes.js'

const Clients = () => {
  return (
    <section id='testimonials' className='py-20'>
      <h1 className='heading'>
        Kind words from <span className='text-purple'>satisfied clients</span>
      </h1>
      <div className='flex flex-col items-center max-lg:mt-10'>
        <InfiniteMovingCards
          items={testimonials}
          direction='right'
          speed='slow'
          pauseOnHover
        />

        <div className='flex flex-row flex-wrap items-center justify-center gap-12 md:gap-16 mt-12 max-lg:mt-20'>
          {companies.map(({ id, img, name, nameImg }) => (
            <div key={id} className='flex md:max-w-60 max-w-32 gap-2'>
              <img src={img} alt={name} className='md:w-10 w-5' />
              <img src={nameImg} alt={name} className='' />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Clients
