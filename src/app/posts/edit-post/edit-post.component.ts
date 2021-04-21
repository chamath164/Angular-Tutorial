import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Store} from '@ngrx/store';
import {AppState} from '../../store/app.state';
import get = Reflect.get;
import {getPostById} from '../state/posts.selector';
import {Post} from '../../models/posts.model';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {identity, Subscription} from 'rxjs';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css']
})
export class EditPostComponent implements OnInit, OnDestroy {
  post: Post;
  postForm: FormGroup;
  postSubscription: Subscription;

  constructor(private route: ActivatedRoute, private store: Store<AppState>) {
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      this.postSubscription = this.store.select(getPostById, {id}).subscribe(data => {
        this.post = data;
        this.createForm();
      });
    });
  }

  private createForm(): void {
    this.postForm = new FormGroup({
      title: new FormControl(this.post.title,
        [Validators.required, Validators.minLength(6)]),
      description: new FormControl(this.post.description,
        [Validators.required, Validators.minLength(10)]),
    });
  }

  ngOnDestroy(): void {
    if (this.postSubscription) {
      this.postSubscription.unsubscribe();
    }
  }
}
