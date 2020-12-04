<template>
  <div class="wrapper" id="contacts">
    <div class="content_wrapper">
      <div class="first_item">
        <h1>О НАС</h1>
        <h3>Этот сайт я создал для экзамена по JS<br>САЙТ АУКЦИОНОВ</h3>
      </div>
      <div class="second_item">
        <h1>КАРТА</h1>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1453.293594281714!2d76.90404496658692!3d43.23911405753203!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x388368965b9aaaaf%3A0xd069a7a565591d4e!2z0JDQutCw0LTQtdC80LjRjyDQqNCQ0JMg0JDQu9C80LDRgtGL!5e0!3m2!1sru!2skz!4v1607006927544!5m2!1sru!2skz" width="280" height="150" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
      </div>
      <div class="third_item">
        <h1>КОНТАКТЫ</h1>
        <h3>eldar_2301@mail.ru</h3>
        <h3>+77075586854</h3>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style lang="sass" scoped>
  .wrapper
    width: 100vw
    height: 35vh
    background-color: black
    border: 1px solid blue
    display: flex
    justify-content: center
    .content_wrapper
      width: 80%
      height: 100%
      color: white
      display: flex
      flex-direction: row
      justify-content: space-around
      text-align: center
      h1
        font-size: 4vh
      h3
        font-size: 2.5vh
      .first_item
        width: 30%
        heigth: 100%
      .second_item
        width: 30%
        heigth: 100%
      .third_item
        width: 30%
        heigth: 100%
</style>
