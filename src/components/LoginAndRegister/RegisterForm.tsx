import * as React from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import FilledInput from '@mui/material/FilledInput';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useState } from 'react';
import { Alert, AlertColor, AlertTitle, Button } from '@mui/material';
import { ResType, registerUser, RegistrationDataType } from 'apis/userApis';

interface apiMessageType {
  type: AlertColor | '';
  message: string;
}

interface Props {
  handleRegister: (data: RegistrationDataType) => Promise<{message:string,type:"error" |"success" }>;
}

const RegisterForm: React.FC<Props> = ({ handleRegister }) => {
  const [data, setData] = useState<RegistrationDataType>({
    name: '',
    password: '',
    passwordConfirm: '',
    email: '',
  });

  const [showPassword, setshowPassword] = useState<boolean>(false);

  const [APIMessage, setAPIMessage] = useState<apiMessageType>({
    type: '',
    message: '',
  });

  const handleChange =
    (prop: keyof RegistrationDataType) =>
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setData((prev) => ({ ...prev, [prop]: event.target.value }));
    };

  const handleClickShowPassword = () => {
    setshowPassword((prev) => !prev);
  };

  const isDisabled = () => {
    return Object.values(data).some((v)=>v==="");
  };

  const handleSubmit = async () => {
    const resData = await handleRegister(data);
    setAPIMessage(resData);
  };

  return (
    <>
      {APIMessage.message && (
        <Box sx={{ marginBottom: '20px', width: '100%' }}>
          <Alert
            variant="filled"
            severity={APIMessage.type as AlertColor}
            sx={{
              // fontWeight: 600,
              padding: '5px',
              display: 'flex',
              alignItems: 'center',
              maxWidth:'300px',
              '& .MuiAlert-message': {
                padding: '5px',
              },
              '& .MuiTypography-root': {
                marginBottom: 0,
                padding: '0px',
                marginTop: 0,
              },
            }}
          >
            <AlertTitle sx={{ fontSize: '0.8rem' }}>
              {APIMessage.message}
            </AlertTitle>
          </Alert>
        </Box>
      )}

      <Box sx={{ fontSize: '1.5rem', marginBottom: '20px' }}>Sign Up</Box>
      <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
        <InputLabel htmlFor="outlined-adornment-password">name</InputLabel>
        <OutlinedInput
          id="outlined-adornment-name"
          value={data.name}
          onChange={handleChange('name')}
          label="name"
        />
      </FormControl>
      <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
        <InputLabel htmlFor="outlined-adornment-password">Email</InputLabel>
        <OutlinedInput
          id="outlined-adornment-name"
          value={data.email}
          onChange={handleChange('email')}
          label="email"
        />
      </FormControl>

      <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
        <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
        <OutlinedInput
          id="outlined-adornment-password"
          type={showPassword ? 'text' : 'password'}
          value={data.password}
          onChange={handleChange('password')}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                edge="end"
                // sx={{ color: "#fff" }}
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
          label="Password"
        />
      </FormControl>

      <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
        <InputLabel htmlFor="outlined-adornment-password">
          Confirm Password
        </InputLabel>
        <OutlinedInput
          id="outlined-adornment-passwordConfirm"
          type={showPassword ? 'text' : 'password'}
          value={data.passwordConfirm}
          onChange={handleChange('passwordConfirm')}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                edge="end"
                // sx={{ color: "#fff" }}
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
          label="PasswordConfirm"
        />
      </FormControl>
      <Button
        variant="contained"
        sx={{
          backgroundColor: (theme) => theme.palette.primary.main,
          color: '#aaa',
          textTransform: 'initial',
          margin: '15px 0px 30px 0px',
        }}
        disabled={isDisabled()}
        onClick={handleSubmit}
      >
        Create Account
      </Button>
    </>
  );
};

export default RegisterForm;
