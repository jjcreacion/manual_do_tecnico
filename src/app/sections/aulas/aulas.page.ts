import { Component, OnInit } from '@angular/core';
import { ApiWebService } from 'src/app/api/api-web.service';

@Component({
  selector: 'app-aulas',
  templateUrl: './aulas.page.html',
  styleUrls: ['./aulas.page.scss'],
})
export class AulasPage implements OnInit {

  data: any[] = [];
  results: any[] = [];
  itemsPorPagina = 5;
  paginaActual = 1;
  paginas = 1;  
  selectedItem : any;
  presentingElement : any;
  url = 'aulas/list';

  constructor(private apiService:ApiWebService) { }

  ngOnInit() {
    this.listar();
  }

  listar(){
    // Intentar hacer interfaces
    this.apiService.getData(this.url).subscribe((respuesta) => {
      
        this.data = Object.keys(respuesta).map(key => ({
          id: key,
          img: respuesta[key].img,
          link: respuesta[key].link,
          titulo: respuesta[key].titulo,
        }));

        this.results = this.data;
        console.log(this.results);
        console.log("Total de paginas = "+this.totalDePaginas());
        this.paginas = this.totalDePaginas();
      });
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
 
  handleInput(event: any) {
    const query = event.target.value.toLowerCase();
    this.results = this.data.filter((d) => {
      // Accede a la propiedad 'texto' que es de tipo string
      const stringValue = d.titulo ? d.titulo.toLowerCase() : '';
      return stringValue.includes(query);
    });
    this.paginas = this.totalDePaginas();
  }

}
