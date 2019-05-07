import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

const sponsorsData = 'assets/data/sponsors.json';

@Injectable({
  providedIn: 'root'
})

export class SponsorsService {
  constructor(private http: HttpClient) {}

  getSponsorsData(): Observable<any> {
    return this.http.get(sponsorsData);
  }
}
