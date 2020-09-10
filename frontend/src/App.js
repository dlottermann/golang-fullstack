import React  from "react";
import {Header, Banner, Content} from './components'
import './index.css';

const App = () => {
    return (
    <>
   
      <Header/>
      <Banner/>
      <div className="container_all">
        <Content/>
      </div>
    </>
  );
};

export default App;
