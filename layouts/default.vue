<template>
  <div>
    <v-app>
      <CommonHeader :isDarkMode="false" />
      <v-content>
        <v-main>
          <v-container>
            <slot />
          </v-container>
        </v-main>
      </v-content>
      <CommonFooter />
    </v-app>
  </div>
</template>
