'use client';
import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';

export default function ViewResponsesPage() {
  const { id } = useParams();
  const [responses, setResponses] = useState([]);

  useEffect(() => {
    const allResponses = JSON.parse(localStorage.getItem('responses') || '{}');
    const formResponses = allResponses[id] || [];
    setResponses(formResponses);
  }, [id]);

  return (
    <div className="responses-container">
      <h1 className="responses-title">Responses</h1>
      {responses.length === 0 ? (
        <p className="responses-empty">No responses submitted yet.</p>
      ) : (
        <ul className="responses-list">
          {responses.map((response, index) => (
            <li key={index} className="response-card">
              {Object.entries(response).map(([key, value]) => (
                <div key={key} className="response-field">
                  <strong>{key}:</strong> <span>{value}</span>
                </div>
              ))}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
