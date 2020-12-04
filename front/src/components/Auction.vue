<template>
    <div class="wrapper">
      <Auctionitem/>
      <Auctionitem/>
      <Auctionitem/>
    </div>
</template>

<script>
import Auctionitem from '@/components/Auction_item.vue'
export default {
  name: 'Auction',
  components: {
    Auctionitem
  }
}
</script>

<style lang="sass" scoped>
  .wrapper
    width: 100vw
    height: auto
    background-color: rgba(0,0 ,0 ,0.95 )
    display: flex
    justify-content: space-around
    flex-wrap: wrap
    overflow-y: auto
</style>
