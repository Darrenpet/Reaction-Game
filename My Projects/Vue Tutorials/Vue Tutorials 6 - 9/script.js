const app = Vue.createApp({
  data() {
    return {
      url: "https://www.younggrasshopper.co.za",
      showDiscography: true,
      discographies: [
        {
          artist: "Soa Mattrix",
          album: "uThando",
          genre: "Amapiano",
          img: "Assets/1.jpg",
          myFav: true,
        },
        {
          artist: "Black Coffee",
          album: "Pieces of Me",
          genre: "House",
          img: "Assets/2.jpg",
          myFav: false,
        },
        {
          artist: "Sho Madjozi",
          album: "Limpopo Champions League",
          genre: "Gqom",
          img: "Assets/3.webp",
          myFav: true,
        },
      ],
    };
  },
  methods: {
    toggleShowDiscography() {
      this.showDiscography = !this.showDiscography;
    },
    toggleFav(discography) {
      discography.myFav = !discography.myFav;
    },
  },
  computed: {
    filteredDiscographies() {
      return this.discographies.filter((discography) => discography.myFav);
    },
  },
});

app.mount("#app");
