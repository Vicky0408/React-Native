import { createTransformer } from 'babel-jest';
import React , {component} from 'react';
import {View, Text} from 'react-native';
import {Provider} from 'react-redux';
import { createStare } from 'redux';

class App extends Comment{
    render(){
        return(
            <Provider store={createTransformer()}>
                <View>
                    <Text>Hello</Text>
                </View>
            </Provider>
        );
    }
}
export default App;