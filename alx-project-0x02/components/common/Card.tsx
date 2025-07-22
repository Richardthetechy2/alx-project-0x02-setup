import { CardProps } from "@/interfaces";

const Card: React.FC<CardProps> = ({title, content}) => {
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