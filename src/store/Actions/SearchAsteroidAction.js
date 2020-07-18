import Apis, {nasaKey} from '../../common/ApiConfig';
import {Alert} from 'react-native';

const showLoader = (dispatch, isLoading = true) => {
  return dispatch({
    type: 'SEARCH_ASTEROID',
    isLoading,
  });
};

export const SearchAsteroidByIdAction = (id) => {
  return async (dispatch) => {
    showLoader(dispatch);
    await fetch(`${Apis.baseUrl}${id}?api_key=${nasaKey}`, {
      method: 'GET',
    })
      .then((res) => {
        if (res.status === 200) {
          return res.json();
        } else {
          return false;
        }
      })
      .then((data) => {
        if (data) {
          dispatch({
            type: 'SEARCH_ASTEROID_SUCCESS',
            data: data,
          });
        } else {
          showLoader(dispatch, false);
          Alert.alert(
            'There are some issues while fetching data for given id.',
          );
        }
      })
      .catch((err) => {
        showLoader(dispatch, false);
        Alert.alert('There are some issues while fetching data for given id.');
      });
  };
};

export const SearchRandomAsteroidAction = () => {
  return async (dispatch) => {
    showLoader(dispatch);

    const id = await fetch(`${Apis.demo}`, {
      method: 'GET',
    })
      .then((res) => {
        if (res.status === 200) {
          return res.json();
        } else {
          return false;
        }
      })
      .then((data) => {
        console.log('dataa=>', data);
        if (data) {
          console.log('data ==> ', data);
          if (data.near_earth_objects) {
            var randomnumber = Math.floor(
              Math.random() * (data.near_earth_objects.length - 0 + 1),
            );
            return data.near_earth_objects[randomnumber].id;
          }
          Alert.alert('No asteroid found.');
          return false;
        } else {
          Alert.alert(
            'There are some issues while fetching data for given id.',
          );
          return false;
        }
      })
      .catch((err) => {
        Alert.alert('There are some issues while fetching data for given id.');
        return false;
      });

    if (!id) {
      showLoader(dispatch, false);
      return;
    }

    await fetch(`${Apis.baseUrl}${id}?api_key=${nasaKey}`, {
      method: 'GET',
    })
      .then((res) => {
        if (res.status === 200) {
          return res.json();
        } else {
          return false;
        }
      })
      .then((data) => {
        if (data) {
          dispatch({
            type: 'SEARCH_ASTEROID_SUCCESS',
            data: data,
          });
        } else {
          showLoader(dispatch, false);
          Alert.alert(
            'There are some issues while fetching data for given id.',
          );
        }
      })
      .catch((err) => {
        showLoader(dispatch, false);
        Alert.alert('There are some issues while fetching data for given id.');
      });
  };
};
