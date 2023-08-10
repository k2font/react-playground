"use client"
import { ReactNode } from "react"

type ButtonType = {
  onClick: () => void,
  children: ReactNode
}
function Button({ onClick, children }: ButtonType) {
  return (
    <button onClick={onClick}>
      {children}
    </button>
  )
}

function PlayButton({ movieName }: { movieName: string }) {
  return (
    <button onClick={() =>{}}>
      Play &quot;{movieName}&quot;
    </button>
  )
}

function UploadButton() {
  return (
    <button onClick={() => {}}>
      Upload Image
    </button>
  )
}

export default function Toolbar() {
  return (
    <div>
      <PlayButton movieName="魔女の宅急便" />
      <UploadButton />
    </div>
  )
}