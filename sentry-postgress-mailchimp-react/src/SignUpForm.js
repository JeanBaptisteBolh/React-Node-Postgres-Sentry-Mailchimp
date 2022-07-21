import React from "react";
import { Button, TextField, Stack, Autocomplete } from "@mui/material";
import PasswordStr from "./PasswordStr";
import "./style.css";

const SignUpForm = ({
  history,
  onSubmit,
  onChange,
  errors,
  user,
  score,
  btnTxt,
  type,
  pwMask,
  onPwChange,
}) => {

  const options = [
    { title: 'apples' },
    { title: 'oranges' },
    { title: 'cherries' }
  ]

  return (
    <div className="loginBox">
      <h1>Sign Up</h1>
      {errors.message && <p style={{ color: "red" }}>{errors.message}</p>}

      <form onSubmit={onSubmit}>
        <Stack spacing={2}>
          <TextField
            name="username"
            label="user name"
            value={user.username}
            onChange={onChange}
            errorText={errors.username}
          />
          <TextField
            name="email"
            label="email"
            value={user.email}
            onChange={onChange}
            errorText={errors.email}
          />
          <TextField
            type={type}
            name="password"
            label="password"
            value={user.password}
            onChange={onPwChange}
            errorText={errors.password}
          />

          <div className="pwStrRow">
            {score >= 1 && (
              <div>
                <PasswordStr score={score} />
                <Button
                  className="pwShowHideBtn"
                  label={btnTxt}
                  onClick={pwMask}
                  style={{
                    position: "relative",
                    left: "50%",
                    transform: "translateX(-50%)",
                  }}
                />
              </div>
            )}
          </div>
          <TextField
            type={type}
            name="pwconfirm"
            label="confirm password"
            value={user.pwconfirm}
            onChange={onChange}
            errorText={errors.pwconfirm}
          />

          <Autocomplete
            multiple
            limitTags={2}
            id="multiple-limit-tags"
            options={options}
            name="tags"
            value={user.tags}
            onChange={(event, value) => {
              onChange({target: {name: "tags", value: value}})}
            }
            errorText={errors.tags}
            getOptionLabel={(option) => option.title}
            defaultValue={[options[0], options[1], options[2]]}
            isOptionEqualToValue={(option, value) => option.title === value.title}
            renderInput={(params) => (
              <TextField
                {...params}
                label="limitTags"
                placeholder="Favorites"
                name="tags"
              />
            )}
          />

          <br />
          <Button
            className="signUpSubmit"
            primary={true}
            type="submit"
            label="submit"
          >
            Submit
          </Button>
        </Stack>
      </form>
      <p>
        Aleady have an account? <br />
        <a href="/">Log in here</a>
      </p>
    </div>
  );
};

export default SignUpForm;
