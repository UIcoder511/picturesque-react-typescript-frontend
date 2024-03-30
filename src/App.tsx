// import logo from "./logo.svg";
import './App.css';
// import Card from "./ui/Card/card";
// import ImageCard from './components/ImageCards/ImageCard/ImageCard';

// import ImageCards from './components/ImageCards/ImageCards';
// import PhotographerCards from './components/PhotographerCards/PhotographerCards';
import Pages from './pages/Pages';
import LoginAndRegister from './components/LoginAndRegister/LoginAndRegister';
// import { createContext, useContext } from 'react';

// import { GlobalContext } from './Init';
import { useEffect, useState } from 'react';
import { Store } from 'hooks/store';
import { userApis } from 'apis';
import FullScreenLoader from 'components/Loader/FullScreenLoader';

// import { initializeStore, useStore } from 'hooks/store/useStore';

function App() {
   //  const { state } = useContext(GlobalContext);
   const [state, dispatch] = Store.useStore();
   const [loading, setLoading] = useState(true);
   // const [state, dispatch] = useStore();
   //  dispatch({type:})

   useEffect(() => {
      setLoading(true);
      userApis
         .getUser()
         .then(({ data }) => {
            dispatch({ type: 'SET_USER', payload: data });
         })
         .finally(() => {
            setLoading(false);
         });
   }, []);

   if (loading) {
      return <FullScreenLoader />;
   }

   return (
      <div
         className="App"
         style={{ height: '100vh', width: '100%', padding: '10px' }}
      >
         {state.user ? <Pages /> : <LoginAndRegister />}
         {/* <header className="App-header"></header> */}
         {/* <ImageCards /> */}
         {/* <PhotographerCards /> */}
         {/* */}
      </div>
   );
}

export default App;
