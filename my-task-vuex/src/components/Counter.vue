<template>
  <div class="counter">
    <!--goi state boi: $store.state.nameState-->
    Clicked: {{ $store.state.count }} times, count is {{ test }}.
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="incrementOdd">Increment if odd</button>
    <button @click="incrementAsync">Increment Async</button>
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'
  import { mapState } from 'vuex'
  export default {
    name: "Counter",
    computed: {
      test() {
        return this.$store.getters.evenOrOdd
      }
      //   mapGetters([
      //   'evenOrOdd'
      // ]),
    },


    // methods: mapActions([
    //     'increment',
    //     'decrement'
    // ])
    methods: {
      increment(e) {
        e.preventDefault();
        // dispatch call action -> action call mutation -> update state
        // this.$store.dispatch('increment')
        this.$store.commit('increment')
      },
      decrement(e) {
        e.preventDefault();
        this.$store.dispatch('decrement')
      },
      incrementOdd(e) {
        e.preventDefault();
        this.$store.dispatch('incrementOdd')
      },
      incrementAsync(e) {
        e.preventDefault();
        this.$store.dispatch('incrementAsync')
      }
    }
  }
</script>

<style scoped>

</style>