import { fetchData } from "@/utils/api/fetchData";
import AboutSection from "../../components/homepage/about";
import Blog from "../../components/homepage/blog";
import ContactSection from "../../components/homepage/contact";
import Education from "../../components/homepage/education";
import Experience from "../../components/homepage/experience";
import HeroSection from "../../components/homepage/hero-section";
import Projects from "../../components/homepage/projects";
import Skills from "../../components/homepage/skills";
import Navbar from "@/app/components/navbar";
import Footer from "@/app/components/footer";

async function getData() {
  const res = await fetch(
    `https://dev.to/api/articles?username=${personalData.devUsername}`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const data = await res.json();

  const filtered = data
    .filter((item) => item?.cover_image)
    .sort(() => Math.random() - 0.5);

  return filtered;
}
const PortfolioMakerPage = async ({ params }) => {
  const data = await fetchData(
    `https://portfoliomaker-backend.vercel.app/portfolio/${params.id}`
  );

  return (
    <div>
      <Navbar data={data} />
      <HeroSection data={data} />
      <AboutSection data={data} />
      <Experience data={data} />
      <Skills data={data} />
      <Projects data={data} />
      <Education data={data} />
      {/* <Blog blogs={blogs} /> */}
      <ContactSection data={data} />
      <Footer />
    </div>
  );
};

export default PortfolioMakerPage;
