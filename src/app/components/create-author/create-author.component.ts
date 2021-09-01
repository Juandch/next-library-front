import { Component, OnInit } from '@angular/core';
import { AuthorService } from 'src/app/services/author.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-author',
  templateUrl: './create-author.component.html',
  styleUrls: ['./create-author.component.scss'],
})
export class CreateAuthorComponent implements OnInit {
  public author: any = {
    genero: '',
  };

  constructor(private _authorService: AuthorService, private _router: Router) {}

  ngOnInit(): void {}

  createAuthor(registerForm: any) {
    if (registerForm.valid) {
      this._authorService.createAuthor(this.author).subscribe(
        (response) => {
          console.log(response);
          registerForm.reset();
          this._router.navigate(['/panel/clientes']);
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
