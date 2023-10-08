import {BrowserRouter, Route, Switch} from 'react-router-dom'

import Home from './components/Home'
import Header from './components/Header'
import Cart from './components/Cart'
import Products from './components/Products'
import NotFound from './components/NotFound'

const App = () => (
    <BrowserRouter>
        <Header/>
        <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/cart' component={Cart} />
            <Route exact path='/products' component={Products} />
            <Route component={NotFound} />
        </Switch>
    </BrowserRouter>
)

export default App 