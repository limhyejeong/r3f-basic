import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import App from "./App.jsx";
import "./index.css";

import Header from "./Header";
import Home from "./Home";
import Geometry from "./Geometry";
import NotFound from "./NotFound";

function App() {

  const shoesData = [
    {
      "id": "box",
      "title": "Box",
      "description": "HTML (HyperText Markup Language) is the most basic building block of the Web. It defines the meaning and structure of web content. Other technologies besides HTML are generally used to describe a web page's appearance/presentation (CSS) or functionality/behavior (JavaScript).",
    },
    {
      "id": "sphere",
      "title": "Sphere",
      "description": "Cascading Style Sheets (CSS) is a stylesheet language used to describe the presentation of a document written in HTML or XML (including XML dialects such as SVG, MathML or XHTML). CSS describes how elements should be rendered on screen, on paper, in speech, or on other media."
    }
  ]

  let [shoes, setShoes] = useState(shoesData);


  return (
    <div className="App">
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/geometry/*" element={<Geometry shoes={shoes} />}></Route>
          <Route path="/*" element={<NotFound />}></Route>
        </Routes>
      
      </BrowserRouter>
    </div>
  );
}

export default App;
