import React from 'react';
import Container from "../../common/container";
import Poligon from "./poligon";
import {ReactComponent as Speed} from "../../assets/speed.svg";
import {ReactComponent as Respons} from "../../assets/respons.svg";
import {ReactComponent as Idea} from "../../assets/idea.svg";
import {ReactComponent as Rocket} from "../../assets/rocket.svg";
import s from './styles.module.css'
import {Chart} from "react-chartjs-2";

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

import {Bar} from 'react-chartjs-2';
import TitleContainer from "../../common/titleContainer";
import {useSpring, animated} from "react-spring";
import {useInView} from "react-intersection-observer";

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

const data = [
    {
        icon: <Speed className={`h-[70px] w-[70px] absolute text-white fill-white ${s.icon}`}/>,
        title: 'Скорость',
        subTitle: 'Быстрое время загрузки и взаимодействие без задержек - мой наивысший приоритет.'
    },
    {
        icon: <Respons className={`h-[70px] w-[70px] absolute text-white fill-white ${s.icon}`}/>,
        title: 'Отзывчивый',
        subTitle: 'Мои макеты будут работать на любом устройстве, большом или маленьком.'
    },
    {
        icon: <Idea className={`h-[70px] w-[70px] absolute text-white fill-white ${s.icon}`}/>,
        title: 'Интуитивно понятный',
        subTitle: 'Сильное предпочтение отдается простому в использовании и интуитивно понятному UX/UI.'
    },
    {
        icon: <Rocket className={`h-[70px] w-[70px] absolute text-white fill-white ${s.icon}`}/>,
        title: 'Динамический',
        subTitle: 'Веб-сайты не обязательно должны быть статичными, мне нравится заставлять страницы оживать.'
    },
]
const About = ({selected}) => {
    const {ref: aboutRef, inView, entry} = useInView();

    const dataChart = [
        {label: 'JavaScript', value: 90},
        {label: 'TypeScript', value: 80},
        {label: 'React', value: 90},
        {label: 'Git', value: 70},
        {label: 'HTML & CSS', value: 90},
        {label: 'Другие библиотеки', value: 100},
    ]


    const data2 = {
        labels: dataChart.map((el) => el.label),
        datasets: [
            {
                label: 'Skill',
                data: dataChart.map((el) => el.value),
                backgroundColor: 'rgba(4,194,201,0.98)',
            },
        ],
    };

    let options = {
        maintainAspectRatio: false,
        scales: {
            y: {
                min: 10,
                barPercentage: 1,
                max: 100,
                step: 0.5,
            },
        },
    };

    const stylesOdd = useSpring({
        marginLeft: !inView ? -1500 : 0,

        opacity: !inView ? 0 : 1,
        config: {duration: 900}
    })
    const stylesEven = useSpring({
        marginRight: !inView ? -1500 : 0,

        opacity: !inView ? 0 : 1,
        config: {duration: 900}
    })

    const stylesOddPhoto = useSpring({
        left: !inView ? -1500 : 0,

        opacity: !inView ? 0 : 1,
        config: {duration: 900}
    })
    const stylesEvenChart = useSpring({
        right: !inView ? -1500 : 0,

        opacity: !inView ? 0 : 1,
        config: {duration: 900}
    })


    return (
        <div ref={aboutRef} className={`= pb-[50px] min-h-[calc(100vh-50px)] bg-white relative`}>
            <Container>
                <TitleContainer ref={aboutRef} inView={inView}>Обо мне</TitleContainer>
                <div className={`flex items-start justify-between w-full mt-12`}>
                    {data.map((el, i) => {
                        return (
                            <animated.div
                                style={(i % 2 === 0) ? stylesOdd : stylesEven}
                                key={i}
                                className={`flex flex-col items-center justify-center min-h-3 max-w-[300px] w-full`}>
                                <Poligon icon={el.icon}/>

                                <h2 className={`py-3 mt-[-15px] font-semibold text-[#626262] text-2xl text-center`}>{el.title}</h2>
                                <p className={`text-center text-[1.1rem] text-[#878787]`}>{el.subTitle}</p>
                            </animated.div>
                        )
                    })}

                </div>

                <animated.div className={`mt-[50px] flex`}>
                    <animated.div style={stylesOddPhoto}
                                  className={`relative flex flex-col items-center justify-center w-1/2`}>
                        <div className={`${s.img}`}/>
                        <h1 className={`mb-[20px] font-semibold text-2xl text-[#6A6A6A] text-center`}>Кто этот
                            парень?</h1>
                        <p className={`max-w-[400px] text-center text-[#828282]`}>Я Front-End разработчик из Минска.
                            Я серьезно увлечен эффектами пользовательского интерфейса, анимацией и созданием интуитивно
                            понятного, динамичного пользовательского интерфейса.</p>
                    </animated.div>


                    <animated.div style={stylesEvenChart} className={`relative w-1/2 `}>
                        <Bar
                            data={data2}
                            options={options}
                            width={100}
                            height={50}
                        />
                    </animated.div>
                </animated.div>

            </Container>
        </div>
    );
};

export default About;
