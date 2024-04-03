// VerifyAccountPage.tsx
import React from 'react';
import { IonContent, IonPage, IonInput, IonText, IonGrid, IonRow, IonCol } from '@ionic/react';
import GreenButton from '../../components/GreenButton';
import './createaccount.css'

const VerifyAccountPage: React.FC = () => {
  // Handle the input change, form submission, and resend logic

  return (
    <IonPage>
      <IonContent className="ion-padding">
        <IonText>
          <h2>Verify your account</h2>
          <p>Please input the verification code sent to your E-mail address and SMS</p>
        </IonText>
        <IonGrid>
          <IonRow>
            <IonCol>
              <IonInput className='verify' type="text" maxlength={1} />
            </IonCol>
            <IonCol>
              <IonInput className='verify' type="text" maxlength={1} />
            </IonCol>
            <IonCol>
              <IonInput className='verify' type="text" maxlength={1} />
            </IonCol>
            <IonCol>
              <IonInput className='verify' type="text" maxlength={1} />
            </IonCol>
          </IonRow>
        </IonGrid>
        <IonText>
          <p>Didn't receive the code yet? <a href="#">Resend code in 56s</a></p>
        </IonText>
        <GreenButton text="Verify Account" onClick={() => { console.log('Verification logic here.'); }} />
      </IonContent>
    </IonPage>
  );
};

export default VerifyAccountPage;
