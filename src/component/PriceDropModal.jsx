import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import "./PriceDropModal.css"

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

export default function PriceDropModal({ data, showModal, setShowModal }) {
  console.log("modal", data);
  let navigate = useNavigate();
  const handleClose = () => {
    setShowModal(false);
  };
  return (
    <div>
      <Modal
        open={showModal}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={{ ...style, width: 400 }}>
          <h2 id="parent-modal-title">Price Drop Alert</h2>
          <p className="parent-modal-description">{data.description}</p>
          <Button
            variant="contained"
            disableElevation
            className="bookbtn"
            onClick={() => {
            localStorage.setItem("isCheapFareSelected", true)
              localStorage.setItem(
                "cheapFareSols",
                JSON.stringify(data.flightResponse)
              );
              navigate("/cataloguePage");
            }}
          >
            Explore Cheaper Fares
          </Button>
        </Box>
      </Modal>
    </div>
  );
}
