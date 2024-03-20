import { Component, inject } from '@angular/core';
import { CCreateComponent } from '../../components/c-create/c-create.component';
import { CategoryService } from '../../../services/category.service';
import { Category } from '../../../interfaces/category.interface';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-category-edit',
  standalone: true,
  imports: [CCreateComponent],
  templateUrl: './category-edit.component.html',
  styleUrl: './category-edit.component.scss'
})
export class CategoryEditComponent {
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
