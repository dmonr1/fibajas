import { Component } from '@angular/core';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';

@Component({
  selector: 'app-main',
  imports: [NzAvatarModule],
  templateUrl: './main.html',
  standalone: true,
  styleUrl: './main.scss'
})
export class Main {

  activeBtn: string | null = null;

  usuario = {
    inicial: 'U',
    nombres: 'Juan',
    apellidos: 'Pérez Gómez',
    oficina: 'Central',
    area: 'Recursos Humanos'
  };
  toggleLabel(btn: string) {
    this.activeBtn = this.activeBtn === btn ? null : btn;
  }

}
