import Config from './DebugConfig'
import Immutable from 'seamless-immutable'
import Reactotron from 'reactotron-react-native'
import { reactotronRedux as reduxPlugin } from 'reactotron-redux'
import sagaPlugin from 'reactotron-redux-saga'

let reactotron = {};
if (Config.useReactotron) {
    // https://github.com/infinitered/reactotron for more options!
    reactotron = Reactotron
        .configure({ name: 'DEMO' })
        .useReactNative()
        .use(reduxPlugin({ onRestore: Immutable }))
        .use(sagaPlugin())
        .connect();

    // Let's clear Reactotron on every time we load the app
    Reactotron.clear();

        global.logger = {
        ...Reactotron,
        display: Reactotron.display,
        debug: (...args) => {
            console.log(...args);
            Reactotron.display({
                name: '调试',
                value: args,
                preview: `点击查看 👉 ${args[0]}`,
            })
        },
        console: (...args) => {
            console.log(...args)
            Reactotron.display({
                name: '调试',
                value: 'Show in the chrome',
                preview: '点击查看 👉 Show in the chrome',
            })
        },
    }
}

export default reactotron
