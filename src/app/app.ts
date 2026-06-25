import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Modal } from './modal/modal/modal';
import { Mensaje } from "./mensaje/mensaje/mensaje";

interface Archivo {
  id: number;
  nombre: string;
  tamano: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Modal, Mensaje],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class AppComponent {
  //Tercer commit
  title = signal('mimodal');
  isPaperclipModalOpen = signal(false);
  archivosPorEliminar = signal([
    { id: 101, nombre: 'reporte_financiero_final.xlsx', tamano: '2.4 MB' },
    { id: 102, nombre: 'backup_base_datos.sql', tamano: '45 MB' },
    { id: 103, nombre: 'diseno_interfaz.fig', tamano: '12.1 MB' }
  ]);
  abrirConfirmacion(): void {
    this.isPaperclipModalOpen.set(true);
  }
  alConfirmarBorrado(): void {
    console.log('Procediendo a borrar los archivos del sistema...');
    this.archivosPorEliminar.set([]);
    this.isPaperclipModalOpen.set(false);
  }
  alCancelarBorrado(): void {
    console.log('Borrado cancelado por el usuario.');
    this.isPaperclipModalOpen.set(false);
  }
}