import React from "react";
import s from "./style.module.css";
import { SMALL_IMG_COVER_BASE_URL } from "../../config";

const MAX_LENGTH = 30;
function TVShowListItem({ tvShow, onClick }) {
  const onClick_ = () => {
    onClick(tvShow);
  };
  return (
    <div className={s.container} onClick={onClick_}>
      <img
        alt={tvShow.original_title}
        src={SMALL_IMG_COVER_BASE_URL + tvShow.backdrop_path}
        className={s.img}
      />
      <div className={s.title}>
        {tvShow.original_title.length > MAX_LENGTH
          ? tvShow.original_title.slice(0, MAX_LENGTH) + "..."
          : tvShow.original_title}
      </div>
    </div>
  );
}

export default TVShowListItem;
