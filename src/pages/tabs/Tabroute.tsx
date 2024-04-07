import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { images, square, triangle,  heartOutline, readerOutline, chatbubbleEllipsesOutline, homeOutline, personOutline, bookOutline } from 'ionicons/icons';
import Tab1 from './Tab1';
import Tab2 from './Tab2';
import Tab3 from './Tab3';
import Tab4 from './Tab4';
import Tab5 from './Tab5';
import './Tabroute.css'


const Tabroute: React.FC = () => (
    // <IonApp>
    //   <IonReactRouter>
        <IonTabs>
          <IonRouterOutlet>
            <Route exact path="/tab1">
              <Tab1 />
            </Route>
            <Route exact path="/tab2">
              <Tab2 />
            </Route>
            <Route path="/tab3">
              <Tab3 />
            </Route>
            <Route path="/tab4">
              <Tab4 />
            </Route>
            <Route path="/tab5">
              <Tab5 />
            </Route>
            {/* <Route exact path="/">
              <Redirect to="/tab1" />
            </Route> */}
          </IonRouterOutlet>
          <IonTabBar slot="bottom">
            <IonTabButton  tab="tab1" href="/tab1">
              <IonIcon aria-hidden="true" icon={homeOutline} />
              <IonLabel>Home</IonLabel>
            </IonTabButton>
            <IonTabButton tab="tab2" href="/tab2">
                        <IonIcon icon={heartOutline} />
                <IonLabel>Favorite</IonLabel>
            </IonTabButton>
            <IonTabButton tab="tab3" href="/tab3">
              <IonIcon aria-hidden="true" icon={readerOutline} />
              <IonLabel>Bookings</IonLabel>
            </IonTabButton>
            <IonTabButton tab="tab4" href="/tab4">
              <IonIcon aria-hidden="true" icon={chatbubbleEllipsesOutline} />
              <IonLabel>Chats</IonLabel>
            </IonTabButton>
            <IonTabButton tab="tab5" href="/tab5">
              <IonIcon aria-hidden="true" icon={personOutline} />
              <IonLabel>Accounts</IonLabel>
            </IonTabButton>
          </IonTabBar>
        </IonTabs>
    //   </IonReactRouter>
    // </IonApp>
  );
  
  export default Tabroute;
  