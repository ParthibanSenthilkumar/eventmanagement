import React from "react";
import { ToastContainer, toast, Bounce } from "react-toastify";

export const successToast = (message) => {
<<<<<<< HEAD
  toast.success(message||"Data sent successfully");
=======
  toast.success(message || "Data sent successfully");
>>>>>>> d81705fac7d8b2e6f5d9468a5e96bbffaa18c077
};

export const errorToast = (message) => {
  console.log(message);
  toast.error(message || "Something went wrong");
};

export const editToast = (message) => {
  toast.success(message || "Date Updated successfully");
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

