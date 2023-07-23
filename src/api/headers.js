
export const getHeaders = (contentType = "application/json") => {
  let reqHeaders = {
    Accept: "application/json",
    "Content-Type": contentType,
  };

  return { ...reqHeaders };
};
