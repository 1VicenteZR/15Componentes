import {Component} from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatBadgeModule} from '@angular/material/badge';

@Component({
  selector: 'app-componente2',
  imports: [MatBadgeModule, MatButtonModule, MatIconModule],
  templateUrl: './componente2.html',
  styleUrl: './componente2.css'
})
export class Componente2 {
hidden = false;

  toggleBadgeVisibility() {
    this.hidden = !this.hidden;
  }
}
