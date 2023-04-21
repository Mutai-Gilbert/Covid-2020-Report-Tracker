import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { NavLink } from 'react-router-dom';
import Home from '../Home/home';
import img from '../../asset/world.svg';
import { fetchApi } from '../../redux/Diseases/diseasesSlice';

const Display = () => {
  const Dispatch = useDispatch();
  const { tracker, status } = useSelector((state) => state.covidTracker);
  useEffect(() => {
    if (status === null) {
      Dispatch(fetchApi());
    }
  });
  const [search, setSearch] = useState('');
  return (
    <div className="banner">
      <div className="headerdetails">
        <img className="banner1" src={img} alt="" />
      </div>
      <div className="searchdiv">
        <h4 className="searchtitle">
          International Covid-19 Cases
        </h4>
        <input className="search" type="text" onChange={(e) => setSearch(e.target.value)} value={search} placeholder="search" />
      </div>
      <div className="home">
        {tracker.filter((searchcountry) => searchcountry.country.toLowerCase()
          .includes(search.toLowerCase())).map((virus1) => (
            <NavLink key={uuidv4()} state={virus1} to="/details">
              <Home
                key={uuidv4()}
                country={virus1.country}
                cases={virus1.cases}
              />
            </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Display;
