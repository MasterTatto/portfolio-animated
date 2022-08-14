import React, {useState} from 'react';
import s from './styles.module.css'
import {useSpring, animated} from "react-spring";


const Item = ({inView, title, position, img}) => {
    const [isBooped, setIsBooped] = useState(false);

    const trigger = () => {
        setIsBooped(true);
    };
    const triggerOut = () => {
        setIsBooped(false);
    };

    const stylesOdd = useSpring({
        left: ((position === 'left' && !inView) ? -1500 : 0) || (((position === 'right' && !inView)) ? 1500 : 0),
        top: (position === 'top' && !inView) ? -1500 : 0,
        opacity: !inView ? 0 : 1,
        config: {duration: 900}
    })

    const showBlockTop = useSpring({
        top: ((!isBooped) ? -150 : 0),
        config: {duration: 200}
    })
    const showBlockBottom = useSpring({
        bottom: ((!isBooped) ? -150 : 0),
        config: {duration: 200}
    })

    return (
        <animated.div
            onMouseEnter={trigger}
            onMouseLeave={triggerOut}
            onM
            style={{...stylesOdd, backgroundImage: `url(${img}) `}}
            className={
                `overflow-hidden
            relative 
            bg-center bg-no-repeat 
            bg-cover h-[300px] 
           `}>
            <animated.div style={showBlockTop} className={s.block_top}>
                {title}
            </animated.div>
            <animated.div style={showBlockBottom} className={s.block_bottom}>
                <div className={s.btn}>
                    Узнать больше
                </div>
            </animated.div>

        </animated.div>
    );
};

export default Item;
