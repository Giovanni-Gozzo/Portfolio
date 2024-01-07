import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import{ArrowRightCircle} from "react-bootstrap-icons";
import headerImg from '../assets/img/Header Image.svg';
import {useEffect, useState} from "react";

export const Banner = () => {
    const [LoopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = ["developpeur web","developpeur d'application","UI/UX Designer"];
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const period = 2000;

    useEffect(() => {
      let ticker = setInterval(() => {
          tick();
      }, delta)
        return  () => clearInterval(ticker);
    },[text])

const tick = () => {
        let i= LoopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText= isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);
        setText(updatedText);
        if(isDeleting){
            setDelta(delta => delta /2)
        }if(!isDeleting && updatedText === fullText){
            setDelta(period);
            setIsDeleting(true);
        }else if(isDeleting && updatedText === ''){
            setIsDeleting(false);
            setLoopNum(LoopNum => LoopNum + 1);
            setDelta(500);
        }
    }

    return (
        <section className="banner" id={'home'}>
            <Container>
                <Row className={"align-items-center"}>
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline">Welcome to my Portofolio</span>
                        <h1>{ `Bonjour je suis  ` }<span className={'wrap'}>{text}</span></h1>
                        <p className={"maxwidthgio"}> Je m'apelle Giovanni je suis Etudiant en BUT Informatique en 2e année, Je suis capable de créer des sites Web, de travailler sur des objets Java, de contribuer à des projets GitHub et Figma, et de requêter des bases de données. J'ai également une expérience formée avec la création de macros VBA et la maîtrise des tableurs.
                        </p>
                        <button onClick={() => window.location.href="/biographie"}> Ma biographie <ArrowRightCircle size={25}/> </button>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={headerImg} alt={"Header img"}/>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}
