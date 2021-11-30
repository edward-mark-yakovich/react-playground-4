import pageCSS from "@wrappers/pageCSS";
import loginCSS from "./loginCSS";
import React, { useReducer, FormEvent, ChangeEvent } from 'react';
import Page from "@wrappers/Page";
import Accordion from "@components/base/accordion/Accordion";
import InputField from "@components/base/input-field/InputField";
import { fakeLogin } from '@utils/helpers';
import {
  initialLoginState,
  loginReducer
} from './loginReducer'

const Login = () => {
  const [stateLogin, dispatchLogin] = useReducer(loginReducer, initialLoginState);
  const {
    username,
    password,
    loading,
    error,
    loggedIn
  } = stateLogin;

  const handleSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    dispatchLogin({type: 'login'});

    try {
      await fakeLogin({username, password});
      dispatchLogin({type: 'success'});
    } catch (error) {
      dispatchLogin({type: 'error'});
    }
  };

  return (
    <Page
      nameId="login"
      dataLoading={loading}
    >
      <div data-component="Home" className={pageCSS.page}>

        <div className={pageCSS.page_heading}>
          <h1>Login</h1>
        </div>

        {loggedIn
          ? <div className="xxx">
              <h3>Hello - Logged In - {username}.</h3>

              <div className={loginCSS.login_btn}>
                <button type="button" onClick={() => dispatchLogin({type: 'logout'})}>
                  {`Logout >`}
                </button>
              </div>
            </div>
          : <form className={loginCSS.login} onSubmit={(ev) => handleSubmit(ev)}>

              <Accordion
                id="acc-dr--01"
                triggerTitle="Please Login"
                triggerIcon="&#9997;"
              >
                <>
                  <div className={loginCSS.login_heading}>
                    {error && <p className={loginCSS.login_error}>{error}</p>}
                  </div>

                  <div>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim 
                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip 
                    ex ea commodo consequat. Duis aute irure dolor in reprehenderit in 
                    voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                  </div>

                  <InputField
                    placeholder="Username"
                    value={username}
                    id="user--ID"
                    onChange={(ev: ChangeEvent<{ value: string }>) => dispatchLogin({
                      type: 'field',
                      fieldName: 'username',
                      payload: ev.target.value
                    })}
                    disabled={loading}
                  />

                  <InputField
                    placeholder="Password"
                    value={password}
                    id="password--ID"
                    onChange={(ev: ChangeEvent<{ value: string }>) => dispatchLogin({
                      type: 'field',
                      fieldName: 'password',
                      payload: ev.target.value
                    })}
                    disabled={loading}
                  />

                  <div className={loginCSS.login_btn}>
                    <button disabled={loading} type="submit">
                      {loading ? 'Logging In...' : 'Log In >'}
                    </button>
                  </div>
                </>
              </Accordion>
            
            </form>
        }

      </div>
    </Page>
  );
};

export default Login;
