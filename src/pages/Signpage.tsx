import React from 'react';
import { IonContent, IonPage, IonItem, IonLabel, IonInput, IonButton } from '@ionic/react';
import GreenButton from '../components/GreenButton'; // Adjust the path as necessary
import { useHistory } from 'react-router';




// Account Creation Form Component
const CreateAccountForm = () => {
   const history = useHistory();
   
  const handleClick = () => {
  console.log("clicked")
 
  history.push('/tab1'); // Navigate to the first tab
};

  return (
    <IonPage>
      <IonContent>
        <div className="create-account-form">
          <h1>Create your account</h1>
          <IonItem>
            <IonLabel position="stacked">Phone number *</IonLabel>
            <IonInput type="tel" placeholder="+234" />
          </IonItem>
          <IonItem>
            <IonLabel position="stacked">Email Address *</IonLabel>
            <IonInput type="email" />
          </IonItem>
          <IonItem>
            <IonLabel position="stacked">First name *</IonLabel>
            <IonInput type="text" />
          </IonItem>
          <IonItem>
            <IonLabel position="stacked">Last name *</IonLabel>
            <IonInput type="text" />
          </IonItem>
          <IonItem>
            <IonLabel position="stacked">Password *</IonLabel>
            <IonInput type="password" />
          </IonItem>
          <IonItem>
            <IonLabel position="stacked">Referral code *</IonLabel>
            <IonInput type="text" />
          </IonItem>
          <GreenButton text="Create your account" onClick={() => { handleClick() }} />
        </div>
      </IonContent>
    </IonPage>
  );
};

export default CreateAccountForm;
