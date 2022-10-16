import { Collection } from 'types/api';

export type CollectionExtensions<T> = {
  add: (item: T) => Collection<T>;
  remove: (predicate: (x: T) => boolean) => Collection<T>;
  replace: (predicate: (x: T) => boolean, item: T) => Collection<T>;
};
