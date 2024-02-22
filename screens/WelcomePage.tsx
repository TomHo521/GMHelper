import React from 'react';
import { View, Text } from 'react-native';
//import PinchZoomView from 'react-native-pinch-zoom-view';
import WelcomePageIcon from './WelcomePageIcon';

const WelcomePage = () => {
  return (
    // <PinchZoomView>
      // <View style={{ flex: 1, width:'100%' }}>
        <WelcomePageIcon/>
      // </View>
    
  );
};

export default WelcomePage;



// import React, { useState } from 'react';
// import { View, Text, Animated } from 'react-native';
// import { PinchGestureHandler, State } from 'react-native-gesture-handler';

// const WelcomePage = () => {
//   const [baseScale, setBaseScale] = useState(1);
//   const [pinchScale, setPinchScale] = useState(new Animated.Value(1));
//   const [lastScale, setLastScale] = useState(1);

//   const onPinchGestureEvent = Animated.event(
//     [{ nativeEvent: { scale: pinchScale } }],
//     { useNativeDriver: true }
//   );

//   const onPinchHandlerStateChange = event => {
//     if (event.nativeEvent.oldState === State.ACTIVE) {
//       setLastScale(baseScale * lastScale);
//       setBaseScale(lastScale);
//       setPinchScale(new Animated.Value(1));
//     }
//   };

//   const animatedStyle = {
//     flex: 1,
//     transform: [{ scale: pinchScale }],
//   };

//   return (
//     <PinchGestureHandler
//       onGestureEvent={onPinchGestureEvent}
//       onHandlerStateChange={onPinchHandlerStateChange}
//     >
//       <Animated.View style={animatedStyle}>
//         <View>
//           <Text style={{ fontSize: 40 }}>This is some zoomable text!</Text>
//           <View style={{ width: 200, height: 200, backgroundColor: 'blue' }} />
//         </View>
//       </Animated.View>
//     </PinchGestureHandler>
//   );
// };

// export default WelcomePage;




// import React, { useState } from 'react';
// import { View, Text, Animated } from 'react-native';
// import { PinchGestureHandler, State } from 'react-native-gesture-handler';
// import WelcomePageIcon from './WelcomePageIcon';

// const WelcomePage = () => {
//   const [baseScale, setBaseScale] = useState(1);
//   const [pinchScale, setPinchScale] = useState(new Animated.Value(1));
//   const [lastScale, setLastScale] = useState(1);

//   // const onPinchGestureEvent = Animated.event(
//   //   [{ nativeEvent: { scale: pinchScale } }],
//   //   { useNativeDriver: true }
//   // );
//   const onPinchGestureEvent = Animated.event(
//     [{ nativeEvent: { scale: pinchScale } }],
//     { useNativeDriver: true, listener: (event) => console.log('Pinch gesture detected!', event.nativeEvent.scale)}
//   );

//   const onPinchHandlerStateChange = event => {
//     if (event.nativeEvent.oldState === State.ACTIVE) {
//       setLastScale(lastScale * pinchScale);
//       setBaseScale(pinchScale);
//       setPinchScale(new Animated.Value(1));
//     }
//   };

//   const animatedStyle = {
//     flex: 1,
//     transform: [{ scale: pinchScale }],
//   };

//   return (
//     <PinchGestureHandler
//       onGestureEvent={onPinchGestureEvent}
//       onHandlerStateChange={onPinchHandlerStateChange}
//     >
//       <Animated.View style={animatedStyle}>
//         <WelcomePageIcon/>
//       </Animated.View>
//     </PinchGestureHandler>
//   );
// };

// export default WelcomePage;


// import React, { useState } from 'react';
// import { View, Text } from 'react-native';
// import { PinchGestureHandler } from 'react-native-gesture-handler';
// import WelcomePageIcon from './WelcomePageIcon';

// const WelcomePage = () => {
//   const [zoomLevel, setZoomLevel] = useState(1);

//   const handleZoomEvent = event => {
//     setZoomLevel(event.nativeEvent.scale);
//     console.log('zoom event triggered');
//   };

//   const contentStyle = {
//     flex: 1,
//     transform: [{ scale: zoomLevel }],
//   };

//   return (
//     <PinchGestureHandler onGestureEvent={handleZoomEvent}>
//       <View style={contentStyle}>
//         <WelcomePageIcon/>
//       </View>
//     </PinchGestureHandler>
//   );
// };


// export default WelcomePage;
