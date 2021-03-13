import { useState } from "react";

function useForm(defaults) {
  const [values, setValues] = useState(defaults);

  function updateValue(event) {
    // Check if the value is a number and keep it that way
    let { value } = event.target;
    if (value.type === "number") {
      value = parseInt(value);
    }

    // Copy existing values and set the new value that changed
    setValues({
      ...values,
      [event.target.name]: value,
    });
  }

  return { values, updateValue };
}

export default useForm;
