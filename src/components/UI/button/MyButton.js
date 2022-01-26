import React from 'react';
import classes from './MyButton.module.css'

const MyButton = ({children,...props}) => {
    //children- данные приходят от родителя
    // все настройки каждого из MyButton будут применяться индивидуально благодаря передаче {...props}
    return (
        <button {...props} className={classes.myBtn}>
            {children}
        </button>
    );
};

export default MyButton;