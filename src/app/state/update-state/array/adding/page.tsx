"use client"

import { useState } from "react"

let nextId = 0;

export default function List() {
  const [name, setName] = useState("")
  const [artists, setArtists] = useState<{id: number, name: string}[]>([])

  return (
    <>
      <h1>Inspiring Sculptors:</h1>
      <input
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <button onClick={
        () => {
          // array stateを直接操作する方法ではうまく動かない
          // artists.push({
          //   id: nextId++,
          //   name: name,
          // })

          // 以下の様に修正する
          setArtists([
            ...artists,
            { id: nextId++, name: name }
          ])
        }
      }>
        Add
      </button>
      <ul>
        {artists.map(artist => (
          <li key={artist.id}>{artist.name}</li>
        ))}
      </ul>
    </>
  )
}