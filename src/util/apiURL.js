export const apiURL = () => {
  // if (window.location.hostname === 'localhost')
  if (
    //THESE ARE THE THREE OPTIONS :: development  production  test
    process.env.NODE_ENV === "development" ||
    process.env.NODE_ENV === "test"
  ) {
    return "https://op6qj.csb.app/";
  }
  return null;
};
