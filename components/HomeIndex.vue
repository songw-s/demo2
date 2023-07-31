<template>
    <div>
        <p>child: {{name}}</p>
        <button v-on:click="changeC">changeChild</button>
    </div>
</template>
<script>
export default {
  props: ['name'],
  methods: {
    changeC () {
      this.$emit('update:name', 'newChild')
    }
  }
}
</script>