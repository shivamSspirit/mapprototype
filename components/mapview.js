import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import { Platform, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import BottomSheet from '@gorhom/bottom-sheet';
import * as Location from 'expo-location';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Filter from './filter';
import Birb from './birb';
import Likes from './likes';
import Search from './search'

function MapViews() {
   const [errorMsg, setErrorMsg] = useState(null);
   const [mapRigion, setMapRegion] = useState(null);
   const [opensheet, setOpensheet] = useState(false);

   // components
   const [openFilter, setOpenFilter] = useState(false)
   const [openbirb, setOpenbirb] = useState(false)
   const [opensearch, setOpenSearch] = useState(false)
   const [openlikes, setOpenLikes] = useState(false)


   const [otherlocations] = useState([
      {
         id: 1,
         title: 'Rooms',
         description: 'Hotel rooms',
         profilePic: 'https://res.cloudinary.com/ddwkxn8ak/image/upload/v1659538069/t8vhjgbpww5we2hlehgu.jpg',
         roompics: [
            {
               title: 'title 1',
               caption: 'caption 1',
               url: 'https://res.cloudinary.com/ddwkxn8ak/image/upload/v1658473272/iqlygce2ig8qdhmdt0uy.jpg',
            },
            {
               title: 'title 2',
               caption: 'caption 2',
               url: 'https://res.cloudinary.com/ddwkxn8ak/image/upload/v1658473272/iqlygce2ig8qdhmdt0uy.jpg',
            },
            {
               title: 'title 3',
               caption: 'caption 3',
               url: 'https://res.cloudinary.com/ddwkxn8ak/image/upload/v1658473272/iqlygce2ig8qdhmdt0uy.jpg',
            }
         ],

         address: {
            street: "Pratap Nagar",
            postalCode: "302029",
            city: "Jaipur",
            state: "Rajasthan",
            country: "India"
         },
         price: '2233',
         aboutroom: {
            beds: "4 beds"
         },
         location: {
            longitude: 78.8,
            latitude: 50.67
         }
      },
      // {
      //    id: 2,
      //    title: 'gyms',
      //    description: 'all gyms',
      //    gympics: [],
      //    address: {
      //       street:"jai Nagar",
      //       postalCode:"302011",
      //       city:"Jaipur",
      //       state:"Rajasthan",
      //       country:"India"
      //    },
      //    price: '4444',
      //    aboutgym: {
      //       machines:"all machines"
      //    },
      //    location: {
      //       longitude: 50.43,
      //       latitude: 80.54
      //    }
      // },
      // {
      //    id: 3,
      //    title: 'cafes',
      //    description: 'best cafes',
      //    roompics: [],
      //    address: {
      //       street:"rai Nagar",
      //       postalCode:"302026",
      //       city:"Jaipur",
      //       state:"Rajasthan",
      //       country:"India"
      //    },
      //    price: '3333',
      //    aboutcafe: {
      //       cafe:"nice menus"
      //    },
      //    location: {
      //       longitude: 60.54,
      //       latitude: 90.43
      //    }
      // }
   ])

   // bottom sheet ref
   const bottomSheetRef = useRef(null);
   // variables
   const snapPoints = useMemo(() => ['5%', '50%', '75%'], []);
   // callbacks
   const handleSheetChanges = useCallback((index) => {
      console.log('handleSheetChanges', index);
   }, []);
   // close sheet
   const handleClosePress = () => bottomSheetRef.current.close();
   // const handleExpand = () => bottomSheetRef.current.expand();

   const handleExpandFilter = () => {
      setOpenFilter(true);
      setOpenbirb(false);
      setOpenLikes(false)
      setOpenSearch(false)
      bottomSheetRef.current.expand();
   }

   const handleExpandBirb = () => {
      setOpenFilter(false);
      setOpenbirb(true);
      setOpenLikes(false)
      setOpenSearch(false)
      bottomSheetRef.current.expand();
   }

   const handleExpandSearch = () => {
      setOpenFilter(false);
      setOpenbirb(false);
      setOpenLikes(false)
      setOpenSearch(true)
      bottomSheetRef.current.expand();
   }

   const handleExpandLikes = () => {
      setOpenFilter(false);
      setOpenbirb(false);
      setOpenLikes(true)
      setOpenSearch(false)
      bottomSheetRef.current.expand();
   }

   const returnComponents = () => {
      if (openFilter) {
         return (
            <View>
               <Filter />
            </View>
         )
      }
      else if (openbirb) {
         return (
            <View>
               <Birb otherlocations={otherlocations} />
            </View>
         )
      }
      else if (openlikes) {
         return (
            <View>
               <Likes />
            </View>
         )
      }
      else if (opensearch) {
         return (
            <View>
               <Search />
            </View>
         )
      }
   }


   useEffect(() => {
      (async () => {
         let { status } = await Location.requestForegroundPermissionsAsync();
         if (status !== 'granted') {
            setErrorMsg('Permission to access location was denied');
            return;
         }
         let location = await Location.getCurrentPositionAsync({});
         setMapRegion({
            longitude: location?.coords?.longitude,
            latitude: location?.coords?.latitude,
            longitudeDelta: 0.0922,
            latitudeDelta: 0.0421
         })
      })();
   }, []);

   return (
      <View style={styles.container}>
         <MapView
            style={styles.map}
            showsUserLocation
            initialRegion={mapRigion}
         >
            {mapRigion && <Marker onCalloutPress={() => handleClosePress()} title='me' description='myself' coordinate={mapRigion}></Marker>}
            {otherlocations ? otherlocations.map((items, id) => (
               <Marker key={id} coordinate={items?.location} title={items?.title} description={items?.description}></Marker>
            )) : null}
         </MapView>

         <View style={styles.icons}>
            <TouchableOpacity onPress={opensheet ? handleClosePress : handleExpandFilter}>
               <Image style={styles.icon} source={require('../assets/appicons/filter.png')} />
            </TouchableOpacity>

            <TouchableOpacity onPress={opensheet ? handleClosePress : handleExpandBirb}>
               <Image style={styles.icon} source={require('../assets/appicons/parrot.png')} />
            </TouchableOpacity>

            <TouchableOpacity onPress={opensheet ? handleClosePress : handleExpandSearch}>
               <Image style={styles.icon} source={require('../assets/appicons/search.png')} />
            </TouchableOpacity>

            <TouchableOpacity onPress={opensheet ? handleClosePress : handleExpandLikes}>
               <Image style={styles.icon} source={require('../assets/appicons/heart.png')} />
            </TouchableOpacity>
         </View>


         <BottomSheet
            ref={bottomSheetRef}
            index={1}
            snapPoints={snapPoints}
            onChange={handleSheetChanges}
            enablePanDownToClose={opensheet}
            backgroundStyle={{ backgroundColor: "blue" }}
         >
            <View style={styles.contentContainer}>
               {returnComponents()}
            </View>
         </BottomSheet>

      </View>
   );
}

const styles = StyleSheet.create({
   container: {
      ...StyleSheet.absoluteFillObject,
      flex: 1,
      justifyContent: "flex-end",
      alignItems: "center",
      backgroundColor: "blue"
   },
   map: {
      ...StyleSheet.absoluteFillObject,
   },
   icons: {
      flex: 0,
      flexDirection: 'row',
      marginBottom: 80,
      marginRight: 29,
      justifyContent: "space-evenly",
      alignItems: "stretch"
   },
   icon: {
      marginLeft: 30,
      backgroundColor: "blue",
      padding: 5,
      borderRadius: 5
   }
});

export default MapViews