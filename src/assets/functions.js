//consult JSON file in public folder
//clearly to be replaced with a decent database implementation in the future

export const consultDB = async (route) => {
  const promise = await fetch(route);
  const messages = await promise.json();
  return messages;
};