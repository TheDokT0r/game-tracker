import { Button, TextField, Typography, Link } from "@mui/material";
import { useState } from "react";
import SignForm from "./SignForm";
import styles from "./LoginPage.module.scss";

export default function LoginPage() {
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
          sx={{ widows: "50%" }}
          type="email"
          label="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          sx={{ width: "50" }}
          type="password"
          label="Password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <Button variant="contained" type="submit">
          Login
        </Button>
      </SignForm>
      <Typography className={styles.formFooter} variant="body1">
        Don't have an account? <Link href="/signup">Create one today!</Link>
      </Typography>
    </div>
  );
}
