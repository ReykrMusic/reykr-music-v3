# ReykrMusic.com

Website for Reykr, an electronic music producer and DJ.

<img width="1436" alt="Screenshot 2023-05-09 at 9 29 42 PM" src="https://github.com/ReykrMusic/reykr-music-v3/assets/57023164/24dd810a-7f46-4c59-a86e-e907ac1aa5c8">

## Live Link

[https://reykrmusic.com](https://reykrmusic.com)

## Tech Stack

### Front End

- [React](https://reactjs.org/)
- [Next.js](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind](https://tailwindcss.com/)
- [framer-motion](https://www.npmjs.com/package/framer-motion)
- [react-icons](https://www.npmjs.com/package/react-icons)
- [react-spotify-embed](https://www.npmjs.com/package/react-spotify-embed)
- [lucas-silbernagel-smoke-effect-react](https://www.npmjs.com/package/lucas-silbernagel-smoke-effect-react)

### Linting & Formatting

- [eslint-config-lucas-silbernagel](https://www.npmjs.com/package/eslint-config-lucas-silbernagel)

## Run Locally

### Prerequisites

In order to run this application locally, you must have node installed on your computer. To check if you already have it installed, enter `node -v` in your terminal. If you do not have node, you can install it here: https://nodejs.org/en/

### Clone the repository

Once you have confirmed that node is installed, `cd` into a folder on your computer and run the following command to clone the repository:

`git clone https://github.com/ReykrMusic/reykr-music-v3.git`

Then `cd` into the project folder and open it in your code editor. For Visual Studio Code:

`cd reykr-music-v3`
`code .`

### Install dependencies

To install all of the required dependencies, run `npm install`.

### Start up the app

To start up the app locally, run `npm run dev` in your terminal. Your terminal should indicate a `localhost` URL at which you can view the app in your browser.

## Testing

### Unit Tests

Unit tests are written with [Jest](https://jestjs.io/) and [react-testing-library](https://testing-library.com/).

Use `npm run test:unit` to run all unit tests, or use `npm test SomeFileToRun` to run a specific test file.

## Content Management

- Images are stored in the [public](https://github.com/ReykrMusic/reykr-music-v3/tree/main/public) folder.
- Text and other content can be updated in [content.ts](https://github.com/ReykrMusic/reykr-music-v3/blob/main/public/content.ts), which is also in the `public` folder.
