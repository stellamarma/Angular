import { Component } from '@angular/core';
import { Appointment } from '../models/appointment';
import { OnInit } from '@angular/core';// life cycle hook

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.css']
})
export class AppointmentListComponent implements OnInit{

    newAppointmentTitle: string ="";
    newAppointmentDate: Date=new Date();
    appointments: Appointment[]=[]

    ngOnInit():void{

      let saveAppointments= localStorage.getItem("appointments")

      this.appointments=saveAppointments? JSON.parse(saveAppointments): []
    }
    AddAppointment(){

      //alert(this.newAppointmentTitle+" "+this.newAppointmentDate)
      if(this.newAppointmentTitle.trim().length && this.newAppointmentDate){
        let newAppointment: Appointment={
          id: Date.now(),
          title: this.newAppointmentTitle,
          date: this.newAppointmentDate
        }
        this.appointments.push(newAppointment)
        //in this way, we do reset
        this.newAppointmentTitle="";
        this.newAppointmentDate= new Date();
        // to see the length of items
       // alert(this.appointments.length)

       localStorage.setItem("appointments",JSON.stringify(this.appointments))
      }

    }
    deleteAppointment(index:number){
      this.appointments.splice(index,1)
      localStorage.setItem("appointments",JSON.stringify(this.appointments))
    }
}
