import React, { useEffect } from "react";
import { FiX } from "react-icons/fi";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ children, isOpen, onClose }) => {
  // Handle disabling/enabling body scrolling
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    // Clean up the class on unmount
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <section className="fixed inset-0 z-[500] transition duration-150 ease-in-out bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg w-[50%] mx-auto mt-[3rem] overflow-hidden">
        {/* Close button */}
        <div className="flex justify-end items-center px-10 py-4">
          <button
            className="w-[2.5rem] h-[2.5rem] rounded-full flex items-center justify-center bg-red-400"
            onClick={onClose}
          >
            <FiX size={25} color="white" />
          </button>
        </div>
        {/* Scrollable content */}
        <div className="px-[3rem] py-4 overflow-y-auto max-h-[calc(85vh-5rem)]">
          {children}
        </div>
      </div>
    </section>
  );
};

export { Modal };
