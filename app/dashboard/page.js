'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function DashboardPage() {
  const router = useRouter();
  const [userEmail, setUserEmail] = useState('');

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    const user = JSON.parse(localStorage.getItem('user'));

    if (!isLoggedIn || !user) {
      alert('Please log in to access the dashboard.');
      router.push('/login');
    } else {
      setUserEmail(user.email);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    alert('You have been logged out.');
    router.push('/login');
  };

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <h2>Welcome, <span>{userEmail}</span> 👋</h2>
        <button onClick={handleLogout} className="logout-button">Logout</button>
      </div>

      <div className="cardGrid">
        <div className="card">
          <h3>Create Form</h3>
          <p>Start a new feedback form.</p>
          <Link href="/create-form">
            <button>Create</button>
          </Link>
        </div>

        <div className="card">
          <h3>My Forms</h3>
          <p>Manage your created forms.</p>
          <Link href="/my-forms">
            <button>View</button>
          </Link>
        </div>

        <div className="card">
          <h3>Responses</h3>
          <p>Check submitted feedback.</p>
          <Link href="/responses">
            <button>Check</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
