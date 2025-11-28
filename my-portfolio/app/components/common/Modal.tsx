import React, { useEffect } from "react";
import { isMobile, isTablet } from "react-device-detect";
import Portal from "./Portal";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export default function Modal({ isOpen, onClose, children }: ModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) {
    return null;
  }

  return (
    <Portal isOpen={isOpen}>
      <div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm"
        onClick={onClose}
      >
        <div
          className={`${isMobile && !isTablet ? "w-[90%]" : "w-full"} bg-white dark:bg-gray-800 rounded-xl max-w-screen-md shadow-lg h-[80%]`}
          onClick={(e) => e.stopPropagation()} // 모달 내부 클릭은 닫히지 않도록
        >
          {children}
        </div>
      </div>
    </Portal>
  );
}
