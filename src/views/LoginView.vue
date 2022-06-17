<template>
    <div class="LoginView">
        <div class="container-fluid center">
            <div class="row align-items-top m-5">
                <form action = "" method="">
                    <div class="form-group m-1">
                        <label for="user_name">User name</label>
                        <input type="text" class="form-control" placeholder="Enter your user name" name="user_name">
                    </div>
                    <div class="form-group m-1">
                        <label for="password">Password</label>
                        <input type="password" class="form-control" placeholder="Enter your password" name="password">
                    </div> 
                    <div class="form-group m-1">
                        <input type="checkbox" class="form-check-input">
                        <label class="form-check-label">Remember me</label>
                    </div>
                    <div class="form-group m-1">
                        <input type="submit" value="Login">
                        <input type="reset" value="Reset">
                    </div>
                </form>
            </div>   
        </div>
    </div>
  </template>
  
  <script>
    export default {
      name: 'LoginView',
      mounted(){document.title = 'Log in';}
    }
  </script>
  
  <style>
    
  </style>