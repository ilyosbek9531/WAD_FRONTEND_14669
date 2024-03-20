import { Component, Input, inject } from '@angular/core';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {provideNativeDateAdapter} from '@angular/material/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Movie, MovieCreate } from '../../../interfaces/movie.interface';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieService } from '../../../services/movie.service';
import { CategoryService } from '../../../services/category.service';
import { Category } from '../../../interfaces/category.interface';

@Component({
  selector: 'app-m-create',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatSelectModule, FormsModule, ReactiveFormsModule, MatButtonModule, MatDatepickerModule],
  templateUrl: './m-create.component.html',
  styleUrl: './m-create.component.scss',
  providers: [provideNativeDateAdapter()],
})
export class MCreateComponent {
  @Input()
  movieDetail!: Movie;

  @Input()
  isEdit: boolean = false

  router = inject(Router)
  movieService = inject(MovieService)
  categoryService = inject(CategoryService)
  activatedRoute = inject(ActivatedRoute)

  createMovie: MovieCreate = {
    title: '',
    description: '',
    releaseDate: '',
    duration: null,
    categoryId: null
  }
  errorObj: any;
  categories: Category[] = [];
  categoryId: number = 0;


  ngOnInit() {
    this.categoryService.getCategories().subscribe((result) => {
      this.categories = result
    });
  }

  ngOnChanges() {
    this.createMovie = this.movieDetail;
  }

  clearForm() {
    this.createMovie = {
      title: '',
      description: '',
      releaseDate: '',
      duration: null,
      categoryId: null
    }
  }

  submitForm() {
    this.createMovie.categoryId=this.categoryId
    if(this.isEdit) {
      this.movieService.updateMovie(this.activatedRoute.snapshot.params["id"], this.createMovie).subscribe(_=>{
        alert("Movie Updated")
        this.router.navigateByUrl("movie");
      },
      error => {
        this.errorObj = error.error.errors;
      })
    }else{
      this.movieService.createMovie(this.createMovie).subscribe(_=> {
        alert("Movie created")
        this.router.navigateByUrl("movie")
      },
      error => {
        this.errorObj = error.error.errors;
      });
    }
  }
}
