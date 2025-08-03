'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function SignupPage() {
  const router = useRouter();
  const [form, setForm] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (form.password !== form.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    const newUser = {
      email: form.email,
      password: form.password,
    };

    localStorage.setItem('user', JSON.stringify(newUser));
    alert('Account created!');
    router.push('/login');
  };

  return (
    <section className="form-container">
      <h2>Sign Up</h2>
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
        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          required
          value={form.confirmPassword}
          onChange={handleChange}
        />
        <button type="submit">Create Account</button>
      </form>
      <p className="form-switch">
        Already have an account? <Link href="/login">Login</Link>
      </p>
    </section>
  );
}
