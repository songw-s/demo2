<template>
  <div>
    <ul>
      <li>{{ mountaiList[0] }}</li>
    </ul>
    <ul>
      <input v-model="mountaiList[1]" disabled="disabled">
    </ul>
    <ul>
      <input v-bind:value="showVbind" />
      <button v-on:click="showVbindMethod">change</button>
    </ul>
    <ul>
      <input v-bind:value="foreachValueList" />
    </ul>
    <ul>
      <input v-bind:value="calculation" />
    </ul>
  </div>
</template>
<script>
import { $axios } from '@nuxtjs/axios'
export default {
  data () {
    return {
      showVbind: 'aaa',
      foreachValueList: []
    }
  },
  async asyncData ({ app }) {
    let mountaiList = await app.$axios.$get('https://api.open-meteo.com/v1/forecast?latitude=35.6895&longitude=139.6917&hourly=temperature_2m')
    mountaiList = mountaiList.hourly.time
    return { mountaiList }
  },
  mounted () {
    this.FreshForeachList()
  },
  computed: {
    calculation () {
      let calVbindValueCase = [1, 2, 3]
      let vbindValueCase = []
      for (let i in calVbindValueCase) {
        vbindValueCase.push(calVbindValueCase[i])
      }
      return vbindValueCase
    }
  },
  methods: {
    showVbindMethod () {
      this.showVbind = 'bbb'
    },
    FreshForeachList () {
      const forValList = { 'keyword1': 'kw1', 'keyword2': 'kw2' }
      for (let i in forValList) {
        this.foreachValueList.push(forValList[i])
      }
    }
  }
}
</script>