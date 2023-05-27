import ReactDom from "react-dom";
import Registartion from "../../Page/Registartion/Registartion";
import CloseSharpIcon from "@mui/icons-material/CloseSharp";
import SuccessModal from "../SuccessModal";

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
  backgroundColor: "rgb(255, 255, 198)",
  padding: "50px",
  zIndex: 1000,
};
const overLay: any = {
  position: "fixed",
  left: "0",
  right: "0",
  top: "0",
  bottom: "0",
  backgroundColor: "rgb(0,0,0,0.9)",
};
const success: any = {
  position: "fixed",
  top: "40%",
  left: "40%",
  translate: "translate(-50%, -50%)",
  backgroundColor: "red",
  padding: "50px",
  borderRadius: "10px",
  zIndex: "1000",
};
const body: any = {
  marginLeft: "70px",
  marginRight: "70px",
  marginTop: "20px",
  marginBottom: "20px",
};
const closeButton: any = { position: "relative", top: "-40px", left: "100%" };
export default function Modal({ children, open, onClose }: modalProps) {
  const portalElement = document.getElementById("portal");
  if (!open) return null;

  return ReactDom.createPortal(
    <>
      <div style={overLay} />
      <div style={modalStyle}>
        <button onClick={onClose} style={closeButton}>
          <CloseSharpIcon />
        </button>
      </div>
    </>,

    document.getElementById("portal")
  );
}
// export default function Modal({ children, open, onClose }: modalProps) {
//   const portalElement = document.getElementById("portal");

//   if (portalElement) {
//     return ReactDom.createPortal(
//       <>
//         <div style={overLay} />
//         <div style={modalStyle}>
//           <button onClick={onClose} style={closeButton}>
//             <CloseSharpIcon />
//           </button>
//           {children}
//         </div>
//       </>,
//       portalElement
//     );
//   } else {
//     return null;
//   }
// }
