import { Component } from '@angular/core';
import { Producto } from './models/producto.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  arrComida : Producto[];
  arrBebida : Producto[];
  ProductoSeleccionado : Producto[];
  constructor() {

    this.ProductoSeleccionado = [];
    this.arrComida  = [
      new Producto('Cocido', 'https://i.blogs.es/31e3ce/cocido-madrileno/840_560.jpg', 10.50),
      new Producto('Rollitos', 'https://www.cocinacaserayfacil.net/wp-content/uploads/2020/03/Recetas-de-comida-para-llevar-al-trabajo.jpg', 10.50),
      new Producto('Lasagne', 'https://www.clara.es/medio/2021/01/19/recetas-de-comida_ab72572a_1200x630.jpg', 10.50),
      new Producto('Lomo a la Pizza', 'https://media-cdn.tripadvisor.com/media/photo-s/1a/f5/ae/b8/cerca-rotiseria.jpg', 10.50),
      new Producto('Wok de Pollo', 'https://media.minutouno.com/p/0f9a76a78c399ba980b4ee52669ea3d2/adjuntos/150/imagenes/039/749/0039749344/ensalada-pollo.jpg', 10.50),
      new Producto('Fideos', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfk_en8w1Co3nCQ0h3JepLDwVjAchRa8Q5qw&usqp=CAU', 10.50)
    ]

    this.arrBebida = [
      new Producto('Latas', 'https://st.depositphotos.com/1024764/1853/i/950/depositphotos_18538825-stock-photo-group-of-various-soda-drinks.jpg', 10.50),
      new Producto('G', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSxw_Yy5yzTr654VLGPNZ7gNzgmzjEpV5bZA&usqp=CAU', 10.50),
      new Producto('H', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRc9C_pkTyFAogSZUKs5NuLQD839jMQ6HsymQ&usqp=CAU', 10.50),
      new Producto('I', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKTORyE25WV7hCWczRDlZ63G4JyI-MaNa5Sg&usqp=CAU', 10.50)
    ]
  }
  onProductoSeleccionado($event: any){
    this.ProductoSeleccionado.push($event);
  }
}
