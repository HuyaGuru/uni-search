# Uni Search

This project uses a simple api to show a list of universities via a country filter and the university could be clicked for more details.

## This project couldnt be hosted as the api doesnt have a https equivalent/alternative.

Despite that there could be a vercel link for this project but the university's list will never load on that site. It should be treated as teaser of the UI rather than a working prototype.

## Available Scripts

In the project directory, you can run:

### `npm start`
### `npm test`
### `npm run build`
### `npm run eject`

## Docs

### API used `http://universities.hipolabs.com/search?country=${country}`

where `country` is name of the country.
example http://universities.hipolabs.com/search?country=india

### Third Party Packages used

- redux toolkit `@reduxjs/toolkit`
- react-redux `react-redux`
- react-router `react-router-dom@6`

ps: although i've used redux but this project could be implemented without redux as well. I used redux for testing purposes and at the end just kept it in the project. Project was given by Sporty Guru.
