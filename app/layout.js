import React from 'react';
import './styles/globals.css'; 

const Layout = ({ children }) => {
  return (
    <html lang="en">
      <head>
        <title>Das Serras Lavanderia</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
};

export default Layout;
