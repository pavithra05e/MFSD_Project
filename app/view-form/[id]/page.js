'use client';
import { useParams, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function ViewFormPage() {
  const { id } = useParams();
  const router = useRouter();

  const [form, setForm] = useState(null);
  const [feedback, setFeedback] = useState('');

  useEffect(() => {
    const storedForms = JSON.parse(localStorage.getItem('forms') || '[]');
    const currentForm = storedForms.find(f => f.id === id);
    setForm(currentForm);
  }, [id]);

  const handleSubmit = () => {
    if (!feedback.trim()) return alert('Feedback cannot be empty');

    const responses = JSON.parse(localStorage.getItem('responses') || '[]');
    const newResponse = {
      id: Date.now().toString(),
      formId: id,
      feedback,
      submittedAt: new Date().toISOString(),
    };

    localStorage.setItem('responses', JSON.stringify([...responses, newResponse]));
    alert('Feedback submitted!');
    setFeedback('');
    router.push('/thank-you'); // optional thank you page
  };

  if (!form) return <p style={{ padding: '2rem' }}>Loading form...</p>;

  return (
    <div style={{ padding: '2rem' }}>
      <h1>{form.title}</h1>
      <p>{form.description}</p>

      <textarea
        rows="5"
        placeholder="Enter your feedback here..."
        value={feedback}
        onChange={(e) => setFeedback(e.target.value)}
        style={{ width: '100%', margin: '1rem 0', padding: '1rem' }}
      />
      <br />
      <button onClick={handleSubmit}>Submit Feedback</button>
    </div>
  );
}
