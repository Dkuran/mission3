import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ResourceService {
	constructor(private _http: HttpClient) {
		console.log('Servicio de recursos');
	}

	// getComents(url): Observable<any> {
  //   console.log('Coments');
  //   return this._http.get(url);
	// }

	// getPosts(url): Observable<any> {
  //   console.log('Posts');
  //   return this._http.get(url);
  // }

  getResource(url): Observable<any> {
    console.log('Resource');
    return this._http.get(url);
	}
}
