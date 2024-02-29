import React from "react";
import Button from "./components/Button";
import Cart from "./components/Cart";
import PlaceContentCenter from "./components/PlaceContentCenter";
import { IconBrandGithubFilled } from "@tabler/icons-react";
import Label from "./components/Label";
import Input from "./components/Input";
import { useState } from "react";

export default function App() {
  const [form, setForm] = useState({
    name: "",
    email: "",
  });

  function onChange(event) {
    setForm({ ...form, [event.target.name]: event.target.value });
  }

  function handleSubmit(event) {
    event.preventDefault();

    console.log(form);
  }

  return (
    <PlaceContentCenter>
      <Cart>
        <Cart.Title>Sign up for new account!</Cart.Title>
        <form onSubmit={handleSubmit}>
          <Cart.Body>
            <div className="mb-5 border rounded-lg p-4">
              <p>Name: {form.name || "---"}</p>
              <p>Email: {form.email || "---"}</p>
            </div>
            <div className="mb-6">
              <Label htmlFor="name" value="Name"></Label>
              <Input
                value={form.name}
                onChange={onChange}
                id="name"
                name="name"
              />
            </div>
            <div className="mb-6">
              <Label htmlFor="email" value="Email" />
              <Input
                value={form.email}
                onChange={onChange}
                id="email"
                name="email"
              />
            </div>
          </Cart.Body>
          <Cart.Footer>
            <Button className="bg-black" type="submit">
              <IconBrandGithubFilled />
              Register
            </Button>
          </Cart.Footer>
        </form>
      </Cart>
    </PlaceContentCenter>
  );
}
