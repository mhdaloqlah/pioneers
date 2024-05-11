// import React from 'react'

import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { RiVipDiamondFill } from "react-icons/ri";
import "./NavBar.css";
import Logo from "../../../public/assets/logo.png";
import SearchIcon from '@mui/icons-material/Search';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import CloseIcon from '@mui/icons-material/Close';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { alpha, styled } from '@mui/material/styles';

import Popover from '@mui/material/Popover';
import PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state';
import Popper from '@mui/material/Popper';
import Fade from '@mui/material/Fade';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { Button } from "@mui/material";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'rgba(0,0,0,0.7)',
  border: '2px solid #000',
  boxShadow: 24,
  color: 'white',
  pt: 2,
  px: 4,
  pb: 3,
  width: '100%',
  height: '100%'
};
// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const top100Films = [
  { title: 'The Shawshank Redemption', year: 1994 },
  { title: 'The Godfather', year: 1972 },
  { title: 'The Godfather: Part II', year: 1974 },
  { title: 'The Dark Knight', year: 2008 },
  { title: '12 Angry Men', year: 1957 },
  { title: "Schindler's List", year: 1993 },
  { title: 'Pulp Fiction', year: 1994 },
  {
    title: 'The Lord of the Rings: The Return of the King',
    year: 2003,
  },
  { title: 'The Good, the Bad and the Ugly', year: 1966 },
  { title: 'Fight Club', year: 1999 },
  {
    title: 'The Lord of the Rings: The Fellowship of the Ring',
    year: 2001,
  },
  {
    title: 'Star Wars: Episode V - The Empire Strikes Back',
    year: 1980,
  },
  { title: 'Forrest Gump', year: 1994 },
  { title: 'Inception', year: 2010 },
  {
    title: 'The Lord of the Rings: The Two Towers',
    year: 2002,
  },
  { title: "One Flew Over the Cuckoo's Nest", year: 1975 },
  { title: 'Goodfellas', year: 1990 },
  { title: 'The Matrix', year: 1999 },
  { title: 'Seven Samurai', year: 1954 },
  {
    title: 'Star Wars: Episode IV - A New Hope',
    year: 1977,
  },
  { title: 'City of God', year: 2002 },
  { title: 'Se7en', year: 1995 },
  { title: 'The Silence of the Lambs', year: 1991 },
  { title: "It's a Wonderful Life", year: 1946 },
  { title: 'Life Is Beautiful', year: 1997 },
  { title: 'The Usual Suspects', year: 1995 },
  { title: 'Léon: The Professional', year: 1994 },
  { title: 'Spirited Away', year: 2001 },
  { title: 'Saving Private Ryan', year: 1998 },
  { title: 'Once Upon a Time in the West', year: 1968 },
  { title: 'American History X', year: 1998 },
  { title: 'Interstellar', year: 2014 },
  { title: 'Casablanca', year: 1942 },
  { title: 'City Lights', year: 1931 },
  { title: 'Psycho', year: 1960 },
  { title: 'The Green Mile', year: 1999 },
  { title: 'The Intouchables', year: 2011 },
  { title: 'Modern Times', year: 1936 },
  { title: 'Raiders of the Lost Ark', year: 1981 },
  { title: 'Rear Window', year: 1954 },
  { title: 'The Pianist', year: 2002 },
  { title: 'The Departed', year: 2006 },
  { title: 'Terminator 2: Judgment Day', year: 1991 },
  { title: 'Back to the Future', year: 1985 },
  { title: 'Whiplash', year: 2014 },
  { title: 'Gladiator', year: 2000 },
  { title: 'Memento', year: 2000 },
  { title: 'The Prestige', year: 2006 },
  { title: 'The Lion King', year: 1994 },
  { title: 'Apocalypse Now', year: 1979 },
  { title: 'Alien', year: 1979 },
  { title: 'Sunset Boulevard', year: 1950 },
  {
    title: 'Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb',
    year: 1964,
  },
  { title: 'The Great Dictator', year: 1940 },
  { title: 'Cinema Paradiso', year: 1988 },
  { title: 'The Lives of Others', year: 2006 },
  { title: 'Grave of the Fireflies', year: 1988 },
  { title: 'Paths of Glory', year: 1957 },
  { title: 'Django Unchained', year: 2012 },
  { title: 'The Shining', year: 1980 },
  { title: 'WALL·E', year: 2008 },
  { title: 'American Beauty', year: 1999 },
  { title: 'The Dark Knight Rises', year: 2012 },
  { title: 'Princess Mononoke', year: 1997 },
  { title: 'Aliens', year: 1986 },
  { title: 'Oldboy', year: 2003 },
  { title: 'Once Upon a Time in America', year: 1984 },
  { title: 'Witness for the Prosecution', year: 1957 },
  { title: 'Das Boot', year: 1981 },
  { title: 'Citizen Kane', year: 1941 },
  { title: 'North by Northwest', year: 1959 },
  { title: 'Vertigo', year: 1958 },
  {
    title: 'Star Wars: Episode VI - Return of the Jedi',
    year: 1983,
  },
  { title: 'Reservoir Dogs', year: 1992 },
  { title: 'Braveheart', year: 1995 },
  { title: 'M', year: 1931 },
  { title: 'Requiem for a Dream', year: 2000 },
  { title: 'Amélie', year: 2001 },
  { title: 'A Clockwork Orange', year: 1971 },
  { title: 'Like Stars on Earth', year: 2007 },
  { title: 'Taxi Driver', year: 1976 },
  { title: 'Lawrence of Arabia', year: 1962 },
  { title: 'Double Indemnity', year: 1944 },
  {
    title: 'Eternal Sunshine of the Spotless Mind',
    year: 2004,
  },
  { title: 'Amadeus', year: 1984 },
  { title: 'To Kill a Mockingbird', year: 1962 },
  { title: 'Toy Story 3', year: 2010 },
  { title: 'Logan', year: 2017 },
  { title: 'Full Metal Jacket', year: 1987 },
  { title: 'Dangal', year: 2016 },
  { title: 'The Sting', year: 1973 },
  { title: '2001: A Space Odyssey', year: 1968 },
  { title: "Singin' in the Rain", year: 1952 },
  { title: 'Toy Story', year: 1995 },
  { title: 'Bicycle Thieves', year: 1948 },
  { title: 'The Kid', year: 1921 },
  { title: 'Inglourious Basterds', year: 2009 },
  { title: 'Snatch', year: 2000 },
  { title: '3 Idiots', year: 2009 },
  { title: 'Monty Python and the Holy Grail', year: 1975 },
];

