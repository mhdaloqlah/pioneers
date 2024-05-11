import { styled } from "@mui/material/styles";
import { Box, Grid, Typography, Paper } from "@mui/material";
import React from "react";
import aboutUsImage from "../../../public/assets/aboutus.png";
import Navbar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import Stack from '@mui/material/Stack';
import image1 from '../../../public/assets/logo2.png';
import SectionTitle from "../../components/SectionTItle/SectionTitle";

import Teamcard from "../../components/TeamCard/Teamcard";
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
import logoFromsami from "../../../public/assets/DirasatLogo.png";
import Divider from '@mui/material/Divider';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: 'inherit',
  padding: theme.spacing(1),
  textAlign: 'justify',
  color: theme.palette.text.secondary,
  boxShadow: 'none',
  color: '#B5964D',
  fontSize: "18px",
  padding: '30px 30px 30px 40px',
  direction: 'rtl'
}));

const AboutUsPage = () => {
  return (
    <>
      <Grid sx={{ backgroundColor: "#0c0c0c", height: { sx: 'auto', md: '100vh' } }}>
        <Grid>
          <Navbar />
        </Grid>
        {/* <SectionTitle sectionName="ABOUT US" /> */}


        <Grid container spacing={0}>

          {/* First row of HeroCards */}
          <Grid item sx={{ height: { md: "auto", sx: "auto" } }} xs={12} container spacing={{ xs: 2, md: 5 }}>


            <Grid sx={{ padding: '10% 15%' }} container columns={8}>
              <Grid item xs={12} md={2}>

                <img style={{ width: '100%' }} src={logoFromsami} />

              </Grid>
              <Grid sx={{
                padding: '0 20px', display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
              }} item xs={12} md={6}>
                <Stack>
                  <Typography
                    variant="body1"
                    sx={{
                      color: "#B5964D",
                      fontFamily: "Oswald",

                      textAlign: "justify",
                      fontSize: "36px",
                      direction: 'rtl',
                      fontWeight: 'bold',
                      textAlign: 'center',
                      marginBottom: '50px'
                    }}
                  >
                    مركز الدراسات لبحوث التنمية
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      color: "#B5964D",
                      fontFamily: "Oswald",

                      textAlign: "justify",
                      fontSize: "22px",
                      direction: 'rtl'
                    }}
                  >
                     مؤسسة واعدة انطلقت من مدينة الشارقة للكتاب 2019م وهي تعمل وفق القوانين الاتحادية لتنظيم البحث العلمي والنشر والإعلام، وقد تم تجديد ترخيصها بقرار حكومة الشارقة – مدينة الشارقة للنشر رقم  4205096   2023 ويتوفر في هيئتها الاستشارية عدد من الباحثين والمحللين الاقتصاديين والاجتماعيين.
                    وهي تعمل بالتنسيق مع دائرة التنمية الاقتصادية في إمارة الشارقة وتهدف إلى دعم المنجرات التنموية في سائر المجالات  التي تتحقق باستمرار على أرض الإمارات.
                  </Typography>
                  <Divider sx={{ backgroundColor: '#B5964D', margin: '50px 100px 0px 100px' }} />
                </Stack>


              </Grid>

            </Grid>


          </Grid>



        </Grid>


      </Grid>

      <Grid sx={{ padding: '0 15%' }} container spacing={2}>
        <Grid item xs={12} md={12}>

          <Divider sx={{
            '&::before, &::after': {
              borderColor: '#B5964D', // Change this to your desired color
            },
          }}>
            <img style={{ width: '80px' }} src={image1} />
          </Divider>

        </Grid>
        <Grid sx={{ marginTop: '50px' }} md={12}>
          <Item sx={{
            paddingTop: '0', color: "#B5964D",
            fontFamily: "Oswald",

            textAlign: "justify",
            fontSize: "22px",
            direction: 'rtl'
          }}>  يتشرف مركز الدراسات لبحوث التنمية في الإمارات بتقديم الإطلاق الجديد لأهم مائة شخصية سورية أسهمت في تطوير الإمارات منذ قيام الاتحاد إلى اليوم.

            تشكل الإمارات أوضح ظاهرة حضارية للفعل العربي والإسلامي على مستوى العالم، فقد توفرت لهذا البلد الكريم قيادة راشدة وقوانين بصيرة وإدارة منفتحة تمكنت في فترة قياسية من تحقيق تطور حضاري لافت حظي بإعجاب سائر الشعوب وبات الوصول إلى الإمارات والإسهام في نهضتها حلماً يراود كل ذي إرادة طموحة وعقل واثب وجيل واعد.

            ومنذ قيام الاتحاد أعلن الوالد الشيخ زايد أن الإمارات ملتقى للطموح والعطاء، وأعلن أن الإمارات تحتاج في نهضتها وقيامها إلى أحدث الخبرات والتجارب من كل شعوب العالم، وعمل على توفير فرص النجاح والتفوق للمواطنين كذلك للوافدين من أبناء الجنسيات المختلفة، واستقرت كلماته المضيئة مرشدة وهادية في الضمير الإماراتي: المال مال الله والكل عباد الله، ولكل مجتهد نصيب.
          </Item>
        </Grid>
        <Grid md={6}>
          <Item sx={{
            color: "#B5964D",
            fontFamily: "Oswald",

            textAlign: "justify",
            fontSize: "22px",
            direction: 'rtl'
          }}>                وفي سياق التعرف على الإرادات الخيرة التي كانت وراء هذه النجاحات فإن مركز الدراسات لبحوث التنمية في إمارة الشارقة يمضي في اتخاذ خطوة ذات دلالة وهي التعريف بأهم الرواد الذين أسهموا في تحقيق هذا التطور في الإمارات، وقد اختارت الهيئة الاستشارية للمركز التعريف بأهم مائة أسهموا في تطور الإمارات من كل جنسية من الحنسيات الموجودة في الدولة، ولا شك أن بناء الإمارات قام على أكتاف أهلها الخيرين الطيبية وشاركهم في ذلك الخليجيون والعرب والدول الرائدة في آسيا وأوروبا وأفريقيا وأمريكا.
          </Item>
        </Grid>
        <Grid md={6}>
          <Item sx={{
            color: "#B5964D",
            fontFamily: "Oswald",

            textAlign: "justify",
            fontSize: "22px",
            direction: 'rtl'
          }}>            وجاءت الأيام بتحقيق بصيرة الشيخ زايد وتطورت البلاد بشكل كبير واشترك الكل في عمرانها، وبعد نصف قرن من قيام الاتحاد تحولت تلك الأرض القاحلة إلى جنات تجري من تحتها الأنهار، وصارت مصدر إلهام لكل التجارب الناجحة في الأرض، وتصدرت المراكز المتقددمة على المؤشرات العالمية في جودة الحياة والأمن الاجتماعي ونسب النمو  والتلاحم المجتمعي.
            وحين أبدى بعض مستشاريه قلقاً من حضور الأجنبي في الدولة وأن شركات كبرى تملك وتتطور وتربح على أرض الإمارات لمالكين من غير الإمارات، وأن كثيراً من الأبراج والمصانع الكبيرة على أرض الدولة باتت لمالكين غير إماراتيين، ضحك بعفويته المعروفة، ثم قال: وهل تظنون أنهم سيأخذون هذه الأبراج والمصانع معهم إذا أرادوا الرحيل؟ إنها إرث حضاري ومجتمعي لأهل الإمارات، وهي لهذا البلد ولمن يعيش فيه إلى يوم القيامة.
          </Item>
        </Grid>

       
      </Grid>
      <Grid container spacing={0}>
      <Grid md={12}>
          <Item>
            <img style={{ width: '100%' }} src={aboutUsImage} />
          </Item>
        </Grid>
        </Grid>
    </>
  );
};

export default AboutUsPage;
