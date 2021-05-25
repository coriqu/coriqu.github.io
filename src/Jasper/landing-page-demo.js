import {useEffect} from 'react';
import { Container, Row, Col, ListGroup, Carousel} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Footer from './common-components/Footer/Footer.js';
import styled from "styled-components";
import "./home.css";
import 'animate.css';
/**
 * import images
 */
import Hero from './../assets/img/jasper/hero.jpg';
import ETSicon1 from './../assets/img/jasper/easytostart-nocontracts.svg';
import ETSicon2 from './../assets/img/jasper/easytostart-24hsupport.svg';
import ETSicon3 from './../assets/img/jasper/easytostart-integratedsystem.svg';
import ETSicon4 from './../assets/img/jasper/easytostart-oneclick.svg';
import Featuresicon1 from './../assets/img/jasper/features-realtime.svg';
import Featuresicon2 from './../assets/img/jasper/easytostart-oneclick.svg';
import Featuresicon3 from './../assets/img/jasper/features-patientfriendly.svg';
import Helpicon1 from './../assets/img/jasper/help-5stars.svg';
import Helpicon2 from './../assets/img/jasper/help-savetime.svg';
import Helpicon3 from './../assets/img/jasper/help-paymentplan.svg';
import Helpicon0 from './../assets/img/jasper/help-unsatisfied.svg';
import slide1 from './../assets/img/jasper/slide1.svg'
import slide2 from './../assets/img/jasper/slide2.svg'
import slide3 from './../assets/img/jasper/slide3.svg'
import slide4 from './../assets/img/jasper/slide4.svg'
import slide5 from './../assets/img/jasper/slide5.svg'
import slide6 from './../assets/img/jasper/slide6.svg'
import slide7 from './../assets/img/jasper/slide7.svg'
import slide8 from './../assets/img/jasper/slide8.svg'
import slide9 from './../assets/img/jasper/slide9.svg'
import slide10 from './../assets/img/jasper/slide10.svg'


const FullscreenContainer = styled(Container)`
  position: relative;
  min-height: 100vh;
  background-color: #f5f9fb;
  padding: 3rem 6rem;
  overflow: hidden;
  > svg {
    position: absolute;
    width: 100%;
    bottom: 0;
    left: 0;
    fill: #fff;
  }
  &.bg-lightblue {
    width: 100%;
    background-color: #f5f9fb !important;
    fill: #fff;
  }
  @media (max-width: 768px) {
    padding: 1em;
  }
`;

