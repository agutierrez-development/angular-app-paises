import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';
import { tap } from 'rxjs';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [`
    button {
      margin-right: 5px;
    }
  `]
})
export class PorRegionComponent {

  regiones: string[] = ['africa', 'americas', 'asia', 'europe', 'oceania'];
  regionActiva: string = '';
  paises: Country[] = [];

  constructor(private paisService: PaisService) { }

  getClaseCSS(region: string): string {
    return (region === this.regionActiva) ? 'a-no-href nav-link active' : 'a-no-href nav-link';
  }

  activarRegion(region: string) {

    if (region !== this.regionActiva) {
      this.regionActiva = region;

      this.paisService.getPaisesPorRegion(region)
        .subscribe(paises => {
          this.paises = paises;
        });
    }
  }

}
