import { Component } from '@angular/core';
import { MCreateComponent } from '../../components/m-create/m-create.component';

@Component({
  selector: 'app-movie-create',
  standalone: true,
  imports: [MCreateComponent],
  templateUrl: './movie-create.component.html',
  styleUrl: './movie-create.component.scss'
})
export class MovieCreateComponent {

}
