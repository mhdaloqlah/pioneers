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
import SectionTitle from "../../components/SectionTItle/SectionTitle";
import Navbar from "../../components/NavBar/NavBar";
import { Container } from "@mui/material";


function Team() {
  return (
   

    <Grid sx={{backgroundColor:"#0c0c0c", }}>
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
        
        <Grid container columns={{xs: 4, md: 9}} spacing={0}>
        
          {/* First row of HeroCards */}
          <Grid item sx={{height:"100vh"}} xs={12} container spacing={{xs: 2,md:0}}>
            <Grid sx={{padding:"5px"}} item xs={12} md={3}>
              <HeroCard
                category="محمد حجازي"
                backgroundImage={Mohammad}
                size="30vh"
                paragraph="م. محمد حجازي"
                categoryColor="#FF5733"
                brief="مهندس ورجل أعمال في السعودية والإمارات"
              />
            </Grid>
            <Grid sx={{padding:"5px"}} item xs={12} md={3}>
              <HeroCard
                paragraph="م. محمد نطفه جي"
                brief="مهندس ورجل أعمال"
                category="رأي"
                backgroundImage={Fawzi}
                size="30vh"
                categoryColor="#FF5733"
              />
            </Grid>
            <Grid sx={{padding:"5px"}} item xs={12} md={3}>
              <HeroCard
                category="رأي"
                backgroundImage={Hasanwehbeh}
                size="30vh"
                paragraph="د. حسن وهبة "
                brief="رئيس كلية دبي الأمريكية"
                categoryColor="#FF5733"
              />
            </Grid>
            <Grid sx={{padding:"5px"}} item xs={12} md={3}>
              <HeroCard
                category="رأي"
                backgroundImage={Asmaakeftaro}
                size="30vh"
                paragraph="أسماء كفتارو"
                brief="المدير العام لمؤسسة كفتارو للتسامح في الإمارات"
                categoryColor="#FF5733"
              />
            </Grid>
            <Grid sx={{padding:"5px"}} item xs={12} md={3}>
              <HeroCard
                category="رأي"
                backgroundImage={najlaaMotaaa}
                size="30vh"
                paragraph="نجلاء المطوع"
                brief="عضو في مجلس رائدات الأعمال الإماراتي"
                categoryColor="#FF5733"
              />
            </Grid>
            <Grid sx={{padding:"5px"}} item xs={12} md={3}>
              <HeroCard
                category="رأي"
                backgroundImage={tamadur}
                size="30vh"
                paragraph="تماضر الفاتح"
                brief="ماجستير في إدارة الأعمال"
                categoryColor="#FF5733"
              />
            </Grid>
            <Grid sx={{padding:"5px"}} item xs={12} md={3}>
              <HeroCard
                paragraph="د. فوزي الغزالي"
                brief="دكتوراه في علوم اللسانيات من جامعة أكسفورد في بريطانيا "
                category="رأي"
                backgroundImage={Fawzi}
                size="30vh"
                categoryColor="#FF5733"
              />
            </Grid>
            <Grid sx={{padding:"5px"}} item xs={12} md={3}>
              <HeroCard
                paragraph="د. محمود نور المنصوري"
                brief="شاعر وكاتب إماراتي، مدير عام مجلس العويس الثقافي "
                category="رأي"
                backgroundImage={MahmoudNour}
                size="30vh"
                categoryColor="#FF5733"
              />
            </Grid>
            <Grid sx={{padding:"5px"}} item xs={12} md={3}>
              <HeroCard
                category="رأي"
                backgroundImage={Saeedali}
                size="30vh"
                paragraph="د. سعيد يوسف آل علي"
                brief="دكتور في الاقتصاد وعلوم الإدارة"
                categoryColor="#FF5733"
              />
            </Grid>
          
          </Grid>

          
         
        </Grid>
       
      </Box>
    </Grid>
   


  )
}

export default Team