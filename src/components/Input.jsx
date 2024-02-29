import React from "react";

export default function Input({ type = "text", ...props }) {
  return (
    <input
      {...props}
      className="transition duration-300 w-full focus:ouline-none focus:ring focus:ring-blue-200 focus:border-blue-400 border rounded-lg"
      type={type}
    />
  );
}
