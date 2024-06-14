<template>
  <div class="bg-white">
    <div class="flex justify-center h-screen">
      <div v-if="loading" class="absolute inset-0 flex items-center justify-center ">
        <loading class="" />
      </div>
      <div class="hidden bg-gradient-to-r from-green-col to-blue-col lg:block lg:w-2/3">
        <div class="flex items-center justify-center h-full bg-gray-900 bg-opacity-40">
          <img src="../assets/logo muhammadiyah putih.png" class="h-48 w-48" />
        </div>
      </div>

      <div class="flex items-center w-full max-w-md px-6 mx-auto lg:w-2/6 font-poppins">
        <div class="flex-1">
          <div class="text-center">
            <h2 class="text-4xl font-bold text-center text-gray-70">SimPegMU</h2>
            <p class="mt-3 text-gray-500">Masuk untuk mengakses akun Anda</p>
          </div>

          <div class="mt-8">
            <form @submit.prevent="handleSubmit" novalidate>
              <div class="relative">
                <input type="text" required id="nip" pattern="[0-9]{18}"
                  class="block px-2.5 pb-2 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-400 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" " v-model="nip" />
                <label for="nip"
                  class="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">Nomor
                  Induk Kepegawaian</label>
                  <span v-if="$refs.nip && $refs.nip.validity.patternMismatch" class="text-red-500 text-sm mt-1">NIP harus terdiri dari 18 angka</span>
              </div>

              <div class="mt-6 relative">
                <input type="password" required id="password" minlength="8"
                  class="block px-2.5 pb-2 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-400 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" " v-model="password" />
                <label for="password"
                  class="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">Password</label>
                  <span v-if="$refs.password && $refs.password.validity.tooShort" class="text-red-500 text-sm mt-1">Password harus terdiri dari minimal 8 karakter</span>
              </div>

              <div class="mt-6">
                <button type="submit"
                  class="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform rounded-md bg-blue-col hover:bg-blue-300 focus:bg-blue-400 focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                  Masuk
                </button>
              </div>
            </form>

            <!--    <p class="mt-6 text-sm text-center text-gray-400">
              Belum memiliki akun?
              <a href="/register"
                class="router-link text-blue-500 focus:outline-none focus:underline hover:underline">Daftar disini</a>.
            </p> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import router from '../router';
import loading from '../components/Alert/loading.vue'

export default {
  components: {
    loading
  },
  data() {
    return {
      nip: '',
      password: '',
      loading: ''
    }
  },
  methods: {
    async handleSubmit() {
      try {
        this.loading = true;
        const response = await axios.post('login', {
          nip: this.nip,
          password: this.password
        });
        console.log(response);

        localStorage.setItem('token', response.data.data.token);
        localStorage.setItem('role', response.data.data.role);

        const role = response.data.data.role;

        if (role === 'USER') {
          router.push('/user');
        } else if (role === 'ADMIN') {
          router.push('/admin');
        } else {
          // Handle other roles or conditions here
          console.error('Unknown role:', role);
        }
      } catch (error) {
        console.error(error);
      } finally {
        this.loading = false;
      }
    },
  }
} 
</script>

<style scoped>
/* Your component-specific styles go here */
</style>