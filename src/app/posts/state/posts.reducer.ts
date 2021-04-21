import {createReducer, on} from '@ngrx/store';
import {initialState} from './posts.state';
import {addPost, updatePost} from './posts.actions';
import {state} from '@angular/animations';

// tslint:disable-next-line:variable-name
const _postsReducer = createReducer(initialState,
  on(addPost, (state, action) => {
    const post = {...action.post};
    post.id = (state.posts.length + 1).toString();
    return {
      ...state,
      posts: [...state.posts, post],
    };
  }),
  on(updatePost, (state, action) => {
    const updatedPosts = state.posts.map((post) => {
      return action.post.id === post.id ? action.post : post;
    });
    return {
      ...state,
      posts: updatedPosts,
    };
  })
);

export function postsReducer(state, action): any {
  return _postsReducer(state, action);
}
