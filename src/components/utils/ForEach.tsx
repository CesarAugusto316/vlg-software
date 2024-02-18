import { ReactNode } from 'react';


interface ForEachProps<T> {
  items: T[];
  children: (item: T, index?: number, arr?: T[]) => ReactNode;
}


export function ForEach<T>({ items, children }: ForEachProps<T>): ReactNode {
  if (!items || items?.length === 0) return null;

  return (
    items.map((item, index, arr) => children(item, index, arr))
  );
}
