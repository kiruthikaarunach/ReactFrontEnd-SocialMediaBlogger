import React, { useState, useEffect } from "react";

import UserService from "../services/user.service";
import {
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBModal,
  MDBModalBody,
  MDBModalFooter,
  MDBBtn,
  MDBModalDialog,
  MDBModalContent,
} from 'mdb-react-ui-kit';
import { MDBCarousel, MDBCarouselItem , MDBCarouselCaption  } from 'mdb-react-ui-kit';


const Home = () => {
  const [content, setContent] = useState("");
  const [modal1, setModal1] = useState(false);
  const [modal2, setModal2] = useState(false);
  const [modal3, setModal3] = useState(false);

  useEffect(() => {
    UserService.getPublicContent().then(
      (response) => {
        setContent(response.data);
      },
      (error) => {
        const _content =
          (error.response && error.response.data) ||
          error.message ||
          error.toString();

        setContent(_content);
      }
    );
  }, []);

  return (
 

   //<div className="container">
  // <div className="container-fluid p-0" style={{ paddingTop: '90px' }}> {/* Add top padding equal to navbar height */}

  //  <div className="container-fluid p-0" style={{ position: 'fixed', top: 40, left: 0, right: 0, bottom: 0 }}>
  <div className="container-fluid p-0" style={{ position: 'fixed', top: 40, left: 0, right: 0, bottom: 0, overflowY: 'auto' }}>
      <div className="px-4 py-4"> {/* Add padding */}
      <MDBCarousel showControls showIndicators>
      <MDBCarouselItem itemId={1}>
        <img src='https://mdbootstrap.com/img/new/slides/047.jpg' className='d-block w-100' alt='...' />
        <MDBCarouselCaption>
          <h10  className="fw-bold fs-4 fst-italic text-success">Are you a Blogger</h10>
          <p  className="fw-bold fs-4 fst-italic text-success">Unleash Your Voice: Join the Thriving Community of Bloggers and Make Your Mark Online!</p>
        </MDBCarouselCaption>
      </MDBCarouselItem>
      <MDBCarouselItem itemId={2}>
        <img src='https://mdbootstrap.com/img/new/slides/042.jpg' className='d-block w-100' alt='...' />

        <MDBCarouselCaption>
          <h5  className="fw-bold fs-4 fst-italic text-dark">Do you have a unique talent</h5>
          <p  className="fw-bold fs-4 fst-italic text-dark">Embrace Your Uniqueness and Let Your Talents Shine Bright!</p>
        </MDBCarouselCaption>
      </MDBCarouselItem>
      <MDBCarouselItem itemId={3}>
        <img src='https://mdbootstrap.com/img/new/slides/043.jpg' className='d-block w-100' alt='...' />
        <MDBCarouselCaption>
          <h5 className="fw-bold fs-4 fst-italic text-secondary">Come here to network</h5>
          <p className="fw-bold fs-4 fst-italic text-secondary">Connect, Collaborate, and Cultivate Success Through Networking</p>
        </MDBCarouselCaption>
      </MDBCarouselItem>
    </MDBCarousel>
    </div>
    <MDBRow className="px-4"> {/* Add padding */}
            <MDBCol lg={4} md={12} className='mb-4 mb-lg-0'>
            <MDBContainer>
      <div className="ratio ratio-16x9">
        <iframe
          src="https://www.youtube.com/embed/vlDzYIIOYmM"
          title="YouTube video"
          allowfullscreen
        ></iframe>
      </div>
    </MDBContainer>
        </MDBCol>

        <MDBCol lg={4} md={12} className='mb-4 mb-lg-0'>
        <MDBContainer>
      <div className="ratio ratio-16x9">
        <iframe
          src="https://www.youtube.com/embed/sk5_76UIfqY"
          title="YouTube video"
          allowfullscreen
        ></iframe>
      </div>
    </MDBContainer>
        </MDBCol>

        <MDBCol lg={4} md={12} className='mb-4 mb-lg-0'>
        <MDBContainer>
      <div className="ratio ratio-16x9">
        <iframe
          src="https://www.youtube.com/embed/UPkMkIOzej8"
          title="YouTube video"
          allowfullscreen
        ></iframe>
      </div>
    </MDBContainer>
        </MDBCol>
      </MDBRow>

      <MDBModal show={modal1} setShow={setModal1}>
        <MDBModalDialog>
          <MDBModalContent>
            <MDBModalBody>
              <div className='ratio ratio-16x9'>
                <iframe
                  src='https://www.youtube.com/embed/Xy1g_cfNF8E'
                  title='YouTube video'
                  allowFullScreen
                ></iframe>
              </div>
            </MDBModalBody>
            <MDBModalFooter>
              <MDBBtn onClick={() => setModal1(false)} color='secondary'>
                Close
              </MDBBtn>
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>

      <MDBModal show={modal2} setShow={setModal2}>
        <MDBModalDialog>
          <MDBModalContent>
            <MDBModalBody>
              <div className='ratio ratio-16x9'>
                <iframe
                  src='https://www.youtube.com/embed/wTcNtgA6gHs'
                  title='YouTube video'
                  allowFullScreen
                ></iframe>
              </div>
            </MDBModalBody>
            <MDBModalFooter>
              <MDBBtn onClick={() => setModal2(false)} color='secondary'>
                Close
              </MDBBtn>
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>

      <MDBModal show={modal3} setShow={setModal3}>
        <MDBModalDialog>
          <MDBModalContent>
            <MDBModalBody>
              <div className='ratio ratio-16x9'>
                <iframe
                  src='https://www.youtube.com/embed/vlDzYIIOYmM'
                  title='YouTube video'
                  allowFullScreen
                ></iframe>
              </div>
            </MDBModalBody>
            <MDBModalFooter>
              <MDBBtn onClick={() => setModal3(false)} color='secondary'>
                Close
              </MDBBtn>
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </div>
  );
};

export default Home;
