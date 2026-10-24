export default {
  global: {
    Name: 'Proceso de contratación del talento humano',
    Description:
      'Este componente formativo aborda los procedimientos, las orientaciones y las actividades previas y posteriores a la contratación del talento humano, de acuerdo con la normativa laboral colombiana. Incluye el contrato de trabajo, la integración del trabajador a la organización y la terminación y liquidación del vínculo laboral. Esta versión incorpora contenidos relacionados con la Ley 2466 de 2025, conocida como reforma laboral.',
    imagenBannerPrincipal: '@/assets/curso/portada/banner-principal.png',
    fondoBannerPrincipal: '@/assets/curso/portada/fondo-banner-principal.png',
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-1.png',
      },
      {
        clases: ['banner-principal-decorativo-2', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-2.png',
      },
      {
        clases: ['banner-principal-decorativo-3', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-3.png',
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Contrato de trabajo',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Contenido del contrato',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Clases de contratos',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Prórrogas del contrato a término fijo',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Contrato de aprendizaje',
            hash: 't_1_4',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo:
          'Inducción, capacitación, adiestramiento y evaluación del desempeño',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Inducción',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Capacitación',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Adiestramiento',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Evaluación del desempeño',
            hash: 't_2_4',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Terminación y liquidación del contrato',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Formas de terminación',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Liquidación del contrato de trabajo',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Indemnización',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo: 'Programas de revinculación laboral',
            hash: 't_3_4',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Garantías y licencias incorporadas por la Ley 2466 de 2025',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  glosario: [
    {
      termino: 'Contrato de aprendizaje',
      significado:
        'contrato laboral especial y a término fijo, orientado a la formación del aprendiz, regulado por el artículo 81 del Código Sustantivo del Trabajo (CST), modificado por la Ley 2466 de 2025.',
    },
    {
      termino: 'Contrato de trabajo',
      significado:
        'acuerdo mediante el cual una persona natural se obliga a prestar un servicio personal a otra persona natural o jurídica, bajo subordinación y a cambio de una remuneración.',
    },
    {
      termino: 'Indemnización',
      significado:
        'compensación económica que el empleador reconoce al trabajador cuando termina el contrato unilateralmente y sin justa causa, conforme a los criterios legales aplicables.',
    },
    {
      termino: 'Inducción',
      significado:
        'proceso que facilita la integración del trabajador a la organización mediante información sobre sus características, políticas y funciones del cargo.',
    },
    {
      termino: 'Licencia remunerada',
      significado:
        'permiso que permite al trabajador ausentarse de sus labores sin descuento de su salario, en los casos previstos por la ley.',
    },
    {
      termino: 'Liquidación',
      significado:
        'cálculo y pago de los salarios, prestaciones sociales, vacaciones y demás conceptos pendientes al finalizar el contrato de trabajo.',
    },
    {
      termino: 'Monetización',
      significado:
        'pago que realiza al Servicio Nacional de Aprendizaje (SENA) la empresa obligada a contratar aprendices cuando no cumple total o parcialmente con dicha obligación.',
    },
    {
      termino: 'Preaviso',
      significado:
        'comunicación anticipada de la intención de terminar o no prorrogar un contrato de trabajo, según los plazos y las condiciones establecidos en la normativa aplicable.',
    },
    {
      termino: 'Término fijo',
      significado:
        'modalidad de contrato de trabajo que debe constar por escrito y cuya duración total, incluidas las prórrogas, no puede superar los cuatro años.',
    },
  ],
  referencias: [
    {
      referencia:
        'Congreso de la República de Colombia. (2002). <i>Ley 789 de 2002, por la cual se dictan normas para apoyar el empleo y ampliar la protección social y se modifican algunos artículos del Código Sustantivo de Trabajo</i>.',
      link: '',
    },
    {
      referencia:
        'Congreso de la República de Colombia. (2025). <i>Ley 2466 de 2025, por medio de la cual se modifica parcialmente normas laborales y se adopta una reforma laboral para el trabajo decente y digno en Colombia</i>.',
      link: 'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=260676',
    },
    {
      referencia:
        'Ministerio del Trabajo. (s.f.). <i>Proceso de contratación</i>.',
      link: '',
    },
    {
      referencia:
        'Presidencia de la República de Colombia. (1950). <i>Decreto 2663 de 1950, Código Sustantivo del Trabajo</i>.',
      link: '',
    },
    {
      referencia:
        'Secretaría del Senado. (s.f.). <i>Código Sustantivo del Trabajo</i>.',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Líder del Ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Olga Constanza Bermúdez Jaimes',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Orlando Vidal Perdomo',
          cargo: 'Experto temático',
          centro: 'Regional Risaralda',
        },
        {
          nombre: 'Didier Andrés Ospina Osorio',
          cargo: 'Experto temático',
          centro: 'Regional Risaralda',
        },
        {
          nombre: 'Ana Catalina Córdoba Sus',
          cargo: 'Evaluadora instruccional',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Andrés Felipe Herrera Roldán',
          cargo: 'Diseñador de contenidos digitales',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Yerson Fabian Zarate Saavedra',
          cargo: 'Diseñador de contenidos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Luis Jesús Pérez Madariaga',
          cargo: 'Desarrollador <i>full stack</i>',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Jhon Jairo Urueta Alvarez',
          cargo: 'Desarrollador <i>full stack</i>',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Jaime Hernán Tejada Llano',
          cargo: 'Validador de recursos educativos digitales',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Margarita Marcela Medrano Gómez',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
