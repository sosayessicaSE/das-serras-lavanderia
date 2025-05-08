import './styles/globals.css';

const Layout = ({ children }) => {
  return (
    <html lang="en">
      <head>
        <title>Das Serras Lavanderia</title>
        <link rel="icon" href="/images/das-serras.png" />
      </head>
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
};

export default Layout;
