<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
      // Para cuestionario usar: <ActividadController :cuestionario="cuestionario"/>
      // Para parrafo usar: <ActividadController :parrafo="parrafo"/>
      #Actividad                
      <ActividadController :cuestionario="cuestionario"/>

</template>

<script>
import ActividadController from '@ecored-sena/boulder-kit/plugin/components/actividad/ActividadController.vue'

export default {
  name: 'ActividadDidactica',
  components: {
    ActividadController,
  },
  data: () => ({
    cuestionario: {
      tema: 'Microcontroladores y sensores',
      titulo: 'Cuestionario',
      introduccion:
        '<b>Objetivo:</b> verificar la comprensión de las modalidades de contrato de trabajo, el contrato de aprendizaje, los procesos posteriores a la vinculación, la terminación y liquidación del contrato y las licencias remuneradas, conforme a la Ley 2466 de 2025.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO',
      preguntas: [
        {
          id: 1,
          texto:
            '¿Cuáles son los tres elementos esenciales del contrato de trabajo?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Servicio personal, subordinación y salario.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Horario, vacaciones y capacitación.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Firma, inducción y evaluación.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Preaviso, liquidación e indemnización.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto:
            'Lo sentimos, su respuesta no es la correcta. <em>Board</em> del <em>software</em> EAGLE.',
        },
        {
          id: 2,
          texto: '¿Qué caracteriza la prestación personal del servicio?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'El trabajador realiza la labor por sí mismo.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'El trabajador puede delegar sus funciones.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'El empleador no puede dar instrucciones.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'La remuneración es voluntaria.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto: '¿Qué implica la subordinación laboral?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Recibir órdenes laborales respetando los derechos.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Excluir los derechos del trabajador.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Delegar siempre las funciones.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Determinar unilateralmente el salario.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto:
            '¿Cuál es la modalidad general de contratación según la Ley 2466 de 2025?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Contrato a término indefinido.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Contrato por obra.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Contrato de aprendizaje.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Contrato a término fijo.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto:
            '¿Cuál es el límite total de duración del contrato a término fijo?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Cuatro años, incluidas las prórrogas.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Dos años sin prórrogas.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Tres años de vigencia inicial.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Cinco años de duración acumulada.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 6,
          texto:
            '¿Qué requisito corresponde al contrato por obra o labor determinada?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Describir por escrito la labor específica.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Ser exclusivamente verbal.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Tener duración fija de cuatro años.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Excluir las prestaciones sociales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 7,
          texto:
            '¿Con cuánta anticipación se comunica la no prórroga de un contrato a término fijo?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Al menos treinta días.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Quince días.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Veinte días.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Sesenta días.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 8,
          texto:
            '¿Qué ocurre si continúa el vínculo tras el límite de cuatro años del contrato a término fijo?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Se entiende celebrado a término indefinido.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Se extingue automáticamente.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Se convierte en contrato de aprendizaje.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Se suspende por un año.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 9,
          texto:
            '¿Cómo clasifica la Ley 2466 de 2025 el contrato de aprendizaje?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Contrato laboral especial a término fijo.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Contrato civil sin relación laboral.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Contrato exclusivamente indefinido.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Acuerdo comercial de formación.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 10,
          texto: '¿Cuál es la duración máxima del contrato de aprendizaje?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Tres años.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Un año.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Cuatro años.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Cinco años.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 11,
          texto:
            '¿Cuál es la remuneración mínima en la fase práctica de formación tradicional?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: '100 % del SMLMV.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: '50 % del SMLMV.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: '75 % del SMLMV.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: '125 % del SMLMV.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 12,
          texto: '¿Qué caracteriza la inducción general?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Presentar misión, visión y valores organizacionales.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Enseñar solo el software del cargo.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Calcular la liquidación.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Evaluar sanciones disciplinarias.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 13,
          texto: '¿Cuál es el propósito principal del adiestramiento?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Desarrollar destrezas prácticas del puesto.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Definir la modalidad contractual.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Establecer licencias remuneradas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Calcular las cesantías.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 14,
          texto: '¿Cuál es el primer paso de la evaluación del desempeño?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Definir y comunicar los criterios.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Formular planes de mejora.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Comunicar los resultados.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Analizar los resultados.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 15,
          texto:
            '¿Qué corresponde hacer después de analizar los resultados de la evaluación?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Retroalimentar al trabajador.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Finalizar el contrato.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Modificar el salario automáticamente.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Omitir los planes de mejora.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
