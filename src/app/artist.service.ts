import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ArtistModel } from './models/artist-model';

@Injectable({
  providedIn: 'root'
})
export class ArtistService {

  private dataUri = `${environment.apiUri}/artists`;

  constructor(private http: HttpClient) { }

  getArtists(): Observable<ArtistModel[]> {

    console.log("get artists called" );

    return this.http.get<ArtistModel[]>(`${this.dataUri}`)
    .pipe(
      retry(3),
      catchError(this.handleError)
    )

  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }

}
