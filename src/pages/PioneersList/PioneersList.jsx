import React from "react";

import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from "@mui/material/Grid";
import HeroCard from "../../components/HeroCard/HeroCard";
// Import additional images if necessary
import Gorkie from "../../../public/assets/Gorkie.png";
import Jibran from "../../../public/assets/Jibran.png";
import Sarmago from "../../../public/assets/Sarmago.png";
import Tchikhov from "../../../public/assets/Tchikhov.png";
import Domas from "../../../public/assets/Domas.png";
import Hugo from "../../../public/assets/Hugo.png";
import SectionTitle from "../../components/SectionTItle/SectionTitle";
import Navbar from "../../components/NavBar/NavBar";
import { Container } from "@mui/material";


function PioneersList() {
  return (
   

    <Grid sx={{backgroundColor:"#0c0c0c"}}>
      <Grid>
        <Navbar />
      </Grid>
      <SectionTitle sectionName="Pioneers From A to Z" />

      <Box
        id="opinion"
        sx={{
          flexGrow: 1,
          marginTop: "1rem",
          height: { sx: "auto", md: "100vh" },
        }}
      >
         <Container maxWidth="xl">
        <Grid spacing={1}>
        
          {/* First row of HeroCards */}
          <Grid item xs={12} container spacing={1}>
            <Grid item xs={12} md={4}>
              <HeroCard
                category="رأي"
                backgroundImage={Gorkie}
                size="45vh"
                paragraph="الناس الذين يستحقون لقب الإنسان هم أولئك الذين ينذرون أنفسهم وحياتهم من أجل تحطيم القيود"
                categoryColor="#FF5733"
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <HeroCard
                paragraph="كل ما يوجع النفوس الحساسة في هذا العالم هو سوء التفاهم"
                category="رأي"
                backgroundImage={Jibran}
                size="45vh"
                categoryColor="#FF5733"
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <HeroCard
                category="رأي"
                backgroundImage={Sarmago}
                size="45vh"
                paragraph="​الضمائر تصمت أكثر مما هو مطلوب منها، لهذا ابتُدِعت القوانين"
                categoryColor="#FF5733"
              />
            </Grid>
          </Grid>

          {/* Second row of HeroCards */}
          <Grid item xs={12} container spacing={1}>
            <Grid item xs={12} md={4}>
              <HeroCard
                category="رأي"
                backgroundImage={Tchikhov}
                size="45vh"
                paragraph="رأسي مكتظ ، ممتلئ إلى حافته بالأفكار ، و استطيع أن أحس بنبضه و اختلاجاته"
                categoryColor="#FF5733"
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <HeroCard
                category="رأي"
                backgroundImage={Domas}
                size="45vh"
                paragraph="التاريخ هو المسمار الذي أعلق عليه رواياتي"
                categoryColor="#FF5733"
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <HeroCard
                category="رأي"
                backgroundImage={Hugo}
                size="45vh"
                paragraph="دائما ما يلوم الناس الظروف، و لكني لا أؤمن بالظروف"
                categoryColor="#FF5733"
              />
            </Grid>
          </Grid>
         
        </Grid>
        </Container>
      </Box>
    </Grid>
   


  )
}

export default PioneersList