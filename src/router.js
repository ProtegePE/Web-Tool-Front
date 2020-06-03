import Vue from "vue";
import Router from "vue-router";
import AppHeader from "./layout/AppHeader";
import AppFooter from "./layout/AppFooter";
import Components from "./views/Components.vue";
import Landing from "./views/Landing.vue";
import Login from "./views/Login.vue";
import Register from "./views/Register.vue";
import CadastrarPessoa from "./views/CadastrarPessoa";
import CadastrarEndereco from "./views/CadastrarEndereco";
import CadastrarExames from "./views/CadastrarExames";
import Profile from "./views/Profile.vue";

Vue.use(Router);

export default new Router({
  linkExactActiveClass: "active",
  routes: [
    {
      path: "/",
      name: "landing",
      components: {
        header: AppHeader,
        default: Landing,
        footer: AppFooter
      }
    },
    {
      path: "/login",
      name: "login",
      components: {
        header: AppHeader,
        default: Login,
        footer: AppFooter
      }
    },
    {
      path: "/cadastrarPessoa",
      name: "cadastrarPessoa",
      components: {
        header: AppHeader,
        default: CadastrarPessoa,
        footer: AppFooter
      }
    },
    {
      path: "/cadastrarEndereco",
      name: "cadastrarEndereco",
      components: {
        header: AppHeader,
        default: CadastrarEndereco,
        footer: AppFooter
      }
    },
    {
      path: "/cadastrarExames",
      name: "cadastrarExames",
      components: {
        header: AppHeader,
        default: CadastrarExames,
        footer: AppFooter
      }
    },
    {
      path: "/profile",
      name: "profile",
      components: {
        header: AppHeader,
        default: Profile,
        footer: AppFooter
      }
    }
  ],
  scrollBehavior: to => {
    if (to.hash) {
      return { selector: to.hash };
    } else {
      return { x: 0, y: 0 };
    }
  }
});
