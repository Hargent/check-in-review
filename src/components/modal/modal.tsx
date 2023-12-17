import React, { createContext, useContext, useState } from "react";

import { ModalId } from "../../shared/enums";
import { createPortal } from "react-dom";
import { useCloseModal } from "./use-modal";

// import { MdKeyboardReturn } from "react-icons/md";

type contextType = {
  setOpen?: (id: ModalId) => void;
  close?: () => void;
  openId?: ModalId | "";
  forceOpenModal?: (id: ModalId) => void;
  forceCloseModal?: (id: ModalId) => void;

  toggleActive?: () => void;
};
export const ModalContext = createContext<contextType>({});
type ModalProps = {
  children: React.ReactNode;
};
const Modal: React.FC<ModalProps> & {
  Window: typeof Window;
  Open: typeof Open;
} = ({ children }) => {
  const [openId, setOpenId] = useState<ModalId | "">("");
  const [isActive, setIsActive] = useState<boolean>(false);
  const close = () => {
    if (isActive) return;
    setOpenId("");
  };
  const setOpen = (id: ModalId) => {
    setOpenId(id);
  };
  // (openId);
  const forceOpenModal = (id: ModalId) => setOpenId(id);
  const forceCloseModal = () => setOpenId("");
  const toggleActive = () => {
    setIsActive((state) => !state);
  };

  return (
    <ModalContext.Provider
      value={{
        openId,
        setOpen,
        close,
        forceOpenModal,
        forceCloseModal,

        toggleActive
      }}
    >
      {" "}
      {children}
    </ModalContext.Provider>
  );
};
function Open({
  children,
  id,
  additionalClassName = ""
}: {
  additionalClassName?: string;
  children: React.ReactElement;
  id: ModalId;
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
      additionalClassName={`cursor-pointer ${additionalClassName}`}
    >
      {children}
    </RenderComponentWithProps>
  );
}
function Window({
  children,
  id,
  isChildren = false /*is it a child of its parent or body*/,
  additionalClass,
  outsideClose = true,
  containerClass
}: {
  children: React.ReactElement;
  id: ModalId;
  isChildren?: boolean;
  additionalClass: string;
  containerClass?: string;
  outsideClose: boolean;
}) {
  const { openId, close } = useContext(ModalContext);
  const { ref } = useCloseModal(id, outsideClose);

  if (id !== openId) return null;

  if (isChildren) {
    return (
      <div className={`${containerClass}`}>
        <div className={additionalClass}>
          <div ref={ref}>
            {React.cloneElement(children, { onCloseModal: close })}
          </div>
        </div>
      </div>
    );
  }

  return createPortal(
    <div
      className={`overflow-auto w-full h-full fixed top-0 left-0 flex items-center justify-center  bg-opacity-90 backdrop-blur-sm  z-50`}
    >
      <div
        className={`${
          additionalClass ? additionalClass : "w-[90%] lg:w-1/2 mx-auto"
        }`}
      >
        <div ref={ref}>
          {React.cloneElement(children, { onCloseModal: close })}
        </div>
      </div>
    </div>,
    document.body
  );
}
Modal.Window = Window;
Modal.Open = Open;

function RenderComponentWithProps({
  children,
  props,
  additionalClassName = ""
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

Modal.Window = Window;
Modal.Open = Open;
export default Modal;
// ModalProvider.js;
