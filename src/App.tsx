import appCSS from "./appCSS";
import React, {useEffect} from 'react'
import { History } from 'history'
import {
  Switch,
  Route
} from "react-router-dom";
import { ConnectedRouter } from 'connected-react-router'
import Home from '@pages/home/Home';
import Posts from '@pages/posts/Posts';
import SinglePost from '@pages/single-post/SinglePost';
import Login from '@pages/login/Login';
import NoRouteMatch from '@components/pageTemplates/no-route-match/NoRouteMatch';
import ErrorBoundary from '@components/base/error-boundaries/ErrorBoundary';
import { useDarkMode } from "@hooks/useDarkMode";

interface AppProps {
  history: any;
}

const RouteWithBoundary = ({ component: Component, ...rest }: any) => {
  const componentFunc = (props: any) => (
    <ErrorBoundary>
      <Component {...props} />
    </ErrorBoundary>
  );

  return <Route {...rest} component={componentFunc} />;
};

const App = ({ history }: AppProps) => {
  const [mode, setMode] = useDarkMode();

  useEffect(() => {
    const bodyEl = document.querySelector('body');

    if (bodyEl) bodyEl.classList[`${mode ==='dark' ? "add" : "remove"}`]('bg-gray-700');
  }, [mode]);

  return (
    <div data-component="App" className={appCSS.app_wrap(mode)}>

      <div className={appCSS.app_mode}>
        <button onClick={() => setMode(mode === 'light' ? 'dark' : 'light')}>
          Manually Toggle Mode
        </button>
      </div>

      <ConnectedRouter history={history}>
      
        <Switch>
          <RouteWithBoundary exact={true} path="/" component={Home} />
          <RouteWithBoundary exact={true} path="/posts/:slug" component={SinglePost} />
          <RouteWithBoundary exact={true} path="/posts" component={Posts} />
          <RouteWithBoundary exact={true} path="/login" component={Login} />
          
          <Route component={NoRouteMatch} />
        </Switch>

      </ConnectedRouter>
    </div>
  )
}

export default App