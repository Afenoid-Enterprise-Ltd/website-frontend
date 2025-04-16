import React from "react";
import clsx from "clsx";
import { cva } from "class-variance-authority";
import { TextProps, variantMapping } from "./index.types";

const text = cva("", {
  variants: {
    variant: {
      // Remove specific sizes from variant definitions
      h1: "",
      h2: "",
      h3: "",
      h4: "",
      h5: "",
      h6: "",
      "body-reg": "",
      "caption-mid": "",
      "caption-reg": "",
    },
    fontFamily: {
      "proxima-nova": "font-proxima-nova",
      gambetta: "font-gambetta",
      "playfair-display": "font-playfair-display",
      montserrat: "font-montserrat",
      raleway: "font-raleway",
      poppins: "font-poppins",
    },
    color: {
      "af-green": "text-afenoid-green",
      "af-yellow": "text-afenoid-yellow",
      "af-lemon": "text-afenoid-lemon",
      "af-light-lemon": "text-afenoid-light-lemon",
      "af-dark-green": "text-afenoid-dark-green",
      "af-white": "text-afenoid-white",
      "floral-white": "text-floral-white",
      "af-light-grey": "text-afenoid-light-grey",
      "af-dark-grey": "text-afenoid-dark-grey",
    },
    fontWeight: {
      thin: "font-thin",
      "extra-light": "font-extra-light",
      light: "font-light",
      regular: "font-normal",
      medium: "font-medium",
      "semi-bold": "font-semi-bold",
      bold: "font-bold",
      "extra-bold": "font-extra-bold",
      black: "font-black",
    },
    align: {
      center: "text-center",
      start: "text-start",
      end: "text-end",
      left: "text-left",
      right: "text-right",
      justify: "text-justify",
    },
  },
});

// Default sizes for variants - these will be used if no responsive styles are provided
const defaultSizes = {
  h1: "text-4xl",
  h2: "text-[2.5rem]",
  h3: "text-3xl",
  h4: "text-2xl",
  h5: "text-xl",
  h6: "text-lg",
  "body-reg": "text-base",
  "caption-mid": "text-sm",
  "caption-reg": "text-xs",
};

const Text: React.FC<TextProps> = (props) => {
  const {
    variant = "body-reg",
    tag,
    fontFamily = "gambetta",
    color = "af-dark-green",
    fontWeight = "regular",
    align = "left",
    customClassName = "",
    responsiveStyles = {},
    children,
    ...rest
  } = props;

  const Tag = (tag ||
    variantMapping[variant] ||
    "p") as keyof JSX.IntrinsicElements;

  // Convert responsive styles object to Tailwind classes
  const responsiveClasses = Object.entries(responsiveStyles)
    .map(([breakpoint, styles]) => {
      if (typeof styles === 'string') {
        return `${breakpoint}:${styles}`;
      }
      return Object.entries(styles)
        .map(([property, value]) => `${breakpoint}:${property}-[${value}]`)
        .join(' ');
    })
    .join(' ');

  const classStyles = clsx(
    // Base styles from variants (excluding size)
    text({
      variant,
      fontFamily,
      fontWeight,
      align,
      color,
    }),
    // Add default size only if no responsive styles are provided
    Object.keys(responsiveStyles).length === 0 ? defaultSizes[variant] : '',
    // Add responsive styles with !important to override defaults
    responsiveClasses,
    customClassName
  );

  return (
    <Tag className={classStyles} {...rest}>
      {children}
    </Tag>
  );
};

export { Text };
export * from "./index.types";