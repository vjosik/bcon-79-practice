export function loadLS(key) {
  try {
    const serialisedState = localStorage.getItem(key);
    if (serialisedState === null) {
      return undefined;
    }
    return JSON.parse(serialisedState);
  } catch (error) {
    console.log(error.message);
  }
}