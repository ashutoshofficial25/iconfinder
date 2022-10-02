import { useState } from "react";
import ReactModal from "react-modal";

function IconCard(props) {
  const customStyles = {
    content: {
      top: "40%",
      left: "45%",
      right: "auto",
      bottom: "auto",
      display: "flex",
      alignItems: "center",
      flexDirection: "column",
      paddingLeft: "100px",
      paddingRight: "100px",
      background: "#252424",
      color: "#fff",
    },
  };

  const [modelIsOpen, setModelIsOpen] = useState(false);

  const openModel = () => {
    setModelIsOpen(true);
    // subtitle.style.color = "#f00";
  };

  const closeModal = () => setModelIsOpen(false);

  return (
    <div className="col-sm-3">
      {props ? (
        <div
          onClick={openModel}
          className="bg-light"
          style={{ cursor: "pointer" }}
        >
          <div>
            <img src={props.url} alt="name" height="50" />
          </div>
          <p className="text-secondary">{`${props.tags[0]} ${
            props?.tags[1] ? props?.tags[1] : ""
          } `}</p>
        </div>
      ) : null}

      <ReactModal
        isOpen={modelIsOpen}
        onRequestClose={closeModal}
        onAfterClose={closeModal}
        style={customStyles}
        contentLabel="ssdfsfffff"
      >
        <div>
          <img src={props.url} alt="name" height="50" />
        </div>
        <p className="text-secondary">{`${props.tags[0]} ${
          props?.tags[1] ? props?.tags[1] : ""
        } `}</p>
      </ReactModal>
    </div>
  );
}
export default IconCard;
