'use client';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function EditFormPage({ params }) {
  const { id } = params;
  const router = useRouter();
  const [formTitle, setFormTitle] = useState('');
  const [formDescription, setFormDescription] = useState('');

  useEffect(() => {
    const savedForms = JSON.parse(localStorage.getItem('forms') || '[]');
    const currentForm = savedForms.find(f => f.id === id);
    if (currentForm) {
      setFormTitle(currentForm.title);
      setFormDescription(currentForm.description || '');
    }
  }, [id]);

  const handleUpdate = (e) => {
    e.preventDefault();
    const savedForms = JSON.parse(localStorage.getItem('forms') || '[]');
    const updatedForms = savedForms.map(f =>
      f.id === id ? { ...f, title: formTitle, description: formDescription } : f
    );

    localStorage.setItem('forms', JSON.stringify(updatedForms));
    alert('Form updated successfully!');
    router.push('/my-forms');
  };

  return (
    <div className="form-container">
      <h1>Edit Feedback Form</h1>
      <form onSubmit={handleUpdate} className="form-box">
        <label>Form Title</label>
        <input
          type="text"
          value={formTitle}
          onChange={(e) => setFormTitle(e.target.value)}
          required
        />
        <label>Description</label>
        <textarea
          value={formDescription}
          onChange={(e) => setFormDescription(e.target.value)}
        />
        <button type="submit" className="submit-btn">Update Form</button>
      </form>
    </div>
  );
}
