import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClientsService } from 'src/app/clients.service';
import { Client } from '../client';

@Component({
    selector: 'app-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
    clients: Client[];

    constructor(private service: ClientsService, private router: Router) {
        this.clients = [];
    }

    ngOnInit(): void {
        this.service.findAll().subscribe((v: Client[]) => {
            this.clients = v;
        });
    }

    newClientButton() {
        this.router.navigate(['/clients/form']);
    }
}
