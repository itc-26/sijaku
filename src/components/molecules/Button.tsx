import Image, { StaticImageData } from "next/image";
import { ReactNode } from "react";

interface Props {
    children: ReactNode,
    addClassName?: string,
    image?: string
}

const Button = ({ children, addClassName, image }: Props) => {
    return (
        <button className={`btn select-none bg-purple text-darkBlue py-[10px] px-[20px] text-[14px] font-medium rounded-[5px] ${addClassName}`}>
            {children}
            {image ? <Image src={image} alt="Icon" /> : ""}
        </button>
    )
}

export default Button;