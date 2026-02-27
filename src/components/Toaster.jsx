import React from "react";
import { ToastContainer, toast, Bounce } from "react-toastify";

export const successToast = (message) => {
  console.log(message);
  
  toast.success(message||"Data sent successfully");
};

export const errorToast = (message) => {
  console.log(message);
  toast.error(message || "Something went wrong");
};

export const editToast = (message) => {
  toast.success(message||"Date Updated successfully");
};

const Toaster = () => {
  return (
    <>

      <ToastContainer
        position="top-right"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
    </>
  );
};

export default Toaster;
