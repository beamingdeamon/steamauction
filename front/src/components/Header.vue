<template>
    <div class="wrapper">
        <div class="content_wrapper">
            <ul>
                <li><a href="/aboutus">О НАС</a></li>
                <li><a href="#contacts">КОНТАКТЫ</a></li>
                <li><a href="/">АУКЦИОНЫ</a></li>
                <li><a href="/profile">ПРОФИЛЬ</a></li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style lang="sass" scoped>
  .wrapper
    height: 7vh
    width: 100vw
    background-color: black
    border: 1px solid blue
    display: flex
    align-items: center
    justify-content: center
    .content_wrapper
      width: 80%
      display: flex
      align-items: center
      justify-content: center
      height: 100%
      ul
        list-style-type: none
        display: flex
        justify-content: space-around
        width: 100%
        li
          height: 100%
          a
            color: white
            text-decoration: none
            font-size: 3vh
            height: 100%
          a:hover
            color: aquamarine
</style>
