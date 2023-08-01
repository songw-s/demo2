<template>
    <div>
        <p>child: {{hello}}</p>
        <button v-on:click="changeC">changeChild</button>
    </div>
</template>
<script>
export default {
  props: ['hello'],
  methods: {
    changeC () {
      this.$emit('update:hello', 'newHello')
    }
  }
}
</script>