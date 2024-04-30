import React from "react";

import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2

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
      <SectionTitle sectionName="TEAM" />

      <Box
        id="opinion"
        sx={{
          flexGrow: 1,
          marginTop: "1rem",
          
        }}
      >
        
        <Grid container columns={{xs: 4, md: 10}} spacing={0}>
        
          {/* First row of HeroCards */}
          <Grid item xs={12} container spacing={{xs: 2,md:0}}>
            <Grid sx={{padding:"5px"}} item xs={12} md={2}>
              <HeroCard
                category="رأي"
                backgroundImage={Gorkie}
                size="30vh"
                paragraph="الناس الذين يستحقون لقب الإنسان هم أولئك الذين ينذرون أنفسهم وحياتهم من أجل تحطيم القيود"
                categoryColor="#FF5733"
              />
            </Grid>
            <Grid sx={{padding:"5px"}} item xs={12} md={2}>
              <HeroCard
                paragraph="كل ما يوجع النفوس الحساسة في هذا العالم هو سوء التفاهم"
                category="رأي"
                backgroundImage={Jibran}
                size="30vh"
                categoryColor="#FF5733"
              />
            </Grid>
            <Grid sx={{padding:"5px"}} item xs={12} md={2}>
              <HeroCard
                category="رأي"
                backgroundImage={Sarmago}
                size="30vh"
                paragraph="​الضمائر تصمت أكثر مما هو مطلوب منها، لهذا ابتُدِعت القوانين"
                categoryColor="#FF5733"
              />
            </Grid>
            <Grid sx={{padding:"5px"}} item xs={12} md={2}>
              <HeroCard
                category="رأي"
                backgroundImage={Tchikhov}
                size="30vh"
                paragraph="رأسي مكتظ ، ممتلئ إلى حافته بالأفكار ، و استطيع أن أحس بنبضه و اختلاجاته"
                categoryColor="#FF5733"
              />
            </Grid>
            <Grid sx={{padding:"5px"}} item xs={12} md={2}>
              <HeroCard
                category="رأي"
                backgroundImage={Domas}
                size="30vh"
                paragraph="التاريخ هو المسمار الذي أعلق عليه رواياتي"
                categoryColor="#FF5733"
              />
            </Grid>
            <Grid sx={{padding:"5px"}} item xs={12} md={2}>
              <HeroCard
                category="رأي"
                backgroundImage={Hugo}
                size="30vh"
                paragraph="دائما ما يلوم الناس الظروف، و لكني لا أؤمن بالظروف"
                categoryColor="#FF5733"
              />
            </Grid>
            <Grid sx={{padding:"5px"}} item xs={12} md={2}>
              <HeroCard
                paragraph="كل ما يوجع النفوس الحساسة في هذا العالم هو سوء التفاهم"
                category="رأي"
                backgroundImage={Jibran}
                size="30vh"
                categoryColor="#FF5733"
              />
            </Grid>
            <Grid sx={{padding:"5px"}} item xs={12} md={2}>
              <HeroCard
                paragraph="كل ما يوجع النفوس الحساسة في هذا العالم هو سوء التفاهم"
                category="رأي"
                backgroundImage={Jibran}
                size="30vh"
                categoryColor="#FF5733"
              />
            </Grid>
            <Grid sx={{padding:"5px"}} item xs={12} md={2}>
              <HeroCard
                category="رأي"
                backgroundImage={Sarmago}
                size="30vh"
                paragraph="​الضمائر تصمت أكثر مما هو مطلوب منها، لهذا ابتُدِعت القوانين"
                categoryColor="#FF5733"
              />
            </Grid>
            <Grid sx={{padding:"5px"}} item xs={12} md={2}>
              <HeroCard
                category="رأي"
                backgroundImage={Tchikhov}
                size="30vh"
                paragraph="رأسي مكتظ ، ممتلئ إلى حافته بالأفكار ، و استطيع أن أحس بنبضه و اختلاجاته"
                categoryColor="#FF5733"
              />
            </Grid>
          </Grid>

          
         
        </Grid>
       
      </Box>
    </Grid>
   


  )
}

export default PioneersList