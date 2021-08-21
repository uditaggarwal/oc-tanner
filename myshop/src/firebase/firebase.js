import firebase from 'firebase/app'
import 'firebase/storage'

     
      var firebaseConfig = {
        apiKey: "AIzaSyC2TtKweqGer5fDPp4mGqtcKpaBJkJ9LIE",
        authDomain: "node-js-980ba.firebaseapp.com",
        projectId: "node-js-980ba",
        storageBucket: "node-js-980ba.appspot.com",
        messagingSenderId: "737924248986",
        appId: "1:737924248986:web:c66776117afc0dd7713623",
        measurementId: "G-C41XB1VG7Z"
      };
     
      firebase.initializeApp(firebaseConfig);
      const storage = firebase.storage()
      // firebase.analytics();
   
      
export  {
    storage, firebase as default
  }