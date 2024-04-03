// BackButton.tsx
import { IonButton, IonIcon } from '@ionic/react';
import { useHistory } from 'react-router';

type BackButtonProps = {
  fill: string;
  onClick?: () => void;
  slot: string;
  icon: string;
};

const BackButton: React.FC<BackButtonProps> = ({ fill, onClick, slot, icon }) => {
  const history = useHistory();

  const defaultClick = () => {
    history.goBack();
  };

  return (
    <IonButton fill={fill} onClick={onClick || defaultClick}>
      <IonIcon slot={slot} icon={icon} />
    </IonButton>
  );
};

export default BackButton;
