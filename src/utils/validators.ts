interface Constraints {
  [key: string]: {
    minLength: number
    maxLength: number
  }
}

const LENGTH_CONSTRAINTS: Constraints = {
  title: {
    minLength: 10,
    maxLength: 80
  },
  description: {
    minLength: 10,
    maxLength: 400
  },
  comment: {
    minLength: 20,
    maxLength: 400
  },
  reply: {
    minLength: 5,
    maxLength: 400
  }
}

export const getValidators = (fieldName: string) => {
  return {
    required: "This field is required",
    minLength: {
      value: LENGTH_CONSTRAINTS[fieldName].minLength,
      message: `Minimum of ${LENGTH_CONSTRAINTS[fieldName].minLength} characters`
    },
    maxLength: {
      value: LENGTH_CONSTRAINTS[fieldName].maxLength,
      message: `Maximum of ${LENGTH_CONSTRAINTS[fieldName].maxLength} characters`
    },
    validate: {
      minLengthTrimmed: (value: string) =>
        value.trim().length >= LENGTH_CONSTRAINTS[fieldName].minLength ||
        `Minimum of ${LENGTH_CONSTRAINTS[fieldName].minLength} characters`
    }
  }
}
