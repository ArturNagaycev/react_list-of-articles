# Single Page Application with React
## Used technologies
- Typescript
- React (Router, hooks)
- Redux toolkit
- SASS prepocessor
- Material UI
- Eslint
- lodash.debouncer (delay for user input)

[Figma design](https://www.figma.com/file/h1veXmuEt84sT7PEZgF42K/Frontend_test?node-id=0%3A1&t=hHZbp95zSM9eSrXr-0)

[DEMO](https://codebridgett.netlify.app/)

## Description:
Home page contains:

1. Cards with article titles and descriptions for 100 characters. The user can click on the card to go to an article page that contains the title and full description of the selected article.

2. A field to filter by keyword. The user enters keywords into the field and the system displays all articles containing at least one of the keywords in the name or/and description.

The priority of fields: (1) names; and (2) description. The article with one match in the name is higher than the article with one match in the description.

The matched keywords are highlighted with yellow color.
