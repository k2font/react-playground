function Item ({ name, isPacked}: {name: string, isPacked: boolean}) {
  return (
    <li className="item">
      {name} {isPacked && "✔"}
    </li>
  )
}

export default function PackingList() {
  return (
    <section>
      <h1>
        Sally is going on a trip!
      </h1>
      <ul>
        <Item name="toothbrush" isPacked={true} />
        <Item name="toothpaste" isPacked={true} />
        <Item name="underwear" isPacked={false} />
      </ul>
    </section>
  )
}