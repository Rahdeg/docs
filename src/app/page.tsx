import Link from "next/link";


export default function Home() {
  return (
    <div className=" flex min-h-screen items-center justify-center">
      click <Link href="/documents/1234">
        <span className=" text-blue-500 underline">
          &nbsp; here &nbsp;
        </span>
      </Link> to go to document id
    </div>
  );
}
