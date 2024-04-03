import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab3.css';
import { arrowBackOutline } from 'ionicons/icons';
import BackButton from '../components/BackButton';
import { useHistory } from 'react-router';

const Tab3: React.FC = () => {
  const history = useHistory();

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
        <BackButton fill="clear" slot="icon-only" icon={arrowBackOutline} onClick={() => {  history.push('/');  }} />
          {/* <IonTitle>Tab 3</IonTitle> */}
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 3</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="Tab 3 page" />
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
