import { Route, Routes } from "react-router";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./components/GlobalStyle";
import Layout from "./Layout";
import Home from "./pages/Home";
import AddMovie from "./pages/movie/AddMovie";
import Detail from "./pages/movie/Detail";
import NowPlaying from "./pages/movie/NowPlaying";
import Popular from "./pages/movie/Popular";
import TopRated from "./pages/movie/TopRated";
import theme from "./utils/constants/theme";
import data from "./utils/constants/data";
import { useState } from "react";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movie/add" element={<AddMovie />} />
            <Route path="/movie/popular" element={<Popular />} />
            <Route path="/movie/now" element={<NowPlaying />} />
            <Route path="/movie/top" element={<TopRated />} />
            <Route path="/" element={<Home />} />
            <Route path="/movie/:id" element={<Detail />} />
          </Routes>
        </Layout>
      </ThemeProvider>
    </>
  );
}

export default App;
