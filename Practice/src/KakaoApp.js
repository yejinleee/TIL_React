// import { ConnectedRouter } from 'connected-react-router';
import { Route, Routes } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
// import history from './history';
// import Home from './pages/Home';
// import Signin from './pages/Signin';
import KakaoMapApp from './KakaoMaps/KakaoMapApp'
import KakaoRedirectHandler from './KakaoLogin/KakaoRedirectHadler';
function KakaoApp() {
  return (
    <KakaoMapApp />
    // <>
    //   <Routes>
    //     <Route exact path="/" component={KakaoMapApp} /> 

    //     {/* <Route exact path="/signin" component={Signin} />*/}

    //     {/* // 아래 부분을 추가해 준것이다. */}
    //     <Route path="/oauth/callback/kakao" component={KakaoRedirectHandler} />
    //   </Routes>

    // </>
  );
}

export default KakaoApp;