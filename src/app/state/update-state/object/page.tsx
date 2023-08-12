"use client"

import { useState } from "react"

export default function MovingDot() {
  const [position, setPosition] = useState({x: 0, y: 0});
  // stateはmutableのような挙動を取るが、immutableとして取り扱うべき
  // 例えば以下のようなコードを書くべきではない
  // position.x = 10;
  // 特にオブジェクトは、オブジェクトのコピーを作って置き換える
  return (
    <div
      onPointerMove={e => {
        // これは動かない
        // position.x = e.clientX;
        // position.y = e.clientY;
        // 以下なら動く
        setPosition({
          x: e.clientX,
          y: e.clientY,
        })
      }}
      style={{
        position: 'relative',
        width: '100vw',
        height: '100vh',
      }}
    >
      <div
        style={{
          position: 'absolute',
          backgroundColor: 'red',
          borderRadius: '50%',
          transform: `translate(${position.x}px, ${position.y}px)`,
          left: -10,
          top: -10,
          width: 20,
          height: 20,
        }}
      />
    </div>
  )
}