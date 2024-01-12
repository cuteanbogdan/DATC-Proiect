import React, { useState, useEffect } from "react";
import {
  APIProvider,
  Map,
  AdvancedMarker,
  Pin,
  InfoWindow,
} from "@vis.gl/react-google-maps";
import Modal from "./ModalProblemReporter";
import ProblemReportingButton from "./ProblemReportingButton";
import Image from "react-bootstrap/Image";
import { Link } from "react-router-dom";
import markerStyles from "./MarkerStyles";
const ApiMapComponent = () => {
  const [position, setPosition] = useState({ lat: 0, lng: 0 });
  const [showModal, setShowModal] = useState(false);
  const [open, setOpen] = useState(false);
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
    <APIProvider apiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}>
      <div style={{ height: "100vh" }}>
        <Map zoom={20} center={position} mapId={"e29579724eab6d7f"}>
          <AdvancedMarker position={position} onClick={() => setOpen(true)}>
            <Pin
              background={markerStyles.Groapa.background}
              borderColor={markerStyles.Groapa.border}
              glyphColor={markerStyles.Groapa.glyph}
            />
          </AdvancedMarker>
          {open && (
            <InfoWindow position={position} onCloseClick={() => setOpen(false)}>
              <p>Groapa!</p>
            </InfoWindow>
          )}
        </Map>
        <ProblemReportingButton setShowModal={setShowModal} />
        <Modal showModal={showModal} setShowModal={setShowModal}>
          <p>This is modal content!</p>
        </Modal>
        <div className="absolute top-16 right-6">
          <Link to="/profile">
            <Image src="/src/assets/profile_picture.png/300X300" rounded />
          </Link>
        </div>
      </div>
    </APIProvider>
  );
};

export default ApiMapComponent;
