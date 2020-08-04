<template>
<div class="container">
  
  
    <ul>
        <li v-for="post in posts" :key="post.id" @click="showPostDelails(post.id)">
        <img style="height:30%; width:30%" :src="'http://localhost:3000/images/'+ post.path">
        <b>Label:</b>  {{post.label}} <br>
        <b>description : </b> {{post.description}}
        <b> publie par : </b> {{post.user.name}}
        </li>
    </ul>

</div>
</template>
<script>
import axios from "axios"

export default {
    name: "posts",
    data()  {
    return {
        posts:[]
    }

},
    mounted(){

        this.getAllPost();
    },



    methods: {

        getAllPost(){
    
        axios.get("http://localhost:3000/posts/list").then(res => { 
            console.log(res)

            this.posts= res.data;
        }).catch(err => {
            console.log(err)
        })
         
     } ,
     showPostDelails(id){
        this.$router.push({name: 'postDetails', params: {id: id}})
     }
}
        
    };
</script>