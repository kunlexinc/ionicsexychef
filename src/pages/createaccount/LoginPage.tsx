// LoginPage.tsx
import React from 'react';
import {
  IonContent,
  IonPage,
  IonItem,
  IonLabel,
  IonInput,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonButtons,
  IonBackButton,
  IonFooter,
  IonRow,
  IonCol,
  IonGrid,
} from '@ionic/react';
import GreenButton from '../../components/GreenButton';
import { Link } from 'react-router-dom';
import CreateAccountForm from './Signpage';

const LoginPage: React.FC = () => {
  // Define state for email and password, handle changes and submission if needed

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/" />
          </IonButtons>
          {/* <IonTitle>Login</IonTitle> */}
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
      <IonGrid style={{ height: '100%' }} fixed>
        <IonRow style={{ height: '30%' }}  class="ion-justify-content-center">
          <IonCol style={{ justifyContent: 'center', alignItems:'center' }} class="ion-justify-content-center" size='12'>
        <IonTitle>Login</IonTitle>
        <div style={{ marginBottom: '20px' }}>
            Don't have an account? <Link to="/preference">Register</Link>
          </div>
        </IonCol>
       </IonRow>
       <IonRow style={{ height: '70%' }}>
        <IonCol>
        <div style={{ maxWidth: '400px', margin: 'auto' }}>
          
          <IonItem>
            <IonLabel position="floating">Email Address *</IonLabel>
            <IonInput type="email" />
          </IonItem>
          <IonItem>
            <IonLabel position="floating">Password *</IonLabel>
            <IonInput type="password" />
          </IonItem>
          <GreenButton text="Login" onClick={() => { console.log('Perform login'); }} />
        </div>
        </IonCol>
        </IonRow>
        </IonGrid>
      </IonContent>
        
    </IonPage>
  );
};

export default LoginPage;
