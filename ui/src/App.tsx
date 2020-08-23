import * as React from 'react';

import cn from 'classnames';

import s from './App.css';
import 'common/styles/normalize.css';

interface Props {
}

const App: React.FC<Props> = () => (
    <div className={cn(s.app)}>
        Hello!
    </div>
);

export default App;
