import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Cursos } from 'src/app/interfaces/cursos';
import { CursosService } from 'src/app/servicios/cursos.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  listCursos: Cursos[] = [];

  displayedColumns: string[] = ['idcurso', 'nombrecurso', 'profesor', 'acciones'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private cursoService: CursosService, private _snackBarCurso : MatSnackBar) { }

  ngOnInit(): void {
    this.cargarCursos();
  }

  cargarCursos(){
      this.listCursos = this.cursoService.getCursos();
      this.dataSource = new MatTableDataSource(this.listCursos);
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  eliminarcurso(index:number){
    console.log( index, 1);

    this.cursoService.eliminarCurso(index);
    this.cargarCursos();

    this._snackBarCurso.open('El curso fue eliminado exitosamente', '',{
      duration:1500,
      horizontalPosition:'center',
      verticalPosition: 'bottom'
    })

  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

}
