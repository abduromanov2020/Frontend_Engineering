import { Route, Routes } from "react-router";
import Layout from "./Layout";
import Home from "./pages/Home";
import AddMovie from "./pages/movie/AddMovie";
import NowPlaying from "./pages/movie/NowPlaying";
import Popular from "./pages/movie/Popular";
import TopRated from "./pages/movie/TopRated";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/add" element={<AddMovie />} />
        <Route path="/movie/popular" element={<Popular />} />
        <Route path="/movie/now" element={<NowPlaying />} />
        <Route path="/movie/top" element={<TopRated />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Layout>
  );
}

export default App;
