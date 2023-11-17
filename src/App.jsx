import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./sass/default.scss";

// Hooks
import { useState, useEffect, useRef } from "react";

// Axios
import axios from "axios";

// Context
import AppContext from "./AppContext";

// Layout
import RootLeyout from "./layout/RootLeyout";
import RootPlayer from "./layout/RootPlayer";
import RootCategorys from "./layout/RootCategorys";

// Pages
import Home from "./pages/Home";
import Shorts from "./pages/Shorts";
import Dramas from "./pages/Dramas";
import Filems from "./pages/Filems";
import Actor from "./pages/Actor";
import VideoPlayer from "./pages/VideoPlayer";
import Document from "./pages/Document";
import About from "./pages/About";
import Contact from "./pages/Contact";
import PageNotFound from "./pages/pageErrorFound/PageNotFound";
import PopularNow from "./pages/pageCategorys/PopularNow";
import NewMovies from "./pages/pageCategorys/NewMovies";
import AnimeMovie from "./pages/pageCategorys/AnimeMovie";

function App() {
  const [isToggle, setIsToggle] = useState(true);
  const [isLoad, setIsLoad] = useState(false);
  const [isVideoLink, setIsVideoLink] = useState("");
  const [dataList, setDataList] = useState([]);
  const [dataLength, setDataLength] = useState(0);
  const [isArrorToggle, setIsArrowToggle] = useState(false);
  const [modalSec, setModalSec] = useState(false);
  const searchvalue = useRef("");
  const [isSearchData, setIsDataSearch] = useState([]);
  const [isSearchDataId, setIsDataSearchId] = useState([]);
  const [toggleSeach, setToggleSeach] = useState(false);
  const [loadSearch, setLoadShearch] = useState(true);
  const [isUrl, setIsUrl] = useState(
    "https://kodikapi.com/search?token=7e04e50106ab3a654bef8c638ea36fa8&title="
  );
  const [inputToggle, setInputToggle] = useState(false);

  useEffect(() => {
    const inputEl = document.querySelectorAll(".inputEl");
    const btnSubmit = document.querySelector(".btn__submit");
    const inputBtn = document.querySelector(".input__btn");

    function ToggleEve() {
      setInputToggle(true);
    }

    inputEl.forEach((item) => {
      item.addEventListener("change", (e) => {
        setIsUrl(
          `https://kodikapi.com/search?token=7e04e50106ab3a654bef8c638ea36fa8&title=${e.target.value}&with_material_data=true&lgbt=false&limit=15`
        );
        setLoadShearch(false);

        e.target.value ? setToggleSeach(true) : setToggleSeach(false);
        !e.target.value
          ? (document.querySelector("body").style.overflow = "auto")
          : (document.querySelector("body").style.overflow = "hidden");
        e.target.value ? setInputToggle(true) : setInputToggle(false);
      });
    });

    // btnSubmit.addEventListener("click", ToggleEve);
    // inputBtn.addEventListener("click", ToggleEve);
  }, []);

  useEffect(() => {
    const featchData = async () => {
      try {
        setLoadShearch(false);
        const data = await axios.get(isUrl);
        setIsDataSearch(data.data.results);
        setIsDataSearchId(data.data.results);
        setLoadShearch(true);
      } catch (error) {
        console.log("Error: 404;", error);
      }
    };
    featchData();
  }, [isUrl]);

  // console.log(isSearchDataId);

  useEffect(() => {
    function handleResize() {
      if (window.screen.width <= 850) {
        setIsToggle(false);
      } else {
        setIsToggle(true);
      }
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // these are datas in API
  // console.log(loadSearch);
  // console.log(isSearchData);
  // console.log(isUrl);

  function ToggleHandel() {
    setIsArrowToggle(!isArrorToggle);
  }

  //Removed
  useEffect(() => {
    const addSound = document.querySelector("#addSound");
    const time = 10000 * (6 * 5); // 5 minut
    // const time = 5000;
    addSound.loop = false;

    const removeFun = () => {
      setTimeout(() => {
        setModalSec(false);
      }, 10 * 1000);
    };

    // setTimeout(() => {
    //   setModalSec(true);
    //   addSound.play();
    //   removeFun();
    // }, time);
  }, []);

  const routes = createBrowserRouter([
    // router obj
    {
      path: "/",
      element: <RootLeyout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "shorts",
          element: <Shorts />,
        },
        {
          path: "dramas",
          element: <Dramas />,
        },
        {
          path: "filems",
          element: <Filems />,
        },
        {
          path: "actor",
          element: <Actor />,
        },
        {
          path: "documentation",
          element: <Document />,
        },
        {
          path: "about",
          element: <About />,
        },
        {
          path: "contact",
          element: <Contact />,
        },
        // {/* Error page: 404 :(+ */}
        {
          path: "*",
          element: <PageNotFound />,
        },
        // {/* Video page: video '_' ▶ */}
        {
          path: "player",
          element: <RootPlayer />,

          children: [
            {
              path: "video/:id",
              element: <VideoPlayer />,
            },
          ],
        },
        // {/* Categorys movie page */}
        {
          path: "category-movies",
          element: <RootCategorys />,

          children: [
            {
              path: "popular-now",
              element: <PopularNow />,
            },

            {
              path: "new-movies",
              element: <NewMovies />,
            },

            {
              path: "anime",
              element: <AnimeMovie />,
            },
          ],
        },
      ],
    },
  ]);

  // categoryMovies
  // PopularNow

  return (
    <AppContext.Provider
      value={{
        dataList,
        isLoad,
        setIsLoad,
        isToggle,
        setIsToggle,
        isVideoLink,
        setIsVideoLink,
        dataLength,
        setDataLength,
        isArrorToggle,
        setIsArrowToggle,
        ToggleHandel,
        modalSec,
        setModalSec,
        searchvalue,
        setIsUrl,
        isSearchData,
        setToggleSeach,
        toggleSeach,
        loadSearch,
        inputToggle,
        setInputToggle,
        isSearchDataId,
      }}
    >
      <div className="App">
        <RouterProvider router={routes} />
      </div>
    </AppContext.Provider>
  );
}

export default App;
import "./sass/mobile.scss";
