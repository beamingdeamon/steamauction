<template>
    <div class="wrapper">
      <div class="content_wrapper"><div class="Login">
        <form action="" on-submit="return false" >
        <h1>Registraition</h1>
          <h1>Login</h1>
          <input type="text">
          <h1>Password</h1>
          <input type="password">
          <h1>Repeat Password</h1>
          <input type="password">
          <button type="submit">Registraition</button>
        </form></div><div  class="Registraition">
        <h1>Autorization</h1>
        <form action="" on-submit="return false">
          <h1>Login</h1>
          <input type="text">
          <h1>Password</h1>
          <input type="password">
          <button type="submit">Aurorization</button>
        </form></div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'Registration'
}
</script>

<style lang="sass" scoped>
  .wrapper
    width: 100vw
    height: 100vh
    position: absolute
    top: 0%
    z-index: 100000
    background-color: rgba(20,20 ,20 ,1)
    display: flex
    justify-content: center
    align-items: center
    .content_wrapper
      height: 80%
      width: 80%
      display: flex
      justify-content: space-around
      text-align: center
      button
        color: white
        background-color: rgba(20,20 ,20 ,1)
      .Login
        width: 35%
        height: 80%
        color: white
        display: flex
        justify-content: center
        flex-direction: column
        border: 1px solid grey
        form
          display: flex
          justify-content: center
          align-items: center
          flex-direction: column
          input
            width: 60%
      .Registraition
        width: 35%
        height: 80%
        color: white
        display: flex
        justify-content: center
        flex-direction: column
        border: 1px solid grey
        form
          display: flex
          justify-content: center
          flex-direction: column
          align-items: center
          input
            width: 60%
</style>
