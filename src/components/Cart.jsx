import React from "react";

function Cart({ children }) {
  return (
    <div className="shadow rounded-lg overflow-hidden bg-white">{children}</div>
  );
}

function Title({ children }) {
  return (
    <div className="p-4 border-b text-black">
      <h1 className="text-2x1"></h1>
      {children}
    </div>
  );
}

function Body({ children }) {
  return <div className="leading-relaxed p-4 text-black">{children}</div>;
}

function Footer({ children }) {
  return <div className="bg-slate-50 p-4">{children}</div>;
}

Cart.Title = Title;
Cart.Body = Body;
Cart.Footer = Footer;

export default Cart;
