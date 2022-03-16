<template>
  <v-app class="condux">
    <!-- Top bar -->
    <v-app-bar
      app
      class="bg-color1"
      style="left: 56px;"
    >
      <v-spacer></v-spacer>
      <v-text-field
            outlined
            hide-details
            rounded
            label="Search"
            prepend-inner-icon="mdi-magnify"
            class="shrink pr-3"
            size="15"
            dense
          ></v-text-field>
      <v-switch
        v-model="darkMode"
        label="Dark Mode"
        hide-details
        flat
        class="font-weight-bold"
      ></v-switch>
    </v-app-bar>
    <!-- left bar -->
    <v-navigation-drawer
      app
      permanent
      expand-on-hover
      fixed
      class="left-bar-height"
      attach
    >
      <v-list>
        <v-list-item class="px-2">
          <v-list-item-avatar>
            <v-img src="./assets/img/logo.svg"></v-img>
          </v-list-item-avatar>
          <v-list-item-title class="text-h6">
            Condux
          </v-list-item-title>
        </v-list-item>

        <v-list-item link>
          <v-list-item-content>
            <v-list-item-title class="subtitle-1 font-weight-bold">
              Alessio Pampana
            </v-list-item-title>
            <v-list-item-subtitle class="font-weight-medium">apampana@es-tek.it</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <v-divider></v-divider>
      <!-- Routes -->
      <v-list
        nav
        dense         
      >
        <v-list-item link to="/">
          <v-list-item-icon>
            <v-icon>mdi-home</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Home</v-list-item-title>
        </v-list-item>
        <v-list-item link to="/projects">
          <v-list-item-icon>
            <v-icon>mdi-note-multiple</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Projects</v-list-item-title>
        </v-list-item>
        <v-list-item link to="/account">
          <v-list-item-icon>
            <v-icon>mdi-account</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Account</v-list-item-title>
        </v-list-item>
      </v-list>

      <template v-slot:append>
        <v-list density="compact" nav>
        <v-list-item class="pl-0">
          <v-list-item-avatar left>
            <v-icon>mdi-logout-variant</v-icon>
          </v-list-item-avatar>
          <v-list-item-title class="font-weight-bold"> Logout</v-list-item-title>
        </v-list-item>
      </v-list>
      </template>

    </v-navigation-drawer>
    <!-- Pages -->
    <v-main style="padding-left:56px;" class="bg-color4">
      <div class="pa-5">
        <router-view/>
      </div>     
    </v-main>
    <!-- Footer -->
    <v-footer
      app 
      padless
      fixed     
      bottom
    >
      <v-card
        flat
        tile
        width="100%"
        class="bg-footer text-center footer-height"
      >
        <v-divider></v-divider>

        <v-card-text>
          {{ new Date().getFullYear() }} — <strong>Condux</strong>
        </v-card-text>
      </v-card>
    </v-footer>

  </v-app>
</template>

<script>

export default {
  name: 'App',
  data: () => ({
    darkMode: false
  }),
  methods:
  {
    
  },
  components: {
  
  },
  watch: {
    darkMode(Value){
      this.$vuetify.theme.dark = Value
    }
  }
  
};
</script>
