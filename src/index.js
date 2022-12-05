import debounce from 'lodash.debounce';
import Notiflix from 'notiflix';

import { fetchCountries } from './fetchCountries';
import renderCountry from './renderCountry';
import renderCountries from './renderCountries';

import './css/styles.css';

const DEBOUNCE_DELAY = 300;

const refs = {
  searchBox: document.querySelector('input#search-box'),
  countryList: document.querySelector('.country-list'),
  countryInfo: document.querySelector('.country-info'),
};

let items = [];

function render(params) {
  if (items.length > 10) {
    Notiflix.Notify.info(
      'Too many matches found. Please enter a more specific name.'
    );
  } else if (items.length === 1) {
    const list = items.map(renderCountry);

    cliareMarkup();
    refs.countryInfo.insertAdjacentHTML('beforeend', list.join(''));
  } else if (2 >= items.length <= 10) {
    const list = items.map(renderCountries);

    cliareMarkup();
    refs.countryList.insertAdjacentHTML('beforeend', list.join(''));
  }
}

function onSearchCantries(e) {
  const searchText = e.target.value.trim();
  if (!searchText) {
    cliareMarkup();

    return;
  }

  fetchCountries(searchText)
    .then(data => {
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

function cliareMarkup() {
  refs.countryList.innerHTML = '';
  refs.countryInfo.innerHTML = '';
}
