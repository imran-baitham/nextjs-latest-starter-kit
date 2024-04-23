export function classNames(...classes: string[]) {
  return classes.filter((c) => typeof c === "string").join(" ");
}

export const formatClassName = (className: string): string => {
  const formattedString = className
    .replace(/-/g, " ")
    .replace(/\w\S*/g, (word) => capitalizeFirstLetter(word));

  return formattedString;
};

export const capitalizeFirstLetter = (string: string): string =>
  string.charAt(0).toUpperCase() + string.slice(1);
