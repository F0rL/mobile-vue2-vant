<template>
  <div class="home">
    <img alt="Vue logo" src="@/assets/logo.png" />
    <div class="x-flex">
      <x-svg name="clock" />
      <van-button type="primary" @click="$router.push({ name: 'Apply' })">主要按钮</van-button>
    </div>
    <div v-if="userInfo">
      <p>姓名： {{ userInfo.name }}</p>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { round } from 'lodash'
export default {
  name: 'Index',
  data() {
    return {}
  },
  computed: {
    ...mapState({
      userInfo: state => state.user.userInfo
    })
  },
  mounted() {
    this.$store.dispatch('user/login')
    console.log(round(4.111))
  }
}
</script>

<style lang="less" scoped>
.home {
  .x-flex {
    flex-direction: column;
    .x-svg-icon {
      color: @base-color-default;
      font-size: 40px;
      margin-bottom: 20px;
    }
  }
}
</style>
