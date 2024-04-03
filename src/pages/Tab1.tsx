import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton,IonIcon } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import { arrowBackOutline } from 'ionicons/icons';
import BackButton from '../components/BackButton';
import './Tab1.css';
import { useHistory } from 'react-router';

const Tab1: React.FC = () => {
  const history = useHistory();
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
        {/* <IonButton  fill="clear" onClick={() => {  history.push('/');  }} >
        <IonIcon slot="icon-only"  icon={arrowBackOutline}></IonIcon>
        
      </IonButton> */}
      <BackButton fill="clear" slot="icon-only" icon={arrowBackOutline} onClick={() => {  history.push('/');  }} />
          {/* <IonTitle>Tab 1</IonTitle> */}

        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 1</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="Tab 1 page" />
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
