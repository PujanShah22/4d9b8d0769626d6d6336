import React from 'react';
import {TouchableOpacity, ActivityIndicator, Text} from 'react-native';

const CustomButton = ({
  isLoading,
  text,
  onPress = () => {},
  backgroundColor = 'blue',
  disabled = false,
}) => {
  return (
    <TouchableOpacity
      disabled={disabled}
      style={{
        width: '60%',
        height: 40,
        backgroundColor: backgroundColor,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        borderRadius: 5,
        marginTop: 10,
      }}
      onPress={() => onPress()}>
      {isLoading ? (
        <ActivityIndicator color="white" />
      ) : (
        <Text style={{color: 'white', fontSize: 15, fontWeight: 'bold'}}>
          {text}
        </Text>
      )}
    </TouchableOpacity>
  );
};

export default CustomButton;
