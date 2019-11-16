import React from "react";
import Header from "./components/Header.js";
import WelcomePage from "./components/WelcomePage";
import {Route, Link} from "react-router-dom"
import SearchForm from "./components/SearchForm";


export default function App() {
  return (
    <main>
      <Header />
      <nav>
        <Link to="/">Home</Link>
        <Link to="/characters">Characters</Link>
      </nav>

      <Route exact path="/" component={WelcomePage} />
      <Route path="/characters" component={SearchForm} />
    </main>
  );
}
