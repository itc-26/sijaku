import { ReactNode } from "react";

import Text, { TextType } from "../atoms/Text";

interface Props {
    children: ReactNode;
    title: string;
    addClassName?: string;
}

const ContentContainer = ({ title, children, addClassName }: Props) => {
    return (
        <section>
            <Text textType={TextType.SubTitle} addClassName={`font-bold text-darkBlue underline decoration-orange underline-offset-8 text-center mb-[40px] ${addClassName}`}>{title}</Text>
            <div className="flex items-center text-center">
                {children}
            </div>
        </section>
    )
}

export default ContentContainer;