[Project Demo](https://float-challenge-nvsucam6c-jjrajanis-projects.vercel.app/patients)

[Project Repo](https://github.com/jjrajani/float_challenge)

[Portfolio](https://jjrajani.github.io/#/home)

# ChatGPT uses

- Understand what typical pharmacist workflows are.

- Get types of drugs for PICC and PIV

- Generate date format funcs (`src/utils/date.ts`)

- After creating data structures and mocking data to get UI built, used ChatGPT to help me build a function to generate data. So I can easily have more than 2 or 3 visits for a patient. Specifically the `generateVisits` func in `src/db/Visits.ts`.

- Generate get patient age func (`src/db/Patients.ts`)

- Help pick colors for charts

# Libraries

- Next.js

- React

- Typescript

- mui

- chart.js

- lodash.merge

# Redirects

Updated `next.config.js` to redirect from `/` to `/patients` to mock routing.

# Time Spent

10 hrs

# Enhancements

- Would be nice to be able to filter visits in the Visit History card.

- Might be cool to add an icon to pain level indicating severity. Perhaps an icon for each range, 0-3,4-6,7-10.

- Would be cool to add annotations to the charts to show when medications where changed, to easier track patient progress.

- Update everywhere Nurse's name is rendered to be a link to the Nurse's bio page.

- Would be cool to add an upcoming visits card. Perhaps have the location be a link to google maps so the nurse can find the patient.

  ***

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash

npm  run  dev

# or

yarn  dev

# or

pnpm  dev

# or

bun  dev

```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.

- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
