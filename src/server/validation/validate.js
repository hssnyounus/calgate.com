import CustomExceptionHandler from "../common/CustomeExceptionHandler";

export const validateInputs = (schemadata, paris) => {
  for (const value of Array(paris)) {
    const inputValidation = schemadata.safeParse(value);
    if (!inputValidation.success) {
      throw CustomExceptionHandler.invalidInputError("Validation failed");
    }
  }
};
