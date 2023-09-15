const { default: Link } = require("next/link");

export function StudentInfo() {
  return (
    <div>
      <h1>Student Information</h1>
        <p>Student Name: Austin Huynh </p>
        <p>Course Section: CPRG-306-A </p>
        <Link href="https://github.com/Austin-Huynh/cprg306-assignments">Github Repository</Link>
    </div>
  );
}