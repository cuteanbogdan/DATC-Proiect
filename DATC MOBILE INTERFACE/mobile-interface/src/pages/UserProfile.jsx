import React from "react";
import Image from "react-bootstrap/Image";
import UserInfo from "../components/UserProfileComponents/UserInfo";
const UserProfile = () => {
  return (
    <>
      <div
        className="h-screen flex items-center justify-center"
        style={{ height: "40vh" }}
      >
        <Image src="/src/assets/profile_picture.png/300X300" rounded />
      </div>
      <UserInfo></UserInfo>
    </>
  );
};

export default UserProfile;
