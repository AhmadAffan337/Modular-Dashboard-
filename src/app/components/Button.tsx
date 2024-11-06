interface ButtonProps {
  title?: string;
  className?: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ title, className }) => {
  return <button className={`${className}`}>{title}</button>;
};

export default Button;
