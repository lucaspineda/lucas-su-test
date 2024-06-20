import { useState } from "react";

function Profile() {
  const [date, setDate] = useState("");

  const handleDate = (e) => {
    setDate(e.target.value)
  }

  return (
    <div>
      <label>Date: {date}</label>
      <input value={date} onChange={(e) => handleDate(e)} type="date"></input>
    </div>
  );
}

export default Profile;
