import React, {
  cloneElement,
  createContext,
  useContext,
  useState
} from "react";
import { useEffect, useRef } from "react";

import { createPortal } from "react-dom";

// import { MdKeyboardReturn } from "react-icons/md";

type contextType = {
  setOpen?: (id: string) => void;
  close?: () => void;
  openId?: string;
};
const ModalContext = createContext<contextType>({});
type ModalProps = {
  children: React.ReactNode;
};
const Modal: React.FC<ModalProps> & {
  Window: typeof Window;
  Open: typeof Open;
} = ({ children }) => {
  const [openId, setOpenId] = useState("");
  const close = () => setOpenId("");
  const setOpen = (id: string) => setOpenId(id);
  // console.log(openId);

  return (
    <ModalContext.Provider value={{ openId, setOpen, close }}>
      {" "}
      {children}
    </ModalContext.Provider>
  );
};
function Open({
  children,
  id,
  additionalClassName
}: {
  additionalClassName?: string;
  children: React.ReactElement;
  id: string;
}) {
  const { setOpen } = useContext(ModalContext);

  const additionalProps = {
    onClick: () => {
      setOpen?.(id);
    }
  };
  return (
    <RenderComponentWithProps
      props={additionalProps}
      additionalClassName={additionalClassName}
    >
      {children}
    </RenderComponentWithProps>
  );
}
function Window({
  children,
  id,
  isChildren = false /*is it a child of its parent or body*/,
  additionalClass
}: {
  children: React.ReactElement;
  id: string;
  isChildren?: boolean;
  additionalClass: string;
}) {
  const { openId, close } = useContext(ModalContext);
  const { ref } = useCloseModal(close);

  if (id !== openId) return null;

  if (isChildren) {
    return (
      <div className={additionalClass} ref={ref}>
        <>{cloneElement(children, { onCloseModal: close })}</>
      </div>
    );
  }
  return createPortal(
    <div className={additionalClass} ref={ref}>
      <>{cloneElement(children, { onCloseModal: close })}</>
    </div>,
    document.body
  );
}
Modal.Window = Window;
Modal.Open = Open;

function RenderComponentWithProps({
  children,
  props,
  additionalClassName
}: {
  children: React.ReactNode;
  additionalClassName?: string;
  props: { [key: string]: unknown };
}) {
  return (
    <div {...props} className={additionalClassName}>
      {children}
    </div>
  );
}
function useCloseModal(close?: () => void) {
  const ref = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) close?.();
    };
    document.addEventListener("click", handleClick, true);
    return () => document.removeEventListener("click", handleClick, true);
  }, [close]);

  return { ref };
}

export default Modal;
