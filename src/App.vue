<template>
  <v-app class="condux bg-color4">
    <MainLayout v-if="this.$route.meta.layout">
      <router-view></router-view>
    </MainLayout>
    <EmptyLayout v-else>
      <router-view></router-view>
    </EmptyLayout>
  </v-app>
</template>

<script>
import MainLayout from './layouts/MainLayout';
import EmptyLayout from './layouts/EmptyLayout';
export default {
  name: 'App',
  data: () => ({
    darkMode: false
  }),
  methods:
  {
    
  },
  components: {
    MainLayout,
    EmptyLayout
  },
  watch: {
    darkMode(Value){
      this.$vuetify.theme.dark = Value
    }
  }
  
};
</script>
