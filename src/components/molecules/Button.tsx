import Image, { StaticImageData } from "next/image";
import { ReactNode } from "react";

interface Props {
    children: ReactNode,
    addClassName?: string,
    image?: string,
    buttonType?: ButtonType,
}

export enum ButtonType {
    Primary = "title",
    Secondary = "secondary",
}

const Button = ({ children, addClassName, image, buttonType = ButtonType.Primary }: Props) => {
    switch (buttonType) {
        case ButtonType.Primary:
            return (
                <button className={`btn select-none bg-blue text-white  py-[10px] px-[20px] font-[400] rounded-[5px] cursor-pointer ${addClassName}`}>
                    {children}
                    {image ? <Image src={image} alt="Icon" /> : ""}
                </button>
            )
        case ButtonType.Secondary:
            return (
                <button className={`btn select-none bg-white text-blue outline outline-[2px] outline-blue border-blue py-[12px] px-[20px] cursor-pointer rounded-[5px] ${addClassName}`}>
                    {children}
                    {image ? <Image src={image} alt="Icon" /> : ""}
                </button>
            )
    }
}

export default Button;