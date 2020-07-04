import React, { useState } from "react";

import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { userAuth } from "../../store/modules/user";
import { Link } from "react-router-dom";

import AuthLayout from "../../layouts/auth";

import { Form, Input } from "./styles";

const schema = Yup.object().shape({
  email: Yup.string()
    .email("Insert valid email")
    .required("E-mail is required"),
  password: Yup.string().required("Password is required"),
});

function Sigin() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      await schema.isValid({ email, password });
      dispatch(userAuth({ email, password }));
    } catch (err) {}
  }

  return (
    <AuthLayout>
      <Form onSubmit={handleSubmit}>
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

        <button type="submit">Sigin</button>
        <Link to="/register">Create account </Link>
      </Form>
    </AuthLayout>
  );
}

export default Sigin;
