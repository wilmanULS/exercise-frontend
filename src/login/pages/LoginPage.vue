<script setup lang="ts">
import { ref } from 'vue';
import WanqaraService from '../../api/wanqaraService';
const service = new WanqaraService();
const user = ref('');
const password = ref('');

const login = async () => {
  console.log(user.value, password.value);
  await service.login(user.value, password.value);
};
</script>
<template>
  <div class="q-pa-md">
    <div class="full-width row justify-center content-center q-pa-md">
      <q-img
        src="public/images/logo1.png"
        style="height: 100px; max-width: 95px"
      >
      </q-img>
    </div>
    <div class="full-width row justify-center content-center q-pa-lg">
      <span class="fontStyle">Bienvenido !</span>
    </div>
    <div class="full-width row justify-center content-center">
      <q-card class="my-card q-pt-md">
        <q-card-section>
          <div class="row q-pb-lg">
            <div class="col">
              <span class="inputText">Usuario</span>
              <q-input
                placeholder="eg. elon@tesla.com"
                outlined
                v-model="user"
                dense
              >
                <template v-slot:prepend>
                  <q-icon name="person" />
                </template>
              </q-input>
            </div>
          </div>
          <div class="row q-pb-lg">
            <div class="col">
              <span class="inputText">Contraseña</span>
              <q-input
                type="password"
                placeholder="eg. hola143"
                outlined
                v-model="password"
                dense
              >
                <template v-slot:prepend>
                  <q-icon name="https" />
                </template>
              </q-input>
            </div>
          </div>
          <div class="full-width row justify-center content-center">
            <q-btn
              @click="login"
              size="12px"
              class="q-px-xl q-py-xs"
              rounded
              color="blue-8"
            >
              Ingresar
            </q-btn>
          </div>
        </q-card-section>
      </q-card>
    </div>
  </div>
</template>

<style lang="css" scoped>
.my-card {
  width: 100%;
  max-width: 360px;
}
.inputText {
  font-size: 11px;
  color: #2f3030;
}
.fontStyle {
  font-size: 30px;
  color: #565861;
  font-weight: 600;
}
</style>
