import React, { useState, useEffect } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../config/firebaseConfig';
import '../estilos/calendario.css' 

const localizer = momentLocalizer(moment);

export default function Calendario() {
  const [eventos, setEventos] = useState([]);
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
        <button onClick={goToBack}>{'<'}</button>
        <button onClick={goToToday}>Today</button>
        <button onClick={goToNext}>{'>'}</button>
      </div>
    );
  };

  useEffect(() => {
    const obtenerEventos = async () => {
      const eventosCollection = collection(db, 'actividades');
      const eventosSnapshot = await getDocs(eventosCollection);
      const eventosLista = eventosSnapshot.docs.map(doc => {
        const data = doc.data();
        return {
          title: data.titulo,
          start: data.fecha.toDate(),
          end: data.fecha.toDate(),
          descripcion: data.descripcion,
          rutaId: data.rutaId,
        };
      });
      setEventos(eventosLista);
    };

    obtenerEventos();
  }, []);

  return (
    <div className="calendario-container" style={{ height: 1000 }}>
      <Calendar
        localizer={localizer}
        events={eventos}
        startAccessor="start"
        endAccessor="end"
        titleAccessor="title"
        tooltipAccessor="descripcion"
        view="month"
        components={{
          toolbar: CustomToolbar, 
        }}

      />
    </div>
  );
}
