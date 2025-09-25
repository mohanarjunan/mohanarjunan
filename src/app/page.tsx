import Banner from "@/components/Banner";
import DownloadResume from "@/components/DownloadResume";
import { Experiences } from "@/components/Experiences";
import { WhatIKnow } from "@/components/WhatIKnow";
import { WhoAmI } from "@/components/WhoAmI";

export default function Home() {
  return (
    <>
      <DownloadResume />
      <Banner />
      <WhoAmI />
      <WhatIKnow />
      <Experiences />
    </>
  );
}
