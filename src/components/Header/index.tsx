import Link from 'next/link';

export default function Header() {
  return (
    <header>
      <Link href="/">
        <a>
          <img src="logo.svg" alt="Blog" />
        </a>
      </Link>
    </header>
  );
}
