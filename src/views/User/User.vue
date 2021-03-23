<template>
  <div>
    <input type="text" v-model="usernameInput" />
    <button @click="changeUsername">Change Username</button>
    {{ usernameInput }}
    <HelloWorld msg="Trang usser" />
  </div>
</template>
<script lang="ts" src='./User.ts'>
</script>