import { EntityState, createEntityAdapter } from '@ngrx/entity';
import { Post } from './../../models/posts.model';

export interface PostsState extends EntityState<Post> {
  count: number;
}

export const postsAdapter = createEntityAdapter<Post>({
  sortComparer: sortByName,
});

export const initialState: PostsState = postsAdapter.getInitialState({
  count: 0,
});

export function sortByName(a: Post, b: Post): number {
  const compare = a.title.localeCompare(b.title);
  if (compare > 0) {
    return -1;
  }

  if (compare < 0) {
    return 1;
  }

  return compare;
}
