import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./portfolio.css";

export const Fate = () => {
    return (
        <section className="project-portfolio">
            <Container>
                <Row>
                    <Col>
                        <h2 className="project-portfolio-title">Projet Fate of the Same (Code Game Jam 2023)</h2>
                        <div className="project-portfolio-section">
                            <h3 className="project-portfolio-category">Description</h3>
                            <p>
                                Fate of the Same est un jeu vidéo captivant conçu lors de la 7ᵉ édition du Code Game Jam 2023 à l'IUT de Montpellier-Sète. Le jeu a été réalisé sur Unity et a été créé en seulement 30 heures. Plongez dans cette expérience intense de création et découvrez un univers unique et captivant.
                            </p>
                        </div>
                        <div className="project-portfolio-section">
                            <h3 className="project-portfolio-category">Compétences acquises</h3>
                            <p>
                                Ce projet a permis d'acquérir les compétences suivantes :
                            </p>
                            <ul>
                                <li>Développement de jeux vidéo</li>
                                <li>Utilisation d'Unity</li>
                                <li>Travail en équipe</li>
                                <li>Gestion du temps</li>
                                <li>Créativité</li>
                            </ul>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};
