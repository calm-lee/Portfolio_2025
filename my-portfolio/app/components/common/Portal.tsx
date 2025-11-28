"use client";

import { ReactElement, ReactNode } from "react";
import { createPortal } from "react-dom";
import { isClient } from "@/app/utils/helpers";

interface PortalProps {
  isOpen: boolean;
  targetElement?: Element;
  children: ReactElement | ReactElement[];
}

function Portal({ isOpen, targetElement, children }: PortalProps) {
  if (!isClient || !isOpen) {
    return <></>;
  }

  return createPortal(children, targetElement || document.body);
}

export default Portal;
