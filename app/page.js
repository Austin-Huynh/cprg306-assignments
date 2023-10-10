import Link from 'next/link'
import { StudentInfo } from './StudentInfo'

export default function Home() {
  return (
    <main>
      <h1 className="text-4xl">CPRG 306: Web Development 2 - Assignments</h1>
      <StudentInfo />
      <p>
        <Link className="hover:text-blue-500" href="/week2">Week 2</Link>
        <br />
        <Link className="hover:text-blue-500" href="/week3">Week 3</Link>
        <br />
        <Link className="hover:text-blue-500" href="/week4">Week 4</Link>
        <br />
        <Link className="hover:text-blue-500" href="/week5">Week 5</Link>
      </p>
    </main>
  )
}
