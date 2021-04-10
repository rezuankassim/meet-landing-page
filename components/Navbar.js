import Link from "next/link";

export default function Navbar() {
  return (
    <header>
      <nav>
        <Link href="/">
          <a className="mt-20 flex items-center justify-center">
            <img src="/logo.svg" alt="Meet Logo" />
          </a>
        </Link>
      </nav>
    </header>
  );
}