const ImgCol = styled(Col)`
  & > img {
    position: relative;
    left: -10%;
    width: 140%;
    height: auto;
  }
`;
const StyledContainer = styled(Container)`
  position: relative;
  padding: 5rem;
  > svg {
    opacity: 0.5;
    position: absolute;
    top: 25%;
    left: 0;
    width: 100%;
  }
  .pinkline,
  .grayline {
    fill: none;
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke-width: 8px;
    stroke-dasharray: 30 30;
  }
  .pinkline {
    stroke: var(--main-color-pink-light);
  }
  .grayline {
    stroke: var(--main-color-green-light);
    opacity: 0.5;
  }
  @media (max-width: 768px) {
    padding: 1em;
  }
  ${props => {
    if (props.dark) {
      return `
        background-color: var(--main-color-green-dark);
        color: var(--text-color-white);
    `
    } else if (props.light) {
      return `
        background-color: rgba(129, 188, 184, 0.1);
        color: var(--text-color-black);
    `
    } else {
      return `
        background-color: var(--color-white);
        color: var(--text-color-black);
    `
    }
  }}
`;
const H1 = styled.h1`
  font-size: 3rem;
  font-family: "Merriweather", serif;
  font-weight: 900;
  line-height: 1.6;
  margin: 1em 0;
`;
const H2 = styled.h2`
  font-family: "Merriweather", serif;
  font-weight: 900;
  line-height: 1.6;
  margin: 1em 0;
  &.webinar {
    max-width: 900px;
  }
`;
const H3 = styled.h3`
  font-family: "Merriweather", serif;
  font-weight: 900;
  line-height: 1.6;
  &.red {
    color: var(--text-color-red);
  }
  &.green {
    color: var(--main-color-green-dark);
  }
`;
const Card = styled.div`
  height: 100%;
  .card-body {
    position: relative;
    padding: 3rem 2rem;
    font-size: 14px;
    ::before,
    ::after {
      position: absolute;
      font-family: "PT Mono", monospace;
      font-size: 64px;
      color: var(--main-color-pink-dark);
    }
    ::before {
      content: open-quote;
      top: 0;
      left: 1rem;
    }
    ::after {
      content: close-quote;
      bottom: 0.5rem;
      right: 1rem;
    }
  }
  .card-footer {
    margin-top: -3rem;
    padding: 1rem 2rem;
    background-color: transparent;
    border-top: 0;
    > p.name {
      font-family: "Merriweather", serif;
      font-size: 14px;
      font-weight: 700;
      line-height: 1;
    }
    > p.position {
      color: var(--text-color-gray3);
      font-size: 12px;
      line-height: 1;
    }
  }
`;
const StyledListGroup = styled(ListGroup)`
  & > div {
    border: 0;
    padding: 0;
    background-color: transparent;
  }
  @media (max-width: 768px) {
    > .list-group-item {
      flex-direction: column;
    }
  }
`;
const StyledListGroup2 = styled(ListGroup)`
  & > div {
    border: 0;
    margin-right: 2rem;
    background-color: var(--color-white);
  }
  @media (max-width: 768px) {
    > .list-group-item {
      flex-direction: column;
    }
  }
`;
const StyledBgRow = styled(Row)`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  margin: 0;
  & > .bg-red {
    background-color: var(--bg-color-red);
    opacity: 0.1;
  }
  & > .bg-green {
    background-color: var(--main-color-green-light);
    opacity: 0.1;
  }
`;

const IconDiv = styled.div`
  position: relative;
  display: flex;
  height: 60px;
  min-width: 60px;
  justify-content: center;
  margin: 3em;
  & > img {
    height: 100%;
  }
  :before {
    z-index: -100;
    content: "";
    position: absolute;
    display: inline-block;
    top: 50%;
    left: 50%;
    margin-top: -30px;
    margin-left: -30px;
    width: 60px;
    height: 60px;
    border-radius: 30px;
    background-color: var(--color-white);
  }
  @media (max-width: 768px) {
    margin: 2em;
    height: 50px;
    min-width: 50px;
  }
`;
const AdvantageContainer = styled(Container)`
  position: relative;
  background-color: var(--main-color-green-dark);
  color: var(--text-color-white);
  padding: 5rem 3rem;
  h1 {
    color: var(--main-color-green-light);
  }
  > svg {
    position: absolute;
    width: 100%;
    top: 0;
    left: 0;
    fill: var(--main-color-green-dark);
    background-color: #fff !important;
  }
  @media (max-width: 768px) {
    padding: 1em;
  }
`;
const AdvantageNumber = styled.h3`
  font-size: 4em;
  font-weight: 900;
  line-height: 1.6;
  & > span {
    font-size: 0.5em;
  }
`;
const StyledBtn = styled.button`
  font-size: 16px;
  font-weight: 500;
  border-radius: 30px;
  background-color: var(--main-color-green);
  border-color: var(--main-color-green);
  color: var(--text-color-white);
  padding: auto 32px;
  min-width: 240px;
  min-height: 48px;
  &:hover {
    background-color: var(--main-color-green-dark);
  }
  :focus,
  :not(:disabled):not(.disabled):active {
    color: #fff;
    background-color: var(--main-color-green-dark);
    border-color: var(--main-color-green-light);
    box-shadow: 0 0 0 0.2rem var(--main-color-green-light);
  }
`;

