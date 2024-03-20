import { Component, inject } from '@angular/core';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CategoryService } from '../../../services/category.service';
import { CategoryCreate } from '../../../interfaces/category.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-c-create',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatSelectModule, FormsModule, ReactiveFormsModule, MatButtonModule],
  templateUrl: './c-create.component.html',
  styleUrl: './c-create.component.scss'
})
export class CCreateComponent {
  router = inject(Router)
  categoryService = inject(CategoryService)

  createCategory: CategoryCreate = {
    title: '',
    description: '',
    ageRestriction: null
  }
  errorObj: any;

  clearForm() {
    this.createCategory = {
      title: '',
      description: '',
      ageRestriction: null
    }
  }

  submitForm() {
    this.categoryService.createCategory(this.createCategory).subscribe(_=> {
      alert("Category created")
      this.router.navigateByUrl("category")
    },
    error => {
      this.errorObj = error.error.errors;
    });
  }
}
