import Body1Home from "../components/home/Body1Home";

import Body2Home from "../components/home/Body2Home";
import HeaderHome from "../components/home/HeaderHome";
import TechStackSection from "../components/home/TechStackSection";

export default async function Home() {
  return (
    <>
      <HeaderHome></HeaderHome>
      <Body1Home></Body1Home>
      <TechStackSection></TechStackSection>
      <Body2Home></Body2Home>
    </>
  );
}
