import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import {useSelector} from 'react-redux';

const HomeScreen = () => {
  const {data} = useSelector((state) => state.HomeReducer);
  const [user, setUser] = useState({
    name: '',
    nasa_jpl_url: '',
    is_potentially_hazardous_asteroid: false,
  });
  useEffect(() => {
    if (data) {
      const {
        name = '',
        nasa_jpl_url = '',
        is_potentially_hazardous_asteroid = false,
      } = data;
      setUser({
        name,
        nasa_jpl_url,
        is_potentially_hazardous_asteroid,
      });
    }
  }, []);
  return (
    <View style={{padding: 10}}>
      <Text>Name: {user.name}</Text>
      <Text>Nasa JPL URL: {user.nasa_jpl_url}</Text>
      <Text>
        Potentially Hazardous Asteroid:{' '}
        {user.is_potentially_hazardous_asteroid ? 'Yes' : 'NO'}
      </Text>
    </View>
  );
};

export default HomeScreen;
