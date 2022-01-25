import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Client } from './clients/client';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root',
})
export class ClientsService {
    constructor(private http: HttpClient) {}

    save(client: Client): Observable<Client> {
        return this.http.post<Client>(environment.CLIENT_API_URL, client);
    }
}
