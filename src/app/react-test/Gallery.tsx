import styles from '../page.module.css'

export function Profile() {
  return (
    <img
      src="https://i.imgur.com/MK3eW3Am.jpg"
      alt="Profile Picture"
    />
  )
}

export function Gallery() {
  return (
    <section className={styles.main}>
      <h1>Amazing scientists</h1>
      <Profile />
      <Profile />
      <Profile />
    </section>
  )
}
