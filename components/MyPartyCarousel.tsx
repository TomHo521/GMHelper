import React from 'react';
import { View, FlatList, Dimensions } from 'react-native';
import Lia from './Lia';
import Midir from './Midir';
import Zovinar from './Zovinar';
import Po from './Po';
import Cassian from './Cassian';

const data = [
  { id: '1', component: <Midir /> },
  { id: '2', component: <Lia /> },
  { id: '3', component: <Zovinar /> },
  { id: '4', component: <Po /> },
  { id: '5', component: <Cassian /> },
];




const MyPartyCarousel = () => {
  const screenWidth = Dimensions.get('window').width;


  const renderItem = ({ item }) => {
    return (
      // <View style={{ width: screenWidth }}>
      //   {item.component}
      // </View>
      <View style={{ width: screenWidth, alignItems: 'center', justifyContent: 'center' }}>
      {item.component}
    </View>
    );
  };
  
  return (
    // <View style={{ 
    //   flex: 1, 
    //   flexDirection: 'row', 
    //   justifyContent: 'center', 
    //   alignItems: 'center' 
    // }}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        pagingEnabled={true}
        snapToInterval={screenWidth} // This will make the FlatList snap to each item's width
        //snapToInterval={screenWidth / 2}
        decelerationRate="fast"
      />
    // </View>
  );
};



// const renderItem = ({ item }) => {
//   return (
//     <View style={{ width: '100%' }}>
//       {item.component}
//     </View>
//   );
// };

// const MyPartyCarousel = () => {
//   return (
//     <FlatList
//       data={data}
//       renderItem={renderItem}
//       keyExtractor={(item) => item.id}
//       horizontal={true}
//       showsHorizontalScrollIndicator={false}
//       pagingEnabled={true}
//     />
//   );
// };

export default MyPartyCarousel;
