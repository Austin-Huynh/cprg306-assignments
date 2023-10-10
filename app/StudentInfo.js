const { default: Link } = require("next/link");

export function StudentInfo() {
  return (
    <div>
      <h1 className="text-2xl">Student Information</h1>
        <p>Student Name: Austin Huynh </p>
        <p>Course Section: CPRG-306-A </p>
        <Link className="hover:text-blue-500" href="https://github.com/Austin-Huynh/cprg306-assignments">Github Repository</Link>
    </div>
  );
}