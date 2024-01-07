import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import {Tab} from "react-bootstrap";
import {ProjectCards} from "./ProjectCards";
import colorSharp2 from '../assets/img/Color Sharp (1).png';
import img1 from '../assets/img/ProjectPortfolio.png';
import img2 from '../assets/img/CleanShot 2024-01-07 at 16.55.08@2x.png';
import img3 from '../assets/img/CleanShot 2024-01-07 at 17.11.32@2x.png';
import img4 from '../assets/img/CleanShot 2024-01-07 at 17.19.39@2x.png';
import img5 from '../assets/img/CleanShot 2024-01-07 at 17.26.12@2x.png';
import img6 from '../assets/img/CleanShot 2024-01-07 at 17.33.20@2x.png';
export const Projects = () => {
    const projects =[
        {
            title: 'Portfolio',
            description: 'Cela est un projet personnel qui me permet de mettre en avant mes compétences et mes projets.',
            imgUrl: img1,
        },
        {
            title: 'GradHire',
            description: 'Cela est un projet d\'école qui consiste à créer une plateforme de recherche de stage ou alternance pour les étudiants.',
            imgUrl: img2,
        },
        {
            title: 'MAM Site',
            description: 'Cela est un projet personnel qui a permis à une association de mettre en avant leur activité et leur projet.',
            imgUrl: img3,
        },
        {
            title: 'LRM',
            description: 'Cela est un projet personnel qui permet de modéliser une base de donnée afin de la modifier et de la supprimer.',
            imgUrl: img4,
        },
        {
            title: 'En attente',
            description: 'En attente',
                imgUrl: img5,
        },{
        title: 'Fate of the same',
        description: 'Cela est un projet d\'école facultatif qui consiste à créer un jeu vidéo en 30h sur un thème imposé.',
        imgUrl: img6,
        }

    ]
    return (
        <section className={'project'} id={'project'}>
            <Container>
                <Row>
                    <Col>
                        <h2>Projects</h2>
                        <p>Voici mes différent projets que j'ai réalisé lors de mon parcours scolaire mais également lors de mes projets personnes certains sont en cours donc le rendu finale n'est pas encore accessible.</p>
                        <Tab.Container defaultActiveKey="first" id={"projects-tabs"}>
                            <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">Dévelopement web</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">Base de donnée</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third">Jeux vidéo</Nav.Link>
                                </Nav.Item>
                            </Nav>
                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                    <Row>
                                        <a href="/ProjectPortfolio" className={"noa"}>
                                            <ProjectCards key={1} {...projects[0]} />
                                        </a>
                                        <a href="/ProjectGradhire" className={"noa"}>
                                            <ProjectCards key={2} {...projects[1]} />
                                        </a>
                                        <a href="/ProjectMAM" className={"noa"}>
                                            <ProjectCards key={3} {...projects[2]} />
                                        </a>
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                    <Row>
                                        <a href={"/ProjectLRM"} className={"noa"}>
                                            <ProjectCards key={4} {...projects[3]} />
                                        </a>
                                        <a href={"/"} className={"noa"}>
                                            <ProjectCards key={5} {...projects[4]} />
                                        </a>
                                        <a href={"/"} className={"noa"}>
                                            <ProjectCards key={5} {...projects[4]} />
                                        </a>
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="third">
                                    <Row>
                                        <a href={"/Fate"} className={"noa"}>
                                            <ProjectCards key={6} {...projects[5]} />
                                        </a>
                                        <a href={"/"} className={"noa"}>
                                            <ProjectCards key={5} {...projects[4]} />
                                        </a>
                                        <a href={"/"} className={"noa"}>
                                            <ProjectCards key={5} {...projects[4]} />
                                        </a>
                                    </Row>
                                </Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
            <img src={colorSharp2} alt={"eliuche"} className={'background-image-right'}/>
        </section>
    )
}
