import React from "react";
import { Card, Typography, Box, CardContent } from "@mui/material";
import styles from "./LoginPage.module.scss";

interface SignFormProps {
  children?: JSX.Element | JSX.Element[];
  title?: string;
  onSubmit?: (e: React.FormEvent) => void;
}

export default function SignForm({ children, title, onSubmit }: SignFormProps) {
  return (
    <Box className={styles.formContainer}>
      <Card variant="outlined" className={styles.card}>
        <Typography variant="h4">{title}</Typography>

        <CardContent>
          <form onSubmit={onSubmit}>{children}</form>
        </CardContent>
      </Card>
    </Box>
  );
}
