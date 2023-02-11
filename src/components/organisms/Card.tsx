import Image from "next/image";

import Text, { TextType } from "../atoms/Text";
import { ISubject, subjects } from "@/utils/data";

interface Props {
    cardType?: CardType,
    addClassName?: string,
}

interface ISubjectCard extends  ISubject , Props {}

interface ICompetitionCard extends ISubjectCard {}

export enum CardType {
    Primary,
    Secondary
}

const CardPrimary = ({ addClassName, img, name, description }: ISubjectCard) => {
    return (
        <div className={`div-[5.25rem] w-[300px] min-h-[350px] bg-lightBlue p-[12px] rounded-md ${addClassName}`}>
            <Image src={img} alt="SMKN 26 Jakarta Mata Pelajaran" />
            <Text textType={TextType.Regular} addClassName="font-bold text-left text-orange mt-[14px] mb-[10px]">{name}</Text>
            <Text textType={TextType.Small} addClassName="font-medium text-left text-grey text-[12px]">{description}</Text>
        </div>
    )
}


const Card = ({ cardType = CardType.Primary, ...props }: ISubjectCard) => {
    switch(cardType) {
        case CardType.Primary:
            return (
                <CardPrimary {...props} />
            )
        case CardType.Secondary:
        default:
            return (
                <div>awkaowkoakw</div>
            )
    }   
}

export default Card;