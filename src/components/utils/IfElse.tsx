import { ReactNode } from 'react';


interface IfProps<T> {
  condition: boolean | T;
  children?: ReactNode;
  render?: ReactNode;
  elseRender?: ReactNode;
}

export function If<T>({ children, condition, render, elseRender }: IfProps<T>): ReactNode {
  if (condition && children) {
    return children;
  }
  if (condition && render) {
    return render;
  }
  if (!condition && elseRender) {
    return elseRender;
  }

  return null;
}
