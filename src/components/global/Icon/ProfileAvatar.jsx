import React from "react";
import "./Icon.css";

const getInitials = (title) => {
  const words = title.split(" ");
  const initials =
    words.length > 1 ? `${words[0][0]}${words[1][0]}` : words[0][0];
  return initials;
};

const getColorFromTitle = (title) => {
  let hash = 0;
  for (let i = 0; i < title.length; i++) {
    hash = title.charCodeAt(i) + ((hash << 5) - hash);
  }
  const color = `hsl(${hash % 360}, 70%, 30%)`;
  return color;
};

const ProfileAvatar = ({ title = "", active = false }) => {
  const initials = getInitials(title);
  const backgroundColor = getColorFromTitle(title);

  return (
    <div className="ProfileAvatar" style={{ backgroundColor: backgroundColor }}>
      {initials}
      <div className="ActiveStatus" />
    </div>
  );
};

export default ProfileAvatar;
