# Goal

To create an input field that searches a public api for cat breeds and displays the result in a grid format.

# Requirements

- Create an input field that queries from a public api.
- The api should be called 2.5 seconds after the last keystroke in the input field.
- Only search if the search text is at least 2 characters.
- Prevent duplicate api calls from the last search string.
- Cancel pending API calls when new search starts.
- Take only first 12 results from API response.
- Render a grid of cards with api results that contains image, breed name, breed description (4 tiles per row).
- Add a button to remove the card from the grid.

- BONUS: Prevent repeated API calls for duplicate search strings by rendering from cached list.

# Notes

- Available time: 1 hour 15 minutes.
- Docs usage limited to Official Angular Docs, MDN, API docs. CANNOT use StackOverflow/ChatGPT/etc.
- To clone the repository to local (If prefererence is to work on local)
`git clone https://github.com/PraveenRDev/angular-sr-interview-task.git`

# API Info:

API Key: live_FHIYA147v5NABvjZ0uv9XkZtqHqrIWK9zX5zxTkIVaNmzLVGBHyLJS5VIEOJJh5O

Endpoint Example: GET https://api.thecatapi.com/v1/breeds/search?q={search}&api_key={api_key}

# Breed Search Query Examples:

air, british, persian, short, rag

