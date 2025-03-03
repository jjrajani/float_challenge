[Project Demo](https://float-challenge-eight.vercel.app/patients)

[Project Repo](https://github.com/jjrajani/float_challenge)

[Portfolio](https://jjrajani.github.io/#/home)

# Intention

**User Persona:**
I'm a pharmacist or nurse wanting to understand the progress of a specific patient so I can make better decisions about how to continue treatment.

**UI Layout:**
On the left side I've provided a "Patient Selector" where the user can select a specific patient they want to analyze. A search field is included to make it easier to find a patient.

On the right side I've built a dashboard of sorts that gives an overview of the patient, details about their last visit, historical bio data charts that include annotations for when medications were changed, and finally a full visit history section. My goal was to make it easy to find a patient and get a quick understanding of how their current medications are effecting their vitals and pain levels. I'm hoping the charts help achieve this.

**Expanded Use Cases:**
This UI could also potentially serve as a way to understand how specific medications impact the patient. We could add a filter to the top of the page to allow the user to select a medication then filter all the patient visit data to only show visits including that medication. Same could apply to duration of visit, location of visit, or even perhaps the administrating nurse. Anything that might give more insight into how the patient's environment, treatment plan, and physician impact their ability to heal.

# ChatGPT Uses

- Understand what typical pharmacist workflows are.

- Get types of drugs for PICC and PIV

- Generate date format funcs (`src/utils/date.ts`)

- After creating data structures and mocking data to get UI built, used ChatGPT to help me build a function to generate data. So I can easily have more than 2 or 3 visits for a patient. Specifically the `generateVisits` func in `src/db/Visits.ts`.

- Generate get patient age func (`src/db/Patients.ts`)

- Help pick colors for charts

- Generate `generateRandomAddress` func (`src/utils/address.ts`)

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

12 hrs

# Enhancements

- Mobile styles / responsiveness

- Would be nice to be able to filter visits in the Visit History card.

- Might be cool to add an icon to pain level indicating severity. Perhaps an icon for each range, 0-3,4-6,7-10.

- Would be cool to add annotations to the charts to show when medications where changed, to easier track patient progress.

- Update everywhere Nurse's name is rendered to be a link to the Nurse's bio page.

- Would be cool to add an upcoming visits card. Perhaps have the location be a link to google maps so the nurse can find the patient.

- Have a "Meds Changed" alert at the top of the screen, in the visit history section, in the last visit section.

- The "Meds Changed" tootlip section should display what med used to be taken and what med is now being taken.

- Improve medications interface. Ability for a patient to be taking more than one medicine, dosage amt, frequency, refill date...

- Allow pharmacist/patient admin to choose which charts to show in the Bio History section. So they can show the most relevant data for that patient's treatment plan.

---

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
