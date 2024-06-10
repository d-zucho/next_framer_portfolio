import { GRID_ITEMS } from '@/data'
import { BentoGrid, BentoGridItem } from './ui/BentoGrid'

const Grid = () => {
  return (
    <section id='about'>
      <BentoGrid>
        {GRID_ITEMS.map((item) => (
          <BentoGridItem
            key={item.id}
            id={item.id}
            title={item.title}
            description={item.description}
          />
        ))}
      </BentoGrid>
      <p>grid</p>
    </section>
  )
}

export default Grid
