import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from '../../utils/axiosConfig';
import './EditNotificationPage.scss';

const EditNotificationPage = () => {
  const { id } = useParams();
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  const [date, setDate] = useState('');
  const [read, setRead] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`/api/notifications/notification/${id}`);
        const notification = response.data;
        console.log('Fetched notification:', notification);
        setTitle(notification.title || '');
        setText(notification.text || '');
        setDate(notification.date ? new Date(notification.date).toISOString().slice(0, 16) : '');
        setRead(notification.read || false);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching notification details:', error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, [id]);

  const handleUpdateNotification = async () => {
    try {
      await axios.put(`/api/notifications/notification/${id}`, {
        title,
        text,
        date,
        read
      });
      alert('Notificación actualizada con éxito');
      navigate(-1);
    } catch (error) {
      console.error('Error updating notification', error);
      alert('Error al actualizar la notificación');
    }
  };

  if (isLoading) {
    return <div className="loading-spinner">Cargando...</div>;
  }

  return (
    <div className="edit-notification-container">
      <h1>Editar Notificación</h1>
      <input
        type="text"
        id="title"
        name="title"
        placeholder="Título"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="input-field"
      />
      <textarea
        id="text"
        name="text"
        placeholder="Texto"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="input-field"
      />
      <input
        type="datetime-local"
        id="date"
        name="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        className="input-field"
      />
      <label htmlFor="read">
        <input
          type="checkbox"
          id="read"
          name="read"
          checked={read}
          onChange={(e) => setRead(e.target.checked)}
        />
        Marcar como leída
      </label>
      <div className="buttons">
        <button className="update-button" onClick={handleUpdateNotification}>Actualizar Notificación</button>
        <button className="back-button" onClick={() => navigate(-1)}>Volver</button>
      </div>
    </div>
  );
};

export default EditNotificationPage;



