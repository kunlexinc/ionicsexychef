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
        <IonHeader>
        <IonTitle>Login</IonTitle>
        </IonHeader>
        <div style={{ maxWidth: '400px', margin: 'auto' }}>
          <div style={{ marginBottom: '20px' }}>
            Don't have an account? <Link to="/signup">Register</Link>
          </div>
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
      </IonContent>
    </IonPage>
  );
};

export default LoginPage;
