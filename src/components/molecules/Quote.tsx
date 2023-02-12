import Text, { TextType } from "../atoms/Text";

import GlobalContainer from "../templates/GlobalContainer";

interface Props {
    quote: string;
    quoting: string;
}

const Quote = ({ quote, quoting }: Props) => {
    return (
        <GlobalContainer>
            <div className="flex flex-col gap-[30px] items-center py-[80px]">
                <Text textType={TextType.Regular} addClassName="text-blue font-[500] text-center italic">{quote}</Text>
                <Text textType={TextType.Regular} addClassName="text-blue font-[400] text-center italic">-{quoting}-</Text>
            </div>
        </GlobalContainer>
    )
}

export default Quote;
