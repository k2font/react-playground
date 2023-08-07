import { ReactNode } from 'react'
import Image from 'next/image'

function Avatar({
  person,
  size
}: {
  person: {name: string, imageId: string},
  size: number
}) {
  return (
    <Image
      className="avatar"
      src="https://i.imgur.com/1bX5QH6.jpg"
      alt={person.name}
      width={size}
      height={size}
    />
  )
}

function Card({
  children
}: {
  children: ReactNode
}) {
  return (
    <div className="card">
      {children}
    </div>
  )
}

export default function Profile() {
  return (
    <>
      <Card>
        <Avatar
          person={{
            name: "Lin Lanying",
            imageId: "1bX5QH6"
          }}
          size={100}
        />
      </Card>
      <Avatar
        person={{
          name: "Latsuo Saruhashi",
          imageId: "YfeOqp2"
        }}
        size={100}
      />
      <Avatar
        person={{
          name: "Latsuo Saruhashi",
          imageId: "YfeOqp2"
        }}
        size={100}
      />
    </>
  )
}