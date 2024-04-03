// LocationDetailsPage.tsx
import React, { useState } from 'react';
import { IonContent, IonPage, IonHeader, IonToolbar, IonTitle, IonButtons, IonBackButton, IonInput, IonItem, IonLabel, IonCheckbox } from '@ionic/react';
import GreenButton from '../../components/GreenButton';
import { arrowBackOutline } from 'ionicons/icons';
import BackButton from '../../components/BackButton';
import { useHistory } from 'react-router';

const LocationDetailsPage: React.FC = () => {
  const history = useHistory();
  const [useCurrentLocation, setUseCurrentLocation] = useState(false);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          {/* <IonButtons slot="start">
            <IonBackButton />
          </IonButtons> */}
            <BackButton fill="clear" slot="icon-only" icon={arrowBackOutline} onClick={() => {  history.push('/');  }} />
          <IonTitle>Location Details</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonItem>
          <IonLabel position="floating">Enter a new address</IonLabel>
          <IonInput type="text" />
        </IonItem>
        <IonItem lines="none">
          <IonLabel>Use current location</IonLabel>
          <IonCheckbox checked={useCurrentLocation} onIonChange={e => setUseCurrentLocation(e.detail.checked)} />
        </IonItem>
        <div style={{ padding: '20px' }}>
          <GreenButton text="Continue" onClick={() => console.log('Continue with location')} />
        </div>
      </IonContent>
    </IonPage>
  );
};

export default LocationDetailsPage;
