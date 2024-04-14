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
import { ellipse, square, triangle } from 'ionicons/icons';
import Tab1 from './pages/tabs/Homepage';
import Tab2 from './pages/tabs/FavoritesPage';
import Tab3 from './pages/tabs/Tab3';
import SignupPage from './pages/createaccount/Signpage';
import LoginPage from './pages/createaccount/LoginPage';
import Tabroute from './pages/tabs/Tabroute';
import PreferencesPage from './pages/createaccount/PreferencesPage';
import LocationDetailsPage from './pages/createaccount/LocationDetailsPage';
import Onboarding from './pages/onboarding/Onboarding';


/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import VerifyAccountPage from './pages/createaccount/VerifyAccountPage';
import ChefProfileFullPage from './pages/chefinformation/ChefProfileFullPage';

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      {/* <IonTabs> */}
        {/* <IonRouterOutlet> */}
            <Route exact path="/login">
            <LoginPage />
          </Route>
          <Route exact path="/">
            <Redirect to="/onboarding" />
          </Route>
          <Route exact path="/signup">
          <SignupPage />
          </Route>
          <Route exact path="/verify">
          <VerifyAccountPage />
          </Route>
          <Route exact path="/preference">
          <PreferencesPage />
          </Route>
          <Route exact path="/location">
          <LocationDetailsPage />
          </Route>
          <Route exact path="/onboarding">
          <Onboarding />
          </Route>
          <Route exact path="/hometab">
          <Tabroute />
          </Route>
          <Route exact path="/favoritetab">
          <Tabroute />
          </Route>
          <Route exact path="/tab3">
          <Tabroute />
          </Route>
          <Route exact path="/tab4">
          <Tabroute />
          </Route>
          <Route exact path="/tab5">
          <Tabroute />
          </Route>
          <Route exact path="/chefprofile">
          <ChefProfileFullPage />
          </Route>
          {/* <Route exact path="/tab2">
            <Tab2 />
          </Route>
          <Route path="/tab3">
            <Tab3 />
          </Route> */}
          {/* <Route exact path="/">
            <Redirect to="/tab1" />
          </Route> */}
        {/* </IonRouterOutlet> */}
        {/* <IonTabBar slot="bottom">
          <IonTabButton tab="tab1" href="/tab1">
            <IonIcon aria-hidden="true" icon={triangle} />
            <IonLabel>Tab 1</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tab2" href="/tab2">
            <IonIcon aria-hidden="true" icon={ellipse} />
            <IonLabel>Tab 2</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tab3" href="/tab3">
            <IonIcon aria-hidden="true" icon={square} />
            <IonLabel>Tab 3</IonLabel>
          </IonTabButton>
        </IonTabBar> */}
      {/* </IonTabs> */}
    </IonReactRouter>
  </IonApp>
);

export default App;
