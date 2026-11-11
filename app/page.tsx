import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Hello from index page</h1>
      <Link href="/abc">goto abc page</Link>
    </div>
  );
}
