import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar";
import TvShows from "./components/TvShows";
import Home from "./components/Home";
import Details2 from "./components/Details2";
import NotFound from "./components/NotFound";
import MyFooter from "./components/MyFooter";
import {Col} from "react-bootstrap"

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <div className="" style={{backgroundColor: "#141414"}}>
          <Col xs={2} md={12} lg={12} className="text-center">
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/tvShows" element={<TvShows/>} />
              <Route path="/details/:movieId" element={<Details2 />} />
              <Route path="*" element={<NotFound />} />
          </Routes>
          </Col>
        </div>
        <MyFooter/>
      </BrowserRouter>
    </>
  );
}

export default App;
