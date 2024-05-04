import { Component, OnInit } from '@angular/core';
import { ApiWebService } from 'src/app/api/api-web.service';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-conduc',
  templateUrl: './conduc.page.html',
  styleUrls: ['./conduc.page.scss'],
})

export class ConducPage implements OnInit {
  
  data: any[] = [];
  results: any[] = [];
  itemsPorPagina = 7;
  paginaActual = 1;
  paginas = 1;  
  selectedItem : any;
  presentingElement : any;
  isModalOpen = false;
  zoomLevel: number = 1;
  lastX: number = 0;
  lastY: number = 0;
  isDragging: boolean = false;
  url = 'cond/list';
  loading: any;

  constructor(
    private apiService:ApiWebService,
    public loadingController: LoadingController
  ){ }

  ngOnInit() {
    this.listar();
    this.presentingElement = document.querySelector('.ion-page');

  }

  async presentLoading() {
    this.loading = await this.loadingController.create({
      message: 'Cargando...'
    });
    await this.loading.present();
    return this.loading;
  }

  listar(){
    // Intentar hacer interfaces
    this.presentLoading().then(() => {
    this.apiService.getData(this.url).subscribe((respuesta) => {
      
        this.data = Object.keys(respuesta).map(key => ({
          id: key,
          img: respuesta[key].img,
          texto: respuesta[key].texto
        }));

        this.results = this.data;
        console.log(this.results);
        console.log("Total de paginas = "+this.totalDePaginas());
        this.paginas = this.totalDePaginas();

        this.loading.dismiss();
      });
    });
  }
  
  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }
  
  openModal(event: Event, item: any) {
    event.preventDefault();
    this.setOpen(true);
    this.selectedItem = item; // Establece el item seleccionado
  }

   generarRango(cantidad: number): number[] {
    return Array.from({length: cantidad}, (_, i) => i + 1);
  }

  totalDePaginas() {
    return Math.ceil(this.results.length / this.itemsPorPagina);
  }

  irAPagina(pagina: number) {
    this.paginaActual = pagina;
  }
 
  zoomIn() {
    this.zoomLevel *= 1.1; // Aumenta el zoom en un 10%
    const zoomImg = document.getElementById('zoom-img') as HTMLElement;
    zoomImg.style.transform = `scale(${this.zoomLevel})`;
  }
  
  zoomOut() {
    this.zoomLevel /= 1.1; // Disminuye el zoom en un 10%
    const zoomImg = document.getElementById('zoom-img') as HTMLElement;
    zoomImg.style.transform = `scale(${this.zoomLevel})`;
  }

  handleInput(event: any) {
    const query = event.target.value.toLowerCase();
    this.results = this.data.filter((d) => {
      // Accede a la propiedad 'texto' que es de tipo string
      const stringValue = d.texto ? d.texto.toLowerCase() : '';
      return stringValue.includes(query);
    });
    this.paginas = this.totalDePaginas();
  }

  // Funciones para manejar el movimiento de la imagen
onMouseDown(event: MouseEvent) {
  this.lastX = event.clientX;
  this.lastY = event.clientY;
  this.isDragging = true;
}

onMouseMove(event: MouseEvent) {
  if (this.isDragging) {
    const zoomImg = document.getElementById('zoom-img') as HTMLElement;
    const deltaX = event.clientX - this.lastX;
    const deltaY = event.clientY - this.lastY;
    zoomImg.style.transform += ` translate(${deltaX}px, ${deltaY}px)`;
    this.lastX = event.clientX;
    this.lastY = event.clientY;
  }
}

onMouseUp() {
  this.isDragging = false;
}
  
}
