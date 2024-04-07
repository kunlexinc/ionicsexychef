// ChefProfile.tsx
import React from 'react';
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonImg, IonIcon } from '@ionic/react';
import { heartOutline } from 'ionicons/icons';

type ChefProfileProps = {
  name: string;
  distance: string;
  rating: number;
  price: string;
  image: string;
};

const ChefProfile: React.FC<ChefProfileProps> = ({ name, distance, rating, price, image }) => {
  return (
    <IonCard>
      <IonImg src={image} />
      <IonCardHeader>
        <IonCardSubtitle>{distance} away</IonCardSubtitle>
        <IonCardTitle>{name}</IonCardTitle>
      </IonCardHeader>
      <IonCardContent>
        {price} / hr
        <IonIcon icon={heartOutline} />
        <div>Rating: {rating}</div>
      </IonCardContent>
    </IonCard>
  );
};

export default ChefProfile;