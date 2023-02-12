import Image from "next/image";
import Link from "next/link";

import Text, { TextType } from "@/components/atoms/Text";
import LinkComponent from "@/components/atoms/Link";

import sijaLogo from "@/assets/logo/sijaku-logo-2.svg"
import linkedIcon from "@/assets/icon/linked-icon.svg"
import instagramIcon from "@/assets/icon/instagram-icon.svg"
import emailIcon from "@/assets/icon/email-icon.svg"
import ytIcon from "@/assets/icon/yt-icon.svg"

import GlobalContainer from "@/components/templates/GlobalContainer";

const Footer = () => {
    return (
        <div className="min-h-[365px]">
            <div className="bg-darkBlue min-h-[300px] py-[40px]">
                <GlobalContainer>
                    <div className="w-[310px]">
                        <div className="flex items-center gap-[16px]">
                            <Image src={sijaLogo}alt="SMKN 26 Jakarta SIJA logo" />
                            <Text textType={TextType.Small} addClassName="text-white font-bold">SIJA.KU</Text>
                        </div>
                        <Text textType={TextType.Small} addClassName="text-white">Jl. Balai Pustaka Baru I No.2, RW.7, Rawamangun, Kec. Pulo Gadung, Kota Jakarta Timur, Daerah Khusus Ibukota Jakarta 13220</Text>
                        <div>
                            <Image src={linkedIcon} alt="SMKN 26 Jakarta Social Media" />
                            <Image src={instagramIcon} alt="SMKN 26 Jakarta Social Media" />
                            <Image src={emailIcon} alt="SMKN 26 Jakarta Social Media" />
                            <Image src={ytIcon} alt="SMKN 26 Jakarta Social Media" />
                        </div>
                    </div>
                    <div>
                        {/* <Text>Page</Text> */}
                        <div>
                            {/* <LinkComponent></LinkComponent> */}
                            {/* <LinkComponent></LinkComponent> */}
                            {/* <LinkComponent></LinkComponent> */}
                            {/* <LinkComponent></LinkComponent> */}
                        </div>
                    </div>
                    <div>
                        {/* <Text></Text> */}
                        <div>
                            {/* <Text></Text>
                            <Text></Text>
                            <Text></Text>
                            <Text></Text> */}
                        </div>
                        <div>
                            {/* <Text></Text>
                            <Text></Text>
                            <Text></Text>
                            <Text></Text> */}
                        </div>
                        <div>
                            {/* <Text></Text>
                            <Text></Text>
                            <Text></Text>
                            <Text></Text> */}
                        </div>
                        <div>
                            {/* <Text></Text>
                            <Text></Text>
                            <Text></Text>
                            <Text></Text> */}
                        </div>
                    </div>
                </GlobalContainer>
            </div>
            <div className="bg-white">
                {/* <Text>© 2023 SIJA SMKN 26 Jakarta. All rights reserved.</Text> */}
                {/* <Text>Made with 🧡 by Team</Text> */}
            </div>
        </div>
    )
}

export default Footer;
