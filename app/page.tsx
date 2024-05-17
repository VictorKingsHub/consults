import IconSection from "./ui/home/iconSection/IconSection"
import WelcomeHero from "./ui/home/hero/WelcomeHero";
import TwoComponent, { TextComponent } from "./ui/home/twoComponent/TwoComponent";
import Join from "./ui/travels/join/Join";
import Review from "./components/reusable/review/ReviewSection";
import { CentralText } from "./components/reusable/centralText/CentralText";
import AccordionMenu from "./components/accordionMenu/AccordionMenu";
import { ServicesHead } from "./components/reusable/servicesHead/ServicesHead";
// import TwoColumnComponent from "./ui/home/reusable/twoComponent/TwoComponent";
// import pho from "@/public/globe.jpg"
// import pho from "../public/skyscraperTop.jpg"


export default function Home() {
  return (
    <main className="flex  flex-col items-center justify-between">
      <WelcomeHero />

        <IconSection />
      <CentralText title={"Get the most satisfying services"} description={"Riskout Consults lead in Travels agency and Study consulting.Prepares clientele for Teachers capacity building seminars and workshopsSchool Supervision, Mgt. and Teachers Recruiting, Curriculum Design and Development, Supply of teaching and Learning Aids and Training for IELTS and "} text={"Stay Conected"} link={"/about"} />
      {/* <Join /> */}

        <AccordionMenu />

      <Review />

      {/* <TwoComponent /> */}



    </main>
  );
}
