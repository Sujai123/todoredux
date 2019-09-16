import { createStore } from 'redux'
import samplereducer from '../reducers/samplereducer'

const store = createStore(samplereducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store