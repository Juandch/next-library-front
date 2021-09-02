import { Component, OnInit } from '@angular/core';
import { AuthorService } from 'src/app/services/author.service';
import { Router } from '@angular/router';

import { MatDatepickerModule } from '@angular/material/datepicker';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-create-author',
  templateUrl: './create-author.component.html',
  styleUrls: ['./create-author.component.scss'],
})
export class CreateAuthorComponent implements OnInit {
  public date_picker: Date = new Date();

  public author: any = {
    gender: '',
    bth_day: new DatePipe('en').transform(this.date_picker, 'yyyy-MM-dd'),
  };

  constructor(private _authorService: AuthorService, private _router: Router) {}

  ngOnInit(): void {}

  createAuthor(registerForm: any) {
    console.log(this.author);
    if (registerForm.valid) {
      this._authorService.createAuthor(this.author).subscribe(
        (response) => {
          console.log(response);
          registerForm.reset();
          this._router.navigate(['/authors']);
        },
        (error) => {
          console.log(error);
        }
      );
    } else {
      console.log('Formulario no válido');
    }
  }
}
