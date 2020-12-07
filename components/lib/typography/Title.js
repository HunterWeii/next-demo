import Base from "./Base.js";

export default function Title(props) {
  let {
    level,
    children,
    ...restProps
  } = props;

  const validHeading = ["h1", "h2", "h3", "h4", "h5", "h6"].some(heading => heading  === level);
  if( !validHeading ) level = "h1";

  return <Base component={level} {...restProps}>
    { children }
  </Base>
}