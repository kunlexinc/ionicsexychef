// GreenButton.tsx
import React from 'react';
import { IonButton } from '@ionic/react';

type GreenButtonProps = {
  text: string;
  onClick: () => void;
};

const GreenButton: React.FC<GreenButtonProps> = ({ text, onClick }) => (
  <IonButton expand="block" color="success" onClick={onClick}>
    {text}
  </IonButton>
);

export default GreenButton;
