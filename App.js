
/* eslint-disable prettier/prettier */
/* eslint-disable no-labels */
/* eslint-disable no-shadow */
/* eslint-disable radix */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useRef } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Alert,
  Dimensions,
  Image,
  ScrollView,
  TextInput,
  SafeAreaView,
  ToastAndroid,
  Button,
} from 'react-native';
import CardA from './Screens/Card';
import data from './heliverse_mock_data'
const { width, height } = Dimensions.get('window');
const responsiveSize = (number) => {
  const currentScreen = Dimensions.get('window');
  return (currentScreen.height / currentScreen.width) * number;
};



const App = () => {
  const [page, setpage] = useState(1);
  const [search,setsearch] =useState("");
  const [limit ,setlimit]= useState(data.length);
  const [searchArr,SetSearchArr]= useState([]);



  const setpageno =(pass)=>{
    if (pass > parseInt(limit / 5) + (limit % 5 ===0? 0: 1 ) ) {
      setpage(parseInt(limit / 5) + (limit % 5 ===0? 0: 1 ));
    }else if(pass <1){
         setpage(1);
    }else{
      setpage(pass);
    }
  }

  const searchResult =(Text)=>{
    setsearch(Text);
    const regex = new RegExp(Text, 'i');
    
   const a =  data.filter((e)=> regex.test(e.first_name + e.last_name));
   SetSearchArr(a);

  }

  return (
    <View style={styles.container}>
      <Text style={styles.headingText}>Welcomee !</Text>
      <View style={styles.searchBar}>
        <TextInput
          style={styles.input}
          value={search}
          onChangeText={searchResult}
          placeholder="🔍 Search..."
        />
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
      >

        {!searchArr.length &&
          data.slice( 5*(page-1) , 5*(page)).map((element) => (
            <CardA
              element={element}
              key={element.id}
            />
          ))
        }

        <View style={styles.searchBar2}>
          <TextInput
            style={styles.input2}
            // value={String(page)
            keyboardType="numeric"
            onChangeText={(Text)=>setpageno(Number(Text))}
            placeholder="page"
            
          />

          <View style={styles.pageSelection} >
                <Text> {page} out of {parseInt(limit / 5) + (limit % 5 ===0? 0: 1 )} pages</Text>
          </View>

        </View>


      </ScrollView >
    </View >
  );
};

const styles = StyleSheet.create({
  //main whole screen
  container: {
    flex: 1,
    backgroundColor: '#F6F6F6',
  },

  headingText: {
    margin: responsiveSize(6),
    fontFamily: 'Rubik',
    fontWeight: '600',
    fontSize: 21,
    textAlign: 'center',
    color: '#00040B',
  },
  searchBar: {
    marginVertical: responsiveSize(6),
    marginHorizontal: responsiveSize(2),
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: '95%',
    fontSize: 16,
    borderRadius: 10,
    backgroundColor: '#76768012',
    padding: 10,
  },
  pageSelection: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  roundButtonNow: {
    height: responsiveSize(20),
    width: responsiveSize(20),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    backgroundColor: '#A810C1',
    margin: responsiveSize(4),
   
  },
  roundButton1: {
    height: responsiveSize(18.5),
    width: responsiveSize(18.5),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    borderColor: 'white',
    borderWidth: 1,
    marginTop: 5,
    alignSelf: 'center',
  },
  roundBColor: {
    fontSize: 16,
    fontWeight: '400',
    color: '#F6F6F6',
  },
  searchBar2: {
    marginVertical: responsiveSize(6),
    marginHorizontal: responsiveSize(6),
    flexDirection: 'row',
    // justifyContent: 'center',
    alignSelf:'center',
    alignItems: 'center',
  },
  input2: {
    width: '25%',
    fontSize: 16,
    borderRadius: 10,
    backgroundColor: '#76768012',
    padding: 10,
  },

});

export default App;

