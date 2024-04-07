import React from 'react';
import { IonContent, IonPage, IonItem, IonLabel, IonInput, IonButton, IonHeader, IonToolbar, IonTitle, IonGrid, IonRow, IonCol } from '@ionic/react';
import GreenButton from '../../components/GreenButton'; // Adjust the path as necessary
import { useHistory } from 'react-router';
import { arrowBackOutline } from 'ionicons/icons';
import BackButton from '../../components/BackButton';
import { Link } from 'react-router-dom';
import './createaccount.css'



// Account Creation Form Component
const CreateAccountForm = () => {

   const history = useHistory();
   
  const handleClick = () => {
  console.log("clicked")
 
  history.push('/tab1'); // Navigate to the first tab
};

const doRegister = (event: any) => {
  event.preventDefault();
  console.log('doRegister');
 // router.goBack();
};

  return (
    <IonPage>

<IonHeader>
        <IonToolbar>
          {/* <IonButtons slot="start">
            <IonBackButton />
          </IonButtons> */}
            <BackButton fill="clear" slot="icon-only" icon={arrowBackOutline} onClick={() => {  history.push('/');  }} />
         
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonGrid style={{ height: '100%' }} fixed>
        <IonRow style={{ height: '16.666%' }}  class="ion-justify-content-center">
          <IonCol style={{ justifyContent: 'center', alignItems:'center' }} class="ion-justify-content-center" size='12'>
          <h1>Create your account</h1>
          <div style={{ marginBottom: '12px' }}>
            Have an account? <Link to="/login">Login</Link>
          </div>
          </IonCol>
        </IonRow>
        <IonRow style={{ height: '83.333%' }}  class="ion-justify-content-center">
        <IonCol size='12'>
          <form onSubmit={doRegister} style={{height: '100%'}}>
          <div style={{height: '80%'}}>  
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
          </div>
          <div style={{height: '10%'}}>  
          <GreenButton text="Create your account" onClick={() => { handleClick() }} />
         </div>
          </form>
          </IonCol>

        </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default CreateAccountForm;
