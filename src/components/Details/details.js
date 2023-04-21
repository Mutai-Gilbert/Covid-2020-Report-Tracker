import { useLocation } from 'react-router-dom';

const Details = () => {
  const location = useLocation();
  const { state } = location;
  return (
    <div className="detailscontainer">
      <h1 className="country">{state.country}</h1>
      <div className="subcontainer">
        <div className="continent">
          <p>Continent</p>
          <p>{state.continent}</p>
        </div>
        <div className="continent">
          <p>cases</p>
          <p>{state.cases.toLocaleString()}</p>
        </div>
        <div className="continent">
          <p>Cases Today</p>
          <p>{state.todayCases.toLocaleString()}</p>
        </div>
        <div className="continent">
          <p>Deaths Today</p>
          <p>{state.todayDeaths.toLocaleString()}</p>
        </div>
        <div className="continent">
          <p>Recovered</p>
          <p>{state.recovered.toLocaleString()}</p>
        </div>
        <div className="continent">
          <p>Recovered Today</p>
          <p>{state.todayRecovered.toLocaleString()}</p>
        </div>
        <div className="continent">
          <p>Active Cases</p>
          <p>{state.active.toLocaleString()}</p>
        </div>
        <div className="continent">
          <p>Critical</p>
          <p>{state.critical.toLocaleString()}</p>
        </div>
        <div className="continent">
          <p>Population</p>
          <p>{state.population.toLocaleString()}</p>
        </div>
      </div>
    </div>
  );
};

export default Details;
