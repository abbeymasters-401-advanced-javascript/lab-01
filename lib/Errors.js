
class CannotCoerceError extends Error {
  constructor(expectedType, providedValue) {
    super(`cannot coerce data`);
    this.expectedType = expectedType;
    this.providedValue = providedValue;
  }
}

class ModelError extends Error {
  constructor() {
    super(`this model cannot be coerced`);
  }
}

module.exports = {
  CannotCoerceError,
  ModelError
};