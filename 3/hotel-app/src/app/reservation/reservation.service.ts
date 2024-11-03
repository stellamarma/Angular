import { Injectable } from '@angular/core';
import { Reservation } from '../moduls/reservation';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  private reservations: Reservation[]=[];

  constructor(){
    let sevedReservation=localStorage.getItem("reservation");
    this.reservations=sevedReservation?JSON.parse(sevedReservation):[];
  }
  //CRUD

  getReservations():  Reservation[]{
    return this.reservations;
  }
  getReservation(id:string):  Reservation | undefined{
    return this.reservations.find(res=>res.id===id);
  }
  addReservation(reservation:Reservation):void{
    this.reservations.push(reservation);
    localStorage.setItem("reservation",JSON.stringify(this.reservations));
  }
  deleteReservation(id:string):void{
    let index=this.reservations.findIndex(res=>res.id===id);
    this.reservations.splice(index,1);
    localStorage.setItem("reservation",JSON.stringify(this.reservations));
  }
  updaetReservation(updateReservation: Reservation): void{
    let index=this.reservations.findIndex(res=>res.id===updateReservation.id);
    this.reservations[index]=updateReservation;
    localStorage.setItem("reservation",JSON.stringify(this.reservations));
  }
}
