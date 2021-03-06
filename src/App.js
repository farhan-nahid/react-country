import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CountryDetails from './Component/CountryDetails/CountryDetails';
import Footer from './Component/Footer/Footer';
import Header from './Component/Header/Header';
import Home from './Component/Home/Home';
import NotFound from './Component/NotFound/NotFound';
import SingleCountey from './Component/SingleCountry/SingleCountey';

function App() {
    return (
        <>
            <Router>
                <Header />
                <Switch>
                    <Route path="/home">
                        <Home />
                    </Route>
                    <Route path="/country/">
                        <SingleCountey />
                    </Route>
                    <Route path="/country/:alpha2Code">
                        <CountryDetails />
                    </Route>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="*">
                        <NotFound />
                    </Route>
                </Switch>
                <Footer />
            </Router>
        </>
    );
}

export default App;
