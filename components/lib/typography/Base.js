import style from "./style/index.module.scss";
import cls from "classnames";


export default function Base(props) {
  const {
    className,
    component,
    children,
    type,
    disabled,
    deleted,
    ...restProps
  } = props;

  const Component = component;
  const typographyCls = cls([
    className,
    type ? style[`typography_type_${type}`] : '',
    {
      [ style.typography_disabled ]: disabled,
      [ style.typography_deleted ]: deleted
    }
  ]);


  return ( 
    <Component className={typographyCls} {...restProps}>
      { children }
    </Component>
  )

}

Base.defaultProps = {
  component: 'span',
  disabled: false,
  deleted: false
}