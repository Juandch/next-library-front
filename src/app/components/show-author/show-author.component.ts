import { Component, OnInit } from '@angular/core';
import { AuthorService } from 'src/app/services/author.service';
import { Author } from 'src/app/models/author';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-show-author',
  templateUrl: './show-author.component.html',
  styleUrls: ['./show-author.component.scss'],
})
export class ShowAuthorComponent implements OnInit {
  public author: any;
  public author_books: any;

  constructor(private _authorService: AuthorService, private _router: Router, private _route: ActivatedRoute) {
    this.author = {};
    this.author_books = [];
  }

  ngOnInit(): void {
    this._route.params.subscribe((params) => {
      let id = params.id;
      this.showAuthor(id);
    });
  }

  showAuthor(id: any) {
    this._authorService.showAuthor(id).subscribe(
      (response) => {
        this.author = response.data;
        this.author_books = response.data.books;
      },
      (error) => {
        console.log(<any>error);
      }
    );
  }
}
