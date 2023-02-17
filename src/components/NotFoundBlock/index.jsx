import React from 'react';

import styles from "./NotFoundBlock.module.scss"


function NotFoundBlock(props) {
    return (
        <div className={styles.root}>
        <h1 >Nothing was found</h1>
        <p>There is no such page</p>
        </div>
    );
}

export default NotFoundBlock;