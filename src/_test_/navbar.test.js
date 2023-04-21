import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import store from '../redux/store';
import Navbar from '../components/Navbar/navbar';

describe('Navbar component testing', () => {
  it('renders without crashing', () => {
    const home = render(
      <BrowserRouter>
        <Provider store={store}>
          <Navbar />
        </Provider>
      </BrowserRouter>,
    );
    expect(home).toMatchSnapshot();
  });
  it('renders the heading as "Covid Report"', () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <Navbar />
        </Provider>
      </BrowserRouter>,
    );
    expect(screen.getByRole('heading')).toHaveTextContent('Covid Report');
  });
});
