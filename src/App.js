import {BrowserRouter, Route, Switch} from 'react-router-dom'
import NotFound from './components/NotFound'
import About from './components/About'
import Home from './components/Home'

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
)

export default App
