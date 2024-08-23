export const transformErrorToDetails = (error) => {
  const details = {};

  for (const issue of error.issues) {
    details[issue.path.join(".")] = issue.message;
  }
  return details;
};
