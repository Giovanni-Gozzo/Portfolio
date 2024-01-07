import "./Biographie.css";
import cv from "../assets/img/CV_GOZZO_Giovanni.pdf";
export const Biographie = () => {
    return (
        <div className="biographie-container">
            <h2 className="biographie-titre">Biographie</h2>

            <div className="section">
                <h2>Introduction</h2>
                <p>Actuellement en cours de formation en BUT Informatique à Montpellier, je suis activement à la
                    recherche d'un stage d'une durée de 10 semaines à partir du 8 avril. Depuis mon jeune âge, j'ai
                    acquis des compétences d'autodidacte, me permettant d'apprendre rapidement et de m'adapter à
                    différentes situations. Je suis également très motivé et je suis convaincu de pouvoir apporter une
                    valeur ajoutée à votre entreprise.</p>
            </div>

            <div className="section">
                <h2>Expérience professionnelle</h2>
                <p>Barman - Avignon, France | Juillet 2022</p>
                <p>Manoeuvre BTP - Avignon, France | Mai 2023</p>
            </div>

            <div className="section">
                <h2>Éducation</h2>
                <p>BUT (Bachelor universitaire et technologique) Informatique - IUT Montpellier-Sète, Montpellier,
                    2022-2025</p>
                <p>DCG (Diplôme Comptabilité et Gestion) - Lycée Théodore Aubanel, Avignon, 2021-2022</p>
                <p>Baccalauréat Mention assez bien / Spécialité Mathématiques, SES (Science économique et social), NSI
                    (Numérique et science de l’informatique) - Lycée Théodore Aubanel, Avignon, 2020-2021</p>
            </div>

            <div className="section">
                <h2>Compétences</h2>
                <p>Python : Intermédiaire</p>
                <p>Java : Intermédiaire</p>
                <p>SQL : Intermédiaire</p>
                <p>PHP : Intermédiaire</p>
                <p>VBA : Débutant</p>
                <p>JavaScript : Débutant</p>
            </div>

            <div className="section">
                <h2>Intérêts et hobbies</h2>
                <p>Création site Web</p>
                <p>Création et remplissage de Base de données</p>
                <p>Développement Orienté Objets Java</p>
                <p>Travail en équipe</p>
                <p>Projets Figma et GitHub</p>
                <p>Requêtage Base de Données</p>
                <p>Création Macro VBA</p>
                <p>Maitrise Tableur</p>
            </div>

            <div className="section">
                <h2>Réalisations</h2>
                <p>Application JavaFX (Aventuriers du rails) - Montpellier, France | 2022/2023</p>
                <p>Sites Web (PHP, JavaScript, CSS Tailwind) - Montpellier, France | 2023/2024</p>
            </div>

            <div className="section">
                <h2>Références</h2>
                <p>Gozzo Giovanni</p>
                <p>220 rue du Pioch de Boutonnet</p>
                <p>34090 Montpellier</p>
                <p>0622393798</p>
                <p>gio.gozzo84@gmail.com</p>
            </div>

            <div className="section">
                <h2>Télécharger mon CV</h2>
                <a href={cv} target="_blank" rel="noreferrer">CV</a>
        </div>

        </div>
    );
}
