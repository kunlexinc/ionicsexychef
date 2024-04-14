// FavoritesPage.tsx
import React from 'react';
import { IonContent, IonPage, IonHeader, IonToolbar, IonTitle, IonList } from '@ionic/react';
import ChefProfile from '../../components/ChefProfile';
import './FavoritesPage.css'; // Make sure to create this CSS file for custom styling
import { arrowBackOutline } from 'ionicons/icons';
import BackButton from '../../components/BackButton';
import { useHistory } from 'react-router';

// Example props for chefs, replace with your data fetching logic
const favoriteChefs = [
  // Populate with favorite chefs from state or props
  // {
  //   name: 'Chef Dami Oludare',
  //   distance: '25km',
  //   rating: 4.4,
  //   price: 'N1200',
  //   image: 'assets/chef1.jpg'
  // },
  
];

const FavoritesPage: React.FC = () => {
  const history = useHistory();
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
        <BackButton fill="clear" slot="icon-only" icon={arrowBackOutline} onClick={() => {  history.push('/hometab');  }} />
          <IonTitle>Favourite</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        {favoriteChefs.length > 0 ? (
          <IonList>
            {favoriteChefs.map((chef, index) => (
              <ChefProfile key={index} {...chef} />
            ))}
          </IonList>
        ) : (
          <div className="empty-favorites">
            <img src="../../assets/emtpyfavorite.png" alt="No favorites" />
            {/* <h2>No favourite chef services yet.</h2> */}
          </div>
        )}
      </IonContent>
    </IonPage>
  );
};

export default FavoritesPage;
