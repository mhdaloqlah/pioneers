import PioneerAcheivments from "../../container/PioneerAcheivments/PioneerAcheivments";
import PioneerGallery from "../../container/PioneerGallery/PioneerGallery";
import PioneerHero from "../../container/PioneerHero/PioneerHero";
import PioneerProfile from "../../container/PioneerProfile/PioneerProfile";
import PioneerVideos from "../../container/PioneerVideos/PioneerVideos";
import PioneerWorks from "../../container/PioneerWorks/PioneerWorks";

const PioneerPage = () => {
  return (
    <>
      <PioneerHero />
      <PioneerProfile />
      <PioneerGallery />
      <PioneerVideos />
      <PioneerWorks />
      <PioneerAcheivments />
    </>
  );
};

export default PioneerPage;
