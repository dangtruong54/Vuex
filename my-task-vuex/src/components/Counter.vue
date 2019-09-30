<template>
  <div class="counter">
    <!--goi state boi: $store.state.nameState-->
    Clicked: {{ $store.state.count }} times, count is {{ evenOrOdd }}.
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="incrementOdd">Increment if odd</button>
    <button @click="decrementEven">Decrement if even</button>
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'
  import { mapState } from 'vuex'
  export default {
    name: "Counter",
    computed:
      mapGetters([
      'evenOrOdd'
    ]),

    // methods: mapActions([
    //     'increment',
    //     'decrement'
    // ])
    methods: {
      increment(e) {
        e.preventDefault();
        // dispatch call action -> action call mutation -> update state
        this.$store.dispatch('increment')
      },
      decrement(e) {
        e.preventDefault();
        this.$store.dispatch('decrement')
      },
      incrementOdd(e) {
        e.preventDefault();
        this.$store.dispatch('incrementOdd')
      },
      decrementEven(e) {
        e.preventDefault();
        this.$store.dispatch('decrementEven')
      }
    }
  }
</script>

<style scoped>

</style>