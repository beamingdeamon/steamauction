<template>
  <div class="wrapper">
    <div class="leftContentWrapper">
      <img src="../assets/test.png" alt="Connecting">
      <h1>Имя Пользователя: eldar_2301</h1>
      <h3>Ваши Аукционы:</h3>
      <div class="auctionsBlock">
        <AuctionListitem/>
        <AuctionListitem/>
        <AuctionListitem/>
        <AuctionListitem/>
      </div>
    </div>
    <div class="rightContentWrapper">
      <h1>Создать Аукцион</h1>
      <form action="" on-submit="return false">
        <input type="data" name="Вставить Картинку" id="">
        <h2>Название Аукциона</h2>
        <input type="text">
        <h2>Описание</h2>
        <input type="text">
        <h1>Длительность Аукциона</h1>
        <input type="time">
        <button>Submmit</button>
      </form>
    </div>
  </div>
</template>

<script>
import AuctionListitem from '@/components/AuctionListItem.vue'
export default {
  name: 'Profile',
  components: {
    AuctionListitem
  }
}
</script>

<style lang="sass" scoped>
  ::-webkit-scrollbar
    width: 3px
    height: 3px
  ::-webkit-scrollbar-button
    background-color: #666
  ::-webkit-scrollbar-track
    background-color: #999
  ::-webkit-scrollbar-track-piece
    background-color: #ffffff
  ::-webkit-scrollbar-thumb
    height: 50px
    background-color: #666
    border-radius: 3px
  ::-webkit-scrollbar-corner
    background-color: #999
  ::-webkit-resizer
    background-color: #666
  .wrapper
    width: 100vw
    height: 100vh
    display: flex
    align-items: center
    justify-content: center
    background-color: rgba(20,20 ,20 ,1)
    .leftContentWrapper
      width: 40%
      height: 80%
      display: flex
      align-items: center
      flex-direction: column
      img
        width: 60%
        height: 30%
      h1
        color: white
        font-size: 4.5vh
      h3
        color: white
        font-size: 4.5vh
      .auctionsBlock
        width: 100%
        height: 37%
        overflow-y: auto
        overflow-x: hidden
        display: flex
        flex-wrap: wrap
        justify-content: space-between
    .rightContentWrapper
      width: 60%
      height: 80%
      h1
        color: white
        text-align: center
      h2
        color: white
        text-align: center
      form
        display: flex
        justify-content: center
        align-items: center
        flex-direction: column
        input
          width: 10vw
        button
          margin-top: 5vh
          width: 10vw
          height: 6vh
</style>
