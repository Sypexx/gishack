import './css/style.css';

import Home from './pages/main.jsx'

import react from 'react';
import { Switch, Route } from 'react-router-dom';
import Models from './components/Models.js';
import styled from 'styled-components'

const Display = styled.div`
    height:100%;
    width:100%;
`

const App = () => {
    return(
        <Display>
            <Switch>
                <Route path="/" exact component={Home} />
            </Switch>
        </Display>
    )
}
export default App;




// <div className="Box">
//             <Models/>
//         </div>