import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./portfolio.css";

export const LRM = () => {
    return (
        <section className="project-portfolio">
            <Container>
                <Row>
                    <Col>
                        <h2 className="project-portfolio-title">Projet Large Relational Model (LRM)</h2>
                        <div className="project-portfolio-section">
                            <h3 className="project-portfolio-category">Description</h3>
                            <p>
                                Le projet Large Relational Model (LRM) est un logiciel de modélisation de base de données relationnelles utilisant des schémas Entité/Association. Il permet également le versionnement des schémas grâce à Prisma. Le projet est actuellement à l'état de prototype.
                            </p>
                        </div>
                        <div className="project-portfolio-section">
                            <h3 className="project-portfolio-category">Compétences</h3>
                            <p>
                                Les compétences utilisées dans ce projet sont les suivantes :
                            </p>
                            <ul>
                                <li>Développement de logiciels</li>
                                <li>Tailwind CSS</li>
                                <li>Tauri</li>
                                <li>Rust</li>
                                <li>Développement full-stack</li>
                                <li>React.js</li>
                                <li>TypeScript</li>
                            </ul>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};
