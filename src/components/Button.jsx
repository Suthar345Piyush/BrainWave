import ButtonSvg from "../assets/svg/ButtonSvg";

const Button = ({ children, px, white, onClick, className, href }) => {
  const classes = `button relative inline-flex items-center justify-center h-11 transition-colors hover:text-color-1 ${
    px || "px-7"
  } ${white ? "text-n-8" : "text-n-1"} ${className || ""}`;

  const spanClasses = `relative z-5`;
  const renderButton = () => (
    <button className={classes} onClick={onClick}>
      <span className={spanClasses}>{children}</span>
      {ButtonSvg(white)}
    </button>
  );

  //for rendring a link, if link was there then it goes to link else it will render a button
  const renderLink = () => (
    <a href={href} className={classes}>
      <span className={spanClasses}>{children}</span>
      {ButtonSvg(white)}
    </a>
  );
  //this is reusable component, here spanclasses and children is rendred in span tag
  return href ? renderLink() : renderButton();
};

export default Button;
