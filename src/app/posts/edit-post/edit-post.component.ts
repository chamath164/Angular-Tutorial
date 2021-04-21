import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Store} from '@ngrx/store';
import {AppState} from '../../store/app.state';
import get = Reflect.get;
import {getPostById} from '../state/posts.selector';
import {Post} from '../../models/posts.model';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {identity, Subscription} from 'rxjs';
import {updatePost} from '../state/posts.actions';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css']
})
export class EditPostComponent implements OnInit, OnDestroy {
  post: Post;
  postForm: FormGroup;
  postSubscription: Subscription;

  constructor(private route: ActivatedRoute, private store: Store<AppState>, private router: Router) {
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

  // tslint:disable-next-line:typedef
  showDescriptionErrors() {
    const descriptionForm = this.postForm.get('description');
    if (descriptionForm.touched && !descriptionForm.valid) {
      if (descriptionForm.errors.required) {
        return 'Description is required!';
      }
      if (descriptionForm.errors.minlength) {
        return 'Description should be minimum 10 characters required!';
      }
    }
  }

  // tslint:disable-next-line:typedef
  showTitleErrors() {
    const titleForm = this.postForm.get('title');
    if (titleForm.touched && !titleForm.valid) {
      if (titleForm.errors.required) {
        return 'Title is required!';
      }
      if (titleForm.errors.minlength) {
        return 'Title should be minimum 6 characters required!';
      }
    }
  }

  ngOnDestroy(): void {
    if (this.postSubscription) {
      this.postSubscription.unsubscribe();
    }
  }

  // tslint:disable-next-line:typedef
  onSubmit() {
    if (!this.postForm.valid) {
      return;
    }
    const title = this.postForm.value.title;
    const description = this.postForm.value.description;

    const post: Post = {
      id: this.post.id,
      title,
      description
    };
    this.store.dispatch(updatePost({post}));
    this.router.navigate(['posts']);
  }
}
