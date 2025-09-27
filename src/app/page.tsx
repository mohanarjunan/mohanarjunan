import Banner from "@/components/Banner";
import { Comments } from "@/components/Comments";
import DownloadResume from "@/components/DownloadResume";
import { Experiences } from "@/components/Experiences";
import { Footer } from "@/components/Footer";
import { Qualifications } from "@/components/Qulatifications";
import { Quote } from "@/components/Quote";
import { WhatIKnow } from "@/components/WhatIKnow";
import { WhoAmI } from "@/components/WhoAmI";

export default function Home() {
  return (
    <>
      <div className="w-full h-screen main-body">
        <DownloadResume />
        <Banner />
        <WhoAmI />
        <WhatIKnow />
        <Experiences />
        <Qualifications />
        <Quote />
        <Comments />
        <Footer />
      </div>
    </>
  );
}
