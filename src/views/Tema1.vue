<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido(data-aos="flip-up")
        .titulo-principal__numero
          span 1
        h1 Contrato de trabajo
      .row.bg-c3.mb-4
        .col-12(data-aos="fade-right")
          .px-4.pt-4.pt-lg-0
            .row.align-items-center
              .col-lg-7.mb-4.mb-lg-0
                .row.align-items-center
                  .col-md-auto.mb-4.mb-md-0
                    figure
                      img(src="@/assets/curso/temas/t1/img2.svg", alt="", style="width: 80px").m-auto
                  .col
                    p.mb-0 El Código Sustantivo del Trabajo (CST) regula las relaciones laborales comprendidas en su ámbito de aplicación. Su artículo 22 define el contrato de trabajo como aquel por el cual una persona natural se obliga a prestar un servicio personal a otra persona natural o jurídica, bajo la continuada dependencia o subordinación de la segunda y mediante remuneración. Quien presta el servicio se denomina trabajador, quien lo recibe y remunera, empleador, y la remuneración, cualquiera que sea su forma, salario. El artículo 23 del CST señala tres elementos esenciales del contrato, que se presentan a continuación:
              .col-lg-5
                figure
                  img(src="@/assets/curso/temas/t1/img3.svg", alt="", style="width: 410px").m-auto
      TabsB.color-primario.mb-4(data-aos="fade-left")
        .p-4.p-md-5(titulo="Prestación personal del servicio" icono="@/assets/curso/temas/t1/img1.svg")
          .row.justify-content-center.align-items-center
            .col-lg-5.mb-4.mb-lg-0
              figure
                img(src="@/assets/curso/temas/t1/img2.png", alt="", style="width: 410px").m-auto
            .col-lg-6
              p #[b Prestación personal del servicio]
              p.mb-0 El trabajador realiza la labor por sí mismo y no puede delegarla en otra persona.
        .p-4.p-md-5(titulo="Subordinación o dependencia" icono="@/assets/curso/temas/t1/img4.svg")
          .row.justify-content-center.align-items-center
            .col-lg-5.mb-4.mb-lg-0
              figure
                img(src="@/assets/curso/temas/t1/img3.png", alt="", style="width: 410px").m-auto
            .col-lg-6
              p #[b Subordinación o dependencia]
              p.mb-0 El empleador puede dar órdenes sobre el modo, el tiempo y la cantidad de trabajo, e imponer reglamentos, dentro del respeto de la dignidad y los derechos del trabajador.
        .p-4.p-md-5(titulo="Salario" icono="@/assets/curso/temas/t1/img5.svg")
          .row.justify-content-center.align-items-center
            .col-lg-5.mb-4.mb-lg-0
              figure
                img(src="@/assets/curso/temas/t1/img4.png", alt="", style="width: 410px").m-auto
            .col-lg-6
              p #[b Salario]
              p.mb-0 Es la retribución que recibe el trabajador por el servicio prestado.
      .row.align-items-center(data-aos="fade-down")
        .col-md-auto.mb-4.mb-md-0
          figure
            img(src="@/assets/curso/temas/t1/img6.svg", alt="", style="width: 80px").m-auto
        .col
          p.mb-0 Cuando se reúnen estos tres elementos existe contrato de trabajo, sin importar el nombre que las partes le den al acuerdo.
      .row.bg-c4
        .col-12.px-5
          Separador
          #t_1_1
          .titulo-segundo.color-acento-contenido
            h2 1.1 Contenido del contrato
          .row.align-items-center
            .col-lg-5.mb-4.mb-lg-0(data-aos="fade-right")
              figure
                img(src="@/assets/curso/temas/t1/img6.png", alt="", style="width: 410px").m-auto
            .col-lg-7(data-aos="fade-left")
              SlyderF(columnas="col-md-6")
                .tarjeta.color-secundario.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t1/img7.svg' alt='')
                  p.text-white.text-center #[b Identificación de las partes]
                  p.text-white.mb-0 Nombre, documento de identidad y domicilio del empleador y del trabajador.
                .tarjeta.color-secundario.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t1/img8.svg' alt='')
                  p.text-white.text-center #[b Labor contratada]
                  p.text-white.mb-0 Descripción del trabajo que se ejecutará.
                .tarjeta.color-secundario.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t1/img9.svg' alt='')
                  p.text-white.text-center #[b Lugar de trabajo]
                  p.text-white.mb-0 Sitio donde se prestará el servicio.
                .tarjeta.color-secundario.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t1/img10.svg' alt='')
                  p.text-white.text-center #[b Salario]
                  p.text-white.mb-0 Valor, forma y período de pago.
                .tarjeta.color-secundario.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t1/img11.svg' alt='')
                  p.text-white.text-center #[b Lugar y fecha de celebración]
                  p.text-white.mb-0 Ciudad y fecha en que se firma el contrato.
                .tarjeta.color-secundario.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t1/img12.svg' alt='')
                  p.text-white.text-center #[b Período de prueba]
                  p.text-white.mb-0 Tiempo inicial para valorar la relación laboral, cuando se pacte por escrito
                .tarjeta.color-secundario.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t1/img13.svg' alt='')
                  p.text-white.text-center #[b Obligaciones y prohibiciones]
                  p.text-white.mb-0 Deberes y restricciones de cada una de las partes.
                .tarjeta.color-secundario.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t1/img14.svg' alt='')
                  p.text-white.text-center #[b Causales especiales de terminación]
                  p.text-white.mb-0 Situaciones adicionales a las legales que permiten terminar el contrato.
                .tarjeta.color-secundario.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t1/img15.svg' alt='')
                  p.text-white.text-center #[b Firmas]
                  p.text-white.mb-0 Firma del empleador y del trabajador como constancia del acuerdo.
          Separador
          #t_1_2
          .titulo-segundo.color-acento-contenido
            h2 1.2 Clases de contratos
      p.mb-4(data-aos="fade-right") Los contratos de trabajo se clasifican según su forma de celebración y según su duración. El artículo 37 del CST establece que el contrato puede celebrarse de manera verbal o escrita, salvo que una disposición legal exija una forma específica. Con la Ley 2466 de 2025, el contrato a término indefinido es la regla general, y las demás modalidades son excepciones que deben cumplir requisitos precisos (Congreso de la República de Colombia, 2025). Las modalidades según su duración se presentan a continuación:
      .row.bg-c5.mb-4
        .col-12.p-5(data-aos="fade-left")
          .tarjeta.tarjeta--azul1.p-4
            SlyderA(tipo="b")
              .row.justify-content-center.align-items-center.my-lg-4
                .col-lg-6.mb-4.mb-lg-0
                  p #[b Término indefinido]
                  p.mb-0 Es la regla general de vinculación laboral. Permanece vigente mientras subsistan las causas que le dieron origen y la materia del trabajo, conforme al artículo 47 del CST, modificado por la Ley 2466 de 2025.
                .col-lg-4
                  figure
                    img(src='@/assets/curso/temas/t1/img8.png' alt='', style="width: 410px").m-auto
              .row.justify-content-center.align-items-center.my-lg-4
                .col-lg-6.mb-4.mb-lg-0
                  p #[b Término fijo]
                  p.mb-0 Debe constar por escrito y su duración no puede superar cuatro (4) años, conforme al artículo 46 del CST, modificado por la Ley 2466 de 2025. Si no cumple estas condiciones, se entiende celebrado a término indefinido desde el inicio.
                .col-lg-4
                  figure
                    img(src='@/assets/curso/temas/t1/img9.png' alt='', style="width: 410px").m-auto
              .row.justify-content-center.align-items-center.my-lg-4
                .col-lg-6.mb-4.mb-lg-0
                  p #[b Obra o labor determinada]
                  p.mb-0 Se vincula a la ejecución de una obra o labor específica, por ejemplo, en actividades de construcción o en proyectos de investigación. Debe constar por escrito y describir con precisión la labor contratada. Si el trabajador continúa después de terminar la obra sin que se documente una nueva labor, el contrato se entiende a término indefinido.
                .col-lg-4
                  figure
                    img(src='@/assets/curso/temas/t1/img10.png' alt='', style="width: 410px").m-auto
      .row.align-items-center(data-aos="fade-right")
        .col-md-auto.mb-4.mb-md-0
          figure
            img(src="@/assets/curso/temas/t1/img6.svg", alt="", style="width: 80px").m-auto
        .col
          p.mb-0 En los contratos a término fijo y por obra o labor, el trabajador tiene derecho al pago de vacaciones y prestaciones sociales en proporción al tiempo laborado, cualquiera que este sea.
      Separador
      #t_1_3
      .titulo-segundo.color-acento-contenido
        h2 1.3 Prórrogas del contrato a término fijo
      p(data-aos="fade-right") El contrato a término fijo puede renovarse, pero sin superar nunca el límite total de cuatro años. Las reglas de prórroga se presentan a continuación (Congreso de la República de Colombia, 2025):
      .row.align-items-center.mb-4
        .col-lg-3.mb-4.mb-lg-0(data-aos="fade-right")
          figure
            img(src="@/assets/curso/temas/t1/img16.svg", alt="", style="width: 280px").m-auto
        .col-lg-9(data-aos="fade-left")
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
            .row(titulo="Prórroga automática")
              .col-12
                p.mb-0 Si ninguna de las partes manifiesta su intención de terminar el contrato con una antelación no inferior a treinta (30) días antes del vencimiento, el contrato se renueva por un período igual al pactado o al de la prórroga anterior.
            .row(titulo="Contratos inferiores a un año")
              .col-12
                p.mb-0 Las partes pueden prorrogarlos por acuerdo escrito, pero después de la cuarta prórroga la renovación no puede ser inferior a un (1) año. Si las prórrogas son automáticas, la cuarta es por un período de un año.
            .row(titulo="Límite máximo")
              .col-12
                p.mb-0 La suma del término inicial y de las prórrogas no puede superar cuatro (4) años. Si la relación continúa después de ese límite, el contrato se entiende celebrado a término indefinido.
      p(data-aos="fade-right") La aplicación de estas reglas se presenta a continuación:
      .row.bg-c6(data-aos="fade-right")
        .col-12
          .px-4.pt-4.pt-lg-0
            .row.align-items-center
              .col-lg-7.mb-4.mb-lg-0
                .row.align-items-center
                  .col-md-auto.mb-4.mb-md-0
                    figure
                      img(src="@/assets/curso/temas/t1/img17.svg", alt="", style="width: 80px").m-auto
                  .col
                    p #[b Ejemplo]
                    p.mb-0 Una empresa contrata a un auxiliar administrativo a término fijo por seis meses. Ninguna de las partes envía el preaviso de no prórroga, de modo que el contrato se renueva por otros seis meses. Después de la cuarta prórroga, la renovación debe ser por un año, y la suma de todos los períodos no puede superar cuatro años. Si el trabajador sigue laborando después de ese tiempo, su contrato pasa a ser a término indefinido.
              .col-lg-5
                figure
                  img(src="@/assets/curso/temas/t1/img12.png", alt="", style="width: 390px").m-auto
      Separador
      #t_1_4
      .titulo-segundo.color-acento-contenido
        h2 1.4 Contrato de aprendizaje
      p.mb-4(data-aos="fade-right") La Ley 2466 de 2025 modificó el artículo 81 del CST y estableció el contrato de aprendizaje como un contrato laboral especial y a término fijo. Antes de la reforma, esta figura se regulaba por el artículo 30 de la Ley 789 de 2002 y no se consideraba contrato de trabajo (Congreso de la República de Colombia, 2025). Sus características se presentan a continuación:
      .row.bg-c5
        .col-12.p-5(data-aos="fade-right")
          .tarjeta.tarjeta--azul1.p-4
            SlyderA(tipo="b")
              .row.justify-content-center.align-items-center.my-lg-4
                .col-lg-7.mb-4.mb-lg-0
                  p #[b Naturaleza]
                  p.mb-0 Es un contrato laboral especial y a término fijo, orientado a la formación del aprendiz.
                .col-lg-3
                  figure
                    img(src='@/assets/curso/temas/t1/img18.svg' alt='', style="width: 150px").m-auto
              .row.justify-content-center.align-items-center.my-lg-4
                .col-lg-7.mb-4.mb-lg-0
                  p #[b Duración]
                  p.mb-0 No puede superar tres (3) años.
                .col-lg-3
                  figure
                    img(src='@/assets/curso/temas/t1/img19.svg' alt='', style="width: 150px").m-auto
              .row.justify-content-center.align-items-center.my-lg-4
                .col-lg-7.mb-4.mb-lg-0
                  p #[b Remuneración en formación tradicional]
                  p.mb-0 Como mínimo el 75 % de un salario mínimo legal mensual vigente (SMLMV) en la fase lectiva y el 100 % en la fase práctica.
                .col-lg-3
                  figure
                    img(src='@/assets/curso/temas/t1/img20.svg' alt='', style="width: 150px").m-auto
              .row.justify-content-center.align-items-center.my-lg-4
                .col-lg-7.mb-4.mb-lg-0
                  p #[b Remuneración en formación dual]
                  p.mb-0 Como mínimo el 75 % de un SMLMV durante el primer año y el 100 % durante el segundo.
                .col-lg-3
                  figure
                    img(src='@/assets/curso/temas/t1/img21.svg' alt='', style="width: 150px").m-auto
              .row.justify-content-center.align-items-center.my-lg-4
                .col-lg-7.mb-4.mb-lg-0
                  p #[b Estudiantes universitarios]
                  p.mb-0 Reciben como mínimo un SMLMV.
                .col-lg-3
                  figure
                    img(src='@/assets/curso/temas/t1/img22.svg' alt='', style="width: 150px").m-auto
              .row.justify-content-center.align-items-center.my-lg-4
                .col-lg-7.mb-4.mb-lg-0
                  p #[b Seguridad social]
                  p.mb-0 En la fase lectiva, la empresa cubre la afiliación a salud y riesgos laborales. En la fase práctica o dual, el aprendiz se afilia como trabajador dependiente, con las prestaciones y los derechos del contrato laboral.
                .col-lg-3
                  figure
                    img(src='@/assets/curso/temas/t1/img23.svg' alt='', style="width: 150px").m-auto
              .row.justify-content-center.align-items-center.my-lg-4
                .col-lg-7.mb-4.mb-lg-0
                  p #[b Experiencia laboral]
                  p.mb-0 El tiempo de la fase práctica o dual se reconoce como experiencia laboral.
                .col-lg-3
                  figure
                    img(src='@/assets/curso/temas/t1/img24.svg' alt='', style="width: 150px").m-auto
              .row.justify-content-center.align-items-center.my-lg-4
                .col-lg-7.mb-4.mb-lg-0
                  p #[b Monetización de la cuota]
                  p.mb-0 Las empresas obligadas a contratar aprendices que no lo hagan deben pagar al SENA 1,5 SMLMV por cada aprendiz no contratado, conforme al artículo 34 de la Ley 789 de 2002, modificado por la Ley 2466 de 2025.
                .col-lg-3
                  figure
                    img(src='@/assets/curso/temas/t1/img25.svg' alt='', style="width: 150px").m-auto

</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
