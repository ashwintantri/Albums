import React from 'react';
import {View} from 'react-native';

const Card = (props) =>{
    return(
        <View style={styles.containerStyle}>
            {props.children}
        </View>
    );
}

const styles = {
    containerStyle:{
        borderWidth:1,
        borderRadius:2,
        borderColor:'#CCC',
        
        shadowOpacity:1,
        elevation:2,
        shadowColor:'#000',
        shadowRadius:2,
        marginLeft:5,
        
        marginRight:5,
        marginTop:5,
        marginBottom:5
    }
}
export default Card;