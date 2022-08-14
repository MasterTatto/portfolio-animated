import React, {useState} from 'react';
import Container from "../../common/container";
import s from './styles.module.css'
import {Link} from 'react-scroll'

const headers = [
    {title: 'ГЛАВНАЯ', link: 'HOME'},
    {title: 'ОБО МНЕ', link: 'ABOUT'},
    {title: 'ПОРТФОЛИО', link: 'PORTFOLIO'},
    {title: 'БЛОГ', link: 'BLOG'},
    {title: 'КОНТАКТЫ', link: 'CONTACT'},
]
const NavBar = ({setSelected, selected, setSelectedPrev}) => {
// ${selected !== 'HOME' ? 'absolute' : 'sticky'}
    return (
        <div
            className={`
            
            fixed
            bg-[#1B242F] h-[50px] w-full flex items-center top-[0] border-b-[3px] border-[#04C2C9] z-20 ${s.nav}`}>
            <Container className={``}>
                <div className={`flex`}>
                    {headers.map((el, i) => <Link activeClass="active"
                                                  to={el.link}
                                                  spy={true}
                                                  smooth={true}
                                                  hashSpy={true}
                                                  offset={i === 0 ? 0 : 50}
                                                  duration={1000}
                                                  delay={0}
                                                  isDynamic={true}
                                                  onSetActive={(e) => {
                                                      setSelected(e)
                                                  }}
                                                  onSetInactive={(e) => {
                                                      setSelectedPrev(e)
                                                  }}
                                                  key={i}
                                                  ignoreCancelEvents={false}
                                                  spyThrottle={300}>
                        <p onClick={() => setSelected(el.link)}
                           className={`text-[1.1rem] text-white ml-9 cursor-pointer transition-all hover:text-[#e31b6d] ${selected === el.link && `text-[#e31b6d]`}`}>{el.title}</p>
                    </Link>)}
                </div>
            </Container>
        </div>
    );
};

export default NavBar;
