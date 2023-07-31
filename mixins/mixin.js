export default {
  methods: {
    async getData (url, httpMehod) {
      const data = await fetch(url, { method: httpMehod })
        .then(data => data.json())
      return data
    }
  }
}