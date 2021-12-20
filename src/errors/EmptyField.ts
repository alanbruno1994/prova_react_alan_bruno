class EmptyField extends Error {
  public message: string;
  public name: string;

  constructor(message: string) {
    super(message);
    this.message = message;
    this.name = "Empty Field";
  }
}

export default EmptyField;
