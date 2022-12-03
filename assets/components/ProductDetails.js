app.component("product-details", {
  props: {
    details: {
      type: Boolean,
      required: true,
    },
  },
  template:
    /*html*/
    `<ul>
    <li v-for="detail in details">{{ detail }}</li>
  </ul>`,
  data() {
    return {
      details: ["50% cotton", "30% wool", "20% polyester"],
    };
  },
  methods: {},
  computed: {},
});
