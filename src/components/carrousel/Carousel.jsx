import { useEffect, useState } from 'react'
import './Carousel.css'
import roller1 from '../../assets/roller1.jpg'
import roller2 from '../../assets/roller2.jpg'
import roller3 from '../../assets/roller3.jpg'
import roller4 from '../../assets/roller4.png'

const text1Options = [
  'Tips, maintenance and much more',
  "Enjoy dancing, it's your place!",
  'Learn and practice for free!!',
  'The most important event in Spain',
]

const text2Options = ['Maintenance', 'Choreos', 'Steps', 'Events']

const colorOptions = ['#EBB9D2', '#FE9968', '#7FE0EB', '#6CE5B1']

const imageOptions = [roller1, roller2, roller3, roller4]

const Carousel = () => {
  const [index, setIndex] = useState(0)
  const [animation, setAnimation] = useState('')
  useEffect(() => {
    const interval = setInterval(() => {
      setAnimation('anim-next')
      setTimeout(() => {
        setIndex((prevIndex) => (prevIndex + 1) % text1Options.length)
        setAnimation('')
      }, 650)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const handleNext = () => {
    setAnimation('anim-next')
    setTimeout(() => {
      setIndex((prevIndex) => (prevIndex + 1) % text1Options.length)
      setAnimation('')
    }, 650)
  }

  const handlePrevious = () => {
    setAnimation('anim-previous')
    setTimeout(() => {
      setIndex(
        (prevIndex) =>
          (prevIndex - 1 + text1Options.length) % text1Options.length
      )
      setAnimation('')
    }, 650)
  }
  return (
    <div id="carousel-wrapper" className={animation}>
      <div id="menu" style={{ background: colorOptions[index] }}>
        <div id="current-option">
          <div
            id="current-option-text1"
            data-next-text={text1Options[(index + 1) % text1Options.length]}
            data-previous-text={
              text1Options[
                (index - 1 + text1Options.length) % text1Options.length
              ]
            }
          >
            {text1Options[index]}
          </div>
          <div
            id="current-option-text2"
            data-next-text={text2Options[(index + 1) % text2Options.length]}
            data-previous-text={
              text2Options[
                (index - 1 + text2Options.length) % text2Options.length
              ]
            }
          >
            {text2Options[index]}
          </div>
        </div>
        <button id="previous-option" onClick={handlePrevious}></button>
        <button id="next-option" onClick={handleNext}></button>
      </div>
      <div
        id="image"
        style={{ backgroundImage: `url(${imageOptions[index]})` }}
      ></div>
    </div>
  )
}

export default Carousel
