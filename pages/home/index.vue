<template>
  <div id="list2">
    <ul>
      <li v-for="item in items" v-bind:key="item.foreast">{{ item.foreast }}</li>
    </ul>
    <button v-on:click="refreshItems">天気</button>
  </div>
</template>
<script>
import mixin from '~/mixins/mixin'
export default {
  mixins: [mixin],
  data () {
    return {
      items: [{ foreast: '' }, { foreast: '' }]
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