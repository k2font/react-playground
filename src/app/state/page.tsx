"use client"

import { useState } from "react"
import Image from "next/image"
import { sculptureList } from "./data"

export default function Gallery() {
  // 関数に値を返させてもよい(初めて知った)
  const [index, setIndex] = useState(() => {return 0});
  const [showMore, setShowMore] = useState(false);

  function handleClick() {
    setIndex(index + 1)
  }

  function handleMoreClick() {
    setShowMore(!showMore)
  }

  let sculpture = sculptureList[index]
  return (
    <>
      <button onClick={handleClick}>
        Next
      </button>
      <h2>
        <i>{sculpture.name} </i> 
        by {sculpture.artist}
      </h2>
      <h3>  
        ({index + 1} of {sculptureList.length})
      </h3>
      <Image 
        src={sculpture.url} 
        alt={sculpture.alt}
        width={100}
        height={100}
      />
      <button onClick={handleMoreClick}>
        {showMore ? "Show Less" : "Show More"} detais
      </button>
      {showMore && <p>{sculpture.description}</p>}
    </>
  )
}