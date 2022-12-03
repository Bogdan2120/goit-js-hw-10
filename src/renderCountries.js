export default function renderCountries({ name, flags }) {
  return `  <li class="contry-search">
  <svg class="contry-search_svg" height="20" width="30">       
    <image xlink:href="${flags.svg}" height="100%"/>    
    </svg>
  <p class="contry-search_name">${name.official}</p>
  </li>`;
}
