import React from "react";
import HeroImage from "../../../public/assets/Hero.png";
import Hundred from "../../../public/assets/hundred.png";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import NavBar from "../../components/NavBar/NavBar";
import Link from '@mui/material/Link';
import "./Hero.css";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#0c0c0c',
  padding: theme.spacing(1),
  
  color: theme.palette.text.secondary,
  textAlign: "left",
  boxShadow: "none",
 backgroundSize:"cover"
}));


const Hero = () => {
  return (

<>

    <Grid container sx={{ flexGrow: 1, background: "#0c0c0c", height: { xs: "auto", md: "100vh" } }}>
   <Grid xs={12}><NavBar /></Grid>
      <Grid xs={12} md={6}>
       <Box className="BoxStyle">
      
  
          <img className="ImageHero" src={HeroImage} alt="sign_image" />
         
       
          
        
       </Box> 
      </Grid>
      <Grid xs={12} md={6}>
        <Item sx={{ color: "white" }}>
          <h1 className="headtext__cormorant">
            <span className="span__heading">Explore the</span> Top{" "}
            <span className="span__heading">100</span> Syrian Pioneers{" "}
            <span className="span__heading">In U</span>AE{" "}
          </h1>
        </Item>
        <Item>
          <div className="app__chef-sign">
          <Link href="#" underline="hover" sx={{ filter: 'brightness(150%)',transition: '.5s ease',
           ':hover': {
                   filter: 'brightness(100%)',
                   transition: '.5s ease'
                  }}}>
            
             <img src={Hundred} alt="sign_image" />

    </Link>
          </div>
          
        </Item>
      </Grid>

    </Grid>

</>
  );
};

export default Hero;