const StyledCarousel = styled(Carousel)`
  img {
    display: block;
    margin: auto;
    width: 80%;
    max-height: 40vh;
  }
  .carousel-item {
    display: flex;
    visibility: hidden;
    position: relative;
    min-height: 80vh;
  }
  .carousel-item.active {
    visibility: visible;
    display: flex;
  }
  .carousel-caption {
    position: absolute;
    right: 0;
    bottom: 20px;
    left: 0;
    z-index: 10;
    padding-top: 20px;
    padding-bottom: 20px;
    color: var(--text-color-black);
    text-align: center;
  }
  .carousel-indicators li {
    background-color: var(--main-color-pink-dark);
  }
  .carousel-control-prev,
  .carousel-control-next {
    color: var(--main-color-pink-dark);
  }
  .carousel-control-next-icon,
  .carousel-control-prev-icon {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-size: 60%;
    background-color: var(--main-color-pink-dark);
  }
`;
const slideControls = [
  {
    img: slide1,
    caption: "Office Manager sends link to patient’s phone.",
  },
  {
    img: slide2,
    caption: "Patient recieves link to upload a picture of their insurance.",
  },
  {
    img: slide3,
    caption: "Puts down credit card.",
  },
  {
    img: slide4,
    caption: "Office manager makes patient aware that no-show fee can be charged.",
  },
  {
    img: slide5,
    caption: "Pateint gets estimated cost of treatment.",
  },
  {
    img: slide6,
    caption: "Patient does treatment.",
  },
  {
    img: slide7,
    caption: "Patient pays bills via ApplePay.",
  },
  {
    img: slide8,
    caption: "Patient pays remaining outstanding balance via payment plan.",
  },
  {
    img: slide9,
    caption: "Patient is prompted to leave a review.",
  },
  {
    img: slide10,
    caption: "Office gets 3x the reviews with Jasper!",
  },
];

