<template>
  <!-- Hero Section Begin -->
  <section class="hero hero-normal">
    <div class="container">
      <div class="row">
        <div class="col-lg-3">
          <div class="hero__categories">
            <div
              class="hero__categories__all"
              v-on:click="toggleShowCategories"
            >
              <i class="fa fa-bars"></i>
              <span>All Categories</span>
            </div>
            <ul v-if="showCategories">
              <li v-for="category in categories" v-bind:key="category.name">
                <a href="#" @click.prevent="loadCategory(category)">{{
                  category.label
                }}</a>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-lg-9">
          <div class="hero__search">
            <div class="hero__search__form">
              <form action="#">
                <input type="text" placeholder="e.g. Tomatoes" />
                <button type="submit" class="site-btn">SEARCH</button>
              </form>
            </div>
            <div class="hero__search__phone">
              <div class="hero__search__phone__icon">
                <i class="fa fa-phone"></i>
              </div>
              <div class="hero__search__phone__text">
                <h5>+65 11.188.888</h5>
                <span>support 24/7 time</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- Hero Section End -->
</template>

<script>
export default {
  data() {
    return {
      searchTerm: '',
      showCategories: false,
    };
  },
  created() {
    this.$store.dispatch('loadCategories');
  },
  computed: {
    categories() {
      return this.$store.state.category.categories;
    },
  },
  methods: {
    toggleShowCategories() {
      this.showCategories = !this.showCategories;
    },
    loadCategory(category) {
      console.log(category.name);
    },
  },
};
</script>

<style></style>
