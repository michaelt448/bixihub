import React, { useState } from 'react'
import { Rating } from 'react-simple-star-rating'

function App() {
  const [ratingValue, setRatingValue] = useState(0)
  
  const handleRating = (rate) => {
    setRatingValue(rate)
  }
  return (
    <Rating 
        onClick={handleRating}
        ratingValue={ratingValue}
        allowHalfIcon
    />
  )
}

export default App;