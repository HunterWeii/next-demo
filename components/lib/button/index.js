import style from "./style/index.module.scss";
import cls from "classnames";

export default function Button(props) {
  const {
    className,
    children,
    buttonType,
    danger,
    ...restProps
  } = props;

  const buttonCls = cls([
    style.button,
    buttonType ? style[`button_type_${buttonType}`] : "",
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
  danger: false
}