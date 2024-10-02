import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form-training',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './reactive-form-training.component.html',
  styleUrl: './reactive-form-training.component.css'
})
export class ReactiveFormTrainingComponent implements OnInit {
  constructor(private formBuilder: FormBuilder){}
  myForm!: FormGroup;

  ngOnInit(): void {
    this.myForm = this.formBuilder.group({
      firstField  : ['', [Validators.required, Validators.minLength(3)]],
      secondField : ['', Validators.required],
      thirdField : new FormControl('', [Validators.required, Validators.email])
    });
  }
}
