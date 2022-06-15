import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';
import { tap } from 'rxjs';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [`
    li {
      cursor: pointer;
    }
  `]
})
export class PorPaisComponent implements OnInit {

  termino: string = '';
  isError: boolean = false;
  paises: Country[] = [];
  paisesSugeridos: Country[] = [];

  constructor(private paisService: PaisService) { }

  ngOnInit(): void {
  }

  buscar(termino: string) {
    this.isError = false;
    this.termino = '';
    this.paisService.buscarPais(termino)
      .subscribe({
        next: (paises) => {
          this.paises = paises;
        },
        error: (err) => {
          this.isError = true;
          this.paises = [];
        }
      });
  }

  buscarSugerencia( termino: string ) {
    this.termino = '';
    this.paisesSugeridos = [];
    this.paisService.buscarPais( termino )
    .subscribe( paises => {
      this.paises = paises;
    });
  }

  sugerencias(termino: string) {
    this.isError = false;
    this.termino = termino;
    this.paises  = [];
    this.paisService.buscarPais( termino ).subscribe( paises => this.paisesSugeridos = paises.splice(0,5) );
  }

}
