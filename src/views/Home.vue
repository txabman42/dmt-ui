<template>
  <div>
    <div class="home-page">
        <section class="section section-skew">
            <div class="container">
              <base-alert v-if="error" type="warning" icon="ni ni-bell-55" dismissible>
                  <span slot="text"><strong>Warning! </strong>{{ error }}</span>
              </base-alert>

              <img class="domtaboga col-lg-6 mb-lg-auto" src="img/domtaboga.png" width="200px" height="auto">

              <div class="row justify-content-center">
                <div class="col-lg-4 col-sm-6">
                    <div class="form-group base-input">
                      <input v-model="summonerName" aria-describedby="addon-right addon-left" placeholder="Summoner's name" class="form-control">
                    </div>
                    <router-link slot="brand" class="navbar-brand mr-lg-5" :to="{ name: 'Profile', params: { summonerName } }">
                      <base-button v-on:click="checkSumName()" class="btn-1" checkForm outline type="primary">Search</base-button>
                    </router-link>
                </div>
              </div>
            </div>
        </section>
      </div>
    </div>
</template>
<script>
import api from '../Api.js'

export default {
  data () {
    return {
      summonerName: null,
      error: null
    }
  },
  methods: {
    checkSumName () {
      api.getSummonerInfo(this.summonerName)
        .then(res => console.log(res))
        .catch(this.error = "WitWizard has not let you fetch RITO's data!")
      if (!this.summonerName) {
        this.error = "Summoner's name must not be null!"
        setTimeout(this.hideAlert, 3000)
      }
    },
    hideAlert () {
      this.error = null
    }
  }
}
</script>

<style scoped>
  .home-page {
    text-align: center;
  }
  .base-input {
    margin-top: 30px;
  }
  .base-input input {
    text-align: center;
  }
</style>
