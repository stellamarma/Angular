import { Injectable } from '@angular/core';
import { Reservation } from '../moduls/reservation';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  private reservations: Reservation[]=[];

  //CRUD

  getReservations():  Reservation[]{
    return this.reservations;
  }
  getReservation(id:string):  Reservation | undefined{
    return this.reservations.find(res=>res.id===id);
  }
}
