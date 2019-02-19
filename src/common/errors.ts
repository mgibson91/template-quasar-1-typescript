export class Errors {
  errors: Object;

  /**
   * Create a new Errors instance.
   */
  constructor() {
    this.errors = {};
  }

  /**
   * Determine if an errors exists for the given field.
   */
  has(field: string): boolean {
    return this.errors.hasOwnProperty(field);
  }

  /**
   * Determine if we have any errors.
   */
  any(): boolean {
    return Object.keys(this.errors).length > 0;
  }

  /**
   * Retrieve the error message for a field.
   */
  get(field: string) {
    if (this.errors[field]) {
      return this.errors[field][0];
    }
  }

  /**
   * Record the new errors.
   */
  record(errors) {
    this.errors = errors;
  }

  /**
   * Clear one or all error fields.
   */
  clear(field?: string) {
    if (field) {
      delete this.errors[field];
      return;
    }

    this.errors = {};
  }
}
