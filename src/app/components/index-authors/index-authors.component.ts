import { Component, OnInit } from '@angular/core';
import { AuthorService } from 'src/app/services/author.service';
import { Author } from 'src/app/models/author';

@Component({
  selector: 'app-index-authors',
  templateUrl: './index-authors.component.html',
  styleUrls: ['./index-authors.component.scss'],
})
export class IndexAuthorsComponent implements OnInit {
  public authors: Array<Author> = [];

  constructor(private _authorService: AuthorService) {}

  ngOnInit(): void {
    this.getAuthors();
  }

  getAuthors() {
    this._authorService.getAuthors().subscribe(
      (response) => {
        if (response.data) {
          this.authors = response.data;
        }
      },
      (error) => {
        console.log(error);
      }
    );
  }

  deleteAuthor(id: any) {
    this._authorService.deleteAuthor(id).subscribe(
      (response) => {
        if (response.data) {
          console.log(response.data);
        }
        this.getAuthors();
      },
      (error) => {
        console.log(<any>error);
      }
    );
  }
}
