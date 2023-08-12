"use client"

import React, { useState } from "react"

export default function Form() {
  const [person, setPerson] = useState({
    firstName: "kono",
    lastName: "shoichiro",
    email: "test@example.com"
  })

  const [music, setMusic] = useState({
    name: "shoichiro",
    artwork: {
      title: "Blue",
      city: "New York",
      image: "https://i.imgur.com/Sd1AgUOm.jpg",
    }
  })

  function handleFirstNameChange(
    e: React.ChangeEvent<HTMLInputElement>
  ): void {
    setPerson({
      ...person,
      firstName: e.target.value,
    })
  }

  function handleLastNameChange(
    e: React.ChangeEvent<HTMLInputElement>
  ): void {
    setPerson({
      ...person,
      lastName: e.target.value,
    })
  }

  function handleEmailChange(
    e: React.ChangeEvent<HTMLInputElement>
  ): void {
    setPerson({
      ...person,
      email: e.target.value,
    })
  }

  return (
    <>
      <label>
        First Name:
        <input
          value={person.firstName}
          onChange={handleFirstNameChange}
        />
      </label>
      <label>
        Last Name:
        <input
          value={person.lastName}
          onChange={handleLastNameChange}
        />
      </label>
      <label>
        Email:
        <input
          value={person.email}
          onChange={handleEmailChange}
        />
      </label>
    </>
  )
}