import React from 'react'
import Typography from '@mui/material/Typography';
import FacebookIcon from '@mui/icons-material/Facebook';
import EmailIcon from '@mui/icons-material/Email';
import YouTubeIcon from '@mui/icons-material/YouTube';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
function Socials() {
  return (
    <Typography sx={{
      textAlign: 'center',
      marginTop: "5px",
      backgroundColor: '#b5964dc8',
      color: 'black',
      fontFamily: "Oswald, sans-serif",
      textAlign: 'center',
      boxShadow: 'none',
      position: 'absolute',
      left: { md: '42%', xs: '10%' },
      top: '-5px',
      border: '1px solid #b5964dc8',
      padding: '0px 16px',
      borderBottomLeftRadius: '8px',
      borderBottomRightRadius: '8px',
      width: { xs: '80%', md: '16%' }

    }} gutterBottom variant="h5" component="div">
      <InstagramIcon />
      <EmailIcon />
      <FacebookIcon />
      <YouTubeIcon />
      <WhatsAppIcon />
      <LinkedInIcon />
    </Typography>
  )
}

export default Socials