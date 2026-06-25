import { Component, signal } from '@angular/core';
import { Modal } from '../../modal/modal/modal';

@Component({
  selector: 'app-mensaje',
  imports: [Modal],
  templateUrl: './mensaje.html',
  styleUrl: './mensaje.css',
})
export class Mensaje {
  isInfoModalOpen = signal(false);
  mostrarMensaje(): void {
    this.isInfoModalOpen.set(true);
  }
  alAceptarMensaje(): void {
    this.isInfoModalOpen.set(false);
  }
  alCerrarMensaje(): void {
    this.isInfoModalOpen.set(false);
  }

}
