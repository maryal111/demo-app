import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpService } from 'src/app/shared/services/http.service';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MovieListService {
  baseUrl = `${environment.url}`;

  constructor(private httpService: HttpService) {}

  work: any = {};

  getMovieList(): Observable<any> {
    const url = `${this.baseUrl}/films`;

    return this.httpService.getService(url).pipe(
      map((data) => {
        return (this.work = data);
      })
    );
  }

}
