import React from 'react';
import Container from "../../common/container";
import TitleContainer from "../../common/titleContainer";
import Item from "./item";
import {useInView} from "react-intersection-observer";
import prevLogo from '../../assets/project/deep1.png'
import img1 from '../../assets/project/img1.png'
import img2 from '../../assets/project/img2.png'
import img3 from '../../assets/project/img3.png'
import img4 from '../../assets/project/img4.png'
import img5 from '../../assets/project/img5.png'
import img6 from '../../assets/project/img6.png'


const data = [
    {title: 'DEEPVIEWER', position: 'left', img: prevLogo},
    {title: 'DASHBOARD 1', position: 'top', img: img1},
    {title: 'DASHBOARD 2', position: 'right', img: img2},
    {title: 'DASHBOARD 3', position: 'left', img: img3},
    {title: 'DASHBOARD 4', position: 'top', img: img4},
    {title: 'DASHBOARD 5', position: 'right', img: img5},
    {title: 'DASHBOARD 6', position: 'left', img: img6},
]
const Project = () => {
    const {ref: aboutRef, inView, entry} = useInView();


    return (
        <div ref={aboutRef} className={`overflow-hidden relative bg-[#F5F5F5] min-h-[calc(100vh-50px)]`}>
            <Container className={`h-full`}>
                <TitleContainer ref={aboutRef} inView={inView}>Проекты</TitleContainer>

                <div className={` h-full w-full mt-[50px] grid grid-cols-3 gap-0`}>
                    {data.map((el, i) => <Item title={el.title} img={el.img} position={el.position} index={i}
                                               inView={inView}/>)}
                </div>
            </Container>
        </div>
    );
};

export default Project;
