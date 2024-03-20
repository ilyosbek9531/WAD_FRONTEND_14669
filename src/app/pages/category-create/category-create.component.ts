import { Component } from '@angular/core';
import { CCreateComponent } from '../../components/c-create/c-create.component';

@Component({
  selector: 'app-category-create',
  standalone: true,
  imports: [CCreateComponent],
  templateUrl: './category-create.component.html',
  styleUrl: './category-create.component.scss'
})
export class CategoryCreateComponent {

}
