"use client"

import { Banner } from "@/components/Banner";
import { Comments } from "@/components/Comments";
import { DownloadResume } from "@/components/DownloadResume";
import { EducationalCredentials2 } from "@/components/EducationalCredentials2";
import { Experiences } from "@/components/Experiences";
import { Footer } from "@/components/Footer";
// import { EducationalCredentials1 } from "@/components/EducationalCredentials1";
import { Quote } from "@/components/Quote";
import { WhatIKnow } from "@/components/WhatIKnow";
import { WhoAmI } from "@/components/WhoAmI";

export default function Home() {
  return (
    <>
      <main className="w-full h-screen main-body">
        <DownloadResume />
        <Banner />
        <WhoAmI />
        <WhatIKnow />
        <Experiences />
        {/* <EducationalCredentials1 /> */}
        <EducationalCredentials2 />
        <Quote />
        <Comments />
        <Footer />
      </main>
    </>
  );
}
