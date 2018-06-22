<template>
    <g>
        <g v-for="item in itemArr" :key="item.id">
            <rect id="item-root" :x="item.addr.x" :y="item.addr.y" rx="5" ry="5" width="100" height="30" style="fill:rgb(115, 161, 191);stroke:rgb(115, 161, 191);"/>
            <text :x="Number(item.addr.x)+10" :y="Number(item.addr.y)+20" fill="white">{{item.text}}</text>
        </g>
    </g>
</template>
<script>
import {mapState} from 'vuex' ;
export default {
    name: 'ItemRoot' ,
    data(){
        return {
            itemArr1:[]
        }
    },
    methods:{
        foreachMap(tree){
            tree.map((item)=>{
                this.itemArr1.push(item) ;
                if(item.children.length>0){
                    this.foreachMap(item.children) ;
                }
            });
        }
    },
    computed:{
        ...mapState(['dataMap']) ,
        itemArr(){
            this.foreachMap(this.dataMap) ;
            console.log('itemArr',this.itemArr1) ;
            return this.itemArr1 ;
        }
    },
    components: {
        
    }
}
</script>

<style scoped>
    
</style>
