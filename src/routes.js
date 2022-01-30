import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar'

import Home from './pages/Home';
import Filme from './pages/Filme';
import Favoritos from './pages/Favoritos';
import Erro from './pages/Erro'

const Routes = () => {
    return (

        <BrowserRouter>
            <Navbar />
            <div className="container">
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route exact path="/filme/:id" component={Filme} />
                    <Route exact path="/favoritos" component={Favoritos} />
                    <Route path="*" component={Erro} />
                </Switch>
            </div>
        </BrowserRouter>
    )
}

export default Routes;