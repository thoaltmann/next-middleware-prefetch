import Link from "next/link"

const Home = () => {
  return <>
    <h1>Hover/Click on Links</h1>
    <ul>
      <li>
        <Link prefetch={false} href="/test/1">1</Link>
      </li>
      <li>
        <Link prefetch={false} href="/test/2">2</Link>
      </li>
      <li>
        <Link prefetch={false} href="/test/3">3</Link>
      </li>
      <li>
        <Link prefetch={false} href="/test/4">4</Link>
      </li>
    </ul>
  </>
}

export default Home