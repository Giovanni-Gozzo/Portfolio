import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./portfolio.css";


export const PortFolio = () => {
    return (
        <section className="project-portfolio">
            <Container>
                <Row>
                    <Col>
                        <h2 className="project-portfolio-title">Projet Portfolio</h2>
                        <div className="project-portfolio-section">
                            <h3 className="project-portfolio-category">Introduction</h3>
                            <p>
                                Le projet Portfolio est une plateforme web que j'ai développée pour mettre en valeur mes compétences et mes projets. Ce projet m'a permis d'apprendre de nouveaux langages et technologies tels que React et Bootstrap, qui ne sont pas enseignés en cours. En me spécialisant davantage dans le développement web, j'ai pu ajouter de nombreuses fonctionnalités et améliorations à mon portfolio.
                            </p>
                        </div>
                        <div className="project-portfolio-section">
                            <h3 className="project-portfolio-category">Technologies utilisées</h3>
                            <p>
                                Le site utilise React pour créer des composants réutilisables et faciliter la gestion de l'interface utilisateur. Bootstrap est utilisé pour le design et la mise en page responsive, ce qui permet à mon portfolio de s'adapter à différents appareils et tailles d'écran.
                            </p>
                        </div>
                        <div className="project-portfolio-section">
                            <h3 className="project-portfolio-category">Fonctionnalités</h3>
                            <p>
                                J'ai également intégré d'autres fonctionnalités pour mettre mon projet en avant, telles que :
                            </p>
                            <ul>
                                <li>Une galerie de projets pour présenter mes réalisations.</li>
                                <li>Un formulaire de contact pour permettre aux visiteurs de me contacter.</li>
                                <li>Des animations et transitions pour une expérience utilisateur plus dynamique.</li>
                                <li>Un système de navigation convivial pour faciliter l'accès aux différentes sections du site.</li>
                            </ul>
                        </div>
                        <div className="project-portfolio-section">
                            <h3 className="project-portfolio-category">Conclusion</h3>
                            <p>
                                Ce projet m'a non seulement permis d'approfondir mes compétences en développement web, mais il m'a également donné l'opportunité de présenter mes réalisations et de me démarquer en tant que développeur web.
                            </p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};
