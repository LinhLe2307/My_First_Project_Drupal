import React, {useRef} from 'react';
import emailjs from '@emailjs/browser';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
import Swal from 'sweetalert2';

const Footer = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('gmail', 'contact_form', e.target, 'JgVe0jEEd03wg5njc')
        .then((result) => {
            Swal.fire({
                icon: "success",
                title: "Email sent successfully",
                showConfirmButton: false,
                timer: 1500,
              });
            console.log(result.text);
        }, (error) => {
            Swal.fire({
                icon: "error",
                title: "An error occurred",
                showConfirmButton: false,
                timer: 1500,
              });
            console.log(error.text);
        });
        e.target.reset()
    }
    return (
    <footer>
        <Typography variant="h4" component="h2" sx={{
            fontFamily: '"Raleway", sans-serif', 
            marginTop: "2rem",
            marginBottom: "1rem"
        }}>
            Contact me
        </Typography>
        <form ref={form} onSubmit={sendEmail}>
            <Grid 
                container 
                spacing={2} 
                alignItems="center"
                justifyContent="center" 
            >
                <Grid xs={12} sm={6} item>
                    <TextField 
                        placeholder="Enter first name" 
                        label="First Name" 
                        variant="standard" 
                        id="standard-basic" 
                        fullWidth 
                        required 
                        InputProps={{ style: {
                            fontFamily: '"Raleway", sans-serif',
                            color: "black"
                        }}}
                        InputLabelProps={{ style: { 
                            fontFamily: '"Raleway", sans-serif',
                            color: "black"
                        }}}
                    />
                </Grid>
                <Grid xs={12} sm={6} item>
                    <TextField 
                        InputProps={{ style: {
                            fontFamily: '"Raleway", sans-serif',
                            color: "black"
                        }}}
                        InputLabelProps={{ style: { 
                            fontFamily: '"Raleway", sans-serif',
                            color: "black"
                        }}}
                        placeholder="Enter last name" 
                        label="Last Name" 
                        variant="standard" 
                        id="standard-basic"
                        fullWidth 
                        required />
                </Grid>
                <Grid item xs={6}>
                    <TextField 
                        InputProps={{ style: {
                            fontFamily: '"Raleway", sans-serif',
                            color: "black"
                        }}}
                        InputLabelProps={{ style: { 
                            fontFamily: '"Raleway", sans-serif',
                            color: "black"
                        }}}
                        type="email" 
                        placeholder="Enter email" 
                        label="Email" 
                        variant="standard" 
                        id="standard-basic" 
                        fullWidth 
                        required />
                </Grid>
                <Grid item xs={6}>
                    <TextField 
                        InputProps={{ style: {
                            fontFamily: '"Raleway", sans-serif',
                            color: "black"
                        }}}
                        InputLabelProps={{ style: { 
                            fontFamily: '"Raleway", sans-serif',
                            color: "black"
                        }}}
                        type="number" 
                        placeholder="Enter phone number" 
                        label="Phone" 
                        variant="standard" 
                        id="standard-basic" 
                        fullWidth 
                        />
                </Grid>
                <Grid item xs={12}>
                    <TextField 
                        InputProps={{ style: {
                            fontFamily: '"Raleway", sans-serif',
                            color: "black"
                        }}}
                        InputLabelProps={{ style: { 
                            fontFamily: '"Raleway", sans-serif',
                            color: "black"
                        }}}
                        label="Message" 
                        multiline 
                        rows={4} 
                        placeholder="Type your message here" 
                        variant="standard" 
                        id="standard-basic" 
                        fullWidth 
                        required />
                </Grid>
                <Grid 
                    item 
                    xs={4}
                    sx={{
                        marginTop: "1rem"
                    }}
                >
                    <Button 
                        type="submit" 
                        variant="contained" 
                        color="primary"
                        fullWidth
                    >Submit
                    </Button>
                </Grid>
                </Grid>
            </form>
        <p id="copyrights">
            Copyright&copy; LinhLe 2022. All the images are licensed under the
            Unplash license.
        </p>
    </footer>
    )
}

export default Footer