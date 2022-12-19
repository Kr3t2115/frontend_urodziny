import TextField from "@mui/material/TextField";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";
import { useState } from "react";

export default function AddPerson() {
  const [value, setValue] = useState(null);

  return (
    <div>
      <h4>If you want add your friends complete the form</h4>

      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <MobileDatePicker
          label="Your friend's date of birth"
          value={value}
          onChange={(newValue) => {
            setValue(newValue);
          }}
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>

      <br></br>

      <br></br>

      <TextField
        id="filled-basic"
        label="Write your friend`s name"
        variant="filled"
      />
    </div>
  );
}
