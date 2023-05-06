import { ReactNode } from "react";
import ReactPopup from "react-modal";

interface PopupProps {
  children: ReactNode;
  isOpen: boolean;
  onClose: () => void;
  contentLabel?: string;
}

const PopupContentClassNames = {
  base: "bg-base opacity-0 transition-opacity rounded-lg",
  afterOpen: "opacity-100",
  beforeClose: "opacity-[0]",
};
//
const PopupOverlayClassNames = {
  base: "bg-neutral z-10 flex items-center justify-center fixed inset-0 bg-opacity-0 transition-opacity",
  afterOpen: "bg-opacity-40",
  beforeClose: "bg-opacity-[0]",
};

ReactPopup.setAppElement("body");

export const Popup = ({ children, isOpen, onClose, contentLabel }: PopupProps) => {
  return (
    <ReactPopup
      className={PopupContentClassNames}
      overlayClassName={PopupOverlayClassNames}
      isOpen={isOpen}
      shouldCloseOnEsc={true}
      shouldCloseOnOverlayClick={true}
      onRequestClose={onClose}
      closeTimeoutMS={150}
      contentLabel={contentLabel || "Модальное окно messenger"}>
      <div className="modal-box w-full">{children}</div>
    </ReactPopup>
  );
};
