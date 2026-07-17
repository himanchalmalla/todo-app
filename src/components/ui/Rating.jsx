
import React from 'react'
import { FaStar, FaStarHalfAlt } from 'react-icons/fa'

const Rating = ({count}) => {
    const totalFullStars = Math.floor(count);
    const totalHalfStars = count - totalFullStars;
  return (
    <div className='flex gap-1'>
        {
           Array.from({ length: totalFullStars }, (_, i) => <FaStar key={i} color='rgb(232, 210, 192)' />)
        }
        {
            totalHalfStars > 0 &&   <FaStarHalfAlt color='rgb(232, 210, 192)' />
        }
    </div>
  )
}

export default Rating;
