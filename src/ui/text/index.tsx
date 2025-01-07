import React from "react";
import clsx from "clsx";
import { cva } from "class-variance-authority";
import { TextProps, variantMapping } from "./index.types";

const text = cva("", {
  variants: {
    variant: {
      h1: "text-h1 mmd:text-h3 mxxs:text-[1.65rem]",
      h2: "text-h2 mmd:text-h4 mxxs:text-[1.65rem]",
      h3: "text-h3 mmd:text-h5",
      h4: "text-h4 mmd:text-h6",
      h5: "text-h5 mmd:text-caption-reg",
      h6: "text-h6 mmd:text-caption-reg",
      "body-reg": "text-body-reg",
      "caption-mid": "text-caption-mid",
      "caption-reg": "text-caption-reg",
    },
    fontFamily: {
      "proxima-nova": "font-proxima-nova",
      gambetta: "font-gambetta",
      "playfair-display": "font-playfair-display",
      montserrat: "font-montserrat"
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
      regular: "font-regular",
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

const Text: React.FC<TextProps> = (props) => {
  const {
    variant = "body-reg",
    tag,
    fontFamily = "gambetta",
    color = "af-dark-green",
    fontWeight = "regular",
    align = "left",
    customClassName = "",
    children,
    ...rest
  } = props;

  //Resolved Tag
  const Tag = (tag ||
    variantMapping[variant] ||
    "p") as keyof JSX.IntrinsicElements;

  const classStyles = clsx(
    text({
      variant,
      fontFamily,
      fontWeight,
      align,
      color,
    }),
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
