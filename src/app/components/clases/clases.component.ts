import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Clases } from 'src/app/interfaces/clases';
import { ClasesService } from 'src/app/servicios/clases.service';




@Component({
  selector: 'app-clases',
  templateUrl: './clases.component.html',
  styleUrls: ['./clases.component.css']
})
export class ClasesComponent implements OnInit {

  listClases: Clases[] = [];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  displayedColumns: string[] = ['idclase', 'nombreclase', 'profeclase', 'duracion', 'acciones'];
  dataSource!: MatTableDataSource<any>
  

  constructor(private claseService: ClasesService, private _snackBarClase : MatSnackBar) { }

  ngOnInit(): void {
    this.cargarClases();
  }

  cargarClases(){
    this.listClases= this.claseService.getClases();
    this.dataSource= new MatTableDataSource(this.listClases);
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  eliminarclase(index:number){
    console.log( index, 1);

    this.claseService.eliminarClase(index);
    this.cargarClases();

    this._snackBarClase.open('La clase fue eliminada exitosamente', '',{
      duration:1500,
      horizontalPosition:'center',
      verticalPosition: 'bottom'
    })

  }

}
