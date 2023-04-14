import * as React from 'react';
type PropsType={
  title:string
}
export const Header = (props: PropsType) => {
  return <h1>{props.title}</h1>
};
