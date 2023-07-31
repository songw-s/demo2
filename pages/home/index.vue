<template>
  <div id="list2">
    <ul>
      <li v-for="item in items" v-bind:key="item.foreast">{{ item.foreast }}</li>
    </ul>
    <input v-model="name">
    <button v-on:click="refreshItems">天気</button>
    <HI v-bind:name.sync="name" />
  </div>
</template>
<script>
import mixin from '~/mixins/mixin'
import HI from '~/components/HomeIndex'
export default {
  mixins: [mixin],
  components: { HI },
  data () {
    return {
      items: [{ foreast: '' }, { foreast: '' }],
      name: 'hello'
    }
  },
  methods: {
    async refreshItems () {
      const url = 'https://api.open-meteo.com/v1/forecast?latitude=35.6895&longitude=139.6917&hourly=temperature_2m'
      const httpMethod = 'GET'
      const refItems2 = await this.getData(url, httpMethod)
      this.items = [{ foreast: refItems2.latitude }, { foreast: refItems2.hourly.time[1] }]
    }
  }
}
</script>