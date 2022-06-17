<template>
  <div class="AboutView">
    <div class="container-fluid center">
                <div class="row my-2">
                    <h1 class="text-center">About app</h1>
                    <p class="text-center">The application is a calculator that helps in complex calculations. Developed by: Eugene Poliarush.</p>   
                </div>  
            </div>
            <div class="container-fluid center">   
                <div>
                <img src="../assets/logo.png" class="img-fluid" alt="icon2">
                </div> 
            </div>
  </div>
</template>

<script>
  export default {
    name: 'ProfileView',
    mounted(){document.title = 'About';}
  }
  
</script>

<style>
  
</style>