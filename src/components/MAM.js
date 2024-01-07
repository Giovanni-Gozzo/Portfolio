import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./portfolio.css";

export const MAM = () => {
    return (
        <section className="project-portfolio">
            <Container>
                <Row>
                    <Col>
                        <h2 className="project-portfolio-title">Projet Maison Assistant Maternelle</h2>
                        <div className="project-portfolio-section">
                            <h3 className="project-portfolio-category">Introduction</h3>
                            <p>
                                Le projet de la Maison Assistant Maternelle consiste en la création d'un site web vitrine pour une association qui propose des services d'assistance maternelle. L'objectif de ce projet est de fournir aux parents et aux assistants maternels toutes les informations nécessaires sur les services proposés, les horaires, les tarifs, etc.
                            </p>
                        </div>
                        <div className="project-portfolio-section">
                            <h3 className="project-portfolio-category">Technologies utilisées</h3>
                            <p>
                                Pour ce projet, nous avons utilisé Wix comme CMS (Content Management System) pour créer et gérer le site web. Wix est une plateforme en ligne qui permet de créer des sites web professionnels sans avoir besoin de compétences en programmation.
                            </p>
                        </div>
                        <div className="project-portfolio-section">
                            <h3 className="project-portfolio-category">Fonctionnalités</h3>
                            <p>
                                Le site web vitrine de la Maison Assistant Maternelle propose les fonctionnalités suivantes :
                            </p>
                            <ul>
                                <li>Une présentation de l'association, de son histoire et de sa mission.</li>
                                <li>Une liste des services proposés et des activités organisées.</li>
                                <li>Des informations sur les assistants maternels disponibles, avec leurs profils et leurs disponibilités.</li>
                                <li>Des témoignages de parents satisfaits.</li>
                                <li>Un formulaire de contact pour permettre aux parents de poser des questions ou de demander des informations supplémentaires.</li>
                            </ul>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};