const CssTextField = styled(TextField)({
  '& label.Mui-focused': {
    color: 'white',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: 'green',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: 'white',
    },
    '&:hover fieldset': {
      borderColor: 'grey',
    },
    '&.Mui-focused fieldset': {
      borderColor: 'white',
    },
  },
});




const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  const [anchorEl, setAnchorEl] = React.useState(null);
  const [openTeam, setOpenTeam] = React.useState(false);
  const [placement, setPlacement] = React.useState();

  const handleClickTeam = (newPlacement) => (event) => {
    setAnchorEl(event.currentTarget);
    setOpenTeam((prev) => !prev);
    setPlacement(newPlacement);
  };

  return (
    <nav className="app__navbar">

      <div className="app__navbar-logo">
        <a href="/pioneers"><img src={Logo} alt="app__logo" /></a>
      </div>
      <ul className="app__navbar-links">
        <li className="p__opensans">
          <a href="#superseries">100 Pioneers List</a>
        </li>
        <li className="p__opensans">
          <a href="#superseries">SuperSeries</a>
        </li>

        <li className="p__opensans">
          <a href="#gulfnews">UAE News</a>
        </li>
        <li className="p__opensans">
          <a href="#gallery">Gallery</a>
        </li>
        <li  onMouseEnter={handleClickTeam('bottom')}  onMouseLeave={handleClickTeam('bottom')} className="p__opensans">

          <a  >Team</a>
          <Popper
            // Note: The following zIndex style is specifically for documentation purposes and may not be necessary in your application.
            sx={{ zIndex: 1200 }}
            open={openTeam}
            anchorEl={anchorEl}
            placement={placement}
            transition
          
           
          >
            {({ TransitionProps }) => (
              <Fade {...TransitionProps} timeout={350}>
                <Paper>
                  <Typography sx={{
                    p: 2, 
                    backgroundColor: '#0c0c0c',
                    border: '1px solid #b5964dc8',
                    

                  }}>
                    <Stack spacing={2}>
                      <Button sx={{
                        color: '#b5964dc8',
                        fontFamily: 'Oswald, sans-serif',
                        ":hover": {
                          color: 'white'
                        }
                      }} href="team">Center Team</Button>
                      <Button sx={{
                        color: '#b5964dc8',
                        fontFamily: 'Oswald, sans-serif',
                        ":hover": {
                          color: 'white'
                        }
                      }} href="Teamadvisory">Advisory Body</Button>

                    </Stack>
                  </Typography>
                </Paper>
              </Fade>
            )}
          </Popper>

        </li>
        <li className="p__opensans">
          <a href="#faqs">FAQS</a>
        </li>


        <li className="p__opensans">
          <a href="aboutus">About us</a>
        </li>
        <li className="p__opensans">
          <a href="aboutus">Contact us</a>
        </li>

        <li className="p__opensans">
          <a href="#support" style={{ fontWeight: "Bold" }}>Support us</a>
        </li>

        <li className="p__opensans">
          <SearchIcon sx={{fontSize:'32px'}} onClick={handleOpen} />
        </li>
      </ul>

      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu
          color="#b5964d"
          fontSize={27}
          onClick={() => setToggleMenu(true)}
        />
        {toggleMenu && (
          <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
            <RiVipDiamondFill
              fontSize={27}
              className="overlay__close"
              onClick={() => setToggleMenu(false)}
            />
            <ul className="app__navbar-smallscreen_links">
              <li>
                <a href="#superseries" onClick={() => setToggleMenu(false)}>
                  100 Pioneers List
                </a>
              </li>
              <li>
                <a href="#superseries" onClick={() => setToggleMenu(false)}>
                  SuperSeries
                </a>
              </li>
              <li>
                <a href="/uaenews" onClick={() => setToggleMenu(false)}>
                  UAE News
                </a>
              </li>
              <li>
                <a href="#gallery" onClick={() => setToggleMenu(false)}>
                  Gallery
                </a>
              </li>
              <li>
              <a onClick={handleClickTeam('bottom')}>Team</a>
          <Popper
            // Note: The following zIndex style is specifically for documentation purposes and may not be necessary in your application.
            sx={{ zIndex: 1200 }}
            open={openTeam}
            anchorEl={anchorEl}
            placement={placement}
            transition
          >
            {({ TransitionProps }) => (
              <Fade {...TransitionProps} timeout={350}>
                <Paper>
                  <Typography sx={{
                    p: 2, 
                    backgroundColor: '#0c0c0c',
                    border: '1px solid #b5964dc8',
                    

                  }}>
                    <Stack spacing={2}>
                      <Button sx={{
                        color: '#b5964dc8',
                        fontFamily: 'Oswald, sans-serif',
                        ":hover": {
                          color: 'white'
                        }
                      }} onClick={() => setToggleMenu(false)} href="team">Center Team</Button>
                      <Button sx={{
                        color: '#b5964dc8',
                        fontFamily: 'Oswald, sans-serif',
                        ":hover": {
                          color: 'white'
                        }
                      }} href="Teamadvisory">Advisory Body</Button>

                    </Stack>
                  </Typography>
                </Paper>
              </Fade>
            )}
          </Popper>

                
              </li>
              <li>
                <a href="#faqs" onClick={() => setToggleMenu(false)}>
                  FAQS
                </a>
              </li>
              <li>
                <a href="aboutus" onClick={() => setToggleMenu(false)}>
                  About Us
                </a>
              </li>
              <li>
                <a href="aboutus" onClick={() => setToggleMenu(false)}>
                  Contact Us
                </a>
              </li>



              <li>
                <a style={{ fontWeight: "Bold" }} href="#support" onClick={() => setToggleMenu(false)}>
                  Support US
                </a>
              </li>
              <li>
                <a href="search" onClick={() => setToggleMenu(false)}>
                  <SearchIcon />
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box>
            <CloseIcon sx={{ color: "#b5964dc8", cursor: 'pointer', fontSize: '24px' }} onClick={handleClose} />
          </Box>
          <Box>

          </Box>
          <Typography sx={{
            borderBottom: 'solid white 1px',
            textAlign: 'center',
            fontSize: '34px',
            color: '#b5964dc8',
            fontFamily: 'Oswald, sans-serif'
          }} id="modal-modal-title" variant="h6" component="h2">
            <Autocomplete
              value="SEARCH"
              freeSolo
              id="free-solo-2-demo"
              options={top100Films.map((option) => option.title)}
              sx={{ textAlign: 'center' }}
              renderInput={(params) => (

                <CssTextField variant="standard" {...params} label="SEARCH" id="custom-css-outlined-input"
                  InputProps={{
                    ...params.InputProps,
                    type: 'search',
                    style: {
                      color: 'white',
                      textAlign: 'center',
                      fontSize: '50px',
                      fontFamily: 'Oswald, sans-serif'

                    }

                  }} />

              )}
            />
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2, color: "white" }}>

          </Typography>
          <Box>


          </Box>
        </Box>
      </Modal>
    </nav>
  );
};

export default Navbar;
