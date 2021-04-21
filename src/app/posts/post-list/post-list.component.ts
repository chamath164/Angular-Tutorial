import {Component, OnInit} from '@angular/core';
import {getPost} from '../state/posts.selector';
import {Store} from '@ngrx/store';
import {AppState} from '../../store/app.state';
import {Observable} from 'rxjs';
import {Post} from '../../models/posts.model';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  posts: Observable<Post[]>;

  constructor(private store: Store<AppState>) {
  }

  ngOnInit(): void {
    this.posts = this.store.select(getPost);
  }

}
