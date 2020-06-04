<template>
  <section class="section section-shaped my-0">
    <div class="shape shape-style-1 bg-gradient-primary">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      
    </div>
    <div class="container pt-lg-md">
      <div class="row">
        <div class="col-lg-6">
          <h2 class="text-white mb-4">Relatório</h2>
        </div>
      </div>
      <div class="row">
        <!-- <div class="col-md-3 row ml-0">
          <base-button
            icon="fa fa-home"
            class="mb-4 text-primary text-normal"
            type="white"
            @click="$router.push('/')"
          ></base-button>
          <base-button
            icon="ni ni-bold-left"
            class="mb-4 text-primary text-normal"
            type="white"
            @click="$router.go(-1)"
          >Voltar</base-button>
        </div> -->

        <div class="col-md-9 pr-0">
          <div class="input-group input-group-alternative mb-4 bg-gradient-warning">
            <input
              @input="value => buscar()"
              v-model="busca"
              class="form-control"
              placeholder= 'Buscar por nome'
              type="text"
            />
            <div class="input-group-append">
              <span class="input-group-text">
                <i class="ni ni-zoom-split-in"></i>
              </span>
            </div>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-lg-8">
          <dropdown>
            <base-button
              slot="title"
              type="primary"
              class="dropdown-toggle mb-1 text-normal"
            >Tipo Exame</base-button>
            <a
              v-for="(area, index) in areas_aplicacao"
              :key="index"
              class="dropdown-item"
              @click="area_aplicacao = area; buscar()"
            >{{area}}</a>
          </dropdown>

          <dropdown>
            <base-button
              slot="title"
              type="primary"
              class="dropdown-toggle mb-1 text-normal"
            >Data</base-button>
            <a
              v-for="(s, index) in statuss"
              :key="index"
              class="dropdown-item"
              @click="status = s; buscar()"
            >{{s}}</a>
          </dropdown>

          <dropdown>
            <base-button
              slot="title"
              type="primary"
              class="dropdown-toggle mb-1 text-normal"
            >outros...</base-button>
            <a
              v-for="(n, index) in negocios"
              :key="index"
              class="dropdown-item"
              @click="negocio = n; buscar()"
            >{{n}}</a>
          </dropdown>
        </div>

      <div class="row justify-content-center">
        <div class="col-lg-12 my-3">
          <div class="row row-grid">
            <div v-for="(solucao, index) in solucoes" :key="solucao + index" class="col-lg-4 mb-5">
              <card class="border-0" shadow body-classes="py-5">
                <badge
                  v-if="solucao.base"
                  type="success text-normal"
                  style="position: absolute; top: 18px; right: 20px"
                  rounded
                >Fonte: {{solucao.base}}</badge>

                <h4
                  class="text-default"
                >{{solucao.nome}}</h4> <!-- AQUI VAI SER NOME DA PESSOA -->
                <p
                  class="description mt-3"
                >{{solucao.descricao.slice(0,100)}} {{solucao.descricao.length > 100? '...' : ''}}</p>
                <!-- OUTRO <p> COM O TIPO DE EXAME -->
                <badge
                  v-if="solucao.area_aplicacao"
                  type="warning text-normal"
                  rounded
                >Data: {{solucao.area_aplicacao}}</badge>
                <!-- <badge
                  v-if="solucao.status"
                  type="warning text-normal"
                  rounded
                >#{{$t(solucao.status)}}</badge>
                <badge
                  v-if="solucao.negocio"
                  type="warning text-normal"
                  rounded
                >#{{$t(solucao.negocio)}}</badge>
                <badge v-if="solucao.tipo" type="warning text-normal" rounded>#{{$t(solucao.tipo)}}</badge>
                <badge
                  v-if="solucao.cidade && solucao.cidade.nome"
                  type="warning text-normal"
                  rounded
                >#{{solucao.cidade.nome}}</badge> -->

                <div class="btn-wrapper">
                  <base-button
                    class="mt-4"
                    type="warning text-normal"
                    @click="modal(index)"
                  >Detalhes</base-button>
                </div>
              </card>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>

    <!-- <modal
      v-if="solucoes[index_modal]"
      :show.sync="modal_visivel"
      gradient="warning"
      modal-classes="modal-danger modal-dialog-centered"
    >
      <h4
        slot="header"
        class="modal-title"
        id="modal-title-notification"
      >{{solucoes[index_modal].nome}}</h4> 
      

      <div v-if="pagina_modal == 'geral'">
        <div v-if="solucoes[index_modal].tipo">
          <p>Tipo do Exame</p>
          <h5 class="text-white text-normal">{{solucoes[index_modal].tipo}}</h5>
        </div>

        <div v-if="solucoes[index_modal].area_aplicacao">
          <p class="mt-4">Resultado</p>
          <h5 class="text-white text-normal">{{$t(solucoes[index_modal].area_aplicacao)}}</h5>
        </div>

        <div v-if="solucoes[index_modal].instituicao">
          <p class="mt-4">Data</p>
          <h5 class="text-white text-normal">{{solucoes[index_modal].instituicao}}</h5>
        </div>

        <div v-if="solucoes[index_modal].cidade && solucoes[index_modal].cidade.nome">
          <p class="mt-4">{{$t('Cidade')}}</p>
          <h5 class="text-white text">{{solucoes[index_modal].cidade.nome}}</h5>
        </div>
      </div>
        
      <div v-if="pagina_modal == 'descricao'">
        <div>
          <h5
            class="text-white"
          >{{solucoes[index_modal].descricao}}</h5>
        </div>
        <div v-if="solucoes[index_modal].descricao">
          <p class="mt-4">Nome</p>
          <h5 class="text-white text-normal">{{solucoes[index_modal].instituicao}}</h5>
        </div>
      </div>

      <div v-if="pagina_modal == 'responsavel' && solucoes[index_modal].responsavel">
        <div v-if="!solucoes[index_modal].responsavel._id">
          <p>Nome</p>
          <h5 class="text-white">{{solucoes[index_modal].responsavel}}</h5>
        </div>        
          <div v-if="solucoes[index_modal].responsavel.nome">
            <p>CPF</p>
            <h5 class="text-white">{{solucoes[index_modal].cpf}}</h5>
          </div>
           <div v-if="solucoes[index_modal].responsavel.nome">
            <p>RG</p>
            <h5 class="text-white">{{solucoes[index_modal].rg}}</h5>
          </div>
      </div>
      <template slot="footer">
        <base-button
          :type="pagina_modal == 'geral'? 'white' : 'link'"
          :text-color="pagina_modal == 'geral'? 'warning' : 'white'"
          class="text-normal"
          @click="pagina_modal = 'geral'"
        >{{$t('Geral')}}</base-button>

        <base-button
          :type="pagina_modal == 'descricao'? 'white' : 'link'"
          :text-color="pagina_modal == 'descricao'? 'warning' : 'white'"
          class="ml-auto text-normal"
          @click="pagina_modal = 'descricao'"
        >{{$t('Descrição')}}</base-button>

        <base-button
          v-if="solucoes[index_modal].responsavel"
          :type="pagina_modal == 'responsavel'? 'white' : 'link'"
          :text-color="pagina_modal == 'responsavel'? 'warning' : 'white'"
          class="ml-auto text-normal"
          @click="pagina_modal = 'responsavel'"
        >{{$t('Responsável')}}</base-button>
      </template>
    </modal> -->

    <template v-if="busca_nao_encontrada">
      <div class="container pt-5 pb-lg">
        <div class="row justify-content-between align-items-center">
          <div v-show="area_aplicacao || status || busca" class="col-lg-6 mb-5">
            <div class="row ml-1">
              <h1 class="text-white font-weight-light">Nada Aqui</h1>
              <base-button
                class="ml-5 mb-4 mt-2 text-warning text-normal"
                type="white"
                @click="limpar_filtros()"
              >Limpar Filtros</base-button>
            </div>

            <div class="row ml-1" v-show="busca">
              <p class="lead text-white">Busca:</p>
              <p class="lead text-white font-weight-bold ml-2">{{busca}}</p>
            </div>

            <div class="row ml-1" v-show="area_aplicacao">
              <p class="lead text-white">Área de Atuação:</p>
              <p class="lead text-white font-weight-bold ml-2">{{area_aplicacao}}</p>
            </div>

            <div class="row ml-1" v-show="status">
              <p class="lead text-white">Status :</p>
              <p class="lead text-white font-weight-bold ml-2">{{status}}</p>
            </div>

            <div class="row ml-1" v-show="negocio">
              <p class="lead text-white">Tipo de Negócio:</p>
              <p class="lead text-white font-weight-bold ml-2">{{negocio}}</p>
            </div>
          </div>
          <div v-show="solucoes == [] || area_aplicacao || status || busca" class="col-lg-6">
            <div class="rounded overflow-hidden transform-perspective-right">
              <i class="ni ni-planet" style="font-size: 350px; color: white"></i>
            </div>
          </div>
        </div>
      </div>
    </template>
  </section>
