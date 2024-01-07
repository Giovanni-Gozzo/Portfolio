import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./portfolio.css";

export const ProjetAvenor = () => {
    return (
        <section className="project-portfolio">
            <Container>
                <Row>
                    <Col>
                        <h2 className="project-portfolio-title">Projet d'avenir</h2>
                        <div className="project-portfolio-section">
                            <h3 className="project-portfolio-category">Stage chez Yooz</h3>
                            <p>
                                J'ai récemment trouvé un stage chez l'entreprise Yooz, où je vais travailler sur l'automatisation de la facturation comptable grâce à l'intelligence artificielle. Mon objectif est de développer une IA qui sera capable de traiter les factures de manière automatique, simplifiant ainsi le processus de comptabilité pour l'entreprise.
                            </p>
                        </div>
                        <div className="project-portfolio-section">
                            <h3 className="project-portfolio-category">Alternance chez Yooz</h3>
                            <p>
                                Après mon stage, j'aimerais poursuivre mon parcours professionnel en obtenant une alternance chez Yooz. Cette expérience me permettra de continuer à développer mes compétences en intelligence artificielle et d'appliquer mes connaissances dans un contexte professionnel. J'espère pouvoir contribuer activement à l'évolution des solutions d'automatisation de la comptabilité de l'entreprise.
                            </p>
                        </div>
                        <div className="project-portfolio-section">
                            <h3 className="project-portfolio-category">Master en Intelligence Artificielle</h3>
                            <p>
                                À la fin de mon Brevet Universitaire de Technologie (BUT), j'ai l'intention de poursuivre mes études en intégrant un Master en Intelligence Artificielle. Ce programme me permettra d'approfondir mes connaissances dans ce domaine qui me fascine, et d'explorer de nouvelles perspectives en tant que data analyst ou même en tant que développeur d'IA. J'aspire à contribuer à l'avancement de cette technologie passionnante et à participer à la création de solutions innovantes.
                            </p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};
