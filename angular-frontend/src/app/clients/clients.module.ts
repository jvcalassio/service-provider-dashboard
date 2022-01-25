import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ClientsRoutingModule } from './clients-routing.module';
import { FormComponent } from './form/form.component';

@NgModule({
    declarations: [FormComponent],
    imports: [CommonModule, ClientsRoutingModule, FormsModule],
})
export class ClientsModule {}
