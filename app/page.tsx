import { Button } from "@/components/ui/button";
import Picture from "@/components/ui/uis/Picture";
import Social from "@/components/ui/uis/Social";
import Stats from "@/components/ui/uis/Stats";
import { Download } from "lucide-react";

export default function Home() {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full ">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">Software Developer</span>
            <h1 className="text-4xl font-sans mb-6">
              Hi, Im <br />{" "}
              <span className="text-accent">muhammad Kaif Razvi</span>
            </h1>
            <p className="max-w-[540px] mb-9 text-white/80">
              I excel at crafting elegant digital experiences and I am
              proficient in various programming languages and a wide range of
              technologies.Note: This is an AI-generated image, not me. I dont
              take pictures.
            </p>
            <div className="flex flex-col xl:flex-row items-center  gap-4">
              <a href="/Muhammad_Kaif_Razvi_Resume.pdf" download>
                <Button
                  variant={"outline"}
                  className="text-accent hover:text-accent-hover border-accent hover:border-accent-hover rounded-full uppercase flex items-center gap-2 py-5"
                >
                  Download CV
                  <Download className="text-xl" />
                </Button>
              </a>

              <div className="mb-8 xl:mb-0">
                <Social containerst="flex gap-6" iconst="w-9 h-9 " />
              </div>
            </div>
            <Stats />
          </div>
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Picture />
          </div>
        </div>
      </div>
    </section>
  );
}
