import React, { ReactNode } from "react";

interface CardProps {
  title?: string;
  description?: string;
  className?: string;
  children?: ReactNode;
  icon?: ReactNode;
  others?: ReactNode;
  color?: string;
}

const Card: React.FC<CardProps> = ({
  title,
  description,
  className = "",
  children,
  icon,
  others,
  color,
}) => {
  const getStyle = () => {
    if (title) {
      return "text-gray-500 text-xs font-roboto mt-2";
    } else {
      return "text-slate-100 text-xs font-roboto p-1 mt-2";
    }
  };

  return (
    <div className={` rounded shadow p-4 ${className}`}>
      <div className="flex items-center">
        {icon && <div className="mr-3 text-3xl">{icon}</div>}{" "}
        {(title || description) && (
          <div className="flex flex-col space-y-1">
            <h3
              className={`  ${
                title === "Filter time"
                  ? "text-xs font-roboto text-gray-500"
                  : " text-3xl font-bold font-roboto"
              }`}
            >
              {title}
            </h3>
            <p
              className={` ${
                title === "Filter time"
                  ? "text-xs font-roboto font-bold text-gray-400"
                  : getStyle()
              }     `}
            >
              {description}
            </p>
            {others}
          </div>
        )}
      </div>
      {children && <div className="mt-4">{children}</div>}
    </div>
  );
};

export default Card;
