export default class Validator {
  constructor(name) {
    this.name = name;
  }

  validateUsername() {
    const startName = /^[^0-9_-]+/;
    const bodyOfName = /[-\w]+/;
    const endName = /[^0-9_-]$/;
    const checkNumber = /\d{4}/;
    return (
      startName.test(this.name)
            && bodyOfName.test(this.name)
            && endName.test(this.name)
            && !checkNumber.test(this.name));
  }
}
