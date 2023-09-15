import Link from "next/link";
import EventList from "./event-list";

export default function Page() {
    return (
    <main>
        <h1>Hello week2</h1>
        <p>
            <Link href="/">Home</Link>
        </p>
        <EventList />
    </main>
    );
}