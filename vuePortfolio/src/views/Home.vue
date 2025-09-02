<template>
    <header class="header backimage">
        <div class="home">
            <div class="wrapper-name">
                <h1 data-aos="fade-up"> Ian Kruger</h1>
                <hr />
                <p>Welcome to My Portfolio.</p>
            </div>
        </div>
    </header>
</template>


<script>
</script>

<style scoped>

.home {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  z-index: 400;

  .wrapper-name {
    width: 400px;
  }

  h1 {
    font-size: 2.3rem;
    padding: 2px 10px;
    text-align: center;
    text-transform: uppercase;
    color: whitesmoke;
  }

  p {
    font-size: 2rem;
    text-align: center;
    margin: 5px auto;
    color: whitesmoke;
  }

  hr {
    border: 1px solid whitesmoke;
  }
}

.header{
    padding: 20px;
}

.backimage {
    background-image: url(../assets/prism.png);
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 96vh;
    width: 200vh;
}
</style>