import { Component, Input, inject } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { Category } from '../../../interfaces/category.interface';
import { TableKey } from '../../../types';
import { Movie } from '../../../interfaces/movie.interface';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import {
  MatDialog,
  MatDialogRef,
} from "@angular/material/dialog";
import { DeleteDialogComponent } from '../delete-dialog/delete-dialog.component';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [MatTableModule, MatButtonModule, MatIconModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss'
})
export class TableComponent {
  router = inject(Router)
  location = inject(Location)

  @Input()
  tasks: (Movie | Category)[] = [];

  @Input()
  displayedColumns: TableKey[] = []

  displayedColumnsStr: string[] = []

  ngOnChanges() {
    this.displayedColumnsStr = this.displayedColumns.map(item => item.key);
    this.displayedColumnsStr.unshift("No")
    this.displayedColumnsStr.push('Actions')
  }

  EditClicked(id: number) {
    this.router.navigateByUrl(this.location.path() + '/' + id + '/edit')
  }

  DetailsClicked(id: number) {
    this.router.navigateByUrl(this.location.path() + '/' + id)
  }




  matDialogRef!: MatDialogRef<DeleteDialogComponent>;
  constructor(private matDialog: MatDialog) {}


  DeleteClicked(id: number) {
    this.matDialogRef = this.matDialog.open(DeleteDialogComponent, {
      data: { id, tableName:  this.location.path().slice(1) },
      disableClose: true
    });
  }
}
