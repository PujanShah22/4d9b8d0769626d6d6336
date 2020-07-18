import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {
  SearchAsteroidByIdAction,
  SearchRandomAsteroidAction,
} from '../store/Actions/SearchAsteroidAction';
import CustomButton from '../components/CustomButton';

const InputScreen = ({navigation}) => {
  const [asteroidId, setAsteroidId] = useState('');

  const {data, isLoading} = useSelector((state) => state.HomeReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    if (data != null) {
      navigation.navigate('Home Screen');
    }
  }, [data]);

  return (
    <View style={{flex: 1}}>
      <TextInput
        style={{
          width: '80%',
          fontSize: 15,
          color: 'black',
          borderColor: 'black',
          borderWidth: 1,
          padding: 10,
          marginHorizontal: '10%',
          marginVertical: 20,
        }}
        placeholder="Enter Asteroid ID"
        onChangeText={(text) => setAsteroidId(text.trimRight())}
        value={asteroidId}
      />

      <CustomButton
        backgroundColor={asteroidId.length > 0 ? 'blue' : 'gray'}
        isLoading={isLoading}
        disabled={asteroidId.length == 0}
        onPress={() => {
          dispatch(SearchAsteroidByIdAction(asteroidId));
        }}
        text={'Submit'}
      />

      <CustomButton
        isLoading={isLoading}
        onPress={() => {
          dispatch(SearchRandomAsteroidAction());
        }}
        text={'Random Asteroid'}
      />
    </View>
  );
};

export default InputScreen;
