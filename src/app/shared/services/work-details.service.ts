import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';
import { HttpService } from './http.service';
import { catchError, map, of } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class WorkDetailsService {
  baseUrl = `${environment.url}`
  workDetails:any = {}

  constructor(private httpService: HttpService,
              private router: Router) { }

  getSingleUnit(id:any) : Observable<any>{
    const url = `${this.baseUrl}/works/${id.id}`;
    console.log(url);
    
    return this.httpService.getService(url).pipe(
      map((data) => {
        return this.workDetails = data.message      
    }),
      catchError((error) =>{
      if(error){
        this.router.navigate(['/notFound'])
        return (error.statusText);
      }
    })
      

    )
  }
}
