import Image from "next/image"

import Text, { TextType } from "@/components/atoms/Text"

import Button, { ButtonType } from "@/components/molecules/Button"

import Quote from "@/components/molecules/Quote"

import Card from "@/components/organisms/Card"
import Navbar from "@/components/organisms/Navbar"
import Footer from "@/components/organisms/Footer"

import ContentContainer from "@/components/templates/ContentContainer"
import GlobalContainer from "@/components/templates/GlobalContainer"

import { subjects } from "@/utils/data"

import sijaImg from "@/assets/img/building-img.png"
import nextIcon from "@/assets/icon/next-icon.svg"
import teacherIcon from "@/assets/icon/teacher-icon.png"
import studentIcon from "@/assets/icon/student-icon.png"
import bookIcon from "@/assets/icon/book-icon.png"

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="font-bold top bg-lightGrey">
        <GlobalContainer addClassName="flex justify-between items-center lg:flex-col-reverse lg:gap-[50px] py-[85px]">
          <div className="flex flex-col gap-[30px]">
            <div className="flex flex-col justify-around">
              <Text textType={TextType.Title} addClassName="text-blue font-overpass lg:text-center">WELCOME TO</Text>
              <Text textType={TextType.Title} addClassName="text-orange font-overpass lg:text-center">SIJA.KU</Text>
            </div>
            <Text textType={TextType.Small} addClassName="text-grey max-w-[670px] font-medium lg:text-center"> <span className="font-bold italic">Belajar, Bekerja, Membangun</span> dengan semangat yang penuh dan tidak lupa disertai dengan doa dan keikhlasan agar bisa mencapai kej ayaan di masa depan</Text>
            <div className="flex gap-[30px] lg:justify-center">
              <Button addClassName="flex items-center gap-[20px] px-[24px] py-[12px] text-[21px]">Lebih Lanjut <Image src={nextIcon} alt="Next Icon" /></Button>
              <Button buttonType={ButtonType.Secondary} addClassName="text-[21px] ">Tentang Team</Button>
            </div>
          </div>
          <Image src={sijaImg} alt="SIJA SMKN 26 Jakarta img" className="w-[40vw] h-[40vw] max-w-[530px] max-h-[530px] lg:h-[300px] lg:w-[300px]" />
        </GlobalContainer>
      </div>
      <div className="py-[100px]">
        <ContentContainer title="We Are...">
          <GlobalContainer addClassName="flex flex-col items-center gap-[40px]">
            <Text textType={TextType.Regular} addClassName="text-darkBlue max-w-[860px] text-center font-medium">
            Jurusan Sistem Informatika Jaringan dan Aplikasi dengan program studi empat tahun yang memiliki perangkat penunjang memadai untuk program belajar dan mengajar
            </Text>
            <div className="flex gap-[64px] lg:gap-[30px]">
              <div className="flex flex-col gap-[15px] items-center">
                <Image src={teacherIcon} alt="Siapa SMKN 26 jakarta" className="h-[15vw] w-[15vw] max-w-[150px] max-h-[150px]" />
                <div className="bg-white shadow-xl max-h-[120px] max-w-[250px] h-[10vw] w-[20vw] lg:shadow-none flex flex-col justify-center items-center rounded-[24px]">
                  <Text textType={TextType.SubTitle} addClassName="text-orange font-bold">5</Text>
                  <Text textType={TextType.Regular} addClassName="text-blue font-bold">Pengajar</Text>
                </div>
              </div>
              <div className="flex flex-col gap-[15px] items-center">
                <Image src={studentIcon} alt="Siapa SMKN 26 jakarta" className="h-[15vw] w-[15vw] max-w-[150px] max-h-[150px]" />
                <div className="bg-white shadow-xl max-h-[120px] max-w-[250px] h-[10vw] w-[20vw] lg:shadow-none flex flex-col justify-center items-center rounded-[24px]">
                  <Text textType={TextType.SubTitle} addClassName="text-orange font-bold">206</Text>
                  <Text textType={TextType.Regular} addClassName="text-blue font-bold">Peserta Didik</Text>
                </div>
              </div>
              <div className="flex flex-col gap-[15px] items-center">
                <Image src={bookIcon} alt="Siapa SMKN 26 jakarta" className="h-[15vw] w-[15vw] max-w-[150px] max-h-[150px]" />
                <div className="bg-white shadow-xl max-h-[120px] max-w-[250px] h-[10vw] w-[20vw] lg:shadow-none flex flex-col justify-center items-center rounded-[24px]">
                  <Text textType={TextType.SubTitle} addClassName="text-orange font-bold">9</Text>
                  <Text textType={TextType.Regular} addClassName="text-blue font-bold">Mata Pelajaran</Text>
                </div>
              </div>
            </div>
          </GlobalContainer>
        </ContentContainer>
      </div>
      <div className="min-h-[300px] bg-darkBlue py-[100px]">
        <ContentContainer title="Mata Pelajaran" addClassName="text-white">
          <GlobalContainer>
            <div className="flex flex-wrap justify-center gap-[40px]">
              {
                subjects.map((subject, i) => (
                  <Card key={i} img={subject.img} name={subject.name} description={subject.description} />
                ))
              }
            </div>
          </GlobalContainer>
        </ContentContainer>
      </div>
      <Quote quote="“Education is not to be viewed as something like filling a vessel with water but, rather, assisting a flower to grow in its own way”" quoting="Bertrand Russell" />
      <Footer />
    </>
  )
}
