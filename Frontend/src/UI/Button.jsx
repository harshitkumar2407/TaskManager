import { Link } from "react-router-dom";
import "./Button.scss";

const Button = ({
  children,
  variant = "primary",
  to,
  className = "",
  type = "button",
  ...props
}) => {
  const classes = ["button", `button--${variant}`, className]
    .filter(Boolean)
    .join(" ");

  if (to) {
    const { type: _type, ...linkProps } = props;
    return (
      <Link className={classes} to={to} {...linkProps}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={classes} {...props}>
      {children}
    </button>
  );
};

export default Button;
