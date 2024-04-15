import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormLabel from "@material-ui/core/FormLabel";
import RadioGroup from "@material-ui/core/RadioGroup";
import Radio from "@material-ui/core/Radio";
import InputLabel from "@material-ui/core/InputLabel";
import Tooltip from "@material-ui/core/Tooltip";

import useZustandStore from "../../zustandStore";

import citiesImport from "./cities.json";
import blacklist from "./blacklist.json";

const cities = citiesImport[0];
const lowerLimit = 1900;
const currentYear = new Date().getFullYear();

const years = Array.from(
  { length: currentYear - lowerLimit + 1 },
  (_, i) => currentYear - i
);

const useStyles = makeStyles((theme) => ({
  form: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    "& > *": {
      margin: theme.spacing(1),
    },
    color: "grey",
  },
  textField: {
    "& .MuiOutlinedInput-root": {
      borderRadius: "25px",

      "& fieldset": {
        borderColor: "#00EBF6",
        borderWidth: "3px",
      },
      "&:hover fieldset": {
        borderColor: "#7FFFD4",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#FF1493",
      },
      color: "grey",
    },
  },
  button: {
    backgroundColor: "#00EBF6",
    borderRadius: "25px",
    color: "#fff",
    padding: "10px 50px",
    "&:hover": {
      backgroundColor: "#7FFFD4",
      color: "#333",
    },
  },

  buttonTemizle: {
    backgroundColor: "#FF00A6",
    borderRadius: "25px",
    color: "#fff",
    padding: "10px 20px",
    width: "8rem",
    "&:hover": {
      backgroundColor: "#FFFFD4",
      color: "#333",
    },
  },
  select: {
    "& .MuiOutlinedInput-root": {
      borderRadius: "25px",
      "& fieldset": {
        borderColor: "#00EBF6",
        borderWidth: "3px",
      },
      "&:hover fieldset": {
        borderColor: "#7FFFD4",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#FF1493",
      },

      color: "grey",
    },

    width: "150px",
  },
  selectCity: {
    "& .MuiOutlinedInput-root": {
      borderRadius: "25px",
      "& fieldset": {
        borderColor: "#00EBF6",
        borderWidth: "3px",
      },
      "&:hover fieldset": {
        borderColor: "#7FFFD4",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#FF1493",
      },

      color: "grey",
    },

    width: "270px",
  },

  radioGroup: {
    "& .MuiOutlinedInput-root": {
      borderRadius: "25px",

      "& fieldset": {
        borderColor: "#00EBF6",
        borderWidth: "3px",
      },
      "&:hover fieldset": {
        borderColor: "#7FFFD4",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#FF1493",
      },
      color: "grey",
    },
    width: "270px",
  },
}));

