import { Fragment, useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { publicRoutes } from '~/routes';

import { useDispatch } from 'react-redux';
import { DefaultLayout } from '~/components/layout';


function App() {
  // check login
  const dispatch = useDispatch();
  const location = useLocation();

  let logged = "";

  useEffect(() => {
    if (localStorage.hasOwnProperty("logged")) {
      try {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        logged = JSON.parse(localStorage.getItem("logged"));
      } catch (e) {
        localStorage.removeItem("logged");
      }
    }
    if (Object.keys(logged).length > 0) {
      dispatch({
        type: "user/checkLogin",
        payload: {
          id: logged.user.id,
          accessToken: logged.accessToken
        }
      });
    }
  }, [dispatch, logged, location]);

  return (
    <div className="App">
      <Routes>
        {publicRoutes.map((route, index) => {

          const Page = route.component;
          let Layout = DefaultLayout;

          if (route.layout) {
            Layout = route.layout;
          } else if (route.layout === null) {
            Layout = Fragment
          }

          return <Route
            key={index}
            path={route.path}
            element={
              <Layout>
                <Page />
              </Layout>
            }
          />
        })}
      </Routes>
    </div>
  );
}

export default App;
