import { useContext, useEffect, useRef } from "react";
import { ModalContext } from "./modal";
import { ModalId } from "../../shared/enums";

function useModalAutoTrigger() {
  const { openId, forceCloseModal, forceOpenModal } = useContext(ModalContext);
  function autoTriggerModal({
    action,
    id
  }: {
    action: "open" | "close";
    id: ModalId;
  }) {
    if (action === "open") {
      forceOpenModal?.(id);
    } else if (action === "close") {
      if (id === openId) {
        forceCloseModal?.(id);
      }
    } else {
      throw new Error("Invalid Modal Trigger Action");
    }
  }

  return { autoTriggerModal };
}
function useActiveModal() {
  const { openId, toggleActive } = useContext(ModalContext);
  function setModalActive(id: ModalId) {
    if (id !== openId) return;
    toggleActive?.();
  }

  function setModalInActive(id: ModalId) {
    if (id !== openId) return;
    toggleActive?.();
  }
  function isModalActive(id: ModalId) {
    if (id === openId) return true;
    return false;
  }

  return { setModalActive, setModalInActive, isModalActive };
}
function useCloseModal(id: ModalId, outsideClose: boolean) {
  const { openId, close } = useContext(ModalContext);
  const ref = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    if (!outsideClose) return;

    if (id !== openId) return;
    const handleClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) close?.();
    };
    document.addEventListener("click", handleClick, true);
    return () => document.removeEventListener("click", handleClick, true);
  }, [close, id, openId, outsideClose]);

  return { ref };
}
export { useCloseModal, useActiveModal, useModalAutoTrigger };
