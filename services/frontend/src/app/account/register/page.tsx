"use client";

import { useState } from "react";
import SignForm from "../SignForm";
import { TextField, Button, Typography, Link } from "@mui/material";
import styles from "../SignForm.module.scss";

export default function Page() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (password !== confirmPassword) return;

    const response = await fetch("http://localhost:3001/signup", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        username,
        email,
        password,
      }),
    });

    console.log(response);
  };

  return (
    <div>
      <SignForm onSubmit={onSubmit} title="Create Account">
        <TextField
          type="email"
          label="Email"
          onChange={(e) => setEmail(e.target.value)}
          sx={{ marginBottom: "1rem" }}
        />

        <TextField
          type="text"
          label="Username"
          onChange={(e) => setUsername(e.target.value)}
          sx={{ marginBottom: "1rem" }}
        />

        <TextField
          type="password"
          label="Password"
          onChange={(e) => setPassword(e.target.value)}
          sx={{ marginBottom: "1rem" }}
        />

        <TextField
          type="password"
          label="Confirm Password"
          onChange={(e) => setConfirmPassword(e.target.value)}
          sx={{ marginBottom: "1rem" }}
        />

        <Button variant="contained" type="submit">
          Signup
        </Button>
      </SignForm>

      <Typography className={styles.formFooter} variant="body1">
        Already have an account? <Link href="/signup">Login!</Link>
      </Typography>
    </div>
  );
}
