import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar'

import Home from './pages/Home';

const Routes = () => {
    return (

        <BrowserRouter>
            <Navbar />
            <Switch>
                <Route exact path='/' component={Home} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;