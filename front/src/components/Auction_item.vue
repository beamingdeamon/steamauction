<template>
  <div class="wrapper">
    <img src="../assets/test.png" alt="ds">
    <h2>Кондилябр</h2>
    <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. In ex illo qui rem, recusandae iure!</h3>
    <h4><span @click="minus">-</span><input type="number" value="price">$<span @click="plus">+</span><br><button>Supply</button></h4>
    <div class="timer">00:00:00</div>
  </div>
</template>

<script>
export default {
  name: 'Auctionitem'
}
</script>

<style lang="sass" scoped>
  .wrapper
    width: 27vw !important
    height: 70vh !important
    margin: 5vh
    color: white
    img
      margin: 3vh
      width: 70%
      height: 35%
    h3
      margin-left: 2vh
      margin-right: 2vh
      margin-top: 0
      margin-bottom: 0
      height: 16%
      overflow-y: auto
    h2
      margin-top: 0
      margin-bottom: 0
    input
      color: white
      background-color: rgba(0,0 ,0 ,0.95 )
      width: 4vw
    button
      background-color: rgba(0,0 ,0 ,0.95 )
      color: white
      float: right
      border: 1px solid white
    span
      cursor: pointer
    .timer
      margin-top: 2.5vh
      height: 5vh
      font-size: 5vh
</style>
