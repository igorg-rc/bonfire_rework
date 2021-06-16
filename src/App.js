import './App.css';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'
// import { makeStyles, createMuiTheme, ThemeProvider } from '@material-ui/core'

import LandingPage from './pages/site/LandingPage'
// import Login from './pages/admin-panel/Login'
// import Industries from './pages/admin-panel/Industries'
// import Technologies from './pages/admin-panel/Technologies'
// import Messages from './pages/admin-panel/Messages'
// import LandingLayout from './components/admin-panel/UI/LandingLayout';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={LandingPage} />
        {/* <Route path="/admin/login" component={Login} />
        <Route path="/admin/industries" component={Industries} />
        <Route path="/admin/technologies" component={Technologies} />
        <Route path="/admin/messages" component={Messages} />
        <Route path="/" exact component={LandingLayout} /> */}
      </Switch>
    </Router>
  );
}

export default App;
