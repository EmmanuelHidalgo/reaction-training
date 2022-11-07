import * as React from 'react';
import '@fontsource/roboto/300.css';


import { ReactionTrainingProvider } from './context/reactTrainingContext'
import Main from './components/Main'

export default function TextMobileStepper() {
  return (
    <ReactionTrainingProvider>
      <Main />
    </ReactionTrainingProvider>
  );
}
