import { CardProp } from "@/interfaces";

const Card: React.FC<CardProp> = ({title, content}) => {
    return (
        <div>
            <h2>{title}</h2>
            <div>
                <p>{content}</p>
            </div>
        </div>
    )
}
export default Card;