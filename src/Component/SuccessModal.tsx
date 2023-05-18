import ReactDom from "react-dom";
const modalStyle: any = {
  position: "relative",
  zIndex: 1,
};
const overLay: any = {
  position: "fixed",
  left: "0",
  right: "0",
  top: "0",
  bottom: "0",
  backgroundColor: "rgb(0,0,0,0.7)",
};
const success: any = {
  position: "fixed",
  top: "50%",
  left: "50%",
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
type modalProps = {
  children: any;
  open: boolean;
  onClose: any;
};

export default function SuccessModal({ children, open, onClose }: modalProps) {
  if (!open) return null;
  return ReactDom.createPortal(
    <>
      <div style={overLay}>
        <div style={modalStyle}>
          <div style={success}>
            <div style={body}>{children}</div>
          </div>
        </div>
      </div>
    </>,
    document.getElementById("portal")
  );
}
