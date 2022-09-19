import { Component, OnInit } from '@angular/core';
import { WorkListService } from '../services/work-list.service';
import { Router } from '@angular/router';
import { PageEvent } from '@angular/material/paginator';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  constructor(
    private workListService: WorkListService,
    private router: Router
  ) {}
  work: any;
  totalResult: any;
  pageEvent!: PageEvent;
  pageIndex:number = 1;

  displayedColumns: string[] = ['Content','publisher', 'DOI', 'Action'];
  result: any;

  ngOnInit(): void {
    this.workListService.getWorkList(this.pageIndex).subscribe((data) => {
      this.work = data;
    });
  }

  onViewClick(row: any) {
    this.router.navigate(['/detail', row.DOI]);
  }

  onPageClick(event: PageEvent) {
    const page = event.pageIndex;
    this.work = !this.work;

    this.workListService.getWorkList(page).subscribe((data) => {
      this.work = data;
    });
  }
}
