// PreferencesPage.tsx
import React, { useState } from 'react';
import {
  IonContent,
  IonPage,
  IonList,
  IonRadioGroup,
  IonListHeader,
  IonLabel,
  IonItem,
  IonRadio,
  IonThumbnail,
  IonImg
} from '@ionic/react';
import GreenButton from '../../components/GreenButton';

const PreferencesPage: React.FC = () => {
  const [selected, setSelected] = useState<string>('');

  return (
    <IonPage>
      <IonContent className="ion-padding">
        <IonListHeader>
          <h2>Let us serve you better</h2>
          <p>Please select your preference.</p>
        </IonListHeader>
        <IonRadioGroup value={selected} onIonChange={e => setSelected(e.detail.value)}>
          <IonItem lines="none">
            <IonLabel>Looking for a Chef</IonLabel>
            <IonRadio slot="start" value="looking-for-chef" />
            <IonThumbnail slot="end">
              <IonImg src="path-to-your-customer-image.jpg" />
            </IonThumbnail>
          </IonItem>

          <IonItem lines="none">
            <IonLabel>I am a Chef</IonLabel>
            <IonRadio slot="start" value="i-am-chef" />
            <IonThumbnail slot="end">
              <IonImg src="path-to-your-chef-image.jpg" />
            </IonThumbnail>
          </IonItem>
        </IonRadioGroup>
        <div style={{ padding: '20px' }}>
          <GreenButton text="Continue" onClick={() => console.log('Continue with:', selected)} />
        </div>
      </IonContent>
    </IonPage>
  );
};

export default PreferencesPage;
