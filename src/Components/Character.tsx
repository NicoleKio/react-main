import {ICharacter} from "../Models/ICharacter";
import {FC, ReactNode} from "react";
import styles from "./character.module.css";

type IProps = {character: ICharacter} & {children: ReactNode}

const Character: FC<IProps> = ({character, children}) => {
    const {name, age, status, relatives, photo } = character;


    console.log(character);
    return(
        <div>
            <h2 className={styles.title}>{name}</h2>
            <img src={photo} alt={name} className={styles.image}/>
            <p className={styles.text}>{children}</p>
        </div>

    )
}

export default Character;