import { useSwipeable } from 'react-swipeable'
import CardMovlie from '../card-movile/CardMovlie'
import { useState } from 'react'
import './CarouselMovile.css'

function CarouselMovile({ cards }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const totalCards = cards.length

  const handlers = useSwipeable({
    onSwipedLeft: () => handleNext(),
    onSwipedRight: () => handlePrev(),
  })

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalCards)
  }

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalCards) % totalCards)
  }

  return (
    <div className="carousel" {...handlers}>
      <div
        className="carousel-inner"
        style={{ transform: `translateX(-${currentIndex * 55}%)` }}
      >
        {cards.map((card, index) => (
          <div key={index} className="carousel-item">
            <CardMovlie {...card} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default CarouselMovile
