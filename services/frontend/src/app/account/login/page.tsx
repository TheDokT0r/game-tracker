"use client";

import { Button, TextField, Typography, Link } from "@mui/material";
import { useState } from "react";
import SignForm from "@/app/account/SignForm";
import styles from "../SignForm.module.scss";

export default function Page() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    console.table({ email, password });
  };

  return (
    <div>
      <SignForm onSubmit={onSubmit} title="Login">
        <TextField
          type="email"
          label="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          type="password"
          label="Password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <Button variant="contained" type="submit">
          Login
        </Button>
      </SignForm>
      <Typography className={styles.formFooter} variant="body1">
        Don&apos;t have an account?{" "}
        <Link href="/account/register">Create one today!</Link>
      </Typography>
    </div>
  );
}
