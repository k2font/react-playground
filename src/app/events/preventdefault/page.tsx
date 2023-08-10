"use client"

export default function Signup() {
  return (
    <form onSubmit={(e) => {
      e.preventDefault()
      alert("Submitted!")
    }}>
      <input />
      <button>Send</button>
    </form>
  )
}