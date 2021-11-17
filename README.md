# SingleStone Endless Front End React App

This project is a React single page showing the representation of a fictional website called Endless which does something with video games. It was created using react hooks and vanilla css and designed to be responsive to all page sizes larger than 320 pixels wide. It is getting it's "step" data from a node.js API deployed on Heroku using Google Clouds built in MYSQL databases. This app only uses the standard get request however full CRUD capability has been created in the API. The github for that API is at [`https://github.com/oitowl7/endless-api`](https://github.com/oitowl7/endless-api).

## Installation and Usage:
* Clone the existing repository
* Run `npm install`
* Run `npm start` once everything install to run locally

## Deployment
This project is deployed using Github Pages. In order to deploy changes, there are only a couple of steps.
* IMPORTANT: Be sure to put in the base level of the `package.json` the line `"homepage": "https://oitowl7.github.io/endless-hooks-practice/"`. This will ensure that the deployed page is looking in the correct place for public resources.
* Run `gh deploy`. This will create a branch called gh-pages which all content from the current branch (most likely main) will be built to. The branch will be automatically deployed. You should not need to interact with this branch for 99% of issues. The deployment automatically builds and pushes all changes.
* The deployment process generally takes around 30 - 60 seconds after which time, you can go to [`https://oitowl7.github.io/endless-hooks-practice/`](https://oitowl7.github.io/endless-hooks-practice/) and view the deployed site.