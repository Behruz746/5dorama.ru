// Compoenents
import Sliders from "../components/Sliders/Sliders";
import HeaderSlider from "../components/HeaderSlider/HeaderSlider";
import { useEffect } from "react";

function Home() {
  useEffect(() => {
    window.yaContextCb.push(() => {
      Ya.Context.AdvManager.render({
        blockId: "R-A-3835914-7",
        renderTo: "yandex_rtb_R-A-3835914-7",
      });
    });
  }, []);

  return (
    <div className="App__home w-full page">
      <HeaderSlider />
      <Sliders
        url="https://kodikapi.com/list?token=465c15438e7799bee14ea8965dc6e845&with_episodes=true&with_material_data=true&limit=18&lgbt=false&types=foreign-serial,soviet-cartoon,oreign-movie&year=2015,2016,2017,2018,2019,2021&kinopoisk_rating=7-10&imdb_rating=7-10&countries=Япония,Корея Южная,Китай,тайлант&with_episodes_data=true&with_page_links=true&has_field=kinopoisk_id&translation_type=voice&with_seasons=true&translation_id=639"
        title="Популярные сейчас"
        linkPage="/category-movies/popular-now"
      />

      <Sliders
        url="https://kodikapi.com/list?token=465c15438e7799bee14ea8965dc6e845&with_episodes=true&with_material_data=true&limit=18&lgbt=false&types=foreign-serial,oreign-movie&year=2021,2022,2023&kinopoisk_rating=5-10&imdb_rating=5-10&countries=Япония, Корея Южная, Китай&with_episodes_data=true"
        title="Новинки"
        linkPage="category-movies/new-movies"
      />
      <div className="container container--reklama">
        <div id="yandex_rtb_R-A-3835914-7"></div>
      </div>
      <Sliders
        url="https://kodikapi.com/list?token=465c15438e7799bee14ea8965dc6e845&with_episodes=true&with_material_data=true&limit=18&lgbt=false&types=foreign-movie&year=2000,2016,2017,2018,2019,2020,2021,2022,2023&kinopoisk_rating=6-10&countries=Япония, Корея Южная, Китай&with_episodes_data=true"
        title="Фильмы"
        linkPage="/movies"
      />

      <Sliders
        url="https://kodikapi.com/list?token=465c15438e7799bee14ea8965dc6e845&with_episodes=true&with_material_data=true&limit=18&lgbt=false&types=foreign-serial&year=2015,2014,2018&kinopoisk_rating=5-10&countries=Япония, Корея Южная, Китай&with_episodes_data=true"
        title="Дорамы"
        linkPage="/dramas"
      />
      <Sliders
        url="https://kodikapi.com/list?token=465c15438e7799bee14ea8965dc6e845&with_episodes=true&with_material_data=true&limit=28&lgbt=false&types=anime&year=2015,2014,2016,2017,2018, 2020,2021,2022,2023&kinopoisk_rating=7-10&countries=Япония&with_episodes_data=true"
        title="Аниме"
        linkPage="/category-movies/anime"
      />
    </div>
  );
}

export default Home;
