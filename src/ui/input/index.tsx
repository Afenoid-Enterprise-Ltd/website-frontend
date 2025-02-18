import React, { FC } from "react";
import clsx from "clsx";
import { useFormContext } from "react-hook-form";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
  type?: string;
  placeholder: string;
}

const Input: FC<InputProps> = (props) => {
  const { name, label, type = "text", placeholder, ...rest } = props;

  const {
    register,
    formState: { errors },
    clearErrors
  } = useFormContext();

  const errMessage = errors[name]?.message;

  const handleBlur = () => {
    clearErrors(name)
  }

  return (
    <div className="flex flex-col mb-4">
      <label
        htmlFor={name}
        className=" cursor-pointer uppercase mb-2 text-lg text-afenoid-dark-green font-bold font-raleway msm:text-sm"
      >
        {label}
        <span className="text-red-400"> *</span>
      </label>
      <input
        id={name}
        type={type}
        {...register(name, {
          required: true,
          setValueAs: (value) => (type === "number" ? (value === "" ? undefined : Number(value)) : value), 
          onBlur: handleBlur
        })}
        {...rest}
        className={clsx(
          `block w-full border-2 p-4 bg-[#F8FAF4] focus:outline-afenoid-dark-grey focus:bg-afenoid-light-lemon :placeholder:font-raleway placeholder:text-afenoid-dark-grey mxs:p-2`, errMessage ? "border-red-500" : "border-afenoid-light-grey"
        )}
        placeholder={placeholder}
       
      />
      {errMessage && typeof errMessage === "string" && (
        <div className="text-red-500 text-xs">{errMessage}</div>
      )}
    </div>
  );
};

export { Input };
