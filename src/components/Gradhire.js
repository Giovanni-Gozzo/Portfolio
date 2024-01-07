import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./portfolio.css";

export const Gradhire = () => {
    return (
        <section className="project-portfolio">
            <Container>
                <Row>
                    <Col>
                        <h2 className="project-portfolio-title">Projet Gradhire</h2>
                        <div className="project-portfolio-section">
                            <h3 className="project-portfolio-category">Introduction</h3>
                            <p>
                                Le projet Gradhire est une plateforme web dédiée à la recherche de stages et d'alternances, exclusivement destinée aux étudiants du département informatique de Montpellier. L'objectif de ce projet est de concevoir une interface intuitive, élégante et réactive, offrant une expérience utilisateur agréable et optimale pour tous les utilisateurs.
                            </p>
                        </div>
                        <div className="project-portfolio-section">
                            <h3 className="project-portfolio-category">Technologies utilisées</h3>
                            <p>
                                Le site utilise HTML5, Tailwind CSS, JavaScript, PHP, PostgreSQL, PhpMyAdmin, Oracle Database et MySQL pour assurer une gestion efficace des données et garantir une utilisation fluide et une réponse rapide.
                            </p>
                        </div>
                        <div className="project-portfolio-section">
                            <h3 className="project-portfolio-category">Fonctionnalités</h3>
                            <p>
                                Le site propose les fonctionnalités suivantes :
                            </p>
                            <ul>
                                <li>Un système d'authentification basé sur LDAP et de hachage de mots de passe pour garantir un accès restreint.</li>
                                <li>Une interface intuitive, élégante et réactive.</li>
                                <li>Une gestion efficace des données grâce à une base de données performante et un backend PHP robuste.</li>
                            </ul>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};
