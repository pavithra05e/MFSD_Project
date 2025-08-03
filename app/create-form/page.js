'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function CreateFormPage() {
  const [title, setTitle] = useState('');
  const [questions, setQuestions] = useState(['']);
  const router = useRouter();

  const handleAddQuestion = () => {
    setQuestions([...questions, '']);
  };

  const handleRemoveQuestion = (index) => {
    const updated = [...questions];
    updated.splice(index, 1);
    setQuestions(updated);
  };

  const handleQuestionChange = (index, value) => {
    const updated = [...questions];
    updated[index] = value;
    setQuestions(updated);
  };

  const handleSaveForm = () => {
    if (!title.trim()) return alert('Please enter a form title');
    if (questions.some(q => !q.trim())) return alert('Please fill all questions');

    const newForm = {
      id: Date.now().toString(),
      title,
      questions,
      createdAt: new Date().toISOString(),
    };

    const savedForms = JSON.parse(localStorage.getItem('forms') || '[]');
    savedForms.push(newForm);
    localStorage.setItem('forms', JSON.stringify(savedForms));

    alert('Form saved!');
    router.push('/my-forms');
  };

  return (
    <div className="create-form-container">
      <h1>Create Feedback Form</h1>

      <label className="form-label">
        Form Title:
        <input
          type="text"
          value={title}
          onChange={e => setTitle(e.target.value)}
          className="form-input"
        />
      </label>

      <h3>Questions:</h3>
      {questions.map((q, idx) => (
        <div key={idx} className="question-block">
          <input
            type="text"
            placeholder={`Question ${idx + 1}`}
            value={q}
            onChange={e => handleQuestionChange(idx, e.target.value)}
            className="form-input"
          />
          <button onClick={() => handleRemoveQuestion(idx)} className="remove-btn">
            Remove
          </button>
        </div>
      ))}

      <button onClick={handleAddQuestion} className="add-btn">
        + Add Question
      </button>

      <button onClick={handleSaveForm} className="save-btn">
        Save Form
      </button>
    </div>
  );
}
