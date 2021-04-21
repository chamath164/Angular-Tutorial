import {createAction, props} from '@ngrx/store';
import {Post} from '../../models/posts.model';

export const ADD_POST_ACTION = '[post page] add Post';
export const UPDATE_POST_ACTION = '[post page] update Post';

export const addPost = createAction(ADD_POST_ACTION, props<{post: Post}>());
export const updatePost = createAction(UPDATE_POST_ACTION, props<{post: Post}>());
