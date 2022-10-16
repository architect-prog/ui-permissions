import { Collection } from 'types/api';
import { CollectionExtensions } from 'types/frontend';

const collection = <T>(collection: Collection<T>): CollectionExtensions<T> => {
  const add = (item: T): Collection<T> => {
    const { items, count } = collection;

    const updatedCollection = {
      items: [...items, item],
      count: count + 1,
    };

    return updatedCollection;
  };

  const remove = (predicate: (x: T) => boolean): Collection<T> => {
    const { items, count } = collection;

    const updatedCollection = {
      items: items.filter(predicate),
      count: count + 1,
    };

    return updatedCollection;
  };

  const replace = (predicate: (x: T) => boolean, item: T): Collection<T> => {
    const { items, count } = collection;
    const copiedItems = [...items];
    copiedItems[items.findIndex(predicate)] = item;

    const updatedCollection = {
      items: copiedItems,
      count: count + 1,
    };

    return updatedCollection;
  };

  return {
    add: add,
    remove: remove,
    replace: replace,
  };
};

export default collection;
