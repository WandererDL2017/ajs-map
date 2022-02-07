export default class ErrorRepository {
  constructor(code, description) {
    this.member = new Map();
    this.code = code;
    this.description = description;
    this.member.set(code, description);
  }

  translate(code) {
    if (this.member.get(code) === undefined) {
      return 'Unknown error';
    }
    return this.member.get(code);
  }
}
