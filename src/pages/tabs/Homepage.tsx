// HomePage.tsx
import React from 'react';
import { IonContent, IonPage, IonHeader, IonToolbar, IonTitle, IonSearchbar, IonItem, IonAvatar, IonLabel } from '@ionic/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import ChefProfile from '../../components/ChefProfile';
import './HomePage.css'; // Assume you have a corresponding CSS file for styling

const HomePage: React.FC = () => {
  // Dummy data for chefs
  const chefs = [
    {
      name: 'Chef Dami Oludare',
      distance: '25km',
      rating: 4.4,
      price: 'N1200',
      image: 'assets/chef1.jpg'
      
    },
    {
      name: 'Chef Joy James',
      distance: '25km',
      rating: 4.4,
      price: 'N1200',
      image: 'assets/chef1.jpg'
    },
    {
      name: 'Chef Ahaisha Adamu',
      distance: '25km',
      rating: 4.4,
      price: 'N1200',
      image: 'assets/chef1.jpg'
    },
    {
      name: 'Chef Ngozi chukuka',
      distance: '25km',
      rating: 4.4,
      price: 'N1200',
      image: 'assets/chef1.jpg'
    },
    {
      name: 'Chef Daniel Adekunle',
      distance: '25km',
      rating: 4.4,
      price: 'N1200',
      image: 'assets/chef1.jpg'
    },
  ];

  return (
    <IonPage>
      {/* <IonHeader className="ion-no-border">
        <IonToolbar>
          <IonTitle>Hello, Isabella</IonTitle>
          <IonSearchbar placeholder="Search for anything..." autocapitalize={''}></IonSearchbar>
        </IonToolbar>
      </IonHeader> */}
      <IonContent fullscreen>
      {/* <IonHeader className="ion-no-border">
        <IonToolbar>
          <IonTitle>Hello, Isabella</IonTitle>
          <IonSearchbar placeholder="Search for anything..." autocapitalize={''}></IonSearchbar>
        </IonToolbar>
      </IonHeader> */}

        <IonItem>
        <IonAvatar slot="start">
          <img alt="Silhouette of a person's head" src="assets/chef1.jpg" />
        </IonAvatar>

        <IonLabel>Hello, Isabella</IonLabel><br/>
        {/* <IonTitle size="small">Oluyole Avenue, Ibadan...</IonTitle> */}
        {/* <p>Oluyole Avenue, Ibadan...</p> */}
      </IonItem>
      <IonSearchbar placeholder="Search for anything..." autocapitalize={''}></IonSearchbar>
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
              <ChefProfile
            key={index}
            name={chef.name}
            distance={chef.distance}
            rating={chef.rating}
            price={chef.price}
            image={chef.image}
          />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Top Rated Chefs Section */}
        <h2>Top rated chefs</h2>
        <Swiper slidesPerView={1.5} spaceBetween={10}>
          {chefs.map((chef, index) => (
            <SwiperSlide key={index}>
               <ChefProfile
            key={index}
            name={chef.name}
            distance={chef.distance}
            rating={chef.rating}
            price={chef.price}
            image={chef.image}
          />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Available Chefs Section */}
        <h2>Available chefs</h2>
        <Swiper slidesPerView={1.5} spaceBetween={10}>
          {chefs.map((chef, index) => (
            <SwiperSlide key={index}>
              <ChefProfile
            key={index}
            name={chef.name}
            distance={chef.distance}
            rating={chef.rating}
            price={chef.price}
            image={chef.image}
          />
            </SwiperSlide>
          ))}
        </Swiper>
      </IonContent>
    </IonPage>
  );
};

export default HomePage;
