import React, { useState, useEffect } from 'react';
import { IonContent, IonPage, IonText, IonImg } from '@ionic/react';
import GreenButton from '../../components/GreenButton';
import './Onboarding.css'; // Make sure to create this CSS file for custom styling
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import SwiperCore from 'swiper';
// import 'swiper/swiper-bundle.min.css';
// import 'swiper/swiper.min.css'

import SwiperReact from 'swiper/react';



// Import Swiper styles
import 'swiper/css';
import { useHistory } from 'react-router';



// const slideOpts = {
//   initialSlide: 0,
//   speed: 400,
// };

// install Swiper's Pagination and Navigation modules
// SwiperCore.use([Pagination, Navigation]);





const Onboarding: React.FC = () => {
  const history = useHistory();
    let swiperRef = React.useRef<any>(null);

const completeOnboarding = async () => {
  // const history = useHistory();
  try {
    await AsyncStorage.setItem('@HasSeenOnboarding', 'true');
    history.push('/login'); // Navigate to login after setting the value
  } catch (e) {
    // Saving error
  }
};

const checkOnboarding = async () => {
  // const history = useHistory();
  try {
    // await AsyncStorage.clear;
    const value = await AsyncStorage.getItem('@HasSeenOnboarding');
    console.log(value)
    
    if (value !== null) {
      // If we find a value, which means onboarding has been seen, navigate to login
      history.push('/login');
    }
  } catch (e) {
    // Error reading value
  }
};
    useEffect(() => {
      checkOnboarding();
    
    }, [history]);

    const goToNextSlide = () => {
        console.log("testing")
        if (swiperRef.current?.isEnd) {
          completeOnboarding();
          // history.push('/login'); // Replace '/login' with your actual login route
        } else {
          swiperRef.current?.slideNext();
        }
      };
      
  return (
    <IonPage>
      <IonContent fullscreen class="ion-padding">
        <Swiper   onSwiper={(swiper) => (swiperRef.current = swiper)}
          pagination={{ clickable: true }}
          navigation={true} >
          <SwiperSlide >
            <div className="firstswiper">
            <div className="overlay-text">
            <IonText>
              <h2>Effortless Booking, Exceptional Dining</h2>
              <p>We make it easy for you to indulge in exquisite dishes. Let's get started on your flavorful journey!</p>
            </IonText>
            <GreenButton text="Continue" onClick={() =>  goToNextSlide()} />
            </div>
            </div>
          </SwiperSlide>
          
          <SwiperSlide>
          <div className="secondswiper">
            <div className="overlay-text">
            <IonText>
              <h2>Personalize Your Culinary Adventures</h2>
              <p>Our chefs will craft unique culinary experiences that cater specifically to your tastes.</p>
            </IonText>
            <GreenButton text="Continue" onClick={() => goToNextSlide()} />
            </div>
            </div>
          </SwiperSlide>
          
          <SwiperSlide>
          <div className="thirdswiper">
            <div className="overlay-text">
            <IonText>
              <h2>Discover Culinary Excellence at Your Doorstep</h2>
              <p>Embark on a culinary journey where skilled chefs bring their expertise to your home.</p>
            </IonText>
            <GreenButton text="Continue" onClick={() => goToNextSlide()} />
            </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </IonContent>
    </IonPage>
  );
};

export default Onboarding;
