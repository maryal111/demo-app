import { Component, OnInit, ViewChild } from '@angular/core';
import { MovieListService } from '../services/movie-list.service';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})

export class DashboardComponent implements OnInit {
  constructor(
    private movieListService: MovieListService,
  ) {}

  displayedColumns: string[] = ['director', 'producer', 'title', 'runningTime'];
  dataSource: any;
  movies: any;

  @ViewChild(MatPaginator) paginator !: MatPaginator;
  @ViewChild(MatSort) sort !: MatSort;

  ngOnInit(): void {
    this.movieListService.getMovieList().subscribe((data) => {
      this.movies = data;

      this.dataSource = new MatTableDataSource<any>(this.movies)
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort
    });
  }

  search(event: Event) {
    const searchedValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = searchedValue;
  }
}
