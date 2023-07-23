import { ReactNode } from "react";

interface Props {
    textType: TextType,
    children: ReactNode,
    addClassName?: string,
}

export enum TextType {
    Title,
    SubTitle,
    Regular,
    Small
}

const Text = ({ textType, children, addClassName }: Props) => {
    switch(textType) {
        case TextType.Title:
            return (
                <h1 className={`text-[5.25rem] ${addClassName} sm:text-[3rem]`}>{children}</h1>
            )
        case TextType.SubTitle:
            return (
                <h3 className={`text-[2.5rem] ${addClassName} sm:text-[1.5rem]`}>{children}</h3>
            )
        case TextType.Regular:
            return (
                <p className={`text-[1.5rem]  ${addClassName} sm:text-[1rem]`}>{children}</p>
            )
        case TextType.Small:
            return (
                <p className={`text-[1rem]  ${addClassName} sm:text-[1rem]`}>{children}</p>
            )
    }   
}

export default Text;