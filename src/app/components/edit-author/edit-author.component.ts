import { Component, OnInit } from '@angular/core';
import { AuthorService } from '../../services/author.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { MatDatepickerModule } from '@angular/material/datepicker';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-edit-author',
  templateUrl: './edit-author.component.html',
  styleUrls: ['./edit-author.component.scss'],
})
export class EditAuthorComponent implements OnInit {
  public date_picker: Date = new Date();
  public id: any;

  public getAuthor: any = {
    gender: '',
    bth_day: new Date('MM/dd/yyyy'),
  };

  public author: any = {
    name: '',
    gender: '',
    bth_day: new Date('yyyy-MM-dd'),
    bio: '',
  };

  constructor(private _authorService: AuthorService, private _route: ActivatedRoute, private _router: Router) {}

  ngOnInit(): void {
    this._route.params.subscribe((params) => {
      this.id = params['id'];
      console.log(this.id);
      this._authorService.showAuthor(this.id).subscribe(
        (response) => {
          console.log(response);
          if (response.data == undefined) {
            this.getAuthor = undefined;
          } else {
            this.getAuthor = response.data;
          }
        },
        (error) => {
          console.log(error);
        }
      );
    });
  }

  updateAuthor(updateForm: any) {
    this.author = {
      name: this.getAuthor.name,
      gender: this.getAuthor.gender,
      bth_day: new DatePipe('en').transform(this.getAuthor.bth_day, 'yyyy-MM-dd'),
      bio: this.getAuthor.bio,
    };
    if (updateForm.valid) {
      console.log(this.author);
      console.log(this.id);
      this._authorService.updateAuthor(this.id, this.author).subscribe(
        (response) => {
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
