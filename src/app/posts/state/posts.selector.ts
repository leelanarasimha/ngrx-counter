import { PostsState } from './posts.state';
import { createFeatureSelector, createSelector } from '@ngrx/store';
export const POST_STATE_NAME = 'posts';
const getPostsState = createFeatureSelector<PostsState>(POST_STATE_NAME);

export const getPosts = createSelector(getPostsState, (state) => {
  return state.posts;
});

export const getPostById = createSelector(getPostsState, (state, props) => {
  return state.posts.find((post) => post.id === props.id);
});
