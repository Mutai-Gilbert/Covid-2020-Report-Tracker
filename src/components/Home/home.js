import PropTypes from 'prop-types';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Homepage = ({ country, cases }) => (
  <div className="">
    <div className="homeinfo">
      <div className="homeinfo1">
        <i className="arrow">
          <i>
            <FontAwesomeIcon icon={faArrowRight} />
          </i>
        </i>
        <p className="country-section-text">
          {country}
        </p>
        <p className="cases">{cases}</p>
      </div>
    </div>
  </div>
);

Homepage.propTypes = {
  country: PropTypes.string.isRequired,
  cases: PropTypes.string.isRequired,
};

export default Homepage;
