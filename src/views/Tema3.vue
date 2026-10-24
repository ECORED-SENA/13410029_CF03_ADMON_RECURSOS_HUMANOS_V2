<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido(data-aos="flip-up")
        .titulo-principal__numero
          span 3
        h1 Terminación y liquidación del contrato
      .row.bg-c6(data-aos="fade-right")
        .col-12
          .px-4.pt-4.pt-lg-0
            .row.align-items-center
              .col-lg-7.mb-4.mb-lg-0
                .row.align-items-center
                  .col-md-auto.mb-4.mb-md-0
                    figure
                      img(src="@/assets/curso/temas/t3/img1.svg", alt="", style="width: 80px").m-auto
                  .col
                    p.mb-0 La terminación del contrato de trabajo debe ajustarse a las causas y condiciones previstas en la legislación laboral colombiana. Al finalizar el vínculo, el área de talento humano verifica la causa de terminación, elabora la liquidación y, cuando corresponde, reconoce la indemnización.
              .col-lg-5
                figure
                  img(src="@/assets/curso/temas/t3/img2.svg", alt="", style="width: 300px").m-auto
      Separador
      #t_3_1
      .titulo-segundo.color-acento-contenido
        h2 3.1 Formas de terminación
      p.mb-4(data-aos="fade-right") El contrato de trabajo puede terminar por decisión del empleador o del trabajador, como se presenta a continuación:
      .row.bg-c5
        .col-12.p-5(data-aos="fade-right")
          .tarjeta.tarjeta--azul1.p-4
            SlyderA(tipo="b")
              .row.justify-content-center.align-items-center.my-lg-4
                .col-lg-6.mb-4.mb-lg-0
                  p #[b Con justa causa]
                  p.mb-0 Corresponde a las causales previstas en el artículo 62 del CST. La parte que termina el contrato debe comunicar a la otra la causa o el motivo de su decisión.
                .col-lg-4
                  figure
                    img(src='@/assets/curso/temas/t3/img1.png' alt='', style="width: 350px").m-auto
              .row.justify-content-center.align-items-center.my-lg-4
                .col-lg-6.mb-4.mb-lg-0
                  p #[b Sin justa causa]
                  p.mb-0 Ocurre cuando el empleador termina unilateralmente el contrato sin una causa legal que justifique su decisión. En este caso debe reconocer la indemnización que corresponda, además de pagar los valores de la liquidación.
                .col-lg-4
                  figure
                    img(src='@/assets/curso/temas/t3/img2.png' alt='', style="width: 350px").m-auto
              .row.justify-content-center.align-items-center.my-lg-4
                .col-lg-6.mb-4.mb-lg-0
                  p #[b Por decisión del trabajador]
                  p.mb-0 En el contrato a término indefinido, el trabajador puede terminarlo con un preaviso de treinta (30) días calendario, para que el empleador provea su reemplazo. No puede pactarse una sanción por omitir este preaviso, y no se exige cuando la renuncia obedece a una justa causa imputable al empleador (Congreso de la República de Colombia, 2025).
                .col-lg-4
                  figure
                    img(src='@/assets/curso/temas/t3/img3.png' alt='', style="width: 350px").m-auto
      Separador
      #t_3_2
      .titulo-segundo.color-acento-contenido
        h2 3.2 Liquidación del contrato de trabajo
      .row.bg-c4
        .col-12.px-5
          .row.align-items-center.mb-4(data-aos="fade-down")
            .col-md-auto.mb-4.mb-md-0
              figure
                img(src="@/assets/curso/temas/t3/img3.svg", alt="", style="width: 80px").m-auto
            .col
              p.mb-0 Cuando termina un contrato de trabajo, el empleador debe calcular y pagar los salarios, las prestaciones sociales, las vacaciones y los demás conceptos pendientes que correspondan. El área de talento humano elabora la liquidación de acuerdo con las condiciones del vínculo laboral y la normativa aplicable. Los conceptos que la integran se presentan a continuación:
          .row.align-items-center
            .col-lg-5.mb-4.mb-lg-0(data-aos="fade-right")
              figure
                img(src="@/assets/curso/temas/t3/img4.png", alt="", style="width: 410px").m-auto
            .col-lg-7(data-aos="fade-left")
              SlyderF(columnas="col-md-6")
                .tarjeta.color-secundario.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t3/img4.svg' alt='')
                  p.text-white.text-center #[b Salarios pendientes]
                  p.text-white.mb-0 Días trabajados que aún no se han pagado.
                .tarjeta.color-secundario.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t3/img5.svg' alt='')
                  p.text-white.text-center #[b Cesantías]
                  p.text-white.mb-0 Un mes de salario por cada año de servicio, o la proporción del tiempo laborado.
                .tarjeta.color-secundario.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t3/img6.svg' alt='')
                  p.text-white.text-center #[b Intereses sobre cesantías]
                  p.text-white.mb-0 El 12 % anual sobre el valor de las cesantías, o la proporción del tiempo laborado.
                .tarjeta.color-secundario.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t3/img7.svg' alt='')
                  p.text-white.text-center #[b Prima de servicios]
                  p.text-white.mb-0 Treinta días de salario por año, o la proporción del semestre laborado.
                .tarjeta.color-secundario.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t3/img8.svg' alt='')
                  p.text-white.text-center #[b Vacaciones]
                  p.text-white.mb-0 Quince días hábiles de descanso remunerado por año, que se compensan en dinero cuando no se han disfrutado al terminar el contrato.
                .tarjeta.color-secundario.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t3/img9.svg' alt='')
                  p.text-white.text-center #[b Indemnización]
                  p.text-white.mb-0 Se incluye solo cuando el empleador termina el contrato sin justa causa.
          Separador
          #t_3_3
          .titulo-segundo.color-acento-contenido
            h2 3.2 Liquidación del contrato de trabajo
          p.mb-4(data-aos="fade-right") El artículo 64 del CST establece las condiciones para reconocer una indemnización cuando el empleador termina unilateralmente el contrato sin justa causa. Su cálculo depende de la modalidad contractual y, cuando corresponde, del salario y del tiempo de servicio del trabajador, por lo que no se aplica una misma fórmula a todos los contratos. Los criterios de cálculo se presentan a continuación:
      .titulo-sexto.color-acento-contenido.mb-3
        p.mb-0 #[b Tabla 2.] Indemnización por terminación sin justa causa (artículo 64 del CST)
      .tabla-a.color-acento-contenido(data-aos="fade-down")
        table
          thead
            tr
              th(style="width: 30%") Modalidad de contrato
              th Modalidad de contrato
          tbody
            tr
              td Término fijo
              td Valor de los salarios correspondientes al tiempo que falte para cumplir el plazo pactado.
            tr
              td Obra o labor
              td Valor de los salarios del tiempo que falte para terminar la obra o labor, sin que sea inferior a quince (15) días.
            tr
              td Término indefinido, salario inferior a 10 SMLMV
              td Treinta (30) días de salario por el primer año y veinte (20) días por cada año adicional, y proporcionalmente por fracción.
            tr
              td Término indefinido, salario igual o superior a 10 SMLMV
              td Veinte (20) días de salario por el primer año y quince (15) días por cada año adicional, y proporcionalmente por fracción.
      .row.bg-c8
        .col-12.px-5.mb-5
          Separador
          #t_3_4
          .titulo-sexto.color-acento-contenido
            h2 3.4 Programas de revinculación laboral
          .row.align-items-center.mb-4(data-aos="fade-down")
            .col-md-auto.mb-4.mb-md-0
              figure
                img(src="@/assets/curso/temas/t2/img5.svg", alt="", style="width: 80px").m-auto
            .col
              p.mb-0 Las personas que pierden su empleo pueden acceder a servicios de orientación, formación e intermediación laboral. Los beneficios económicos para la población cesante están sujetos a los requisitos del mecanismo de protección correspondiente. Los apoyos disponibles se presentan a continuación:
          TabsA.color-primario(data-aos="fade-left")
            .tarjeta.color-acento-contenido.shadow-lg.p-4(titulo="Capacitación")
              .row.align-items-center
                .col-lg-7.mb-4.mb-lg-0
                  p #[b Capacitación]
                  p.mb-0 Formación para actualizar o reorientar las competencias de la persona desempleada.
                .col-lg-5
                  figure
                    img(src="@/assets/curso/temas/t3/img5.png", alt="", style="width: 300px").m-auto
            .tarjeta.color-acento-contenido.shadow-lg.p-4(titulo="Beneficios económicos")
              .row.align-items-center
                .col-lg-7.mb-4.mb-lg-0
                  p #[b Beneficios económicos]
                  p.mb-0 Acceso a beneficios económicos y aportes a seguridad social, según los requisitos, la cobertura y la duración previstos en la normativa aplicable.
                .col-lg-5
                  figure
                    img(src="@/assets/curso/temas/t3/img6.png", alt="", style="width: 300px").m-auto
            .tarjeta.color-acento-contenido.shadow-lg.p-4(titulo="Intermediación laboral")
              .row.align-items-center
                .col-lg-7.mb-4.mb-lg-0
                  p #[b Intermediación laboral]
                  p.mb-0 Asesoría para la búsqueda de empleo y conexión con vacantes disponibles.
                .col-lg-5
                  figure
                    img(src="@/assets/curso/temas/t3/img7.png", alt="", style="width: 300px").m-auto
            .tarjeta.color-acento-contenido.shadow-lg.p-4(titulo="Emprendimiento")
              .row.align-items-center
                .col-lg-7.mb-4.mb-lg-0
                  p #[b Emprendimiento]
                  p.mb-0 Orientación para crear y fortalecer iniciativas productivas propias.
                .col-lg-5
                  figure
                    img(src="@/assets/curso/temas/t3/img8.png", alt="", style="width: 300px").m-auto

</template>

<script>
export default {
  name: 'Tema3',
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
