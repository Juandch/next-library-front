import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { Shell } from '@app/shell/shell.service';
import { IndexAuthorsComponent } from './components/index-authors/index-authors.component';
import { ShowAuthorComponent } from './components/show-author/show-author.component';
import { CreateAuthorComponent } from './components/create-author/create-author.component';
import { EditAuthorComponent } from './components/edit-author/edit-author.component';

const routes: Routes = [
  Shell.childRoutes([
    { path: 'about', loadChildren: () => import('./about/about.module').then((m) => m.AboutModule) },
    { path: 'authors', component: IndexAuthorsComponent },
    { path: 'authors/create', component: CreateAuthorComponent },
    { path: 'authors/:id', component: ShowAuthorComponent },
  ]),
  // Fallback when no prior route is matched
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule],
  providers: [],
})
export class AppRoutingModule {}
