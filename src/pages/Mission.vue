<template>
  <div>
    <div class="page">
      <p class="pageTitle">This Page Is Under Construction</p>
    </div>
    
  </div>
</template>

<script>

  export default {
    name: 'mission-page'
  }

</script>

<style>

.page {
  min-height: calc(100vh - 112px);
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  background-image: url('../assets/924.jpg');
  
}

.pageTitle {
  font-size: 3rem;
  margin-top: 1rem;;
  text-transform: uppercase;
}

@media only screen and (max-width: 500px) {

    .pageTitle {
      font-size: 2rem;
      text-align: center;
    }

    .page {
      background-size: 100% 100%;

    }

  }

</style>
