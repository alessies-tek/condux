<template>
  <v-card class="bg-color4 border-none">
    <v-card-title class="bg-color5">
      Profile
    </v-card-title>
    <v-flex class="bg-color1 pa-3">
      <v-row>
        <v-flex xs11 sm6 md4 lg2>
          <v-avatar width="200" height="200">
            <v-img src="@/assets/img/researchers/test.jpg"/>
          </v-avatar>
        </v-flex>
        <v-flex lg5>
          <v-card elevation="0">
            <v-card-title>
              Alessio Pampana
            </v-card-title>
            <v-card-subtitle>
              pampana.alessio@gmail.com
            </v-card-subtitle>
          </v-card>
        </v-flex>
      </v-row>
      
    </v-flex>   
  </v-card> 
</template>

<script>
  export default {
    data () {
      return {

      }
    }
  }
</script>