const Home = (props) => {
  useEffect(() => {
    const faders = document.querySelectorAll(".fadeInUp, .fadeInLeft, .fadeInRight");
    const appearOptions = {
      threshold: 0,
      rootMargin: "0px 0px -150px 0px",
    };
    const appearOnScroll = new IntersectionObserver(function (entries, appearOnScroll) {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        } else {
          const fadeInUpCls = ["appear", "animate__animated", "animate__fadeInUp"];
          const fadeInLeftCls = ["appear", "animate__animated", "animate__fadeInLeft"];
          const fadeInRightCls = ["appear", "animate__animated", "animate__fadeInRight"];
          if (entry.target.classList.contains("fadeInUp")) {
            entry.target.classList.add(...fadeInUpCls);
          } else if (entry.target.classList.contains("fadeInLeft")) {
            entry.target.classList.add(...fadeInLeftCls);
          } else if (entry.target.classList.contains("fadeInRight")) {
            entry.target.classList.add(...fadeInRightCls);
          }

          appearOnScroll.unobserve(entry.target);
        }
      });
    }, appearOptions);

    faders.forEach((fader) => {
      appearOnScroll.observe(fader);
    });
  }, []);
  return (
    <div>
      <FullscreenContainer fluid className="d-flex align-items-center">
        <Row>
          <Col lg={7}>
            <h5>FOR DENTISTS</h5>
            <H1 className="fadeInLeft">Verify insurance & checkout patients with one click.</H1>
            <p className="my-5 pr-5 fadeInLeft">Jasper is the web platform for office managers to give your patients the best checkout experience, simplify your workflow, and increase collection success.</p>
            <StyledBtn type="button" className="btn btn-primary btn-lg fadeInLeft">
              Request information
            </StyledBtn>
          </Col>
          <ImgCol lg={5} className="d-flex align-items-center align-items-end">
            <img src={Hero} alt="hero" />
          </ImgCol>
        </Row>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1707 206.7">
          <defs></defs>
          <title>bg-bluelight_1</title>
          <g id="layer_2" data-name="layer 2">
            <g id="layer_1-2" data-name="layer 1">
              <path className="bg-lightblue" d="M0,206.56c136.57,1.29,339.09-5.73,574-50.13,207.62-39.23,289-79,476-114.58,150.07-28.51,369.75-54.59,657-35.09v199.8Z" />
            </g>
          </g>
        </svg>
      </FullscreenContainer>

      <StyledContainer fluid>
        <Row className="justify-content-center">
          <Col>
            <H2 className="text-center my-3">Features that Matter to Your Office</H2>
          </Col>
        </Row>
        <Row className="px-5">
          <Col lg={4} className="justify-content-center fadeInUp">
            <IconDiv>
              <img src={Featuresicon1} alt="icon" />
            </IconDiv>
            <h5 className="text-center my-3">Real-time Insurance Verification</h5>
            <p className="px-3">Before patients step into your office, you can access each patient's detailed insurance information.</p>
          </Col>
          <Col lg={4} className="justify-content-center fadeInUp">
            <IconDiv>
              <img src={Featuresicon2} alt="icon" />
            </IconDiv>
            <h5 className="text-center my-3">One-click Patient Checkout</h5>
            <p className="px-3">Send patients their bill via text-to-pay. Patients can use their cards, phones, and ACH to pay you quickly. </p>
          </Col>
          <Col lg={4} className="justify-content-center fadeInUp">
            <IconDiv>
              <img src={Featuresicon3} alt="icon" />
            </IconDiv>
            <h5 className="text-center my-3">Patient Friendly Payment Plans</h5>
            <p className="px-3">Offer more patients 0% interest payment plans without the hassle or the risk to your office. </p>
          </Col>
        </Row>
      </StyledContainer>

      <AdvantageContainer fluid>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1707 71.14">
          <defs></defs>
          <title>bg-greendark</title>
          <g id="layer" data-name="layer">
            <g id="layer_1" data-name="layer 1">
              <path className="bg-greendark" d="M0,71.09V2.33C287.25-4.38,506.93,4.59,657,14.4c187,12.24,268.38,25.93,476,39.44,234.91,15.28,437.43,17.69,574,17.25Z" />
            </g>
          </g>
        </svg>
        <Row className="justify-content-center">
          <Col>
            <H1 className="text-center my-5">The Jasper advantage</H1>
          </Col>
        </Row>
        <Row>
          <Col sm={4} className="text-center fadeInUp">
            <AdvantageNumber>
              +58<span>%</span>
            </AdvantageNumber>
            <h5>Patient satisfaction</h5>
          </Col>
          <Col sm={4} className="text-center fadeInUp">
            <AdvantageNumber>
              +25<span>%</span>
            </AdvantageNumber>
            <h5>Provider revenue</h5>
          </Col>
          <Col sm={4} className="text-center fadeInUp">
            <AdvantageNumber>
              +1<span>hr</span>
            </AdvantageNumber>
            <h5>Time saved per day</h5>
          </Col>
        </Row>
      </AdvantageContainer>

      <StyledContainer fluid className="p-5 position-relative">
        <StyledBgRow>
          <Col lg={6} className="bg-red"></Col>
          <Col lg={6} className="bg-green"></Col>
        </StyledBgRow>
        <Row>
          <Col lg={6}>
            <H3 className="text-center my-5 red fadeInLeft">If you are stuggling with...</H3>
            <StyledListGroup>
              <ListGroup.Item className="d-flex align-items-center fadeInLeft">
                <IconDiv>
                  <img src={Helpicon0} alt="icon" />
                </IconDiv>
                <div>
                  <h5 className="my-3">Unsatisfied patients</h5>
                  <p>Over 65% of unsatisfied reviews come from a poor checkout and billing process.</p>
                </div>
              </ListGroup.Item>
              <ListGroup.Item className="d-flex align-items-center fadeInLeft">
                <IconDiv>
                  <img src={Helpicon0} alt="icon" />
                </IconDiv>
                <div>
                  <h5 className="my-3">Spending hours on insurance</h5>
                  <p>Office managers routinely spend over an hour a day on just trying to reach insurance.</p>
                </div>
              </ListGroup.Item>
              <ListGroup.Item className="d-flex align-items-center fadeInLeft">
                <IconDiv>
                  <img src={Helpicon0} alt="icon" />
                </IconDiv>
                <div>
                  <h5 className="my-3">Collecting late or unpaid payments</h5>
                  <p>You have aging accounts and patients saying no to treatment due to cost.</p>
                </div>
              </ListGroup.Item>
            </StyledListGroup>
          </Col>
          <Col lg={6} className="fadeInRight">
            <H3 className="text-center my-5 green fadeInRight">That's where Jasper can help</H3>
            <StyledListGroup>
              <ListGroup.Item className="d-flex align-items-center fadeInRight">
                <IconDiv>
                  <img src={Helpicon1} alt="icon" />
                </IconDiv>
                <div>
                  <h5 className="my-3">Provide 5-star patient experience</h5>
                  <p>Our virtual checkout platform gives patients the most convenient and delightful user experience when leaving your office.</p>
                </div>
              </ListGroup.Item>
              <ListGroup.Item className="d-flex align-items-center fadeInRight">
                <IconDiv>
                  <img src={Helpicon2} alt="icon" />
                </IconDiv>
                <div>
                  <h5 className="my-3">Save hours a day on admin work</h5>
                  <p>Get real-time, detailed insurance eligibility and benefits before your patient gets into the office.</p>
                </div>
              </ListGroup.Item>
              <ListGroup.Item className="d-flex align-items-center fadeInRight">
                <IconDiv>
                  <img src={Helpicon3} alt="icon" />
                </IconDiv>
                <div>
                  <h5 className="my-3">Easy payment plans with no collections</h5>
                  <p>Offer patients 0% interest payment plans that get you paid immediately, and automate your collections process.</p>
                </div>
              </ListGroup.Item>
            </StyledListGroup>
          </Col>
        </Row>
      </StyledContainer>

      <StyledContainer fluid>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1497.21 256.3">
          <defs></defs>
          <title>pinkline</title>
          <g id="layer_2" data-name="layer 2">
            <g id="layer_1-2" data-name="layer 1">
              <path className="pinkline" d="M1495.21,148.88C1383.46,227,1256.21,251,1163.71,254,845.61,264.32,691.65,2,210.71,2A1106.67,1106.67,0,0,0,2,22" />
            </g>
          </g>
        </svg>
        <Row className="justify-content-center my-5">
          <Col>
            <H3 className="text-center">Quotes</H3>
          </Col>
        </Row>
        <Row className="d-flex align-items-stretch">
          <Col sm={6} xl={3} className="fadeInUp my-3">
            <Card className="card">
              <div className="card-body">
                <p>Jasper saves me 12 hours a week. I no longer have to manually verify insurance</p>
              </div>
              <div className="card-footer text-right">
                <p className="name">- Bella Brooks</p>
                <p className="position">Office Manager, Dallas</p>
              </div>
            </Card>
          </Col>
          <Col sm={6} xl={3} className="fadeInUp my-3">
            <Card className="card">
              <div className="card-body">
                <p>Jasper saves me 20 hours a week. I no longer have to manually verify insurance, chase down patients for their unpaid bills or awkwardly discuss a payment plan. </p>
              </div>
              <div className="card-footer text-right">
                <p className="name">- David Warwik</p>
                <p className="position">Office Manager, Chicago</p>
              </div>
            </Card>
          </Col>
          <Col sm={6} xl={3} className="fadeInUp my-3">
            <Card className="card">
              <div className="card-body">
                <p>We were able to get 28+ reviews in our first month of using Jasper. Our rating on Google increased by 2 stars!</p>
              </div>
              <div className="card-footer text-right">
                <p className="name">- Laura Davids</p>
                <p className="position">Office Manager, Atlanta</p>
              </div>
            </Card>
          </Col>
          <Col sm={6} xl={3} className="fadeInUp my-3">
            <Card className="card">
              <div className="card-body">
                <p>Jasper helped us to move our payments & billing system to 100% online. Their text-to-pay solution helped us to double our collections in the first month.</p>
              </div>
              <div className="card-footer text-right">
                <p className="name">- Paulina Schwitz</p>
                <p className="position">Office Manager, Orlando</p>
              </div>
            </Card>
          </Col>
        </Row>
      </StyledContainer>

      <FullscreenContainer fluid className="d-flex align-items-center">
        <Row className="d-flex align-items-center">
          <Col lg={6} className="fadeInLeft">
            <StyledCarousel className="d-flex align-items-center">
              {slideControls.map((item, i) => (
                <Carousel.Item className="justify-content-center align-items-center" key={i}>
                  <img className="" src={item.img} alt={i} />
                  <Carousel.Caption>
                    <p>Step {i + 1}</p>
                    <h6>{item.caption}</h6>
                  </Carousel.Caption>
                </Carousel.Item>
              ))}
            </StyledCarousel>
          </Col>
          <Col lg={6} className="fadeInRight">
            <H2>Jasper is quick and easy for all types of offices.</H2>
            <p className="my-5">Jasper is a web platform for office managers to give your patients the best checkout experience, simplify your workflow, and increase collection success.</p>
            <StyledBtn type="button" className="btn btn-primary btn-lg">
              Learn how Jasper works
            </StyledBtn>
          </Col>
        </Row>
      </FullscreenContainer>

      <StyledContainer fluid>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1497.21 256.3">
          <defs></defs>
          <title>grayline</title>
          <g id="layer_2" data-name="layer 2">
            <g id="layer_1-2" data-name="layer 1">
              <path className="grayline" d="M1495.21,148.88C1383.46,227,1256.21,251,1163.71,254,845.61,264.32,691.65,2,210.71,2A1106.67,1106.67,0,0,0,2,22" />
            </g>
          </g>
        </svg>
        <Row>
          <Col>
            <H2 className="text-center">Easy to Start</H2>
          </Col>
        </Row>
        <Row className="px-5">
          <Col sm={6} lg={3} className="fadeInRight">
            <IconDiv>
              <img src={ETSicon1} alt="icon" />
            </IconDiv>
            <h5 className="my-3">No annual contracts</h5>
            <p>No contracts. Simple to use.</p>
          </Col>
          <Col sm={6} lg={3} className="fadeInRight">
            <IconDiv>
              <img src={ETSicon2} alt="icon" />
            </IconDiv>
            <h5 className="my-3">24-hr U.S. Based Support</h5>
            <p>We are available 24/7 to help you through any product challenges. All of our reps are based in the USA.</p>
          </Col>
          <Col sm={6} lg={3} className="fadeInRight">
            <IconDiv>
              <img src={ETSicon3} alt="icon" />
            </IconDiv>
            <h5 className="my-3">Integrated into your system</h5>
            <p>Automatically integrates into your existing software and applications.</p>
          </Col>
          <Col sm={6} lg={3} className="fadeInRight">
            <IconDiv>
              <img src={ETSicon4} alt="icon" />
            </IconDiv>
            <h5 className="my-3">97 seconds to learn</h5>
            <p>On average, office staff are able to learn and start using the product in 97 seconds. It’s that quick and easy.</p>
          </Col>
        </Row>
        <Row className="p-5 text-center fadeInUp">
          <Col>
            <StyledBtn type="button" className="btn btn-primary btn-lg">
              Request information
            </StyledBtn>
          </Col>
        </Row>
      </StyledContainer>


      <StyledContainer light fluid className="d-flex align-items-center justify-content-center">
        <Row className="text-center fadeInUp">
          <Col>
            <H2 className="webinar">Check out some of our insightful appreciation office interviews or register for a webinar!</H2>
            <StyledBtn type="button" className="btn btn-primary btn-lg">
              Register for webinar
            </StyledBtn>
          </Col>
        </Row>
      </StyledContainer>
      

    </div>
  );
};

export default Home;
