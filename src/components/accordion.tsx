import React, {
  createContext,
  useContext,
  useRef,
  useEffect,
  useState,
  ReactNode,
} from "react";
import { BsChevronDown } from "react-icons/bs";


// Types for context
interface AccordionContextProps {
  selected: string | null;
  setSelected: React.Dispatch<React.SetStateAction<string | null>>;
}

// Types for Accordion props
interface AccordionProps {
  children: ReactNode;
  value?: string | null;
  onChange?: (value: string | null) => void;
  [key: string]: any;
  fontType?: string;
}

// Types for AccordionItem props
interface AccordionItemProps {
  children: ReactNode;
  value: string;
  trigger: ReactNode;
  [key: string]: any;
  mainFontType?: string;
  minorFontType?: string;
}

const AccordionContext = createContext<AccordionContextProps | undefined>(undefined);

const Accordion:React.FC<AccordionProps> = ({
  children,
  value = null,
  onChange,
  ...props
}: AccordionProps) => {
  const [selected, setSelected] = useState<string | null>(value);

  useEffect(() => {
    onChange?.(selected);
  }, [selected, onChange]);

  return (
    <ul {...props}>
      <AccordionContext.Provider value={{ selected, setSelected }}>
        {children}
      </AccordionContext.Provider>
    </ul>
  );
}

export {Accordion}

const AccordionItem = ({ children, value, trigger, mainFontType, minorFontType, ...props }: AccordionItemProps) => {
  const context = useContext(AccordionContext);
  if (!context) {
    throw new Error("AccordionItem must be used within an Accordion");
  }

  const { selected, setSelected } = context;
  const open = selected === value;

  const ref = useRef<HTMLDivElement | null>(null);
  const [height, setHeight] = useState<number>(0);

  useEffect(() => {
    if (open && ref.current) {
      setHeight(ref.current.offsetHeight);
    }
  }, [open, children]); // Recalculate on open state change or children update

  return (
    <li className = {`bg-afenoid-white`} {...props}>
      <header
        role="button"
        onClick={() => setSelected(open ? null : value)}
        className={`flex justify-between items-center p-4 font-medium text-afenoid-dark-green text-2xl msm:text-xl mxs:text-lg mxxs:text-base font-${mainFontType}`}
        aria-expanded={open}
      >
        {trigger}
        <BsChevronDown
          size={20}
          className={`transition-transform ${open ? "rotate-180" : ""}`}
        />
      </header>
      <div
        className="overflow-y-hidden transition-all"
        style={{ height: open ? height : 0 }}
      >
        <div className={`pt-2 p-4 font-${minorFontType}`} ref={ref}>
          {children}
        </div>
      </div>
    </li>
  );
}

export {AccordionItem}