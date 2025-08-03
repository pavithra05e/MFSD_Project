'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function MyFormsPage() {
  const [forms, setForms] = useState([]);

  useEffect(() => {
    const savedForms = JSON.parse(localStorage.getItem('forms') || '[]');
    setForms(savedForms);
  }, []);

  const handleDelete = (id) => {
    const confirmDelete = window.confirm('Are you sure you want to delete this form?');
    if (!confirmDelete) return;

    const updatedForms = forms.filter(form => form.id !== id);
    setForms(updatedForms);
    localStorage.setItem('forms', JSON.stringify(updatedForms));
  };

  return (
    <div className="my-forms-container">
      <h1 className="my-forms-title">My Feedback Forms</h1>

      {forms.length === 0 ? (
        <p className="my-forms-empty">
          No forms created yet. <Link href="/create-form">Create one</Link>.
        </p>
      ) : (
        <ul className="my-forms-list">
          {forms.map((form) => (
            <li className="my-form-card" key={form.id}>
              <h3 className="my-form-title">{form.title}</h3>
              <p className="my-form-date">
                Created: {form.createdAt ? new Date(form.createdAt).toLocaleString() : 'Unknown'}
              </p>
              <div className="form-button-group">
                <Link href={`/view-form/${form.id}`}>
                  <button className="my-form-btn">View Form</button>
                </Link>
                <Link href={`/view-responses/${form.id}`}>
                  <button className="my-form-btn">View Responses</button>
                </Link>
                <Link href={`/edit-form/${form.id}`}>
                  <button className="my-form-btn edit-btn">Edit</button>
                </Link>
                <button className="my-form-btn delete-btn" onClick={() => handleDelete(form.id)}>
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
