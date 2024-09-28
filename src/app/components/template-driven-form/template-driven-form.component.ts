import { CommonModule } from "@angular/common";
import { Component, Input } from "@angular/core";
import { FormsModule } from "@angular/forms";


@Component({
    standalone: true,
    selector: 'template-driven-form',
    templateUrl: 'template-driven-form.component.html',
    styleUrl: './template-driven-form.component.css',
    imports: [CommonModule, FormsModule],
})
export class TemplateDrivenForm {
    color: string = 'red';
    name: string = '';
    onNameChange(value:any){
        console.log('name has changed',value);
    }
}