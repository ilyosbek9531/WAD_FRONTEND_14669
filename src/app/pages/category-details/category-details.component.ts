import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from '../../../services/category.service';
import { Category } from '../../../interfaces/category.interface';
import { DetailComponent } from '../../components/detail/detail.component';

@Component({
  selector: 'app-category-details',
  standalone: true,
  imports: [DetailComponent],
  templateUrl: './category-details.component.html',
  styleUrl: './category-details.component.scss'
})
export class CategoryDetailsComponent {
  categoryDetail: Category = {
    id: 0,
    title: '',
    description: '',
    ageRestriction: 0
  }

  activatedRoute = inject(ActivatedRoute)
  categoryService = inject(CategoryService)

  ngOnInit() {
    this.categoryService.getCategory(this.activatedRoute.snapshot.params["id"]).subscribe((category)=>{
    this.categoryDetail = category;
    });
  }
}
