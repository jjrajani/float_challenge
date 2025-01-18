export const formatDateIntl = (
  date: string,
  config: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  }
) => {
  const formatter = new Intl.DateTimeFormat("en-US", config);
  const formattedDate = formatter.format(new Date(date));
  return formattedDate;
};

export const formatTime = (date: string) => {
  return new Date(date).toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });
};

export const getFormattedTimeDifference = (date1: string, date2: string) => {
  // Calculate the difference in milliseconds
  const diffInMs = Math.abs(
    new Date(date2).valueOf() - new Date(date1).valueOf()
  );

  // Convert to hours and minutes
  const hours = Math.floor(diffInMs / (1000 * 60 * 60));
  const minutes = Math.floor((diffInMs % (1000 * 60 * 60)) / (1000 * 60));

  // Format as hh:mm
  const formattedHours = hours.toString().padStart(2, "0"); // Add leading zero if needed
  const formattedMinutes = minutes.toString().padStart(2, "0"); // Add leading zero
  return `${formattedHours}h ${formattedMinutes}m`;
};
