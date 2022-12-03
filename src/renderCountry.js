export default function renderCountry({
  name,
  capital,
  population,
  flags,
  languages,
}) {
  let lang = '';
  for (const key in languages) {
    lang += `${languages[key]}, `;
  }
  return `  <div class="contry-header">
        <svg class="contry-svg" height="20" width="30">       
          <image xlink:href="${flags.svg}" height="100%"/>    
          </svg>
        <h1 class="contry-name">${name.official}</h1>
      </div>
      <ul class="contry-descriptions">
        <li class="contry-description"><b>Capital: ${capital}</b></li>
        <li class="contry-description"><b>Population: ${population}</b></li>
        <li class="contry-description"><b>Lenguages: ${lang.slice(
          0,
          -2
        )}</b></li>
      </ul>`;
}
