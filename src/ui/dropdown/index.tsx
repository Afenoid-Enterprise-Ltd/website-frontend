import React, { useState, useRef, useEffect, useMemo } from "react";
import { useFormContext } from "react-hook-form";
import styles from "./index.module.scss";
import { SlArrowDown, SlMagnifier } from "react-icons/sl";

interface Options {
  value: string;
  label: string;
}

interface DropdownProps {
  label: string;
  options: Options[];
  name: string;
  placeholder: string;
}

const Dropdown: React.FC<DropdownProps> = (props) => {
  const { label, options, name, placeholder } = props;

  const {
    register,
    setValue,
    clearErrors,
    formState: { errors },
  } = useFormContext();

  const errMessage = errors[name]?.message;

  const optionRefs = useRef<Array<HTMLDivElement | null>>([]);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);

  const [isActive, setIsActive] = useState<boolean>(false);
  const [selected, setSelected] = useState<string>(placeholder);
  const [searchTerm, setSearchTerm] = useState<string>("");

  // Filter options based on search term
  const filteredOptions = useMemo(() => {
    return options.filter((option) =>
      option.label.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [options, searchTerm]);

  // Toggle the dropdown on click
  const toggleSelect = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsActive(!isActive);

    // Focus on search input when dropdown opens
    if (!isActive) {
      setTimeout(() => {
        searchInputRef.current?.focus();
      }, 100);
    }
  };

  // Function to select an option
  const selectOption = (optionIndex: number) => {
    const option = filteredOptions[optionIndex].value;
    setSelected(filteredOptions[optionIndex].label);
    setIsActive(false);
    setSearchTerm("");

    setValue(name, option);
    clearErrors(name);
  };

  // Blur function to close the dropdown
  const handleBlur = (e: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(e.target as Node)
    ) {
      setIsActive(false);
      setSearchTerm("");
    }
  };

  // Handle search input change
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  // Removes the dropdown if it is active, when you click elsewhere on the page
  useEffect(() => {
    document.addEventListener("mousedown", handleBlur);
    return () => {
      document.removeEventListener("mousedown", handleBlur);
    };
  }, []);

  return (
    <div className="flex flex-col mb-4">
      <label
        className="w-fit cursor-pointer text-black text-base font-[600] mb-2 uppercase"
        htmlFor=""
      >
        {label}
        <span className="text-red-400">*</span>
      </label>
      <div
        className={`cursor-pointer border-2 p-4 mxs:p-2 ${styles.dropdown} ${
          errMessage ? " border-red-400" : "border-afenoid-light-grey"
        } ${
          isActive ? "border-afenoid-dark-grey" : "border-afenoid-light-grey"
        }`}
      >
        <div
          className={styles["dropdown-btn"]}
          onClick={toggleSelect}
          id={name}
          {...register(name, {
            required: {
              value: true,
              message: `Please select a ${name} `,
            },
          })}
        >
          {selected.includes("Select") ? (
            <p className="text-afenoid-dark-grey">{selected}</p>
          ) : (
            <p className="text-black">{selected}</p>
          )}

          <SlArrowDown
            className={`transition ease-in-out delay-100 duration-200 ${
              isActive ? "rotate-180" : ""
            }`}
          />
        </div>
        {isActive && (
          <div
            className={`${styles["dropdown-content"]} relative`}
            ref={dropdownRef}
          >
            {/* Search input */}
            {options.length > 3 ? (
              <div className="flex items-center bg-white border-b p-[6px] mt-2">
                <SlMagnifier className="text-gray-400 mr-2" />
                <input
                  ref={searchInputRef}
                  type="text"
                  placeholder="Search options..."
                  className="w-full outline-none"
                  value={searchTerm}
                  onChange={handleSearchChange}
                />
              </div>
            ) : null}

            {/* Options list */}
            <div className="max-h-60 overflow-y-auto">
              {filteredOptions.length > 0 ? (
                filteredOptions.map((option, index) => (
                  <div
                    className={`${styles["dropdown-item"]} ${
                      selected === option.label ? styles.selected : ""
                    }`}
                    key={index}
                    ref={(element) => (optionRefs.current[index] = element)}
                    onClick={() => selectOption(index)}
                  >
                    {option.label}
                  </div>
                ))
              ) : (
                <div className="p-2 text-center text-gray-500">
                  No options found
                </div>
              )}
            </div>
          </div>
        )}
      </div>
      {errMessage && typeof errMessage === "string" && (
        <div className="text-caption-reg text-red-500">
          Please select a {name}
        </div>
      )}
    </div>
  );
};

export { Dropdown };
