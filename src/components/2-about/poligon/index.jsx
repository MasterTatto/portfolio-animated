import React from 'react';
import s from './styles.module.css'

const Poligon = ({icon}) => {
    return <div className={s.borders}>
        <div className={s.polygon}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
                {icon}
        </div>
    </div>

};

export default Poligon;
