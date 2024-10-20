export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <title>Login</title>
      </head>
      <body>{children}</body>
    </html>
  );
}
