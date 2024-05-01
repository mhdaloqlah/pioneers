import data from "../../constants/Data";
import "./FAQs.css";
import FaqItem from "./FaqItem";
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';
import { Container, Typography } from "@mui/material";
const Faqs = () => {
  return (
    <section className="faqs__section section__padding  " id="faqs">
      <h1 className="headtext__cormorant">FAQS</h1>
      <Container sx={{ paddingTop: "20px" , direction:'rtl'}}>
     
        <Accordion defaultExpanded sx={{ backgroundColor: "inherit", color: "#b5964dc8", boxShadow: "none" }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{ color: "#b5964dc8" }} />}
            aria-controls="panel1-content"
            id="panel1-header"


          >
            ما هو مركز الدراسات لبحوث التنمية
          </AccordionSummary>
          <AccordionDetails sx={{ color: "white",textAlign:"justify",fontFamily:"Oswald, sans-serif" }}>
            مركز الدراسات لبحوث التنمية مؤسسة واعدة انطلقت من مدينة الشارقة للكتاب 2019م وهي تعمل وفق القوانين الاتحادية لتنظيم البحث العلمي والنشر والإعلام، وقد تم ترخيصها بقرار حكومة الشارقة – مدينة الشارقة للنشر رقم  4205096  تاريخ   13/11/2023 ويتوفر في هيئتها الاستشارية عدد من الباحثين والمحللين الاقتصاديين والاجتماعيين.
          </AccordionDetails>
        </Accordion>

        <Accordion sx={{ backgroundColor: "inherit", color: "#b5964dc8", boxShadow: "none" }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{ color: "#b5964dc8" }} />}
            aria-controls="panel1-content"
            id="panel1-header"


          >
            ما هي مبادرة المائة الرواد في الإمارات؟ وما هو أثرها التنموي في الامارات
          </AccordionSummary>
          <AccordionDetails sx={{ color: "white",textAlign:"justify",fontFamily:"Oswald, sans-serif" }}>
            قام مركز الدراسات برصد الفعاليات والمباردات التي قام بها أبناء الإمارات من مواطنين ووافدين، وذلك بهدف إطلاق مشروعه (100 Super)  الذي يهدف إلى تكريم أبرز رجال وسيدات التنمية على مستوى الإمارات أولئك الذين تركوا بصمة واضحة في النهضة التنموية الرائدة في الإمارات،
          </AccordionDetails>
        </Accordion>


        <Accordion sx={{ backgroundColor: "inherit", color: "#b5964dc8", boxShadow: "none" }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{ color: "#b5964dc8" }} />}
            aria-controls="panel1-content"
            id="panel1-header"


          >
            من هي اللجنة التي تختار المائة الأوائل
          </AccordionSummary>
          <AccordionDetails sx={{ color: "white",textAlign:"justify",fontFamily:"Oswald, sans-serif" }}>
            تتوفر هيئة استشارية من خبراء اقتصاديين وتنمويين وأكاديميين في الدولة سيتم الإعلان عن أسمائهم بعد استيفاء الموافقات القانونية المطلوبة
          </AccordionDetails>
        </Accordion>

        <Accordion sx={{ backgroundColor: "inherit", color: "#b5964dc8", boxShadow: "none" }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{ color: "#b5964dc8" }} />}
            aria-controls="panel1-content"
            id="panel1-header"


          >
            متى سيتم إعلان الأسماء المرشحة للفوز
          </AccordionSummary>
          <AccordionDetails sx={{ color: "white",textAlign:"justify",fontFamily:"Oswald, sans-serif" }}>
            يتم إعلان الأسماء المرشحة للفوز سنوياً قبل العيد الوطني للإمارات بشهر سنوياً ويطرح الكتاب خلال معرض الشارقة للكتاب في نوفمبر من كل عام
          </AccordionDetails>
        </Accordion>

        <Accordion sx={{ backgroundColor: "inherit", color: "#b5964dc8", boxShadow: "none" }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{ color: "#b5964dc8" }} />}
            aria-controls="panel1-content"
            id="panel1-header"


          >
            ما هي معايير اختيار الأسماء
          </AccordionSummary>
          <AccordionDetails sx={{ color: "white",textAlign:"justify",fontFamily:"Oswald, sans-serif" }}>
            يتم اعتماد المعايير الآتية لتحديد الفائزين
            <ul>
              <li>رجال الأعمال الذين أنشأوا في الإمارات شركات تجارية أو صناعية أو سياحية رائدة ظهرت نجاحاتها بشكل لافت</li>
              <li>الأكاديميون الذين خدموا الحقل الأكاديمي وحظوا بثناء المؤسسات العلمية والمعرفية في دولة الإمارات</li>
              <li>الأطباء والمهندسون المتميزون الذين قدموا خدمات استثنائية في حقول الخدمات الأساسية.</li>
              <li>الذين حصلوا على جوائز الحكومة الوطنية الأساسية من مفكرين ومبدعين وفنانين </li>
              <li>من قدم خدمات اجتماعية أو تطوعية استثنائية ظهرت أثارها في حياة المجتمع.</li>
            </ul>
          </AccordionDetails>
        </Accordion>

        <Accordion sx={{ backgroundColor: "inherit", color: "#b5964dc8", boxShadow: "none" }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{ color: "#b5964dc8" }} />}
            aria-controls="panel1-content"
            id="panel1-header"


          >
            ما هي تفاصيل المبادرات التكريمية للفائزين والمرشحين
          </AccordionSummary>
          <AccordionDetails sx={{ color: "white",textAlign:"justify",fontFamily:"Oswald, sans-serif" }}>

            <ul>
              <li>بسط قصص نجاحهم في كتاب خاص يصدر كل سنتين للتعريف بأهم 100 رائد تنموي </li>
              <li>التعريف بنجاحاتهم وبرامجهم وشركاتهم ومصانعهم عبر موقع 100 رائد في الإمارات</li>
              <li>تكريم الفائزين بحفل استثنائي يقام في مدينة الشارقة للنشر للتعريف بجهودهم وأعمالهم</li>
              <li>تقديم ميداليات خاصة للمتميزين منهم</li>
              <li>تقديم وثيقة اختيار للفوز</li>
              <li>تقديم شهادات كفاءة وجدارة لكل المستحقين</li>
              <li>الطلب من القيادة الرشيدة رعاية هذا النشاط واعتباره أحد روافع العمل التنموي في الدولة</li>

            </ul>
            كما يقدم المركز فرصة إصدار كتب مستقلة لمن يرغب من رواد التنمية في الإمارات
          </AccordionDetails>
        </Accordion>


        <Accordion sx={{ backgroundColor: "inherit", color: "#b5964dc8", boxShadow: "none" }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{ color: "#b5964dc8" }} />}
            aria-controls="panel1-content"
            id="panel1-header"


          >
            ما هي التكاليف المطلوبة من المرشحين
          </AccordionSummary>
          <AccordionDetails sx={{ color: "white",textAlign:"justify",fontFamily:"Oswald, sans-serif" }}>

            لا يطلب أي رسوم من المرشحين، ويتم ذلك بشكل مجاني تماماً، بواقع صورة شخصية و200 كلمة.
            أما من يرغب بإضافة فعاليات أخرى أو صفحات دعائية في الموقع والكتاب فهناك معايير محددة

          </AccordionDetails>
        </Accordion>


        <Accordion sx={{ backgroundColor: "inherit", color: "#b5964dc8", boxShadow: "none" }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{ color: "#b5964dc8" }} />}
            aria-controls="panel1-content"
            id="panel1-header"


          >
            هل يمكن الإعلان في الكتاب
          </AccordionSummary>
          <AccordionDetails sx={{ color: "white",textAlign:"justify",fontFamily:"Oswald, sans-serif" }}>

            يمكن الإعلان في الكتاب فقط للمائة الذين يتم اختيارهم على أسس مهنية
          </AccordionDetails>
        </Accordion>


        <Accordion sx={{ backgroundColor: "inherit", color: "#b5964dc8", boxShadow: "none" }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{ color: "#b5964dc8" }} />}
            aria-controls="panel1-content"
            id="panel1-header"


          >
            هل يمكن الإعلان في الموقع
          </AccordionSummary>
          <AccordionDetails sx={{ color: "white",textAlign:"justify",fontFamily:"Oswald, sans-serif" }}>

            نعم يمكن الإعلان في الموقع عن كل المشاريع التنموية والثقافية في الدولة التي يحققها السوريون، والإعلان في الموقع مفتوح لكل الأعمال الرائدة في الإمارات ولو لم يكن أصحابها من قائمة المائة          </AccordionDetails>
        </Accordion>

      </Container>
    </section>
  );
};

export default Faqs;
