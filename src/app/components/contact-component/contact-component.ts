import { Component } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'contact-component',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './contact-component.html',
  styleUrl: './contact-component.css',
})
export class ContactComponent {

  myForm!: FormGroup

  ngOnInit() {
    this.myForm = new FormGroup({
      Name: new FormControl('', []),
      Email: new FormControl('', []),
      Message: new FormControl('', [])
    })
  }

  get f(){
    return this.myForm.controls;
  }

  onSubmit() {
    console.log('formValues', this.myForm)
  }
}
