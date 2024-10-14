import TextSlider from "../../components/landing/Slider";
import IntroductionSection from "@/app/components/landing/IntroductionSection";
import CollaborationSection from "@/app/components/landing/CollaborationSection";
import MostSellSection from "@/app/components/landing/MostSellSection";
import CustomersSayingSection from "@/app/components/landing/CustomersSayingSection";
import AdsSection from "@/app/components/landing/AdsSection";


export default function Home() {

  return (
    <div className="my-4 mx-9">

      <IntroductionSection />

      <TextSlider />

      <CollaborationSection />

      <MostSellSection />

      <CustomersSayingSection />

      <AdsSection />

    </div>
  );
}

