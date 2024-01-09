import React from "react";

const Contact = () => {
  return (
    <>
      <h1 className="font-bold p-4 m-4 text-3xl">Contact</h1>
      <form>
        <input
          type="text"
          className="border border-black p-2 m-2"
          placeholder="Enter Name"
        />
        <input
          type="text"
          className="border border-black p-2 m-2"
          placeholder="Enter Message"
        />
        <button className="text-white bg-green-600 rounded-lg p-2 m-2">
          Submit
        </button>
      </form>
    </>
  );
};

export default Contact;
