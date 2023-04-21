import '@testing-library/jest-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { render } from '@testing-library/react';
import Details from '../components/Details/details';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useLocation: () => ({
    state: {
      country: 'Nigeria',
      continent: 'Africa',
      cases: 266675,
      todayCases: 0,
      todayDeaths: 0,
      recovered: 259953,
      todayRecovered: 0,
      active: 3567,
      critical: 11,
      population: 216746934,
    },
  }),
}));

it('renders without crashing', () => {
  const home = render(
    <Router>
      <Details />
    </Router>,
  );
  expect(home).toMatchSnapshot();
});
