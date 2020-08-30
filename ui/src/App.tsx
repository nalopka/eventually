import * as React from 'react';

import {
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom';

import Introduction from './components/Introduction';

interface Props {
}

const App: React.FC<Props> = () => (
    <Router>
        <Switch>
            <Route
                path="/"
                component={Introduction}
                exact
            />
        </Switch>
    </Router>
);

export default App;
