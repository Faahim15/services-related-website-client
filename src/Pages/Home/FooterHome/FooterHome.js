import React from 'react';
import Box from '@mui/material/Box';
// import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@material-ui/core/styles';
import footerbg from "../../../images/footer-bg.png";
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
import TwitterIcon from '@mui/icons-material/Twitter';
import Button from '@mui/material/Button';

const useStyle = makeStyles({
    footerBg:{
        background:`url(${footerbg})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
       
    },
    footerHeader:{
        fontSize:"24px",
        fontWeight: 'medium',
        color:"#01b7b7",
        
    },
    icon:{
        backgroundColor: "#01b7b7",
        margin: "0px 5px",
        color: "#fff",
        borderRadius: "50%",
        padding: "5px",
        border: "1px solid #01b7b7",
    },
    iconRight:{
        margin: "0px 5px",
        color: "#01b7b7",
        borderRadius: "50%",
        padding: "5px",
        border: "1px solid #01b7b7",
    },
    numberButton:{
        fontSize: "17px",
        padding: "12px 13px",
        background: "linear-gradient(to right, #19D3AF, #10D0E9)",
        border: "0px",
        color: "black",
        
    }
})

const FooterHome = () => {
    const classes = useStyle();

    return (
        <Box className={classes.footerBg} sx={{ padding:{xs:"20px 30px 15px 30px",sm:"120px 30px 15px 30px"}}}>
                <Grid container>
                    <Grid sx={{textAlign:"start",display:{xs:"none",md:"block"}}} xs={12} md={3}>
                        <Typography variant="subtitle1" display="block" gutterBottom>
                            Emergency Dental Care
                        </Typography>
                        <Typography variant="subtitle1" display="block" gutterBottom>
                            Check Up
                        </Typography>
                        <Typography variant="subtitle1" display="block" gutterBottom>
                            Treatment of Personal Diseased
                        </Typography>
                        <Typography variant="subtitle1" display="block" gutterBottom>
                            Tooth Extraction
                        </Typography>
                        <Typography variant="subtitle1" display="block" gutterBottom>
                            Check Up
                        </Typography>
                    </Grid>


                    <Grid sx={{textAlign:"start"}} xs={12} md={3}>
                        <Typography sx={{marginTop:{xs:"30px", md:"-52px"}}} className={classes.footerHeader} variant="subtitle1" display="block" gutterBottom>
                            Services
                        </Typography>
                        <Typography variant="subtitle1" display="block" gutterBottom>
                            Emergency Dental Care
                        </Typography>
                        <Typography variant="subtitle1" display="block" gutterBottom>
                            Check Up
                        </Typography>
                        <Typography variant="subtitle1" display="block" gutterBottom>
                            Treatment of Personal Diseased
                        </Typography>
                        <Typography variant="subtitle1" display="block" gutterBottom>
                            Tooth Extraction
                        </Typography>
                        <Typography variant="subtitle1" display="block" gutterBottom>
                            Check Up
                        </Typography>
                        <Typography variant="subtitle1" display="block" gutterBottom>
                            Check Up
                        </Typography>
                        <Typography variant="subtitle1" display="block" gutterBottom>
                            Check Up
                        </Typography>
                    </Grid>


                    <Grid sx={{textAlign:"start",display:{xs:"none",md:"block"}}} xs={12} md={3}>
                        <Typography sx={{marginTop:{xs:"30px", md:"-52px"}}} className={classes.footerHeader} variant="subtitle1" display="block" gutterBottom>
                            Oral Health
                        </Typography>
                        <Typography variant="subtitle1" display="block" gutterBottom>
                            Check Up
                        </Typography>
                        <Typography variant="subtitle1" display="block" gutterBottom>
                            Treatment of Personal Diseased
                        </Typography>
                        <Typography variant="subtitle1" display="block" gutterBottom>
                            Tooth Extraction
                        </Typography>
                        <Typography variant="subtitle1" display="block" gutterBottom>
                            Check Up
                        </Typography>
                    </Grid>

                    <Grid sx={{textAlign:"start"}} xs={12} md={3}>
                        <Typography sx={{marginTop:{xs:"30px", md:"-52px"}}} className={classes.footerHeader} variant="subtitle1" display="block" gutterBottom>
                            Our Address
                        </Typography>
                        <Typography variant="subtitle1" display="block" gutterBottom>
                         Chandanish-100, Chattogram.
                        </Typography>
                        <Box>
                            <FacebookIcon className={classes.icon}/>
                            <GoogleIcon className={classes.iconRight} />
                            <TwitterIcon className={classes.iconRight}/>
                        </Box>
                        <Typography sx={{mt:8}} variant="subtitle1" display="block" gutterBottom>
                            Call Now <br />
                            <Button className={classes.numberButton}>+8801891634315</Button>
                        </Typography>
                        
                    </Grid>
                </Grid>
                <Typography sx={{textAlign:"center", mt:12}} variant="subtitle1" display="block" gutterBottom>
                    Copyright 2022 All Rights Reserved
                </Typography>
        </Box>
    );
};

export default FooterHome;