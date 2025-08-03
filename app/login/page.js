'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function LoginPage() {
  const router = useRouter();
  const [form, setForm] = useState({ email: '', password: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const storedUser = JSON.parse(localStorage.getItem('user'));

    if (
      storedUser &&
      storedUser.email === form.email &&
      storedUser.password === form.password
    ) {
      alert('Login successful!');
      localStorage.setItem('isLoggedIn', 'true');
      router.push('/');
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <section className="form-container">
      <h2>Login</h2>
      <form className="auth-form" onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          required
          value={form.email}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          required
          value={form.password}
          onChange={handleChange}
        />
        <button type="submit">Log In</button>
      </form>
      <p className="form-switch">
        Don&apos;t have an account? <Link href="/signup">Sign up</Link>
      </p>
    </section>
  );
}
