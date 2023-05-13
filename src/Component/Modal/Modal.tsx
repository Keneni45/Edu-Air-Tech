import ReactDom from "react-dom";
import Registartion from "../../Page/Registartion/Registartion";
import CloseSharpIcon from "@mui/icons-material/CloseSharp";

type modalProps = {
  children: any;
  open: boolean;
  onClose: any;
};

const modalStyle: any = {
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  backgroundColor: "#FFF",
  padding: "50px",
  zIndex: 1000,
};
const overLay: any = {
  position: "fixed",
  left: "0",
  right: "0",
  top: "0",
  bottom: "0",
  backgroundColor: "rgb(0,0,0,0.7)",
};
const closeButton: any = { position: "relative", top: "-40px", left: "100%" };
export default function Modal({ children, open, onClose }: modalProps) {
  if (!open) return null;
  return ReactDom.createPortal(
    <>
      <div style={overLay} />
      <div style={modalStyle}>
        <button onClick={onClose} style={closeButton}>
          <CloseSharpIcon color="white" />
        </button>
        {children}

        <div>
          <Registartion />
        </div>
      </div>
    </>,

    document.getElementById("portal")
  );
}
