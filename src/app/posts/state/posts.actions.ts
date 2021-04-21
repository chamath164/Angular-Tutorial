import {createAction, props} from '@ngrx/store';
import {Post} from '../../models/posts.model';

export const ADD_POST_ACTION = '[post page] addPost';

export const addPost = createAction(ADD_POST_ACTION, props<{post: Post}>());
