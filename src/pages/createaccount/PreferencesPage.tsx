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
  IonImg,
  IonCard
} from '@ionic/react';
import GreenButton from '../../components/GreenButton';

const PreferencesPage: React.FC = () => {
  const [selected, setSelected] = useState<string>('');

  return (
    <IonPage>
      <IonContent className="ion-padding">
        <IonListHeader>
          <h2 style={{display: "block-inline"}}>Let us serve you better</h2>
          <p>Please select your preference.</p>
        </IonListHeader>
        <IonRadioGroup value={selected} onIonChange={e => setSelected(e.detail.value)}>
          <IonItem lines="none">
            <IonLabel style={{display: "block"}}>Looking for a Chef</IonLabel>
            <IonRadio style={{display:"block"}}  slot="start" value="looking-for-chef" />
            <IonCard slot="end">
              <IonImg src="assets/pre2.jpg" />
            </IonCard>
          </IonItem>

          <IonItem lines="none">
            <IonLabel>I am a Chef</IonLabel>
            <IonRadio slot="start" value="i-am-chef" />
            <IonCard slot="end">
              <IonImg src="assets/pre1.jpg" />
            </IonCard>
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
