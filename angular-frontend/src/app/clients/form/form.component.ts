import { Component } from '@angular/core';
import { ClientsService } from 'src/app/clients.service';
import { Client } from '../client';

@Component({
    selector: 'app-form',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.css'],
})
export class FormComponent {
    client: Client;
    success: boolean;
    errors: string[];

    constructor(private service: ClientsService) {
        this.client = new Client();
        this.success = false;
        this.errors = [];
    }

    onSubmit(): void {
        this.service.save(this.client).subscribe({
            next: (v: Client) => {
                this.client = v;
                this.success = true;
                this.errors = [];
            },
            error: (e) => {
                this.success = false;
                this.errors = e.error.errors;
            },
        });
    }
}
