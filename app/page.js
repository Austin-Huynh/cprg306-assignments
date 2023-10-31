import Link from 'next/link';
import { StudentInfo } from './StudentInfo';

export default function Home() {
  return (
    <main data-theme="dark">
      <h1 className="text-4xl">Web Development 2 - Assignments</h1>
      <StudentInfo />
      <p className="mt-4">
        <Link href="/week2">
          <span className="block py-2 hover:text-blue-500 cursor-pointer">Week 2</span>
        </Link>
        <Link href="/week3">
          <span className="block py-2 hover:text-blue-500 cursor-pointer">Week 3</span>
        </Link>
        <Link href="/week4">
          <span className="block py-2 hover:text-blue-500 cursor-pointer">Week 4</span>
        </Link>
        <Link href="/week5">
          <span className="block py-2 hover:text-blue-500 cursor-pointer">Week 5</span>
        </Link>
        <Link href="/week6">
          <span className="block py-2 hover:text-blue-500 cursor-pointer">Week 6</span>
        </Link>
        <Link href="/week7">
          <span className="block py-2 hover:text-blue-500 cursor-pointer">Week 7</span>
        </Link>
      </p>
    </main>
  );
}



