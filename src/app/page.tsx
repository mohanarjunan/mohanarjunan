import Banner from "@/components/Banner";
import DownloadResume from "@/components/DownloadResume";
import { WhatIKnow } from "@/components/WhatIKnow";
import { WhoAmI } from "@/components/WhoAmI";

export default function Home() {
  return (
    <>
      <DownloadResume />
      <Banner />
      <WhoAmI />
      {/* <WhatIKnow /> */}
    </>
  );
}
