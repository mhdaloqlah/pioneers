import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import FacebookIcon from '@mui/icons-material/Facebook';
import EmailIcon from '@mui/icons-material/Email';
import YouTubeIcon from '@mui/icons-material/YouTube';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { Box } from '@mui/material';
const Teamcard = ({
    name,
    backgroundImage,
    brief,
    Imageheight,
    ImageWidth,
    direction,
    facebook,
    youtube,
    email
}) => {
    return (
        <Card sx={{

            backgroundColor: "#0c0c0c",
            color: '#b5964dc8',
            fontFamily: "Oswald, sans-serif",
            textAlign: 'center',
            boxShadow: 'none',
            border: '1px solid #b5964dc8',
            padding: '5% 10%',
            margin:'25px',
            boxShadow:'5px 0px 20px #b5964dc8'
        }}>
             
            <CardMedia
                component="img"
                alt="green iguana"
                height={Imageheight}
               
                image={backgroundImage}
                sx={{borderRadius:'50%',border: '2.5px solid #b5964dc8',
            width:`${ImageWidth}`,
            margin:'0 auto'
            }}

            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {name}
                </Typography>
                <Typography sx={{
                    color: '#b5964dc8',
                    fontFamily: "Oswald, sans-serif",
                    textAlign: 'center',
                    boxShadow: 'none',
                    direction:{direction}
                }} variant="body2" color="text.secondary">
                    {brief}
                </Typography>
                <Typography sx={{textAlign:'center',marginTop:"5px"}} gutterBottom variant="h5" component="div">
                    <EmailIcon/> <FacebookIcon/> <YouTubeIcon/> <WhatsAppIcon/>
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                   
                    border: 0,
                    boxShadow: "none",
                  }}
                >
                  <Button sx={{backgroundColor:'#b5964d', color:'white',fontFamily:"Oswald, sans-serif"}}>READ MORE</Button>
                </Box>
            </CardContent>
            <CardActions>
                {/* <Button size="small">READ MORE</Button> */}

            </CardActions>
        </Card>
    );
}

export default Teamcard;