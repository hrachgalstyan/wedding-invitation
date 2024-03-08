import TopSection from "@/components/top-section/top-section";
import CalendarSection from "@/components/calendar/calendar";
import PlaceSection from "@/components/place/place";
import TimingSection from "@/components/timing/timing";
import ContactSection from "@/components/contact/contact";
import FormSection from "@/components/form/form-section";
import dynamic from "next/dynamic";
import DressCodeSection from "@/components/dress-code/dress-code";
import AudioSection from "@/components/audio/audio";
const Countdown = dynamic(() => import("@/components/countdown/countdown"), { ssr: false });

export default function Home() {
  return (
    <>
      <AudioSection />
      <TopSection/>
      <CalendarSection/>
      <PlaceSection/>
      <TimingSection/>
      <DressCodeSection/>
      <FormSection/>
      <ContactSection/>
      <section>
        <Countdown/>
      </section>
    </>
  )
}