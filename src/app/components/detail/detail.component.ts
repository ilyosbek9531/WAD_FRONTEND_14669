import { Component, Input } from '@angular/core';
import { Category } from '../../../interfaces/category.interface';
import { Movie } from '../../../interfaces/movie.interface';

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.scss'
})
export class DetailComponent {
  @Input()
  detail: any;

  @Input()
  title: string = ''
  
  detailIter: any;
  description: string = '';
  categoryIter!: any;
  categoryDesc: string = '';
  
  ngOnChanges() {
    this.detailIter = Object.entries(this.detail)
    if (this.detail && this.detail.category) {
      this.categoryIter = Object.entries(this.detail.category);
      this.categoryDesc = this.detail.description
    }
  }
}
