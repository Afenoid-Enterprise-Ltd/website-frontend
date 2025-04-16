import React, {FC} from "react";
import clsx from "clsx";
import { useFormContext } from "react-hook-form";

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  name: string;
  label: string;
  placeholder: string;
}


const Textarea:FC<TextareaProps> = (props) => {
  const { name, label, placeholder, ...rest } = props;

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
    <div>
      <label
        htmlFor={name}
        className="cursor-pointer uppercase mb-2 text-lg text-afenoid-dark-green font-bold font-raleway msm:text-sm"
      >
        {label}
        <span className="text-red-400"> *</span>
      </label>
      <textarea
        id={name}
        {...rest}
        className={clsx(
          `block w-full border-2 p-4 font-proxima-nova h-[15rem] bg-[#F8FAF4] focus:outline-afenoid-dark-grey focus:bg-afenoid-light-lemon :placeholder:font-proxima-nova placeholder:text-afenoid-dark-grey mxs:p-2`, 
        )}
        placeholder={placeholder}
        {...register(name, {
          required: true,
          onBlur: handleBlur
        })}
      />
      {errMessage && typeof errMessage === "string" && (
        <div className="text-red-500 text-xs">{errMessage}</div>
      )}
    </div>
  );
}
 
export {Textarea};