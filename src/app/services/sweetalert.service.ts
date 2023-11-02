import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';


@Injectable({
  providedIn: 'root'
})
export class SweetalertService {

  constructor() { }



  showSuccessMessage(message: string) {
    Swal.fire({
      icon: 'success',
      title: 'Success',
      text: message,
    });
  }

  showErrorMessage(message: string) {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: message,
    });
  }

}
