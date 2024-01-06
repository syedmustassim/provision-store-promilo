import { useState } from "react";
import axios from "axios";
import sha256 from "crypto-js/sha256";

import { Alert, Button, Container, FormControl, Snackbar, TextField, Typography } from "@mui/material";

const Login = () => {

    const login_url = "https://apiv2stg.promilo.com/user/oauth/token";
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [errorStatus, setErrorStatus] = useState(false);

    // hashing password function

    const hashPassword = (plainPassword) => {
        return sha256(plainPassword)
    }

    // email and password validations

    const validateEmail = (email) => {
        const emailRegex = /^\S+@\S+\.\S+$/
        return emailRegex.test(email)
    }

    const validatePassword = (password) => {
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        return passwordRegex.test(password)
    }

    // login handler function

    const submitHandler = async(e) => {
        e.preventDefault();

        // validate email and password 

        if(!validateEmail(username) || !validatePassword(password)){
            setErrorStatus(true)
            setError("Invalid email or password")
            return;
        }   

        // login handling 

        try{
            const hashedPassword = hashPassword(password)
            const response = await axios.post(login_url, `username=${username}&password=${hashedPassword}&grant_type=password`,{
                headers: {
                    Authorization: "Basic UHJvbWlsbzpxNCE1NkBaeSN4MiRHQg==",
                }
            })

            const {data} = response
            const token = data?.response?.access_token;
            console.log(token)
        }catch(error){

            console.error('Login failed',error)
            setError(error.message)
            setErrorStatus(true)
        }
    }

    // handle error alert

    const closeErrorAlert = () => {
        setErrorStatus(false)
    }

    return(
        <div>


        <Container component="main" maxWidth="xs">
            <Typography variant="h4">
                Login
            </Typography>
            <FormControl>
                <TextField 
                    variant="outlined"
                    margin="normal"
                    label="Email"
                    name="username"
                    type="email"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    error={validateEmail(username)}
                    helperText={!validateEmail(username) && username.length > 0 && "Invalid email"}
                    required
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    label="Password"
                    name="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    error={validatePassword(password)}
                    helperText={!validatePassword(password) && 'Password must be at least 8 characters long. Contain one capital letter, one small letter, one number and one special character.'}
                    required
                />
                <Button type="submit" variant="contained" colors="primary" onClick={submitHandler}>
                    Login
                </Button>
            </FormControl>
            <Snackbar open={errorStatus} autoHideDuration={3000} onClose={closeErrorAlert}>
                <Alert severity="error" >
                    {error}
                </Alert>
            </Snackbar>
        </Container>
        </div>
    )
}

export default Login;