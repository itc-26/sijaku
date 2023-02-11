import Text, { TextType } from "../atoms/Text";

interface Props {
    quote: string;
    quoting: string;
}

const Quote = ({ quote, quoting }: Props) => {
    return (
        <div className="flex flex-col gap-[30px] items-center">
            <Text textType={TextType.SubTitle} addClassName="text-blue font-[500] italic">{quote}</Text>
            <Text textType={TextType.SubTitle} addClassName="text-blue font-[400] italic">-{quoting}-</Text>
        </div>
    )
}

export default Quote;
