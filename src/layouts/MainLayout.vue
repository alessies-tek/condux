<template>
  <div>
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
      <!-- Notification -->
      <v-badge
        :content="messages"
        :value="messages"
        overlap
        class="mx-2"     
      >
      <v-btn  
      @click="showNotification"
      icon
      class="d-content"
      >
          <v-icon >
            mdi-bell
          </v-icon>
      </v-btn>      
      </v-badge>
      <v-menu
        v-model="showMenu"
        absolute
        offset-y
        :position-x="menuPosition.x"
        :position-y="menuPosition.y">
        <v-list
          dense
          class="py-0"
          style="max-width: 400px">
            <v-list-item
              v-for="(item, i) in items"
              :key="i"
              :class="'border-bottom-color5 cursor-pointer hover4' + (!item.view? ' bg-color2-lighten':'')"
            >
              <v-list-item-icon>
                <v-icon v-text="item.icon"></v-icon>
              </v-list-item-icon>
              <v-list-item-content class="text-no-wrap">
                <v-row>
                  <v-col class="pb-0">
                    <v-list-item-title v-text="item.text"></v-list-item-title>
                  </v-col>
                  <v-col class="pb-0 text-right">
                    <v-list-item-action-text v-text="item.date"></v-list-item-action-text>
                  </v-col>
                </v-row>
                <v-list-item-subtitle v-text="item.subtext"></v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
        </v-list>
      </v-menu>

    </v-app-bar>
    <!-- left bar -->
    <v-navigation-drawer
      app
      permanent
      expand-on-hover
    >
      <v-list>
        <v-list-item class="px-2">
          <v-list-item-avatar>
            <v-img src="../assets/img/logo.svg"></v-img>
          </v-list-item-avatar>
          <v-list-item-title class="text-h6">
            Condux
          </v-list-item-title>
        </v-list-item>
      </v-list>
      <v-divider></v-divider>
      <v-list>
          <v-list-item class="px-2">
            <v-list-item-avatar>
              <v-img src="@/assets/img/researchers/test.jpg"></v-img>
            </v-list-item-avatar>
          </v-list-item>
          <v-list-item link to="/profile">
            <v-list-item-content>
              <v-list-item-title class="text-h6 black--text">
                Alessio Pampana
              </v-list-item-title>
              <v-list-item-subtitle>pampana.alessio@gmail.com</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <v-list-item link to="/login" color="primary">
            <v-list-item-icon>
              <v-icon>mdi-logout-variant</v-icon>
            </v-list-item-icon>
            <v-list-item-title class="color2">Logout</v-list-item-title>
          </v-list-item>

        </v-list>

      <v-divider></v-divider>
      <!-- Routes -->
      <v-list
        nav
        dense        
        class="left-link" 
      >
        <v-list-item link to="/" color="primary">
          <v-list-item-icon>
            <v-icon>mdi-home</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Home</v-list-item-title>
        </v-list-item>
        <v-list-item link to="/projects" color="primary">
          <v-list-item-icon>
            <v-icon>mdi-note-multiple</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Projects</v-list-item-title>
        </v-list-item>
        <v-list-item link to="/account" color="primary">
          <v-list-item-icon>
            <v-icon>mdi-account</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Account</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <!-- Pages -->
    <v-main class="v-main">
      <div class="pa-5">
        <slot></slot>
      </div>     
    </v-main>
    <!-- Footer -->
    <FooterTemplate/>
  </div>
</template>

<script>
import FooterTemplate from './FooterTemplate';
export default {
  name: 'MainLayout',
  data: () => ({
    messages: 2,
    showMenu : false,
    darkMode: false,
    menuPosition: {
            x: 0,
            y: 0
          },
          items: [
        {
          icon: 'mdi-phone',
          text: 'New call scheduled',
          subtext: 'you have a new scheduled text',
          date: '1 minute ago',
          view: false
        },
        {
          icon: 'mdi-email-open',
          text: 'New Message',
          subtext: 'You have a new message from research1',
          date: '1 minute ago',
          view: false
        },
        {
          icon: 'mdi-email-open',
          text: 'New Message',
          subtext: 'You have a new message from research2',
          date: '10:59',
          view: true
        },
      ],
  }),
  methods:
  {
    showNotification(e) 
    {
      this.showMenu = true;
      this.messages = 0;
      this.menuPosition.x = e.clientX;
      if (e.clientY < 55) {
        this.menuPosition.y = 55;
      } else {
        this.menuPosition.y = e.clientY;
      }
    }
  },
  components: {
    FooterTemplate
  },
  watch: {
    darkMode(Value){
      this.$vuetify.theme.dark = Value
    }
  }
  
};
</script>
