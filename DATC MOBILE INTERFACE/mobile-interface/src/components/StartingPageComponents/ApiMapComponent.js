import React, { useState, useEffect } from "react";
import { APIProvider, Map, AdvancedMarker } from "@vis.gl/react-google-maps";
import Modal from "./ModalProblemReporter";
import ProblemReportingButton from "./ProblemReportingButton";
const ApiMapComponent = () => {
  const [position, setPosition] = useState({ lat: 0, lng: 0 });
  const [showModal, setShowModal] = useState(false);
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setPosition({
          lat: pos.coords.latitude,
          lng: pos.coords.longitude,
        });
      },
      (err) => {
        console.error(err);
        // Handle error or set a default position if needed
      },
      { enableHighAccuracy: true }
    );
  }, []);
  return (
    <APIProvider apiKey="AIzaSyBSSvi8fiqkMRBCSYDtqRNk1k83XLQsE6E">
      <div style={{ height: "100vh" }}>
        <Map zoom={20} center={position} mapId={"e29579724eab6d7f"}>
          <AdvancedMarker position={position}></AdvancedMarker>
        </Map>
        <ProblemReportingButton setShowModal={setShowModal} />
        <Modal showModal={showModal} setShowModal={setShowModal}>
          <p>This is modal content!</p>
        </Modal>
      </div>
    </APIProvider>
  );
};

export default ApiMapComponent;
