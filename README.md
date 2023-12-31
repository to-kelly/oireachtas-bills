# Oireachtas Bills

## Getting Started

Make sure Node > 16 is installed.

Install packages with **npm install**.

## Commands

```bash

npm run dev  # Starts the development server on http://127.0.0.1:3000/

npm run test # Run unit tests

npm run test:e2e # Run playwright tests, make sure app is running locally with `npm run dev` first

npm run lint # Fix and flag lint issues

npm run prettier # Run prettier across the project

npm run preview # Builds prod dist files and serve 

npm run build # Build dist files (not tested)

```

## Notes

Used RTK query from redux for API call instead of a thunk.
Had to cut corners on API types for some things because of time (openapi-typescript-codegen didn't generate models from swagger) .
Only had time for three tests. One e2e, one react component and one redux store test.
Didn't have time to fix the playwright action in the pipeline either, sorry.
