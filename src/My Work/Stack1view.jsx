import React from 'react'
import Stack1 from './Stacks/Stack1';
const Stack1view = () => {
const images = [
  { id: 1, img: "https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?q=80&w=500&auto=format" },
  { id: 2, img: "https://images.unsplash.com/photo-1449844908441-8829872d2607?q=80&w=500&auto=format" },
  { id: 3, img: "https://images.unsplash.com/photo-1452626212852-811d58933cae?q=80&w=500&auto=format" },
  { id: 4, img: "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?q=80&w=500&auto=format" }];
  return (
    <div>
      



  
<Stack1
  randomRotation={true}
  sensitivity={180}
  sendToBackOnClick={false}
  cardDimensions={{ width: 300, height: 300 }}
  cardsData={images}
/>
    </div>
  )
}

export default Stack1view
