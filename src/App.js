import { Provider } from 'react-redux';
import './App.css';
import Body from './components/Body';
import Header from './components/Header';
import store from './utils/store';
import Main from './components/Main';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import WatchPageMain from './components/WatchPageMain';

function App() {

  const appRouter = createBrowserRouter([{
    path: '/',
    element: <Body />,
    children: [
      {
        path: '/',
        element: <Main />
      },
      {
        path: 'watch',
        element: <WatchPageMain />
      }
    ]
  }])

  return (
    <Provider store={store}>
      <div>
        <Header />
        <RouterProvider router={appRouter} />
      </div>
    </Provider>
  );
}

export default App;
