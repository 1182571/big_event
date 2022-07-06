<template>
  <div>
    <el-button>12</el-button>
  </div>
</template>

<script>
export default {
  created () {
    this.register()
  },
  methods: {
    async register () {
      const result = await this.$API.register.registerAPI()
      console.log(result)
    }
  }

}
</script>

<style scoped></style>
