import { StaticImageData } from "next/image";

import siskomImg from "@/assets/img/siskom-img.png"
import saasImg from "@/assets/img/saas-img.png"
import skjImg from "@/assets/img/skj-img.png"
import iotImg from "@/assets/img/iot-img.png"
import pemrodasImg from "@/assets/img/pemrodas-img.png"
import paasImg from "@/assets/img/paas-img.png"
import jardasImg from "@/assets/img/jardas-img.png"
import iaasImg from "@/assets/img/iaas-img.png"
import ddgImg from "@/assets/img/ddg-img.png"

export interface ISubject {
    img: StaticImageData;
    name: string;
    description: string; 
}

export const subjects: ISubject[] = [
    {
        img: siskomImg,
        name: "Sistem Komputer", 
        description: "Konsep dasar komputer pada sisi perangkat keras yang bertujuan untuk mengoptimalkan pemahaman tentang aplikasi komputer dan perangkat keras serta troubleshooting" 
    },
    {
        img: saasImg,
        name: "Software as a Service (SaaS)", 
        description: "Pengoprasian layanan software pada cloud yang disediakan vendor vendor penyedia layanan ini" 
    },
    {
        img: skjImg,
        name: "Sistem Keamanan Jaringan", 
        description: "Tingkatan selanjutnya dari komputer dan jaringan dasar, pada pembelajaran ini dilakukan pembahasan mengenain cara mengamankan jaringan, defense serta metodologi penyerangan jaringan" 
    },
    {
        img: iotImg,
        name: "Sistem Internet of Things", 
        description: "Sebuah konsep untuk memperluas fungsi dari internet dengan menyambungkan perangkat perangkat keras menjadi kesatuan yang terpadu" 
    },
    {
        img: pemrodasImg,
        name: "Pemrograman Dasar", 
        description: "Konsep dasar tentang pemrograman, logika dasar dalam pemrograman, struktur data, serta algoritma pada komputer" 
    },
    {
        img: paasImg,
        name: "Platform as a Service (PaaS)", 
        description: "Pengoprasian layanan komputasi awan (cloud) dengan tujuan pengembangan dan pengelolaan aplikasi dengan biaya yang lebih murah" 
    },
    {
        img: jardasImg,
        name: "Komputer dan Jaringan Dasar", 
        description: "Konsep dasar komputer pada sisi perangkat Jaringan yang bertujuan untuk mengoptimalkan pemahaman tentang instalasi jaringan serta troubleshooting" 
    },
    {
        img: iaasImg,
        name: "Infrastructure as a Service (IaaS)", 
        description: "Pembelajaran tentang cara pengoperasian layanan dengan dengan sumber daya komputasi meliputi server, jaringan, storage dan ruang data center" 
    },
    {
        img: ddgImg,
        name: "Dasar Desain Grafis", 
        description: "Konsep dasar tentang Desain Grafis, pemilihan warna, kombinasi warna, serta implementasi desain grafis dalam bentuk produk jadi" 
    },
];