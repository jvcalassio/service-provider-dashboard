import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ClientsService } from 'src/app/clients.service';
import { Client } from '../client';
declare var $: any;

@Component({
    selector: 'app-form',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
    client: Client;
    success: string;
    errors: string[];

    constructor(
        private service: ClientsService,
        private router: Router,
        private activatedRoute: ActivatedRoute
    ) {
        this.client = new Client();
        this.success = '';
        this.errors = [];
    }

    ngOnInit(): void {
        this.activatedRoute.params.subscribe((v: Params) => {
            if (!v || !Object.keys(v).length) return;

            this.service.findById(v['id']).subscribe({
                next: (client: Client) => {
                    this.client = client;
                },
                error: (e) => {
                    this.client = new Client();
                },
            });
        });
    }

    onSubmit(): void {
        if (this.client && this.client.id) {
            this.service.update(this.client.id, this.client).subscribe({
                next: (v) => {
                    this.success = 'Changes saved!';
                    this.errors = [];
                },
                error: (e) => {
                    this.success = '';
                    this.errors = e.error.errors;
                },
            });
        } else {
            this.service.save(this.client).subscribe({
                next: (v: Client) => {
                    this.client = v;
                    this.success = 'Client registered sucessfully!';
                    this.errors = [];
                },
                error: (e) => {
                    this.success = '';
                    this.errors = e.error.errors;
                },
            });
        }
    }

    deleteItem(): void {
        if (this.client && this.client.id)
            this.service.delete(this.client.id).subscribe({
                next: (v) => {
                    this.success = 'Client deleted successfully!';
                    this.errors = [];
                    this.client = new Client();
                },
                error: (e) => {
                    this.success = '';
                    this.errors = e.error.errors;
                },
            });
    }

    clientListButton() {
        this.router.navigate(['/clients']);
    }
}
