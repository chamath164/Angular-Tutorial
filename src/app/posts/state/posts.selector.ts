import {createFeatureSelector, createSelector} from '@ngrx/store';
import {PostsState} from './posts.state';

const getPostsState = createFeatureSelector<PostsState>('posts');

export const getPost = createSelector(getPostsState, (state) => {
  return state.posts;
});
