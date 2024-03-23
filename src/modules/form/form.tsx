import { FormGroup, Stack, TextField, Box, FormControl, InputLabel, Select, MenuItem, Button } from '@mui/material';
import {FC, useState, useRef } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

export const Form: FC =()=> {

    const [formData, setFormData] =useState({clinic: '', foreName: '', sureName: '', birthDay: '', zipCode:'', city: '', street: '', phone: '', email: '', visit: '', message: '' })
    const captchaRef = useRef<ReCAPTCHA>(null);
    console.log('form data 1?:',formData);

    const handleChange =(e: any)=> {
        setFormData({...formData, clinic: e.target.value});
    }
  
    const handleSubmit =(e:any)=>{
        e.preventDefault();
        console.log('formData2:', formData);
        const token = captchaRef.current?.getValue();
        captchaRef.current?.reset();
        if (token !== '') {
            console.log('verification positive')
        }

    }


    return(
        <Stack>
            <h1>Formularz Rejestracyjny</h1>
            <p>Po wysłaniu formularza proszę czekać na telefonicze lub mailowe potwierdzenie wizyty.</p>
            <form onSubmit={handleSubmit}>
                <FormGroup>
                    <Box>
                        <FormControl required fullWidth>
                            <InputLabel id="demo-simple-select-label">Poradnia</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                defaultValue={''}
                                label="Wybierz poradnię"
                                onChange={handleChange}
                            >
                                <MenuItem value='Poradnia endoskopii'>Poradnia endoskopii</MenuItem>
                                <MenuItem value='Poradnia gastroenterologiczna'>Poradnia gastroenterologiczna</MenuItem>
                                <MenuItem value='Poradnia leczenia uzależnień'>Poradnia leczenia uzależnień</MenuItem>
                                <MenuItem value='Poradnia seksuologiczna'>Poradnia seksuologiczna</MenuItem>
                                <MenuItem value='Poradnia psychologiczna dla dzieci'>Poradnia psychologiczna dla dzieci</MenuItem>
                                <MenuItem value='Poradnia zdrowia psychicznego'>Poradnia zdrowia psychicznego</MenuItem>
                                <MenuItem value='inne'>Inne</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>
                    <Box sx={{display: 'flex', justifyContent: 'space-between', marginTop: 2}}>
                        <TextField required label='Imię' type='text' sx={{width: 250}} helperText='Imię' onChange={(e)=>setFormData({...formData, foreName: e.target.value})}/>
                        <TextField required label='Nazwisko' sx={{width: 400}} helperText='Nazwisko' onChange={(e)=>setFormData({...formData, sureName: e.target.value})}/>
                        <TextField required type='date' helperText='Data urodzenia' onChange={(e)=>setFormData({...formData, birthDay: e.target.value})}/>
                    </Box>
                    <Box sx={{display: 'flex', justifyContent: 'space-between', marginTop: 2}}>
                        <TextField required label='Kod pocztowy' helperText='Kod pocztowy' onChange={(e)=>setFormData({...formData, zipCode: e.target.value})}/>
                        <TextField required label='Miasto' helperText='Miasto' onChange={(e)=>setFormData({...formData, city: e.target.value})}/>
                        <TextField required label='Ulica nr domu/nr mieszkania' helperText='Ulica nr domu/nr mieszkania' sx={{width: 400}} onChange={(e)=>setFormData({...formData, street: e.target.value})}/>
                    </Box>
                    <Box sx={{display: 'flex', justifyContent: 'space-between', marginTop: 2}}>
                        <TextField required label='telefon' helperText='telefon' sx={{width: 325}} onChange={(e)=>setFormData({...formData, phone: e.target.value})}/>
                        <TextField required label='email' helperText='email' sx={{width: 325}} onChange={(e)=>setFormData({...formData, email: e.target.value})}/>
                        <TextField required helperText='Preferowany termin wizyty' type='date' onChange={(e)=>setFormData({...formData, visit: e.target.value})}/>
                    </Box>
                    <Box  sx={{marginTop: 2, justifyContent: 'center'}}>
                        <TextField required placeholder="Wpisz wiadomość" helperText="Opisz cel wizyty" sx={{width: '100%'}} multiline rows={10} onChange={(e)=>setFormData({...formData, message: e.target.value})}/>
                    </Box>
                </FormGroup>
                <Box sx={{marginTop: 3, justifyContent: 'center', display: 'flex'}}>
                    <ReCAPTCHA
                        sitekey={import.meta.env.VITE_RECAPTCHA_KEY}
                        ref={captchaRef}
                    />
                </Box>
                <Button variant="outlined" color="secondary" type="submit" sx={{margin: 2}}>Wyślij</Button>
                <Box  sx={{ overflow:'hidden', height: 400 }}>
                <img height='auto' width='100%' src='/images/team.jpg' alt='team'/>
            </Box>
            </form>
        </Stack>
    )
}