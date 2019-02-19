<template>
  <div id="q-app">
    <router-view />
  </div>
</template>

<script lang="ts">
  import store from 'src/store'

  import { initializeAllClients } from 'common-property-connect/shared/clients';
  import { setAxiosHelper } from 'common-property-connect/shared/axios';
  import { createAxiosHelper } from 'common-ts/network-utils';
  import { Screen } from '@quasar/app/templates/entry/import-quasar.js';

  const axiosHelper = createAxiosHelper({
    store,
    // host: '127.0.0.1',
    host: 'propertyconnectdev.csjoom1fxrea.us-east-2.rds.amazonaws.com',
    port: 7000,
  });

  setAxiosHelper(axiosHelper);
  initializeAllClients();

  // @ts-ignore
  // Screen.setSizes({ sm: 360, md: 700, lg: 1200, xl: 2000 });

  import router from 'src/router';

  export default {
    name: 'App',
    store,
    mounted() {
      router.push('/home');
    }
  };
</script>

