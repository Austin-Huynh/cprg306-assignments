import Link from "next/link";
import {StudentInfo} from "../StudentInfo";

export default function Page() {
    return (
    <main>
        <h1>Hello week 2</h1>
        <p>
            <Link href="/">Home</Link>
        </p>
        <h2>Shopping list</h2>
        <StudentInfo/>
    </main>
    );
}