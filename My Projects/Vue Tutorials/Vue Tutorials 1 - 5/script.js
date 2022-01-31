const app = Vue.createApp({
  // template: "<h2>Vue app is over here</h2>",
  data() {
    // We are returning an object inside the function
    return {
      showSentence: true,
      name: "Xolani",
      sentence: "On my way to becoming a Vue Master",
      age: 25,
      x: 0,
      y: 0,
    };
  },
  methods: {
    toggleShowSentence() {
      // ! is used to reverse the value to what it is not: switching between true and false
      this.showSentence = !this.showSentence;
    },

    handleEvent(e, number) {
      console.log(e, e.type);

      if (number) {
        console.log(number);
      }
    },
    handleMouseMove(e) {
      this.x = e.offsetX;
      this.y = e.offsetY;
    },

    //     changeName() {
    //       // putting the word 'this infront of the data value references the component itself
    //       this.name = "Palesa";
    //     },
    //     changeSentence(sentence) {
    //       this.sentence = sentence;
    //     },
    //   },
  },
});

app.mount("#app");
