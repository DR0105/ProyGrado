import { Component, OnInit } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/angular';
import esLocale from '@fullcalendar/core/locales/es';


@Component({
  selector: 'ngx-horarios',
  templateUrl: './horarios.component.html',
  styleUrls: ['./horarios.component.scss']
})
export class HorariosComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    headerToolbar: {
      left: 'prev,next,today',
      center: 'title',
      right: 'timeGridDay,timeGridWeek,dayGridMonth,listWeek'
    },
    locale: esLocale,
    slotLabelFormat:{
      hour: 'numeric',
      minute: '2-digit',
      omitZeroMinute: false,
      meridiem: 'short'
    },
    navLinks: true,
    editable: true,
    slotMinTime: '06:00:00',
    slotMaxTime: '16:00:00',
    slotDuration: '00:15:00',
    slotLabelInterval: 15,
    snapDuration: '00:30:00',
    events: [
      { title: 'Cita psicología', date: '2021-03-15' },
      { title: 'Cita odontología', date: '2021-03-16' }
    ],
  };

}
