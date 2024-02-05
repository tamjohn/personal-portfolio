import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";

function TrackVisibility(props: { children: (isVisible: boolean) => React.ReactNode }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleVisibilityChange = (visible: boolean) => {
      setIsVisible(visible);
    };

    return () => {
    };
  }, []);

  return <>{props.children(isVisible)}</>;
}

const Banner: React.FC = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState<string>('');
  const typingSpeed = 150; 
  const deletionSpeed = 100; 
  const [index, setIndex] = useState<number>(1);
  const toRotate: string[] = [ "Hello! I'm Johnathan.", "I am a Software Developer."];
  const period: number = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, isDeleting ? deletionSpeed : typingSpeed);

    return () => { clearInterval(ticker) };
  }, [text, isDeleting]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (!isDeleting && updatedText === fullText) {
      setTimeout(() => {
        setIsDeleting(true);
      }, period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
    }
  }

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center justify-content-center">
          <Col xs={12}>
            <TrackVisibility>
              {(isVisible) => (
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <span className="tagline">Welcome to my Portfolio</span>
                  <h1>{``}
                  <span className="txt-rotate" data-period="100"><span className="wrap">{text}</span></span></h1>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Banner;

