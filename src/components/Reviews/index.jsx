import React from "react";
import ReviewCard from '../ReviewCard';
import ReviewCarousel from '../ReviewCarousel';

export default function Reviews() {

  const reviewContent = [1,2,3]

  return (
    <div>
      <ReviewCarousel style={{ maxWidth: 1200, marginLeft:'auto', marginRight:'auto', marginTop: 64 }}>
        <ReviewCard number={reviewContent[0]}/>
        <ReviewCard number={reviewContent[1]}/>
        <ReviewCard number={reviewContent[2]}/>
      </ReviewCarousel>
    </div>
  )
}

