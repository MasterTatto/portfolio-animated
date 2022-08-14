import {React, useCallback} from 'react';
import Container from "../../common/container";
import {ArrowSmRightIcon} from "@heroicons/react/solid";
import s from './styles.module.css'
import Particles from "react-tsparticles";
import {loadFull} from "tsparticles";
import {Link} from 'react-scroll'

const Prevues = () => {
    const particlesInit = useCallback(async (engine) => {
        console.log(engine);
        // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async (container) => {
        await console.log(container);
    }, []);

    return (
        <div className={`h-[calc(100vh+50px)] bg-[#252934]`}>
            <Particles canvasClassName={s.canva} style={{
                position: "absolute"
            }} height={'50px'} className={``} id="tsparticles"
                       options={{
                           "fullScreen": {
                               "enable": true
                           },

                           "fpsLimit": 120,
                           "particles": {
                               "groups": {
                                   "z5000": {
                                       "number": {
                                           "value": 70
                                       },
                                       "zIndex": {
                                           "value": 50
                                       }
                                   },
                                   "z7500": {
                                       "number": {
                                           "value": 30
                                       },
                                       "zIndex": {
                                           "value": 75
                                       }
                                   },
                                   "z2500": {
                                       "number": {
                                           "value": 50
                                       },
                                       "zIndex": {
                                           "value": 25
                                       }
                                   },
                                   "z1000": {
                                       "number": {
                                           "value": 40
                                       },
                                       "zIndex": {
                                           "value": 10
                                       }
                                   }
                               },
                               "number": {
                                   "value": 200,
                                   "density": {
                                       "enable": false,
                                       "value_area": 800
                                   }
                               },
                               "color": {
                                   "value": "#fff",
                                   "animation": {
                                       "enable": false,
                                       "speed": 20,
                                       "sync": true
                                   }
                               },
                               "shape": {
                                   "type": "circle"
                               },
                               "opacity": {
                                   "value": 1,
                                   "random": false,
                                   "animation": {
                                       "enable": false,
                                       "speed": 3,
                                       "minimumValue": 0.1,
                                       "sync": false
                                   }
                               },
                               "size": {
                                   "value": 3
                               },
                               "links": {
                                   "enable": false,
                                   "distance": 100,
                                   "color": "#ffffff",
                                   "opacity": 0.4,
                                   "width": 1
                               },
                               "move": {
                                   "angle": {
                                       "value": 10,
                                       "offset": 0
                                   },
                                   "enable": true,
                                   "speed": 5,
                                   "direction": "right",
                                   "random": false,
                                   "straight": false,
                                   "outModes": {
                                       "default": "out"
                                   },
                                   "attract": {
                                       "enable": false,
                                       "rotateX": 600,
                                       "rotateY": 1200
                                   }
                               },
                               "zIndex": {
                                   "value": 5,
                                   "opacityRate": 0.5
                               }
                           },
                           "interactivity": {
                               "events": {
                                   "onHover": {
                                       "enable": false,
                                       "mode": "repulse"
                                   },
                                   "onClick": {
                                       "enable": true,
                                       "mode": "push"
                                   },
                                   "resize": true
                               },
                               "modes": {
                                   "grab": {
                                       "distance": 400,
                                       "links": {
                                           "opacity": 1
                                       }
                                   },
                                   "bubble": {
                                       "distance": 400,
                                       "size": 40,
                                       "duration": 2,
                                       "opacity": 0.8
                                   },
                                   "repulse": {
                                       "distance": 200
                                   },
                                   "push": {
                                       "quantity": 4,
                                       "groups": ["z5000", "z7500", "z2500", "z1000"]
                                   },
                                   "remove": {
                                       "quantity": 2
                                   }
                               }
                           },
                           "detectRetina": true,
                           "background": {
                               "color": "",
                               "image": "",
                               "position": "50% 50%",
                               "repeat": "no-repeat",
                               "size": "cover"
                           },
                           "emitters": {
                               "position": {
                                   "y": 55,
                                   "x": -5
                               },
                               "rate": {
                                   "delay": 7,
                                   "quantity": 1
                               },
                               "size": {
                                   "width": 0,
                                   "height": 0
                               },
                           }
                       }}
                       init={particlesInit} loaded={particlesLoaded}
            />
            <Container className={`h-full w-full flex items-center justify-center relative z-20`}>
                <div className={`flex flex-col items-center`}>
                    <h1 className={`text-3xl text-white`}>Привет, меня зовут <span className={`text-[#E31B6D]`}>Александр Громыко</span>.
                    </h1>
                    <h1 className={`text-3xl text-white py-4`}>И я front-end разработчик.</h1>
                    <Link activeClass="active"
                          to={'ABOUT'}
                          spy={true}
                          smooth={true}
                          hashSpy={true}
                          offset={50}
                          duration={1000}
                          delay={0}
                          isDynamic={true}
                          ignoreCancelEvents={false}
                          spyThrottle={300}>
                        <div
                            className={`${s.btn} cursor-pointer flex justify-between items-center
                         max-w-[260px] px-4 py-3 w-full border-[2px]
                         bg-[#252934]
                          border-white transition-all hover:border-[#04C2C9] 
                          hover:bg-[#04C2C9] `}>
                            <span className={`text-1xl text-white`}>Посмотреть мои работы</span>
                            <ArrowSmRightIcon className={`h-[30px] transition-all fill-white ml-1`}/>
                        </div>
                    </Link>
                </div>
            </Container>
        </div>
    )
};

export default Prevues;
