<template>
    <div>
        <input v-bind:value="second">
    </div>
</template>
<script>
export default {
  props: ['second']
}
</script>