export const transformEmail = (email) => {
  return email.replaceAll(".", "");
};

export const changeTitleToCapitalize = (title) => {
  return title.charAt(0).toUpperCase() + title.slice(1).toLowerCase();
};
