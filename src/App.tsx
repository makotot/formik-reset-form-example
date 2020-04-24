import * as React from "react";
import { Formik } from "formik";
import { FieldFoo } from "./FieldFoo";

export default function App() {
  return (
    <div className="App">
      <Formik
        initialValues={{
          name: "",
          foo: ""
        }}
        onSubmit={values => {
          console.log(values);
        }}
      >
        {({ values, handleChange, handleSubmit, handleReset }) => (
          <form onSubmit={handleSubmit}>
            <div>
              <input
                name="name"
                value={values.name}
                onChange={handleChange}
                type="text"
              />
            </div>
            <div>
              <FieldFoo />
            </div>
            <button type="submit">submit</button>
            <button type="button" onClick={handleReset}>
              reset
            </button>
          </form>
        )}
      </Formik>
    </div>
  );
}
