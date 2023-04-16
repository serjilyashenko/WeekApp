export class DateError extends Error {
  constructor(message?: string) {
    super('Date error: ' + message);
  }
}

export class InvalidDateError extends DateError {
  constructor() {
    super('Invalid Date');
  }
}
