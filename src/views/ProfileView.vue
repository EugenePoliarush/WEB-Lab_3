<template>
    <div class="ProfileView" >
                <div class="container-fluid center">
                    <div class="row my-2">
                        <h1 class="text-center">Profile</h1>
                        <div class="container-fluid">
                            <table class="table table-info table-striped table-bordered border-info">
                                <tr>
                                    <th>Name</th>
                                    <td>Eugene Poliarush</td>
                                </tr>
                                <tr>
                                    <th>Username</th>
                                    <td>eugene1234</td>
                                </tr>
                                <tr>
                                    <th>Sex</th>
                                    <td>Male</td>
                                </tr>
                                <tr>
                                    <th>Date of birth</th>
                                    <td>28.10.2002</td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </div>
    
    </div>

</template>

<script>
    export default {
        name: 'ProfileView',
        mounted(){document.title = 'Profile';}
    }
</script>

<style>
    
</style>