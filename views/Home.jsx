const React = require('react');
const Layout = require('./Layout')

function Home(props) {
  return (
    <Layout title="Twitterers">
      <h1>Щебетатель</h1>
      <div className=" gap-4 d-flex justify-content-end">
  <button className="btn btn-outline-dark" type="button">Войти</button>
  <button className="btn btn-outline-dark" type="button">Зарегестрироваться</button>
</div>
    </Layout>
  );
}

module.exports = Home;
