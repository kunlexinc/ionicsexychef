// ReviewComponent.tsx
import React from 'react';
import { IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent } from '@ionic/react';

type ReviewProps = {
  reviewerName: string;
  reviewText: string;
  reviewDate: string;
};

const ReviewComponent: React.FC<ReviewProps> = ({ reviewerName, reviewText, reviewDate }) => {
  return (
    <IonCard>
      <IonCardHeader>
        <IonCardTitle>{reviewerName}</IonCardTitle>
        <IonCardSubtitle>{reviewDate}</IonCardSubtitle>
      </IonCardHeader>
      <IonCardContent>{reviewText}</IonCardContent>
    </IonCard>
  );
};

export default ReviewComponent;
