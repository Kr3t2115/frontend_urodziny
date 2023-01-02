import { useState, useEffect } from "react";
import DatePicker from "react-date-picker";
import "./AddPerson.css";

export default function AddPerson() {
  const [values, setValues] = useState({
    name: "",
    date: new Date(),
  });

  useEffect(() => {
    console.log(values);
  }, [values]);

  return (
    <div className="formDiv">
      <h4>
        Jeśli chcesz dodać swojego znajomego do listy która przypomni ci o jego
        urodzinach wypełnij poniższy formularz
      </h4>

      <input
        type="text"
        onChange={(e) => {
          setValues({
            ...values,
            name: e.target.value,
          });
        }}
        value={values.name}
      ></input>

      <DatePicker
        onChange={(e) => {
          // const date = new Date(e);

          // const newDate =
          //   date.getFullYear() +
          //   "-" +
          //   (date.getMonth() + 1) +
          //   "-" +
          //   date.getDate();

          setValues({
            ...values,
            date: e,
          });
        }}
        value={values.date}
      />
    </div>
  );
}
