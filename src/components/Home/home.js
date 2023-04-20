import PropTypes from 'prop-types';

const Homepage = ({ country, cases }) => (
  <div className="">
    <div className="homeinfo">
      <h3>{country}</h3>
      <h3>{cases}</h3>
    </div>
  </div>
);

Homepage.propTypes = {
  country: PropTypes.string.isRequired,
  cases: PropTypes.string.isRequired,
};

export default Homepage;
