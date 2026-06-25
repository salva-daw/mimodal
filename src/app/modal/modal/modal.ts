import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-modal',
  imports: [],
  templateUrl: './modal.html',
  styleUrl: './modal.css',
})
export class Modal {

  // Entradas basadas en Signals (InputSignal)
  isOpen = input(false);
  title = input('Confirmación');
  textConfirm = input('Aceptar');
  textCancel = input('Cancelar');
  // Salidas utilizando la nueva API unificada output()
  onConfirm = output();
  onCancel = output();
  close(): void {
    // Al ser el input de solo lectura, notificamos al padre para que mute el estado
    this.onCancel.emit();
  }
  confirm(): void {
    this.onConfirm.emit();
  }

}
