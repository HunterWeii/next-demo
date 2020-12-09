import style from "./style/index.module.scss";
import Button from "components/lib/button";
import cls from "classnames";
import { useState } from 'react';

export default function Dropdown(props) {
  const {
    children,
    className
  } = props;

  const dropdownCls = cls([
    style.dropdown,
    className
  ]);

  const [ content, setContent ] = useState(false);
  const contentCls = cls([
    style.dropdown_content ,
    {  
      [style.dropdown_content_show]: content
    }
  ]);
  const onToggle = () => setContent( visible => !visible );

  return (
    <div className={dropdownCls}>
      <Button className={style.dropdown_button} shape="round" onClick={ onToggle }>
        ☰
      </Button>
      <div className={ contentCls }>
        { children }
      </div>
    </div>
  )
}