import React, { useState, useEffect } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../config/firebaseConfig';
import '../estilos/calendario.css'

const localizer = momentLocalizer(moment);

export default function Calendario() {
  const [actividades, setActividades] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);

  const CustomToolbar = (toolbar) => {
    const goToToday = () => {
      toolbar.date.setMonth(new Date().getMonth());
      toolbar.date.setFullYear(new Date().getFullYear());
      toolbar.onNavigate('TODAY');
    };

    const goToBack = () => {
      toolbar.onNavigate('PREV');
    };

    const goToNext = () => {
      toolbar.onNavigate('NEXT');
    };

    const label = () => {
      const date = moment(toolbar.date);
      return (
        <span>{date.format('MMMM YYYY')}</span>
      );
    };

    return (
      <div className="rbc-toolbar">
        <span className="rbc-toolbar-label">{label()}</span>
        <button onClick={goToBack}>{'Mes Anterior'}</button>
        <button onClick={goToToday}>Mes Actual</button>
        <button onClick={goToNext}>{'Siguiente Mes'}</button>
      </div>
    );
  };

  useEffect(() => {
    const obtenerActividades = async () => {
      const actividadesCollection = collection(db, 'actividades');
      const actividadesSnapshot = await getDocs(actividadesCollection);
      const actividadesLista = actividadesSnapshot.docs.map(doc => {
        const data = doc.data();
        return {
          title: data.titulo,
          start: data.fecha.toDate(),
          end: data.fecha.toDate(),
          descripcion: data.descripcion,
          rutaId: data.rutaId,
          guiaNombre: data.guiaNombre,
        };
      });
      setActividades(actividadesLista);
    };

    obtenerActividades();
  }, []);

  const handleSelectEvent = (event) => {
    setSelectedEvent(event);
  };


  return (
    <div className="calendario-container" style={{ height: 1000 }}>
      {selectedEvent && (
        <div className="event-details">
          <h2>{selectedEvent.title}</h2>
          <p><strong>Descripción:</strong> {selectedEvent.descripcion}</p>
          <p><strong>Fecha:</strong> {moment(selectedEvent.fechaOriginal).format('DD/MM/YYYY HH:mm')}</p>
          <p><strong>Guia:</strong> {selectedEvent.guiaNombre}</p>
          <p><strong>Ruta ID:</strong> {selectedEvent.rutaId}</p>
          
        </div>
      )}

      <Calendar
        localizer={localizer}
        events={actividades}
        startAccessor="start"
        endAccessor="end"
        titleAccessor="title"
        tooltipAccessor="descripcion"
        view="month"
        components={{
          toolbar: CustomToolbar,
        }}
        onSelectEvent={handleSelectEvent}



      />

    </div>
  );
}
