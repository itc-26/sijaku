import Image from "next/image"

import Text, { TextType } from "@/components/atoms/Text"

import Button, { ButtonType } from "@/components/molecules/Button"

import Navbar from "@/components/organisms/Navbar"

import GlobalContainer from "@/components/templates/GlobalContainer"

import sijaImg from "@/assets/img/building-img.png"
import nextIcon from "@/assets/icon/next-icon.svg"

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="font-bold top bg-lightGrey">
        <GlobalContainer addClassName="flex justify-between items-center pt-[85px]">
          <div className="flex flex-col gap-[30px]">
            <div className="flex flex-col justify-around">
              <Text textType={TextType.Title} addClassName="text-blue font-overpass">WELCOME TO</Text>
              <Text textType={TextType.Title} addClassName="text-orange font-overpass">SIJA.KU</Text>
            </div>
            <Text textType={TextType.Small} addClassName="text-grey max-w-[670px]"> <span className="font-bold italic">Belajar, Bekerja, Membangun</span> dengan semangat yang penuh dan tidak lupa disertai dengan doa dan keikhlasan agar bisa mencapai kejayaan di masa depan</Text>
            <div className="flex gap-[30px]">
              <Button addClassName="flex items-center gap-[20px] px-[24px] py-[12px] text-[21px]">Lebih Lanjut <Image src={nextIcon} alt="Next Icon" /></Button>
              <Button buttonType={ButtonType.Secondary} addClassName="text-[21px] ">Tentang Team</Button>
            </div>
          </div>
          <Image src={sijaImg} alt="SIJA SMKN 26 Jakarta img" />
        </GlobalContainer>
      </div>
    </>
  )
}
