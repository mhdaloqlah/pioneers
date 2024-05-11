import React from "react";

import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2

import HeroCard from "../../components/HeroCard/HeroCard";
// Import additional images if necessary
import Gorkie from "../../../public/assets/Gorkie.png";
import Fawzi from "../../../public/assets/fawzi2.jpg";
import MahmoudNour from "../../../public/assets/mohammadnour.jpg";
import Hasanwehbeh from "../../../public/assets/hasanwehbeh.png";
import Asmaakeftaro from "../../../public/assets/asmaakeftaro.png";
import najlaaMotaaa from "../../../public/assets/najlaamotawa.jpg";
import tamadur from "../../../public/assets/tamadur.png";
import Saeedali from "../../../public/assets/saeedali.png";
import Mohammad from "../../../public/assets/mohammad.png";
import habash from "../../../public/assets/Mohammad.Habash.png";
import mhd from "../../../public/assets/mhd.png";
import sami from "../../../public/assets/sami.png";
import malek from "../../../public/assets/malek.jpg";
import safwan from "../../../public/assets/safwan.png";
import sedra from "../../../public/assets/sedra.png";

import SectionTitle from "../../components/SectionTItle/SectionTitle";
import Navbar from "../../components/NavBar/NavBar";
import { Container } from "@mui/material";
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Teamcard from "../../components/TeamCard/Teamcard";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import Socials from "../../components/socials/Socials";


function Team() {
  return (


    <Grid sx={{ backgroundColor: "#0c0c0c", position: 'relative' }}>
      <Grid>
        <Socials />
        <Navbar />
      </Grid>
      <SectionTitle sectionName="MEET" />
      <SectionTitle sectionName="CENTER TEAM OF 100 SYRIAN PIONEERS" />
      <Box
        id="opinion"
        sx={{
          flexGrow: 1,
          marginTop: "1rem",

        }}
      >

        <Grid container spacing={0}>

          {/* First row of HeroCards */}
          <Grid item sx={{ height: { md: "auto", sx: "auto" } }} xs={12} container spacing={{ xs: 2, md: 0 }}>
           

            <Grid spacing={4} container columns={10}>
            <Grid item xs={12} md={2}>
              </Grid>
            <Grid item xs={12} md={3}>
              <Teamcard
                name="م. محمد حجازي"
                brief="  مهندس ورجل أعمال في السعودية والإمارات"
                backgroundImage={Mohammad}
                Imageheight="300px"
                ImageWidth="300px"
              />

            </Grid>
            <Grid item xs={12} md={3}>
              <Teamcard
                name="د. محمد حبش"
                brief="عالم ومفكر إسلامي وبرلماني وأكاديمي من سوريا"
                backgroundImage={habash}
                Imageheight="300px"
                ImageWidth="300px"
              />
            </Grid>
            <Grid item xs={12} md={2}>
              </Grid>
              <Grid item xs={12} md={2}>
                <Teamcard
                  name="م.مالك معتوق"
                  brief="مدير التحرير"
                  Imageheight="170px"
                  ImageWidth="170px"

                  backgroundImage={malek} />
              </Grid>
              <Grid item xs={12} md={2}>
                <Teamcard
                  name="م. صفوان مدخنة"
                  brief="مدير شركة تناغم للبرمجيات"
                  Imageheight="170px"
                  ImageWidth="170px"

                  backgroundImage={safwan} />
              </Grid>
              <Grid item xs={12} md={2}>
                <Teamcard
                  name="م. محمد العقلة"
                  brief="رئيس قسم البرمجيات في شركة تناغم"
                  Imageheight="170px"
                  ImageWidth="170px"

                  backgroundImage={mhd}
                  direction="rtl" />
              </Grid>
              <Grid item xs={12} md={2}>
                <Teamcard
                  name="م. سامي اسكندراني"
                  brief="رئيس قسم التصميم في شركة تناغم"
                  Imageheight="170px"
                  ImageWidth="170px"

                  backgroundImage={sami} />
              </Grid>
              <Grid item xs={12} md={2}>
                <Teamcard
                  name="م. سدره مهنا"
                  brief="مطورة برمجيات في شركة تناغم"
                  Imageheight="170px"
                  ImageWidth="170px"

                  backgroundImage={sedra} />
              </Grid>
            </Grid>


          </Grid>



        </Grid>

      </Box>
    </Grid>



  )
}

export default Team