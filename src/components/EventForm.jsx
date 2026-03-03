import React, { useState } from "react";
import { successToast, errorToast } from "./Toaster";
import Header from "./Header";

const EventForm = () => {

  const [Eventname, seteventname] = useState("");
  const [location, setlocation] = useState("");
  const [category, setcategory] = useState("");
  const [description, setdescription] = useState("");
  const [imgUrl, setimgUrl] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    let imgpath = `/assets/${imgUrl}`;

    try {
      await fetch("https://task-668b3-default-rtdb.firebaseio.com/event.json", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          Eventname,
          location,
          category,
          description,
          imgUrl: imgpath,
        }),
      });

      successToast("Event Created Successfully");
      seteventname("");
      setlocation("");
      setcategory("");
      setdescription("");
      setimgUrl("");
    } catch (error) {
      errorToast(error.message);
    }
  };

  return (
    <>
      <Header />
      <div className="login-form mt-5">
        <form onSubmit={handleSubmit}>
          <h2>Event Form</h2>

          <div className="form_control">
            <label>Event Name</label>
            <input
              type="text"
              placeholder="Event Name"
              value={Eventname}
              onChange={(e) => seteventname(e.target.value)}
            />
          </div>

          <div className="form_control">
            <label>Location</label>
            <input
              type="text"
              placeholder="Enter Your location"
              value={location}
              onChange={(e) => setlocation(e.target.value)}
            />
          </div>

          <div className="form_control">
            <label>Category</label>
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
            <label>Description</label>
            <textarea
              value={description}
              placeholder="Event Description"
              onChange={(e) => setdescription(e.target.value)}
            />
          </div>

          <div className="form_control">
            <label>Image</label>
            <input
              type="file"
              onChange={(e) => setimgUrl(e.target.files?.name)}
            />
          </div>
          <button className="btn btn-success">Create Event</button>
        </form>
      </div>
    </>
  );
};


export default EventForm;
