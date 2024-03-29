import { Component } from '@angular/core';
import { ModalController, IonHeader, IonButtons, IonToolbar, IonButton, IonTitle, IonItem, IonContent, IonInput, IonFooter } from '@ionic/angular/standalone';

@Component({
  selector: 'app-info-modal',
  standalone: true,
  imports: [IonFooter, IonInput, IonContent, IonItem, IonTitle, IonButton, IonToolbar, IonButtons, IonHeader, ],
  templateUrl: './info-modal.component.html',
  styleUrl: './info-modal.component.scss'
})
export class InfoModalComponent {
  name: string = '';

  constructor(private modalCtrl: ModalController) {}

  cancel() {
    return this.modalCtrl.dismiss(null, 'cancel');
  }

  confirm() {
    return this.modalCtrl.dismiss(this.name, 'confirm');
  }
}
