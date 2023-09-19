import Link from 'next/link'
import { StudentInfo } from './StudentInfo'

export default function Home() {
  return (
    <main >
      <h1>CPRG 306: Web Development 2 - Assignments</h1>
      <StudentInfo />
      <p>
        <Link href="/week2">Week 2</Link>
        <br />
        <Link href="/week3">Week 3</Link>
      </p>
    </main>
  )
}
