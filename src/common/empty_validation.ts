import EmptyField from "@src/errors/EmptyField";

type Input = {
  name: string;
  value: any;
};

class EmptyValidation {
  public constructor(private inputs: Input[]) {}

  validate() {
    let fields: string[] = [];
    for (let i = 0; i < this.inputs.length; i++) {
      if (!this.inputs[i].value || !("" + this.inputs[i].value).trim()) {
        fields.push(this.inputs[i].name);
      }
    }
    if (fields.length > 0) {
      throw new EmptyField(
        fields.length === 1
          ? `This field ${fields[0]} is empty`
          : `These ${fields.toString()} fields are empty`
      );
    }
  }
}

export default EmptyValidation;
