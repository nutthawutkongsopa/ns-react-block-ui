# ns-react-block-ui 
A react component for blocking UI.
<hr/>

### Document
https://nutthawutkongsopa.github.io/ns-react-block-ui

### Installation 🛠️
```console
npm install ns-react-block-ui
```
[![Npm package total downloads](https://badgen.net/npm/dt/ns-react-block-ui)](https://npmjs.com/package/ns-react-block-ui)

### Basic Using ✅
```javascript
import { BlockUI } from "ns-react-block-ui";
```
```javascript
<BlockUI blocking={isBlocking}>
  ...
  <OtherComponent />
</BlockUI>
```
### Global Blocking (Context) 🌟
index.js
```javascript
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import { BlockUIProvider } from 'ns-react-block-ui'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BlockUIProvider loader="default">
      <App />
    </BlockUIProvider>
  </React.StrictMode>
);

```
SomeComponent.js
```javascript
import { useBlockUIContext } from 'ns-react-block-ui'

SomeComponent = () => {
  const { setBlockUI } = useBlockUIContext();
  const blockUI = () => {
    setBlockUI({ blocking: true });
  };

  return (
    <>
      <button onClick={() => blockUI()}>Block Screen</button>
    </>
  );
};
```
### Properties 🍀
BlockUI Properties
```javascript
{
    blocking?: boolean;
    message?: string | ReactNode;
    overlayStyle?: CSSProperties;
    loader?: "default" | ReactNode;
    style?: CSSProperties;
    className?: string;
    mode?: "contain" | "stretch" | "full-screen";
    cursor?: "inherit" | "wait" | "default" | "progress" | "not-allowed";
    hideScroll?: boolean;
}
```
BlockUI Context Data
```javascript
{
    blocking?: boolean;
    message?: string;
    loader?: ReactNode;
}
```
### Compatible Version ⚖️
| Version | React Version | Node Version |
| ------- | ------------- | ------------ |
| 0.1.8   | 16.13.1       | >=14.0.0     |
| 0.1.11  | 16.13.1       | >=14.0.0     |
| 0.2.4   | 16.13.1       | >=14.0.0     |
| 0.2.6   | >=16.13.1     | >=14.0.0     |
| 1.x.x   | >=16.13.1     | >=14.0.0     |