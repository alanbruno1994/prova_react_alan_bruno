class EmailInvalid extends Error {
  public message: string;
  public name: string;

  constructor(message: string) {
    super(message);
    this.message = message;
    this.name = "EmailInvalid";
  }
}

export default EmailInvalid;
