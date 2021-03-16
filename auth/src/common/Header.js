import react from 'react';
import {Text} from 'react-native';

const Header =() =>{
    const { textStyle } = styles;
     return <Text style={textStyle}>Album!</Text>;
};

const styles ={
    textStyle:{
        fontsize:20,
    }
};

export default Header;