import React from "react";
import s from "./style.module.css";
import TVShowListItem from "../TVShowListItem/TVShowListItem";

function TVShowList({ tvShowList, onClickItem }) {
  return (
    <div>
      <div className={s.title}>You'ill probably like : </div>
      <div className={s.list}>
        {tvShowList.map((tvShow) => {
          return (
            <div key={tvShow.id} className={s.tv_show_item}>
              <TVShowListItem tvShow={tvShow} onClick={onClickItem} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default TVShowList;
