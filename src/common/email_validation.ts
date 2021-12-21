import EmailInvalid from "@src/errors/EmailInvalid";
import isEmail from "validator/es/lib/isEmail";

class EmailValidation {
  public constructor(private email: string) {}

  validate() {
    if (!isEmail(this.email)) {
      throw new EmailInvalid("This is not a valid email.");
    }
  }
}

export default EmailValidation;
