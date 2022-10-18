import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllPostsComponent } from './pages/all-posts/all-posts.component';
import { CreatePostComponent } from './pages/create-post/create-post.component';
import { DetailsPostComponent } from './pages/details-post/details-post.component';
import { EditPostComponent } from './pages/edit-post/edit-post.component';

const routes: Routes = [
  {
    path: '',
    component: AllPostsComponent,
    pathMatch: 'full',
  },
  {
    path: 'new-post',
    component: CreatePostComponent,
    pathMatch: 'full',
  },
  {
    path: 'edit-post/:postId',
    component: EditPostComponent,
    pathMatch: 'full',
  },
  {
    path: 'details/:postId',
    component: DetailsPostComponent,
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
