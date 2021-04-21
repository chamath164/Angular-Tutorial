import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {CounterComponent} from './counter/counter/counter.component';
import {PostListComponent} from './posts/post-list/post-list.component';
import {AddPostComponent} from './posts/add-post/add-post.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'counter', component: CounterComponent},
  {
    path: 'posts', component: PostListComponent,
    children: [
      {path: 'add', component: AddPostComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}