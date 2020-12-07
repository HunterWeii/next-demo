import Base from "./Base.js";

export default function Text(props) {
  const {
    children,
    ...restProps
  } = props;

  return <Base component="span" {...restProps}>{ children }</Base>
}