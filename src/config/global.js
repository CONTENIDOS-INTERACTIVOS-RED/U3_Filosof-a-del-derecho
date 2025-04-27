export default {
  global: {
    numeroUnidad: '3',
    tituloUnidad: 'Los principales ejes de la institución jurídica',
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'La responsabilidad',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'La responsabilidad en la filosofía',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'La responsabilidad en el Derecho',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo:
              'La interrelación entre filosofía y Derecho en la responsabilidad',
            hash: 't_1_3',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'El Estado',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'El Estado en la filosofía',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'El Estado en el Derecho',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'El caso colombiano',
            hash: 't_2_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.4',
            titulo:
              'Interrelación entre filosofía y Derecho, en la concepción del Estado',
            hash: 't_2_4',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: ' La propiedad',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'La propiedad en la filosofía',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'La propiedad en el derecho',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo:
              'Interrelación entre filosofía y Derecho en la concepción de la propiedad',
            hash: 't_3_3',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'La justicia',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '4.1',
            titulo: 'La justicia en la filosofía',
            hash: 't_4_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.2',
            titulo: 'La justicia en el derecho',
            hash: 't_4_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.3',
            titulo:
              'Interrelación entre filosofía y Derecho, en la concepción de la justicia',
            hash: 't_4_3',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo: 'La ley',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '5.1',
            titulo: 'La Ley en la filosofía',
            hash: 't_5_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '5.2',
            titulo: 'La Ley en el Derecho',
            hash: 't_5_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '5.3',
            titulo: 'La Ley en Colombia',
            hash: 't_5_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '5.4',
            titulo:
              'Interrelación entre filosofía y Derecho, en la concepción de la Ley',
            hash: 't_5_4',
          },
        ],
      },
      {
        nombreRuta: 'sintesis',
        titulo: 'Síntesis',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      // {
      //   nombreRuta: 'actividad',
      //   icono: 'far fa-question-circle',
      //   titulo: 'Actividad didáctica',
      //   desarrolloContenidos: true,
      // },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      // {
      //   nombreRuta: 'complementario',
      //   icono: 'far fa-folder-open',
      //   titulo: 'Material complementario',
      // },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Aristóteles. (2004). Ética a Nicómaco: (ed.). El Cid Editor.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/93982',
    },
    {
      referencia:
        'Castro-Ayala, J. G., & Calonje-Londoño, N. X. (2015). Derecho de obligaciones : aproximación a la praxis y a la constitucionalización. Bogotá: Universidad',
      link:
        'https://repository.ucatolica.edu.co/entities/publication/b30f5e04-016e-46a4-9d89-ad903e18c461',
    },
    {
      referencia:
        'Locke, J (2006). Segundo Tratado sobre el Gobierno Civil. Tecnos',
      link:
        'https://sociologia1unpsjb.wordpress.com/wp-content/uploads/2008/03/locke-segundo-tratado-sobre-el-gobierno-civil.pdf',
    },
    {
      referencia: 'Platón. (2004). La República: (ed.). El Cid Editor.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/35993',
    },
    {
      referencia:
        'Rousseau, J. (2017). El contrato social: (ed.). Ediciones Akal.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/4982',
    },
    {
      referencia:
        'Hobbes, T. (2017). Leviatán: o la materia, forma y poder de una república eclesiástica y civil: (ed.). FCE - Fondo de Cultura Económica.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/110190',
    },
    {
      referencia:
        'Sandel, M (2018). Justicia ¿hacemos lo que debemos?. Debate.',
      link: 'https://www.academia.edu/34763569/JUSTICIA_Michael_Sandel',
    },
  ],
  glosario: [
    {
      termino: 'Contrato social',
      significado:
        'Teoría filosófica que sostiene que la sociedad y el Estado se originan en un acuerdo entre individuos para garantizar el orden y la convivencia, estableciendo derechos y deberes mutuos.',
    },
    {
      termino: 'Estado',
      significado:
        'Organización política y jurídica que ejerce soberanía sobre un territorio y su población, estableciendo normas para el funcionamiento de la sociedad.',
    },
    {
      termino: 'Estado social de derecho',
      significado:
        'Modelo de Estado que, además de garantizar derechos fundamentales y libertades individuales, promueve la justicia social mediante la intervención en la economía y la protección de sectores vulnerables.',
    },
    {
      termino: 'Institución jurídica',
      significado:
        'Conjunto de normas, principios y estructuras legales que regulan una determinada área del derecho, como la responsabilidad, la propiedad o el Estado.',
    },
    {
      termino: 'Justicia',
      significado:
        'Principio ético y jurídico que busca dar a cada quien lo que le corresponde, basado en la equidad, la igualdad y el reconocimiento de derechos.',
    },
    {
      termino: 'Ley',
      significado:
        'Norma jurídica dictada por una autoridad legítima que tiene carácter obligatorio y busca regular la conducta social para garantizar el orden y la justicia.',
    },
    {
      termino: 'Principio de diferencia',
      significado:
        'Concepto de John Rawls que establece que las desigualdades económicas y sociales solo son justas si benefician a los más desfavorecidos y garantizan igualdad de oportunidades.',
    },
    {
      termino: 'Principio de libertad',
      significado:
        'Postulado fundamental en filosofía política que reconoce el derecho de los individuos a actuar según su voluntad, siempre que no vulneren los derechos de los demás.',
    },
    {
      termino: 'Propiedad',
      significado:
        'Derecho legal y moral que permite a una persona poseer, usar, disponer y excluir a otros de un bien, ya sea material o inmaterial.',
    },
    {
      termino: 'Responsabilidad',
      significado:
        'Obligación de asumir las consecuencias de los propios actos, tanto en el ámbito jurídico como en el moral y social.',
    },
  ],
}
