import React,{useState} from 'react';
import arrowButton from '../images/icon-arrow-down.svg';
import styles from './Row.module.css';

function Row({quest ,response}) {
    const [responseIsTrue, setResponseIsTrue] = useState(false);

    const getResponse = () => {
        if(responseIsTrue === false){
            setResponseIsTrue(true);
        } else {
            setResponseIsTrue(false);
        }
    }

    return (
        <div className={styles.row}>
            <p className={styles.quest}> {quest} <img className={styles.arrow} src={arrowButton} alt='arrow' onClick={getResponse} /> </p>
            {responseIsTrue && <p>{response}</p>}
        </div>
    )
}

export default Row