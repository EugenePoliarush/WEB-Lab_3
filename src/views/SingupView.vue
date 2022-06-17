<template>
    <div class="SingupView">
        <div class="container-fluid center">
            <div class="row align-items-top m-5">
                <form action = "" method="">
                    <div class="form-group m-1">
                        <label for="first_name">First name</label>
                        <input type="text" class="form-control" placeholder="Enter your first name" name="first_name">
                    </div>
                    <div class="form-group m-1">
                        <label for="second_name">Second name</label>
                        <input type="text" class="form-control" placeholder="Enter your second name" name="second_name">
                    </div>
                    <div class="form-group m-1">
                        <label for="user_name">User name</label>
                        <input type="text" class="form-control" placeholder="Enter your user name" name="user_name">
                    </div>
                    <div class="form-group m-1">
                        <label>Email address</label>
                        <input type="email" class="form-control" placeholder="Enter your email address" aria-describedby="emailHelp">
                        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div class="form-group m-1">
                        <label>Date of birth</label>
                        <input type="date" class="form-control">
                    </div>
                    <div class="form-group m-1">
                        <label>Sex</label><br>
                        <input type="radio" name="your_sex">
                        <label for="your_sex">Male</label>
                        <input type="radio" name="your_sex">
                        <label for="your_sex">Female</label>

                    </div>
                    <div class="form-group m-1">
                        <label for="password">Choose your password</label>
                        <input type="password" class="form-control" placeholder="password" name="password">
                    </div>
                    <div class="form-check">
                        <input class="form-check-input is-invalid" type="checkbox" value="" id="invalidCheck" aria-describedby="invalidCheckFeedback" required>
                        <label for="invalidCheck">
                            Agree to terms and conditions
                        </label>
                        <div id="invalidCheckFeedback" class="invalid-feedback">
                          You must agree before submitting.
                        </div>
                    </div>
                    <div class="form-group m-1">
                        <input type="submit" value="Sign up">
                        <input type="reset" value="Reset">
                    </div>
                </form>
            </div>
        </div>
    </div>
  </template>
  
  <script>
    export default {
      name: 'SingupView',
      mounted(){document.title = 'Sing up';}
    }
  </script>
  
  <style>
    
  </style>