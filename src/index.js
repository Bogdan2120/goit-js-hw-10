import { fetchCountries } from './fetchCountries';

import './css/styles.css';

const DEBOUNCE_DELAY = 300;

fetchCountries('USA')
  .then(data => {
    console.log(data);
    // Data handling
  })
  .catch(error => {
    // Error handling
  });
