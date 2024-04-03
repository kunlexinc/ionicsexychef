import React from 'react';
import { IonContent, IonPage, IonText, IonImg } from '@ionic/react';
import GreenButton from '../../components/GreenButton';
import './Onboarding.css'; // Make sure to create this CSS file for custom styling
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore from 'swiper';
// import 'swiper/swiper-bundle.min.css';
// import 'swiper/swiper.min.css'
import SwiperReact from 'swiper/react';



// Import Swiper styles
import 'swiper/css';



// const slideOpts = {
//   initialSlide: 0,
//   speed: 400,
// };

// install Swiper's Pagination and Navigation modules
// SwiperCore.use([Pagination, Navigation]);

const Onboarding: React.FC = () => {
    let swiperRef = React.useRef<any>(null);

    const goToNextSlide = () => {
        console.log("testing")
        swiperRef.current?.slideNext();
      };
      
  return (
    <IonPage>
      <IonContent fullscreen class="ion-padding">
        <Swiper   onSwiper={(swiper) => (swiperRef.current = swiper)}
          pagination={{ clickable: true }}
          navigation={true} >
          <SwiperSlide>
            <IonImg src="assets/boarding1.jpg" />
            <IonText>
              <h2>Effortless Booking, Exceptional Dining</h2>
              <p>We make it easy for you to indulge in exquisite dishes. Let's get started on your flavorful journey!</p>
            </IonText>
            <GreenButton text="Continue" onClick={() =>  goToNextSlide()} />
          </SwiperSlide>
          
          <SwiperSlide>
            <IonImg src="assets/boarding2.jpg" />
            <IonText>
              <h2>Personalize Your Culinary Adventures</h2>
              <p>Our chefs will craft unique culinary experiences that cater specifically to your tastes.</p>
            </IonText>
            <GreenButton text="Continue" onClick={() => goToNextSlide()} />
          </SwiperSlide>
          
          <SwiperSlide>
            <IonImg src="assets/boarding3.jpg" />
            <IonText>
              <h2>Discover Culinary Excellence at Your Doorstep</h2>
              <p>Embark on a culinary journey where skilled chefs bring their expertise to your home.</p>
            </IonText>
            <GreenButton text="Continue" onClick={() => goToNextSlide()} />
          </SwiperSlide>
        </Swiper>
      </IonContent>
    </IonPage>
  );
};

export default Onboarding;
