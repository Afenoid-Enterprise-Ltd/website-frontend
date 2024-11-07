
export enum BtnVariants {
  primary = 'primary',
  secondary = 'secondary',
  tertiary = "tertiary"
}

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>{
  label: string | undefined;
  variant: keyof typeof BtnVariants;
  customClassName?: string;
  buttonType?: "button" | "submit" | "reset" | undefined;
}