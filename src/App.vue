<template>
  <header>
    <div class="container-fluid">
        <div class="row my-2">
            <div class="col-md-1 p-0"><img src="./assets/icon.png" class="img-fluid rounded float-end" alt="icon"></div>
            <div class="btn-group col-md-6 p-0" role="group">
                
                <router-link class="btn btn-secondary center" role="button" to="/">Calculator</router-link>
                
                <router-link class="btn btn-secondary center" role="button" to="/ProfileView">Profile</router-link>
                
                <router-link class="btn btn-secondary center" role="button" to="/AboutView">About</router-link>
            </div>
            <div class="col-md-3"></div>
            <div class="btn-group col-md-2" role="group">
                <router-link class="btn btn-secondary center" role="button" to="/LoginView">Log in</router-link>

                <router-link class="btn btn-secondary center" role="button" to="/SingupView">Sign up</router-link>
            </div>
        </div>      
    </div>
</header>
  <router-view/>
  
</template>

<style>
body {
  background-image: url(./assets/digit.jpg);
  background-repeat: repeat;
}
</style>
