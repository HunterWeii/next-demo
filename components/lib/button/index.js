import style from "./style/index.module.scss";
import cls from "classnames";

export default function Button(props) {
  const {
    className,
    children,
    buttonType,
    danger,
    shape,
    ...restProps
  } = props;

  const buttonCls = cls([
    style.button,
    buttonType ? style[`button_type_${buttonType}`] : "",
    shape ? style[`button_shape_${shape}`] : "",
    {
      [ style.button_stat_danger ]: danger,
      [ style.button_stat_link_danger ]: danger && buttonType === 'link'
    },
    className
  ]);

  return (
    <button className={ buttonCls } {...restProps}>
      { children }
    </button>
  )
}

Button.defaultProps = {
  buttonType: "",
  danger: false,
  shape: ''
}