import cn from "classnames"
import styles from "./card.module.css"
import { ICaardProps } from "./card.props";


export function Card({children, color, className, ...props}:ICaardProps) {
    return (
        <div className={cn(styles.card, className ?? "", {
            [styles.purple]: color === "purple"
        

        })}
        {...props}>
            
            {children}
        </div>
    )
}