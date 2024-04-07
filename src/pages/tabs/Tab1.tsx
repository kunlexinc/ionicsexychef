// HomePage.tsx
import React from 'react';
import { IonContent, IonPage, IonHeader, IonToolbar, IonTitle, IonSearchbar } from '@ionic/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import ChefProfile from '../../components/ChefProfile';
import './HomePage.css'; // Assume you have a corresponding CSS file for styling

const HomePage: React.FC = () => {
  // Dummy data for chefs
  const chefs = [
    {
      name: 'Chef Paul Oludare',
      distance: '25km',
      rating: 4.4,
      price: 'N1200',
      image: 'path-to-chef-paul-image.jpg'
    },
  ];

  return (
    <IonPage>
      <IonHeader className="ion-no-border">
        <IonToolbar>
          <IonTitle>Hello, Isabella</IonTitle>
          <IonSearchbar placeholder="Search for anything..."></IonSearchbar>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        {/* Special Offer Banner */}
        <div className="special-offer-banner">
          <h2>25% OFF</h2>
          <p>Special Day - Grab a discount for every order you make today</p>
        </div>

        {/* Selected for You Section */}
        <h2>Selected for you</h2>
        <Swiper slidesPerView={1.5} spaceBetween={10}>
          {chefs.map((chef, index) => (
            <SwiperSlide key={index}>
              <ChefProfile {...chef} />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Top Rated Chefs Section */}
        <h2>Top rated chefs</h2>
        <Swiper slidesPerView={1.5} spaceBetween={10}>
          {chefs.map((chef, index) => (
            <SwiperSlide key={index}>
              <ChefProfile {...chef} />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Available Chefs Section */}
        <h2>Available chefs</h2>
        <Swiper slidesPerView={1.5} spaceBetween={10}>
          {chefs.map((chef, index) => (
            <SwiperSlide key={index}>
              <ChefProfile {...chef} />
            </SwiperSlide>
          ))}
        </Swiper>
      </IonContent>
    </IonPage>
  );
};

export default HomePage;
