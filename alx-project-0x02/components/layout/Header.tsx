import React from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <header className="bg-blue-700 shadow">
      <nav className="container mx-auto flex items-center justify-between py-4 px-6">
        <div className="text-white text-2xl font-bold tracking-tight">
          MyApp
        </div>
        <ul className="flex space-x-8">
          <li>
            <Link href="/home" className="text-white hover:text-blue-200 font-medium transition">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="text-white hover:text-blue-200 font-medium transition">
              About
            </Link>
          </li>
          <li>
            <Link href="/posts" className="text-white hover:text-blue-200 font-medium transition">
              Posts
            </Link>
          </li>
          <li>
            <Link href='/users' className="text-white hover:text-blue-200 font-medium transition">
            Users</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;