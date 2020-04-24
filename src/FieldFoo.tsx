import React from "react";
import { useFormikContext } from "formik";

export const FieldFoo = () => {
  const { values, handleChange } = useFormikContext();
  return (
    <input type="text" name="foo" value={values.foo} onChange={handleChange} />
  );
};
