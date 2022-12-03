import debounce from 'lodash.debounce';
import Notiflix from 'notiflix';

import { fetchCountries } from './fetchCountries';
import renderCountry from './renderCountry';
import renderCountries from './renderCountries';

import './css/styles.css';

const DEBOUNCE_DELAY = 300;

refs = {
  searchBox: document.querySelector('input#search-box'),
  countryList: document.querySelector('.country-list'),
  countryInfo: document.querySelector('.country-info'),
};

let items = [];

function render(params) {
  //   console.log(items);

  if (items.length > 10) {
    console.log('Too many matches found. Please enter a more specific name.');
  } else if (items.length === 1) {
    const list = items.map(renderCountry);

    refs.countryList.innerHTML = '';
    refs.countryInfo.innerHTML = '';
    refs.countryInfo.insertAdjacentHTML('beforeend', list.join(' '));
  } else if (2 >= items.length <= 10) {
    const list = items.map(renderCountries);

    refs.countryInfo.innerHTML = '';
    refs.countryList.innerHTML = '';
    refs.countryList.insertAdjacentHTML('beforeend', list.join(' '));
  }
}

function onSearchCantries(e) {
  //console.log(e.target.value.trim());
  const searchText = e.target.value.trim();
  if (!searchText) {
    refs.countryList.innerHTML = '';
    refs.countryInfo.innerHTML = '';

    return;
  }

  fetchCountries(searchText)
    .then(data => {
      //console.log(data);
      items = data;
      render();
      // Data handling
    })
    .catch(error => {
      // Error handling
    });
}

refs.searchBox.addEventListener(
  'input',
  debounce(onSearchCantries, DEBOUNCE_DELAY)
);
