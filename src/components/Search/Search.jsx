import React from 'react';

import { ReactComponent as IconSearch } from './search_icon.svg';
import { ReactComponent as IconClose } from './close_icon.svg';

import style from './Search.module.scss';

export default function Search({ searchValue, setSearchValue }) {
  return (
    <div className={style.root}>
      <IconSearch className={style.searchIcon} />
      <input
        value={searchValue}
        onChange={(event) => setSearchValue(event.target.value)}
        className={style.input}
        type="text"
        placeholder="Find the coin"
      />
      {searchValue && <IconClose onClick={() => setSearchValue('')} className={style.closeIcon} />}
    </div>
  );
}
