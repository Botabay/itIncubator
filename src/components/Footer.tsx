import * as React from 'react';
type PropsType={
  footerTitle:string
}
export const Footer = (props:PropsType) => {
  return (
    <div>{props.footerTitle}</div>
  )
};