</template>

<script>
import Dropdown from "@/components/BaseDropdown.vue";
import Modal from "@/components/Modal.vue";
// import http from "../../services/http";
// import axios from "axios";

export default {
  components: {
    Modal,
    Dropdown
  },
  data() {
    return {
      http: new http(),
      busca: "",
      area_aplicacao: "",
      status: "",
      negocio: "",
      statuss: [
        "Todos",
        "Produto Comercializado",
        "Produto Lançado",
        "Produto Testado",
        "Produto Terminado",
        "Produto em Desenvolvimento"
      ],
      areas_aplicacao: [
        "Todos",
        "Projeto de Saúde",
        "Trabalho / Renda",
        "Educação / Cursos",
        "Serviços de Informação",
        "Ação Social",
        "Mobilidade / Transporte",
        "Meio Ambiente / Urbanismo"
      ],
      negocios: [
        "Todos",
        "Grátis",
        "Com Restrições",
        "Pago",
        "Negócio à Venda",
        "À Procura de Financiamento",
        "À Procura de Parceria"
      ],
      modal_visivel: false,
      index_modal: 0,
      pagina_modal: "geral",
      solucoes: [],
      busca_nao_encontrada: false,
      acessos: ""
    };
  },

  async mounted() {
    await this.get_solucoes();
    this.http.novo_acesso_solucoes().then(acessos => {
      this.acessos = acessos;
    });
  },

  methods: {
    limpar_filtros() {
      this.busca = "";
      this.area_aplicacao = "";
      this.status = "";
      this.buscar();
    },

    async buscar() {
      if (this.busca || this.area_aplicacao || this.status || this.negocio) {
        if (this.area_aplicacao == "Todos") this.area_aplicacao = await "";
        if (this.status == "Todos") this.status = await "";
        if (this.negocio == "Todos") this.negocio = await "";
        axios
          .get(
            "https://portifolio-corona-api.herokuapp.com/solucao/busca/",
            // "http://localhost:3000/solucao/busca/",
            {
              params: {
                busca: this.busca,
                area_aplicacao: this.area_aplicacao,
                status: this.status,
                negocio: this.negocio
              }
            }
          )
          .then(response => {
            this.solucoes = response.data.solucoes;
            if (response.data.solucoes[0]) this.busca_nao_encontrada = false;
            else this.busca_nao_encontrada = true;
          })
          .catch(error => {
            this.solucoes = [];
            this.busca_nao_encontrada = true;
            console.error(error);
          });
      } else {
        this.busca_nao_encontrada = false;
        this.get_solucoes();
      }
    },

    converter_data(data) {
      if (data)
        data =
          data.substring(8, 10) +
          "/" +
          data.substring(5, 7) +
          "/" +
          data.substring(0, 4);
      return data;
    },

    modal(i) {
      this.index_modal = i;
      this.pagina_modal = "geral";
      this.modal_visivel = !this.modal_visivel;
    },

    async get_solucoes() {
      await this.http
        .get("solucao")
        .then(resp => {
          this.solucoes = resp;
        })
        .catch(error => {
          console.error(error);
        });
    }
  }
};
</script>