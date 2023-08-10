"use client"

import { ReactNode } from "react"

type TButton = {
  onSmash: () => void,
  children: ReactNode
}
function Button({ onSmash, children }: TButton) {
  return (
    <button onClick={onSmash}>
      {children}
    </button>
  )
}

export default function App() {
  return (
    <div>
      <Button onSmash={() => {
        alert("Smash!")
      }}>
        Play Movie
      </Button>
      <Button onSmash={() => {
      }}>
        Upload Image
      </Button>
    </div>
  )
}