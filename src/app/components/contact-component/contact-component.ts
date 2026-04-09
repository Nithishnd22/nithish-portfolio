import { Component } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import emailjs from 'emailjs-com'

@Component({
  selector: 'contact-component',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './contact-component.html',
  styleUrl: './contact-component.css',
})
export class ContactComponent {

  myForm!: FormGroup

  successMessage: string | null = null

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

    const formData = this.myForm.value;

    if(Object.keys(formData).length) {
      emailjs.send(
        'service_m7j8oy5',
        'template_dozcvso',
        {
          name: formData.Name,
          email: formData.Email,
          message: formData.Message
        },
        'oredaPReHJwvtLtAK'
      )
      .then(() => {
        this.successMessage = "Message sent successfully!";

        setTimeout(() => {
          this.successMessage = '';
        }, 3000);

        this.myForm.reset();
      })
      .catch((error) => {
        alert('Failed to send message');
      });
    }
  }
}
