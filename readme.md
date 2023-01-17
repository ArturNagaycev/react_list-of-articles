Single Page Application with React
Used technologies
TS
SASS
React
Eslint (for making code more consistent and avoiding bugs)
Material UI (input, icons)
Axios for data request
lodash.debouncer (wait delay for user input)
React router v6 for navigation
Redux/toolkit to storage data
MOCK-UP

DEMO-LINK

Home page contain:

Cards with article titles for 70 characters.
Cards with article description for 100 characters.
A field to filter by keyword.
The user enters keywords into the field and the system displays all articles containing at least one of the keywords in the name or/and description.

The priority of fields: (1) names; and (2) description. The article with one match in the name is higher than the article with one match in the description.

The matched keywords are highlighted with yellow color.

The user can click on card to go to an article page that contains the title and full description of the selected article.
