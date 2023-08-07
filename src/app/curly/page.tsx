import Image from 'next/image'

const baseUrl = 'https://i.imgur.com/';
const person = {
  name: 'Gregorio Y. Zara',
  imageId: '7vQD0fP',
  imageSize: 'b',
  theme: {
    backgroundColor: 'black',
    color: 'pink'
  }
};

function TodoList() {
  return (
    <div style={person.theme}>
      <h1>{person.name}&apos;s Todos</h1>
      <img
        className="avatar"
        src={baseUrl + person.imageId + person.imageSize + '.jpg'}
        alt={person.name}
      />
      <ul>
        <li>Improve the videophone</li>
        <li>Prepare aeronautics lectures</li>
        <li>Work on the alcohol-fuelled engine</li>
      </ul>
    </div>
  );
}

type FormatDate = (date: Date) => string
const formatDate: FormatDate = (date) => {
  return new Intl.DateTimeFormat(
    'en-US',
    { weekday: 'long' }
  ).format(date)
}

export default function Avatar() {
  const today = new Date()
  const avatar = 'https://i.imgur.com/7vQD0fPs.jpg'
  const description = "Gregrio"
  return (
    <>
      <h1>To Do List for {formatDate(today)}</h1>
      <Image
        className="avatar"
        src={avatar}
        alt={description}
        width={100}
        height={100}
      />
      <TodoList />
    </>
  )
}