# ns-react-block-ui 
A react component for blocking UI
<hr/>

### Installation 🛠️
`npm install ns-react-block-ui`&nbsp;&nbsp;
[![Npm package total downloads](https://badgen.net/npm/dt/ns-react-block-ui)](https://npmjs.com/package/ns-react-block-ui)

### Basic Using ✅
```javascript
import { BlockUI } from "ns-react-block-ui";
```
```javascript
<BlockUI blocking={isBlocking}>
  <div
    style={{
      border: '1px solid',
      height: '300px',
      width: '300px'
    }}
  >
    <p>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit.Doloribus repellat, ducimus exercitationem error minus beatae voluptatibus, provident recusandae cumque maxime dolore assumenda ipsum sunt debitis dolorum aut sit! Quas, explicabo.
    </p>
  </div>
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
    <BlockUIProvider loader="default" mode="stretch"> //use stretch mode for block full screen
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

    return (
    <>
        <button onClick={() => {
            setBlockUI({ blocking: true })
            setTimeout(() => setBlockUI({ blocking: false }), 5000)
        }} >Block Screen</button>
    </>
    )
}
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
    cursor?: "inherit" | "wait" | "default";
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
|---------|---------------|--------------|
| 0.1.8   | 16.13.1       | >=14.0.0     |
| 0.1.11  | 16.13.1       | >=14.0.0     |
| 0.2.4   | 16.13.1       | >=14.0.0     |