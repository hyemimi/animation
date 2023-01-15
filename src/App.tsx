import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./Routes/Home";
import Search from "./Routes/Search";
import Tv from "./Routes/Tv";

function App() {
  return (
    <>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Header></Header>
        <Routes>
          <Route path={"/tv"} element={<Tv />} />
          <Route path={"/search"} element={<Search />} />
          <Route path={"/movies/:movieId"} element={<Home />} />
          <Route path={"/"} element={<Home />} />
          {/* / 경로는 제일 마지막에 넣기*/}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
