<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <div>
      


      <h1>{{notification.title}}</h1>
      <p>
        {{notification.body}}
      </p>
      
      </div>
  </div>
</template>

<script>
import {getMessagingObject} from "./firebaseFunction";

export default {
  name: "App",
  components: {},
  data(){
    return {
   
        notification : {
          body : '',
          title : '',
        },
       
   
    }
  },
  async created(){
    //* Triggered when user is on this page
     let messaging = await getMessagingObject();

    // Already on the web/page
    let that = this;
    messaging.onMessage(function(payload){

      const {notification} = payload
      // this.notification.body = notification.body;
      // this.notification.title = notification.title;
      that.notification.body = notification.body;
      that.notification.title = notification.title;
      console.log(notification);
    });
  }
};
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
