import { PostsState } from './posts.state';
import { createFeatureSelector, createSelector } from '@ngrx/store';

const getPostsState = createFeatureSelector<PostsState>('posts');

export const getPosts = createSelector(getPostsState, (state) => {
  return state.posts;
});

export const getPostById = createSelector(getPostsState, (state, props) => {
  return state.posts.find((post) => post.id === props.id);
});
