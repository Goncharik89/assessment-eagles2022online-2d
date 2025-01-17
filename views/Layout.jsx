const React = require('react');

function Layout({ title, children}) {
  return (
    <html lang="en">
     <head>
     <meta charSet="UTF-8" />
     <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor" crossOrigin="anonymous" />
          <script defer src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js" integrity="sha384-pprn3073KE6tl6bjs2QrFaJGz5/SUsLqktiwsUTF55Jfv3qYSDhgCecCxMW52nD2" crossOrigin="anonymous" />
          <link rel="stylesheet" href="styles/main.css" />

      <title>{title}</title>
     </head>
     <body>
      {children}
      <hr/>
      <div className="parent">
        <div className="block">
          <h3> Чтобы отправить свой щебет, пожалуйста, зарегестрируйтесь!</h3>
          <a href="/form">
          </a>
        </div>
      </div>
     </body>
</html>
  );
}

module.exports = Layout;
