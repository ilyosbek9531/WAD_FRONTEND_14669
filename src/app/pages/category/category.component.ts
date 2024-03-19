import { Component, inject } from '@angular/core';
import { TableComponent } from '../../components/table/table.component';
import { Router } from '@angular/router';
import { CategoryService } from '../../../services/category.service';
import { Category } from '../../../interfaces/category.interface';
import { TableKey } from '../../../types';

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [TableComponent],
  templateUrl: './category.component.html',
  styleUrl: './category.component.scss'
})
export class CategoryComponent {
  router = inject(Router)
  categoryService = inject(CategoryService)
  categories: Category[] = []

  ngOnInit(){
    this.categoryService.getCategories().subscribe((result)=>{
      this.categories = result;
    });
  }

  displayedColumns: TableKey[] = [
    {
      label: "Id",
      key: 'id'   
    },
    {
      label: "Title",
      key: 'title'   
    },
    {
      label: "Description",
      key: 'description'   
    },
    {
      label: "Age Restriction",
      key: 'ageRestriction'   
    }
  ];
}
