import *as React from 'react';
import {Image, View} from 'react-native';

const Filter4 = (props)=>{
  const glassWidth = props.face["bounds"]['width']['height']
  const glassHeight = props.face["bounds"]['width']['height']/3
  const leftEyePosition = props.face['LEFT_EYE']
  const rightEyePosition = props.face['RIGHT_EYE']
  const transfromAngle = (
    angleRad = Math.atan((rightEyePosition.y - leftEyePosition.y)/ (rightEyePosition.x - leftEyePosition.x))
  )=> (angleRad*180)/Math.PI
  return(
    <View style={{
        position: 'absolute',
        left: leftEyePosition.x - glassWidth * 0.675,
        top: leftEyePosition.y - glassHeight * 0.5,
      }}>
      <Image 
        source={require("../assets/Frapp-03.png")}
        style={{
            width: glassesWidth,
            height: glassesHeight,
            resizeMode: 'contain',
            transform: [{ rotate: `${transformAngle()}deg` }],
        }}
     />
    </View>
  )
}

export default Filter4;