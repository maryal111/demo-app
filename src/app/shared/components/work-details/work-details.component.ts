import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { WorkDetailsService } from '../../services/work-details.service';


@Component({
  selector: 'app-work-details',
  templateUrl: './work-details.component.html',
  styleUrls: ['./work-details.component.css']
})
export class WorkDetailsComponent implements OnInit {
  id:any;
  workDetails:any;

  constructor(
    private route : ActivatedRoute,
    private router: Router,
    private workDetailsService: WorkDetailsService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params) =>{
        this.id = params;
        this.workDetailsService.getSingleUnit(this.id).subscribe(
          (data) => {
            this.workDetails = data
          }
        )
      }
    )
  }

  goBack(){
    this.router.navigate(['/dashboard'])
  }

}
