import axios from 'axios';
import firebase from 'firebase';

const axiosWithAuth = () => {
  firebase
    .auth()
    .currentUser.getIdToken(true)
    .then(token => {
      return axios.create({
        baseURL: `change to deployed be`,
        headers: {
          Authorization: token,
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS'
        }
      });
    })
    .catch(err => console.log(err));
};
