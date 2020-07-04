import React, { useState } from "react";
import * as Yup from "yup";

import { useDispatch } from "react-redux";
import { userStore } from "../../store/modules/user";

import { Link } from "react-router-dom";
import { Form, Input } from "./styles";
import AuthLayout from "../../layouts/auth";

const schema = Yup.object().shape({
  email: Yup.string()
    .email("Insert valid email")
    .required("E-mail is required"),
  password: Yup.string().required("Password is required"),
  name: Yup.string().required("Name is required"),
});

function Sigin() {
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await schema.isValid({ name, email, password });
      dispatch(userStore({ name, email, password }));
    } catch (err) {}
  }

  return (
    <AuthLayout>
      <Form onSubmit={handleSubmit}>
        <Input
          type="name"
          placeholder="You Name"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <Input
          type="email"
          placeholder="You E-email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <Input
          name="password"
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />

        <button type="submit">Create account</button>
        <Link to="/singin">Sigin</Link>
      </Form>
    </AuthLayout>
  );
}

export default Sigin;
