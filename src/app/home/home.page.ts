import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {
 
  presentingElement : any;
  isModalOpen = false;
  isModalOpen2 = false;

  constructor(private menu: MenuController) {}

  ionViewWillEnter() {
    this.menu.close('main-menu');
  }
  
  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }
  
  openModal(event: Event) {
    event.preventDefault();
    this.setOpen(true);
  }

  setOpen2(isOpen: boolean) {
    this.isModalOpen2 = isOpen;
  }
  
  openModal2(event: Event) {
    event.preventDefault();
    this.setOpen2(true);
  }

}
