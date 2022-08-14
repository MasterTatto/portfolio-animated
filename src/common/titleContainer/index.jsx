import React from 'react';
import {useSpring, animated} from "react-spring";
import {useInView} from "react-intersection-observer";

const TitleContainer = ({children, ref, inView}) => {


    const styles = useSpring({
        marginLeft: !inView ? -1000 : 0,

        config: {duration: 900}
    })
    return (
        <animated.h1
            ref={ref}
            style={styles}
            className={`w-full text-center text-6xl font-semibold text-center underline pt-[30px] text-[#45474A]`}>
            {children}
        </animated.h1>
    );
};

export default TitleContainer;
