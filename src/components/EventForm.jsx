import React, { useState } from "react";

const EventForm = () => {
  const [isError, seterror] = useState(null);
  const [Eventname, seteventname] = useState("");
  const [location, setlocation] = useState("");
  const [category, setcategory] = useState("");
  const [description, setdescription] = useState("");

  let handleSubmit = (e) => {
    e.preventDefault();
    fetch("https://task-668b3-default-rtdb.firebaseio.com/event.json", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        Eventname: Eventname,
        location: location,
        category: category,
        description: description,
      }),
    });
    seteventname("");
    setlocation("");
    setcategory("");
    setdescription("");
  };

  return (
    <>
      <div className="login-form mt-5">
        {isError && <p>{isError}</p>}
        <form onSubmit={handleSubmit}>
          <h2>Event From</h2>
          <div className="form_control">
            <label htmlFor="EventName">Event Name</label>
            <input
              type="text"
              placeholder="Event Name"
              value={Eventname}
              onChange={(e) => seteventname(e.target.value)}
            />
          </div>
          <div className="form_control">
            <label htmlFor="location">Location</label>
            <input
              type="text"
              placeholder="Enter Your location"
              value={location}
              onChange={(e) => setlocation(e.target.value)}
            />
          </div>
          <div className="form_control">
            <label htmlFor="category">category</label>
            <select
              value={category}
              onChange={(e) => setcategory(e.target.value)}
            >
              <option value="">Select Category</option>
              <option value="seminar">Seminar</option>
              <option value="workshop">Workshop</option>
              <option value="party">Party</option>
            </select>
          </div>
          <div className="form_control">
            <label htmlFor="description">Description</label>
            <textarea
              value={description}
              placeholder="Event Description"
              onChange={(e) => setdescription(e.target.value)}
            />
          </div>
          <button className="btn btn-success">Create Event</button>
        </form>
      </div>
    </>
  );
};

export default EventForm;