const UserRegister = ({ onSubmit, onGenderChange }) => {
  const { language, setLanguage, languageData } = useZustandStore();
  const strings = languageData[language];
  //////////////to clear
  const handleClearForm = () => {
    setFormData({
      firstName: "",
      birthDay: "",
      birthMonth: "",
      birthYear: "",
      height: "",
      weight: "",
      city: "",
      gender: "",
    });

    setCity(""); // Clear city separately if needed

    setFormErrors({
      firstName: false,
      lastName: false,
      birthDay: false,
      birthMonth: false,
      birthYear: false,
      height: false,
      weight: false,
      city: false,
      gender: false,
    });
  };

  /////////////////////////
  const maxValueForBoy = 250;

  const handleBoyChange = (e) => {
    const { name, value } = e.target;

    if (Number(e.target.value) > maxValueForBoy) {
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: maxValueForBoy,
      }));
    } else {
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: value,
      }));
    }
  };
  /////////////////////////
  /////////////////////////
  const maxValueForKilo = 200;

  const handleKiloChange = (e) => {
    const { name, value } = e.target;

    if (Number(e.target.value) > maxValueForKilo) {
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: maxValueForKilo,
      }));
    } else {
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: value,
      }));
    }
  };
  /////////////////////////

  const classes = useStyles();
  const [formData, setFormData] = useState({
    firstName: "",

    birthDay: "",
    birthMonth: "",
    birthYear: "",
    height: "",
    weight: "",
    city: "",
    gender: "",
  });

  const [city, setCity] = useState("");

  const [formErrors, setFormErrors] = useState({
    firstName: false,
    lastName: false,
    birthDay: false,
    birthMonth: false,
    birthYear: false,
    height: false,
    weight: false,
    city: false,
    gender: false,
  });

  const handleRadioChange = (event) => {
    handleChange(event);
    handleGenderChange(event);
  };

  const handleChangeName = (event) => {
    // const { name, value } = event.target;
    // setFormData((prevFormData) => ({
    //   ...prevFormData,
    //   [name]: value,
    // }));

    const { name, value } = event.target;

    // Check if the value contains any blacklisted words
    // const isBlacklisted = blacklist.words.some((word) =>
    //   new RegExp(`\\b${word}\\b`, "i").test(value)
    // );

    // const isBlacklisted = blacklist.words.some((word) =>
    //   new RegExp(`\\b${word.replace(/[\W_]/g, "\\$&")}\\b`, "iu").test(value)
    // );

    // // Convert both the input value and the words in the blacklist to lowercase
    // const lowercaseValue = value.toLowerCase();
    // const lowercaseBlacklist = blacklist.words.map((word) =>
    //   word.toLowerCase()
    // );

    // // Check if the lowercase input value contains any words from the lowercase blacklist
    // const isBlacklisted = lowercaseBlacklist.some((word) =>
    //   lowercaseValue.includes(word)
    // );

    // Uppercase the input value
    const uppercaseValue = value.toUpperCase();

    // Convert both the uppercase input value and the words in the blacklist to uppercase
    const uppercaseBlacklist = blacklist.words.map((word) =>
      word.toUpperCase()
    );

    // Check if the uppercase input value contains any words from the uppercase blacklist
    const isBlacklisted = uppercaseBlacklist.some((word) =>
      uppercaseValue.includes(word)
    );

    if (isBlacklisted) {
      // If the value contains blacklisted words, don't update the state
      return;
    }

    // Otherwise, update the state
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const [gender, setGender] = useState("");

  const handleGenderChange = (event) => {
    setGender(event.target.value);
    onGenderChange(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Check for empty fields
    const errors = {};
    Object.keys(formData).forEach((key) => {
      if (!formData[key]) {
        errors[key] = true;
      }
    });
    setFormErrors(errors);
    const formFields = Object.values(formData);
    const hasEmptyFields = formFields.some((field) => field === ""); // check for empty fields
    if (hasEmptyFields) {
      alert(strings.registerPageLutfenGerekliBilgiler); // show an alert to the user
      return;
    }

    // Submit form if there are no errors
    if (Object.keys(errors).length === 0) {
      // Submit form
      console.log("Form submitted:", formData);
    }

    onSubmit(formData);
  };

  return (
    <>
      {" "}
      <form className={classes.form} onSubmit={handleSubmit}>
        <TextField
          label={
            <span style={{ color: "grey", fontSize: "12pt" }}>
              {strings.registerPageAdin}
            </span>
          }
          type="text"
          name="firstName"
          value={formData.firstName}
          // onChange={handleChange}
          onChange={(event) => {
            const value = event.target.value;
            const sanitizedValue = value.replace(/\d+/g, "").slice(0, 25);
            handleChangeName({
              target: { name: "firstName", value: sanitizedValue },
            });
          }}
          variant="outlined"
          className={classes.textField}
          error={formErrors.firstName}
          helperText={
            formErrors.firstName && strings.registerPageBuAlanZorunludur
          }
        />

        <TextField
          label={
            <span style={{ color: "grey", fontSize: "12pt" }}>
              {strings.registerPageBoyun}
            </span>
          }
          name="height"
          type="number"
          InputProps={{ inputProps: { min: 30, max: 250 } }}
          value={formData.height}
          onInput={(e) => {
            e.target.value = Math.max(0, parseInt(e.target.value))
              .toString()
              .slice(0, 3);
          }}
          onChange={handleBoyChange}
          variant="outlined"
          className={classes.textField}
          error={formErrors.height}
          helperText={formErrors.height && strings.registerPageBuAlanZorunludur}
          style={{ width: "40%" }}
        />
        <TextField
          label={
            <span style={{ color: "grey", fontSize: "12pt" }}>
              {strings.registerPageKilon}
            </span>
          }
          name="weight"
          type="number"
          InputProps={{ inputProps: { min: 1, max: 200 } }}
          value={formData.weight}
          onInput={(e) => {
            e.target.value = Math.max(0, parseInt(e.target.value))
              .toString()
              .slice(0, 3);
          }}
          onChange={handleKiloChange}
          variant="outlined"
          className={classes.textField}
          error={formErrors.weight}
          helperText={formErrors.weight && strings.registerPageBuAlanZorunludur}
          style={{ width: "40%" }}
        />

        <FormControl variant="outlined" className={classes.selectCity}>
          <InputLabel id="city-select-label">
            {
              <span style={{ color: "grey", fontSize: "12pt" }}>
                {strings.registerPageSehir}
              </span>
            }
          </InputLabel>
          <Select
            labelId="city-select-label"
            id="city-select"
            name="city"
            value={formData.city}
            onChange={handleChange}
            label={strings.registerPageSehir}
            error={formErrors.city}
            helperText={formErrors.city && strings.registerPageBuAlanZorunludur}
          >
            {Object.values(cities).map((city) => (
              <MenuItem
                key={city}
                value={Object.keys(cities).find((key) => cities[key] === city)}
              >
                {city}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControl
          variant="outlined"
          component="fieldset"
          className={classes.radioGroup}
          style={{ display: "flex", alignItems: "center", color: "grey" }}
        >
          <span
            style={{
              marginTop: "1rem",
              marginBottom: "-0.5rem",
              fontSize: "12pt",
            }}
          >
            {strings.registerPageCinsiyetin}
          </span>
          <RadioGroup
            aria-label={strings.registerPageCinsiyetin}
            name="gender"
            value={formData.gender}
            onChange={handleRadioChange}
            style={{ display: "flex", flexDirection: "row" }}
          >
            <FormControlLabel
              value="1"
              control={<Radio />}
              label={strings.registerPageErkek}
            />
            <FormControlLabel
              value="2"
              control={<Radio />}
              label={strings.registerPageKiz}
            />
          </RadioGroup>
        </FormControl>

        <span
          style={{
            marginTop: "1rem",
            marginBottom: "-0.5rem",
            fontSize: "12pt",
          }}
        >
          {strings.registerPageDogumTarihin}
        </span>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <Tooltip title={strings.registerPageDogumTarihin}>
            <FormControl variant="outlined" className={classes.select}>
              <InputLabel id="birthday-day-label">
                {" "}
                {
                  <span style={{ color: "grey", fontSize: "12pt" }}>
                    {strings.registerPageGun}
                  </span>
                }
              </InputLabel>
              <Select
                labelId="birthday-day-label"
                id="birthday-day"
                value={formData.birthDay}
                onChange={handleChange}
                label={strings.registerPageGun}
                name="birthDay"
                error={formErrors.birthDay}
                helperText={
                  formErrors.birthDay && strings.registerPageBuAlanZorunludur
                }
              >
                {[...Array(31)].map((_, i) => (
                  <MenuItem key={i + 1} value={i + 1}>
                    {i + 1}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Tooltip>
          <Tooltip title={strings.registerPageDogumTarihin}>
            <FormControl variant="outlined" className={classes.select}>
              <InputLabel id="birthday-month-label">
                {" "}
                {
                  <span style={{ color: "grey", fontSize: "12pt" }}>
                    {strings.registerPageAy}
                  </span>
                }
              </InputLabel>
              <Select
                labelId="birthday-month-label"
                id="birthday-month"
                value={formData.birthMonth}
                onChange={handleChange}
                label={strings.registerPageAy}
                name="birthMonth"
                error={formErrors.birthMonth}
                helperText={
                  formErrors.birthMonth && strings.registerPageBuAlanZorunludur
                }
              >
                {[...Array(12)].map((_, i) => (
                  <MenuItem key={i + 1} value={i + 1}>
                    {i + 1}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Tooltip>
          <Tooltip title={strings.registerPageDogumTarihin}>
            <FormControl variant="outlined" className={classes.select}>
              <InputLabel id="birth-year-label">
                {" "}
                {
                  <span style={{ color: "grey", fontSize: "12pt" }}>
                    {strings.registerPageYil}
                  </span>
                }
              </InputLabel>
              <Select
                labelId="birth-year-label"
                id="birth-year"
                name="birthYear"
                value={formData.birthYear}
                onChange={handleChange}
                label={strings.registerPageYil}
                error={formErrors.birthYear}
                helperText={
                  formErrors.birthYear && strings.registerPageBuAlanZorunludur
                }
              >
                <MenuItem value="">
                  <em>-</em>
                </MenuItem>
                {years.map((year) => (
                  <MenuItem key={year} value={year}>
                    {year}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Tooltip>
        </div>
        <Button variant="contained" type="submit" className={classes.button}>
          {strings.registerPageBaslayalim}
        </Button>
      </form>
      <Button
        variant="contained"
        onClick={handleClearForm}
        className={classes.buttonTemizle}
        style={{ textTransform: "none" }}
      >
        {strings.registerPageFormuTemizle}
      </Button>
    </>
  );
};

export default UserRegister;
