<template>
    <section class="section section-shaped section-lg my-0">
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
            <div class="row justify-content-center">
                <div class="col-lg-5">
                    <card type="secondary" shadow
                          header-classes="bg-white pb-5"
                          body-classes="px-lg-5 py-lg-5"
                          class="border-0">
                        <template>
                            <div class="text-muted text-center mb-3">
                                <small>Cadastar Endereco</small>
                            </div>
                        </template>
                        <template>
                            <form role="form">
                                <base-input alternative
                                            class="mb-3"
                                            placeholder="Logradouro"
                                            addon-left-icon="ni ni-square-pin">
                                </base-input>
                                <base-input alternative
                                            class="mb-3"
                                            placeholder="Complemento"
                                            addon-left-icon="ni ni-square-pin">
                                </base-input>
                                <base-input alternative
                                            class="mb-3"
                                            placeholder="Numero"
                                            addon-left-icon="ni ni-square-pin">
                                </base-input>
                                 <base-input alternative
                                            class="mb-3"
                                            placeholder="Bairro"
                                            addon-left-icon="ni ni-square-pin">
                                </base-input>
                                <base-input alternative
                                            class="mb-3"
                                            placeholder="Cidade"
                                            addon-left-icon="ni ni-square-pin">
                                </base-input>
                                <base-input alternative
                                            class="mb-3"
                                            placeholder="UF"
                                            addon-left-icon="ni ni-square-pin">
                                </base-input>
                               <base-input alternative
                                            class="mb-3"
                                            placeholder="Cep"
                                            addon-left-icon="ni ni-square-pin">
                                </base-input>
                                <!-- <base-input alternative
                                            type="password"
                                            placeholder="Password"
                                            addon-left-icon="ni ni-lock-circle-open">
                                </base-input> -->
                                <!-- <div class="text-muted font-italic">
                                    <small>password strength:
                                        <span class="text-success font-weight-700">strong</span>
                                    </small>
                                </div> -->
                                <!-- <base-checkbox>
                                    <span>I agree with the
                                        <a href="#">Privacy Policy</a>
                                    </span>
                                </base-checkbox> -->
                                <div class="text-center">
                                    <base-button type="primary" class="my-4">Cadastrar</base-button>
                                </div>
                            </form>
                        </template>
                    </card>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
export default {};
</script>
<style>
</style>
