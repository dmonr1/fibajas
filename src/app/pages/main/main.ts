import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  imports: [],
  templateUrl: './main.html',
  standalone: true,
  styleUrl: './main.scss'
})
export class Main {

  activeBtn: string | null = null;


  toggleLabel(btn: string) {
    this.activeBtn = this.activeBtn === btn ? null : btn;
  }

}
