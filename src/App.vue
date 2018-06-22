<template>
  <div id="app">
      <svg class="content-box">
          <g>
            <item-path :d="'M180 350,Q200 250 310 210'"></item-path>
          </g>
          <item-root></item-root>
      </svg>
  </div>
</template>

<script>
import itemPath from './components/item-path.vue' ;
import itemRoot from './components/item-root.vue' ;
export default {
  name: 'App',
  created() {

  },
  components: {
    itemRoot ,
    itemPath
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.content-box{
    width:800px;
    height:600px;
    background: #eee ;
    position: absolute;
    left:0;
    right:0;
    top:0;
    bottom:0;
    margin:auto ;
}
</style>
