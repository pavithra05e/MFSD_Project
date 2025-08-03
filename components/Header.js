'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();

  const isActive = (path) => pathname === path;

  return (
    <header className="navbar">
      <Link href="/" className="logo">
        FeedbackHub
      </Link>

      <nav className="navLinks">
        <Link href="/about" className={isActive('/about') ? 'active' : ''}>About</Link>
        <Link href="/dashboard" className={isActive('/dashboard') ? 'active' : ''}>Dashboard</Link>
        <Link href="/contact" className={isActive('/contact') ? 'active' : ''}>Contact</Link>
        <Link href="/login" className={isActive('/login') ? 'active' : ''}>Login</Link>
        <Link href="/signup" className={isActive('/signup') ? 'active' : ''}>Signup</Link>
      </nav>
    </header>
  );
}
