import { GRID_ITEMS } from '@/data'
import { BentoGrid, BentoGridItem } from './ui/BentoGrid'

const Grid = () => {
  return (
    <section id='about'>
      <BentoGrid className='w-full'>
        {GRID_ITEMS.map((item) => (
          <BentoGridItem
            key={item.id}
            id={item.id}
            title={item.title}
            description={item.description}
            className={item.className}
            imgClassName={item.imgClassName}
            titleClassName={item.titleClassName}
            img={item.img}
            spareImg={item.spareImg}
          />
        ))}
      </BentoGrid>
      <p>grid</p>
    </section>
  )
}

export default Grid
