import React, { useContext, useState } from 'react'
import { Helmet } from 'react-helmet';
import Contextpage from '../Contextpage';
import { useNavigate } from 'react-router-dom';
import slugify from 'react-slugify';


function Searchbar() {

  const { filteredGenre, fetchSearch, setBackGenre, setGenres } = useContext(Contextpage);
  const [value, setValue] = useState("");
  const navigate = useNavigate();

  const [typingTimeout, setTypingTimeout] = useState(null);

  const handleSearch = () => {
      if (typingTimeout) {
          clearTimeout(typingTimeout);
      }

      const newTimeout = setTimeout(() => {
          onKeyUp(value);
      }, 500);

      setTypingTimeout(newTimeout);
  };

  const onKeyUp = (query) => {
    if (query !== "") {
        query = query.trim();

      if (query === "") {
        navigate("/");
      } else {
        navigate(`/search/${slugify(query)}`)
      }
    }
  };

  return (
    <>
    <Helmet>
        <title>Filmes</title>
    </Helmet>

    <div className="w-full bg-black h-[10rem] md:h-[12rem]">
      <div className='h-full w-full flex justify-center items-center'>
        <input
          type="search"
          name="searchpanel"
          id="searchpanel"
          placeholder='Procurar Filmes'
          className='p-3 w-full mx-10 md:w-[40rem]  rounded-lg outline-none'
          onKeyUp={(e) => handleSearch()}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </div>
      </div>
      </>
  )
}

export default Searchbar