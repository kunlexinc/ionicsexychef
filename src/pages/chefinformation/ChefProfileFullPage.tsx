import React, { useState } from 'react';
import { IonContent, IonPage, IonHeader, IonToolbar, IonTitle, IonButton, IonIcon, IonImg, IonText, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonGrid, IonRow, IonCol } from '@ionic/react';
import { arrowBack, heartOutline } from 'ionicons/icons';
import GreenButton from '../../components/GreenButton';
import ReviewComponent from '../../components/ReviewComponent';
import './ChefProfileFullPage.css'; // Ensure you have this CSS file for styles
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css'; // This only needs to be imported once in your app

// This would typically be fetched from your app's state or backend
const chefData = {
  name: 'Chef Paul Oludare',
  image: 'assets/chef1.jpg',
  experience: '+3 years experience',
  rating: 4.4,
  reviewsCount: 322,
  distance: '25km',
  price: 'N1200',
  about: 'Hello, I\'m Paul Oludare, a seasoned chef with over 3 years of culinary experience. My journey in the kitchen has been a delightful blend of creativity, skill, and a genuine passion for crafting memorable dining experiences...',
  // ... other details
  reviews: [
    {
      name: 'John Solomon',
      date: 'October 3, 2023',
      text: 'Paul\'s dishes are a culinary masterpiece! Every bite is a taste of perfection.',
    },
    {
        name: 'John Solomon',
        date: 'October 3, 2023',
        text: 'Paul\'s dishes are a culinary masterpiece! Every bite is a taste of perfection.',
      },
      {
        name: 'John Solomon',
        date: 'October 3, 2023',
        text: 'Paul\'s dishes are a culinary masterpiece! Every bite is a taste of perfection.',
      },
    // ... more reviews
  ],
};

const media = [
    'assets/5057.jpg', // Replace with actual paths to your images/videos
    'assets/5596.jpg',
    'assets/20212.jpg',
    'assets/202121.jpg',
    'assets/27383.jpg',
    'assets/35451.jpg',
    'assets/video1.jpg',
    // ... more media paths
  ];

const ChefProfileFullPage: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButton slot="start" fill="clear">
            <IonIcon icon={arrowBack} />
          </IonButton>
          <IonTitle>{chefData.name}</IonTitle>
          <IonIcon slot="end" icon={heartOutline} />
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding" fullscreen>
      <IonCard>
        <div>
      <IonImg src={chefData.image} />
      <IonIcon style={{position: "absolute", top:10, right:10,   }} size='medium' color='secondary' icon={heartOutline} />
      </div>
      <IonCardHeader>
      <IonCardTitle>{chefData.name}</IonCardTitle>
            <IonCardSubtitle>{chefData.price} / hr</IonCardSubtitle>
      </IonCardHeader>
      <IonCardContent>
      <div className="chef-info">
              <p>{chefData.experience}</p>
              <p>{chefData.rating} Ratings ({chefData.reviewsCount})</p>
              <p>{chefData.distance} away</p>
            </div>
      </IonCardContent>
    </IonCard>
    
            <IonText>
              <h2>About Me</h2>
              <p>{chefData.about}Read more</p> 

           
            </IonText>
            {/* Link to read more about the chef */}
           
            <h2>Photos & Videos</h2>
            {/* Placeholder for photos and videos */}
            <IonGrid>
        <IonRow>
          {media.slice(0, 6).map((src, index) => (
            <IonCol size="4" key={index}>
              <IonImg src={src} onClick={() => { setPhotoIndex(index); setIsOpen(true); }} />
            </IonCol>
          ))}
          {/* If you have more than 6 items, show +more thumbnail */}
          {media.length > 6 && (
            <IonCol size="4" onClick={() => { setPhotoIndex(6); setIsOpen(true); }}>
              <div>+ more</div>
            </IonCol>
          )}
        </IonRow>
      </IonGrid>

      {isOpen && (
        <Lightbox
          mainSrc={media[photoIndex]}
          nextSrc={media[(photoIndex + 1) % media.length]}
          prevSrc={media[(photoIndex + media.length - 1) % media.length]}
          onCloseRequest={() => setIsOpen(false)}
          onMovePrevRequest={() => setPhotoIndex((photoIndex + media.length - 1) % media.length)}
          onMoveNextRequest={() => setPhotoIndex((photoIndex + 1) % media.length)}
        />
      )}

            
            <h2>Reviews</h2>
            <Swiper slidesPerView={1.5} spaceBetween={10}>
            {chefData.reviews.map((review, index) => (
                 <SwiperSlide key={index}>
              <ReviewComponent key={index} reviewerName={review.name}
              reviewText={review.text}
              reviewDate={review.date} />
              </SwiperSlide>
            ))}
            </Swiper>


            <GreenButton text="Book Now" onClick={() => console.log('Book Now Clicked')} />
         
      </IonContent>
    </IonPage>
  );
};

export default ChefProfileFullPage;
