import { createRoot } from 'react-dom/client';
import React from 'react';

import { App } from './App';

const appNode = global.document.createElement('div');

global.document.body.appendChild(appNode);

const root = createRoot(appNode);

root.render(<App />);
