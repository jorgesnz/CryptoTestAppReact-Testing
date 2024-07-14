import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './CreateNotificationPage.scss';

const CreateNotificationPage = () => {
  const { id } = useParams();
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  const [date, setDate] = useState('');
  const [read, setRead] = useState(false);
  const navigate = useNavigate();

  const handleCreateNotification = async () => {
    try {
      await axios.post(`http://localhost:5000/api/notifications`, {
        userId: id,
        title,
        text,
        date,
        read
      });
      alert('Notification created successfully');
      navigate(`/crm/user/${id}`);
    } catch (error) {
      console.error('Error creating notification', error);
      alert('Failed to create notification');
    }
  };

  return (
    <div className="create-notification-container">
      <h1>Crear Notificación</h1>
      <input
        type="text"
        placeholder="Titulo"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Texto"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <input
        type="datetime-local"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      <label>
        <input
          type="checkbox"
          checked={read}
          onChange={(e) => setRead(e.target.checked)}
        />
        Marcar como leída
      </label>
      <div className="buttons">
        <button onClick={handleCreateNotification}>Crear Notificación</button>
        <button className="back-button" onClick={() => navigate(-1)}>Volver</button>
      </div>
    </div>
  );
};

export default CreateNotificationPage;
