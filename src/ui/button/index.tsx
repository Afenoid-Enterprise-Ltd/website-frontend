import React from "react";
import { ButtonProps } from "./index.types";
import { cva } from "class-variance-authority";
import clsx from "clsx";

const button = cva("py-[0.8rem] px-[2.5rem] flex justify-center items-center cursor-pointer text-center text-base h-auto w-auto font-proxima-nova font-regular", {
  variants: {
    variant: {
      primary: "bg-afenoid-green text-afenoid-light-lemon border-none hover:bg-afenoid-lemon",
      secondary: "bg-transparent border-[3px] border-afenoid-green text-afenoid-green hover:border-0 hover:bg-afenoid-lemon hover:text-afenoid-light-lemon hover:px-[2.6785rem] hover:py-[0.9875rem]",
      tertiary: ""
    },
    
  },
  compoundVariants: [
      
    ]
});

const Button: React.FC<ButtonProps> = (props) => {
  const {
    variant = "primary", 
    label = "", 
    buttonType, 
    customClassName, 
    ...rest 
  } = props;

  const classStyles = clsx(button({variant}), customClassName)

  return (
    <button
      type={buttonType}
      className={classStyles}
      {...rest}
    >
      {label}
    </button>
  );
};

export { Button };
export * from "./index.types";
