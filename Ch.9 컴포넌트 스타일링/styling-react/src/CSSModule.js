import React from 'react';
import styles from "./CSSModule.module.css"

const CSSModule = () => {

    // wrapper: "CSSModule_wrapper__wGozH" 와 같이 고유 값이 나타남
    console.log(styles);
    
    return (
        <div className={`${styles.wrapper} ${styles.inverted}`}>
            <span className='something'>CSS Module</span>
        </div>
    );
};

export default CSSModule;