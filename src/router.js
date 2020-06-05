import Vue from "vue";
import Router from "vue-router";
import AppHeader from "./layout/AppHeader";
import AppFooter from "./layout/AppFooter";
import Components from "./views/Components.vue";
import Landing from "./views/Landing.vue";
import Login from "./views/Login.vue";
import Register from "./views/Register.vue";
import Profile from "./views/Profile.vue";

import CadastrarPessoa from "./views/Pessoa/CadastrarPessoa";
import AlterarPessoa from "./views/Pessoa/AlterarPessoa";
import CadastrarEndereco from "./views/CadastrarEndereco";
import CadastrarExame from "./views/Exame/CadastrarExame";
import Relatorio from "./views/Relatorio/Relatorio";
import ListarPessoa from "./views/Pessoa/ListarPessoa";
import ListarExame from "./views/Exame/ListarExame";

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
      path: "/alterarPessoa",
      name: "alterarPessoa",
      components: {
        header: AppHeader,
        default: AlterarPessoa,
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
      path: "/cadastrarExame",
      name: "cadastrarExame",
      components: {
        header: AppHeader,
        default: CadastrarExame,
        footer: AppFooter
      }
    },
    {
      path: "/relatorio",
      name: "relatorio",
      components: {
        header: AppHeader,
        default: Relatorio,
        footer: AppFooter
      }
    },
    {
      path: "/ListarPessoa",
      name: "listarPessoa",
      components: {
        header: AppHeader,
        default: ListarPessoa,
        footer: AppFooter
      }
    },
    {
      path: "/ListarExame",
      name: "listarExame",
      components: {
        header: AppHeader,
        default: ListarExame,
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
