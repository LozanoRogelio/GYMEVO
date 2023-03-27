import HText from "@/shared/HText";
import { BenefitType, SelectedPage } from "@/shared/types"
import { HomeModernIcon, UserGroupIcon, AcademicCapIcon } from "@heroicons/react/24/solid"
import { motion } from "framer-motion";
import React from "react";

const benefits: Array<BenefitType> = [
   {
      icon: <HomeModernIcon className="h-6 w-6" />,
      title: "State of the Art Facilities",
      description: "Experience the most wonderful gym facilites on earth. Equipped with the most up to date equipment."
   },
   {
      icon: <UserGroupIcon className="h-6 w-6" />,
      title: "100s of Diverse Classes",
      description: "Offering 100s of diverse classes: Strength, Cardio, Zumba, Pilates, Cycling, Group, Boxing, Muay Thai, etc."
   },
   {
      icon: <AcademicCapIcon className="h-6 w-6" />,
      title: "Expert and Pro Trainers",
      description: "Our Trainers are the most certified and skilled individuals that will help create a path to reach all your goals."
   }
]


type Props = {
   setSelectedPage: (value: SelectedPage) => void;
}

function Benefits({ setSelectedPage }: Props) {
   return
   <section
      id="benefits"
      className="mx-auto min-h-full w-5/6 py-20"
   >
      <motion.div
      onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
      >
         {/* Header */}
         <div className="md:my-5 md:w-3/5">
            <HText>MORE THAN JUST A GYM.</HText>
            <p className="my-5 text-sm">
            We provide world class fitness equipment, trainers and classes to
            get you to your ultimate fitness goals with ease. We provide true
            care into each and every member.
            </p>
         </div>
         {/* Benefits */}
         <div className="mt-5 items-center justify-between gap-8 md:flex">
            {benefits.map((benefit: BenefitType) => (
               <Benefit
                  key={benefit.title}
                  icon={benefit.icon}
                  title={benefit.title}
                  description={benefit.description}
                  setSelectedPage={setSelectedPage}
               />
            ))}
         </div>
     </motion.div>
  </section>
    

}

export default Benefits