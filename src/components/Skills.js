import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import meter1 from '../assets/img/Meter .svg';
import meter2 from '../assets/img/Meter2 (1).svg';
import meter3 from '../assets/img/Meter3 (1).svg';
import colorSharp from '../assets/img/Color Sharp.png';

export const Skills = () => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    return (
        <section className={"skills"} id={"skills"}>
            <Container>
                <Row>
                    <Col>
                        <div className="skill-bx">
                            <h2>Compétences</h2>
                            <p>Voila mes compétences général en matières de dévelopement informatique bien sur le pourcentage est une approximation il est préférable de prendre en compte les language utilisé lors de mes projets informatique</p>
                            <Carousel responsive={responsive} infinite={true} className={"skill-slider"}>
                                <div className="item">
                                    <img src={meter1} alt={"skill img"}/>
                                    <h5>Developement Web</h5>
                                </div>
                                <div className="item">
                                    <img src={meter2} alt={"skill img"}/>
                                    <h5>Base de donnée</h5>
                                </div>
                                <div className="item">
                                    <img src={meter3} alt={"skill img"}/>
                                    <h5>Application</h5>
                                </div>
                                <div className="item">
                                    <img src={meter1} alt={"skill img"}/>
                                    <h5>Méthode Scrum</h5>
                                </div>
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
            <img className={"background-image-left"} src={colorSharp} alt={"uyefcgu"}/>
        </section>
    )
}
