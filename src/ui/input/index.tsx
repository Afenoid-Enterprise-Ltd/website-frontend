import React, { FC } from "react";
import clsx from "clsx";
import { useFormContext } from "react-hook-form";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
  type?: string;
}

const Input: FC<InputProps> = (props) => {
  const { name, label, type = "text", ...rest } = props;

  const {
    register,
    formState: { errors },
  } = useFormContext();

  const errMessage = errors[name]?.message;

  return (
    <div className="flex flex-col mb-4">
      <label
        htmlFor={name}
        className="text-black text-base font-[600] uppercase mb-2"
      >
        {label}
        <span className="text-red-400">*</span>
      </label>
      <input
        id={name}
        type={type}
        {...register(name, {
          required: true,
          setValueAs: (value) => (type === "number" ? (value === "" ? undefined : Number(value)) : value), // Custom type conversion logic
        })}
        {...rest}
        className={clsx(
          `block w-full border-2 border-afenoid-light-grey p-4 bg-transparent focus:outline-afenoid-dark-grey`
        )}
      />
      {errMessage && typeof errMessage === "string" && (
        <div className="text-red-500 text-xs">{errMessage}</div>
      )}
    </div>
  );
};

export { Input };
