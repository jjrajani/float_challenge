export function generateRandomAddress(): string {
  // Helper functions
  const getRandomElement = (arr: string[]): string =>
    arr[Math.floor(Math.random() * arr.length)];

  const getRandomNumber = (min: number, max: number): number =>
    Math.floor(Math.random() * (max - min + 1)) + min;

  // Data
  const streetNames = [
    "Main St",
    "Highland Ave",
    "Maple St",
    "Oak St",
    "Cedar Ln",
    "Elm St",
    "Pine St",
    "Sunset Blvd",
    "Broadway",
    "Park Ave",
  ];

  const cityNames = [
    "Springfield",
    "Riverview",
    "Greenwood",
    "Fairview",
    "Madison",
    "Georgetown",
    "Clifton",
    "Franklin",
    "Salem",
    "Ashland",
  ];

  const stateAbbreviations = [
    "CA",
    "TX",
    "NY",
    "FL",
    "IL",
    "PA",
    "OH",
    "GA",
    "NC",
    "MI",
  ];

  // Generate random address components
  const streetNumber = getRandomNumber(100, 9999);
  const streetName = getRandomElement(streetNames);
  const city = getRandomElement(cityNames);
  const state = getRandomElement(stateAbbreviations);
  const zipCode = getRandomNumber(10000, 99999);

  // Combine components into an address
  return `${streetNumber} ${streetName}, ${city}, ${state} ${zipCode}`;
}
