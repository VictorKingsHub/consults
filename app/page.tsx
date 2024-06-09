import IconSection from "./ui/home/iconSection/IconSection"
import WelcomeHero from "./ui/home/hero/WelcomeHero";
import Join from "./ui/travels/join/Join";
import Review from "./components/reusable/review/ReviewSection";
import { CentralText } from "./components/reusable/centralText/CentralText";
import AccordionMenu from "./components/accordionMenu/AccordionMenu";
import Last from "./ui/home/last/Last";
import BannerSection from "./ui/home/banner/BannerSection";
import BookingSection from "./ui/home/booking/page";


export default function Home() {
  return (
    <main className="page">

      <WelcomeHero />

      <IconSection />

      {/* <BookingSection /> */}

      <CentralText
        title={"Get the most satisfying services"}
        description={"Riskout Consults lead in Travels and Study Abroad consulting. We also prepares clientele for Teachers Capacity Building Seminars and Workshops, School Supervision, Management and Teachers Recruiting, Curriculum Design and Development, Supply of Teaching and Learning Aids and Training for IELTS"}
        text={"Stay Conected"}
        // link={"/about"} 
        />

      <BannerSection />

      <AccordionMenu />

      <Join />

      {/* <Review /> */}

      <Last />


    </main>
  );
}
