<template>
  <div>
    <v-app>
      <Header />
      <v-content>
        <v-main>
          <v-container>
            <slot />
          </v-container>
        </v-main>
      </v-content>
      <Footer />
    </v-app>
  </div>
</template>
