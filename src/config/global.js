export default {
  global: {
    numeroUnidad: '1',
    tituloUnidad: 'Concepto de filosofía del Derecho',
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
        titulo: 'Ejes filosóficos del Derecho',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Ontología del Derecho: la naturaleza del Derecho',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Epistemología jurídica: el conocimiento del Derecho',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Axiología del Derecho: los valores y la justicia',
            hash: 't_1_3',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'El concepto de filosofía del Derecho',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'La filosofía del Derecho y las demás ramas jurídicas',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Metodología y enfoques en la filosofía del Derecho',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'La relación entre filosofía y Derecho',
            hash: 't_2_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.4',
            titulo: 'La estructura normativa del Derecho',
            hash: 't_2_4',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'La filosofía del Derecho como saber jurídico',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo:
              'La filosofía del Derecho y su relación con el ordenamiento jurídico',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo:
              'La ciencia jurídica y la filosofía del Derecho como fundamento de la Ciencia Jurídica',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo: 'Objeto de estudio de la filosofía como saber jurídico',
            hash: 't_3_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.4',
            titulo:
              'La interpretación y aplicación del Derecho desde la filosofía',
            hash: 't_3_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.5',
            titulo:
              'Retos contemporáneos en la interpretación y aplicación del Derecho',
            hash: 't_3_5',
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
        'Gómez Gallardo, P. (2017). Filosofía del derecho (2 ed.). IURE Editores.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/40200',
    },
    {
      referencia:
        'Hernández, J (2020) Nociones de hermenéutica e interpretación jurídica en el contexto mexicano. UNAM',
      link:
        'https://biblio.juridicas.unam.mx/bjv/detalle-libro/5649-nociones-de-hermeneutica-e-interpretacion-juridica-en-el-contexto-mexicano',
    },
    {
      referencia: 'Sandel, M (2018). Justicia ¿hacemos lo que debemos?. Debate',
      link: 'https://www.academia.edu/34763569/JUSTICIA_Michael_Sandel',
    },
    {
      referencia:
        'Castro, E (2019). Filosofía del Derecho. Consejo Superior de la Judicatura, Escuela Judicial "Rodrigo Lara Bonilla"',
      link:
        'https://escuelajudicial.ramajudicial.gov.co/Videos/campus/medios/docs/FILOSOFIA.pdf',
    },
    {
      referencia: 'Rüthers, B (2018). Teoría General del Derecho. Temis',
      link:
        'https://api.pageplace.de/preview/DT0400.9789583514173_A42960221/preview-9789583514173_A42960221.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Ciencia jurídica',
      significado:
        'Conjunto de conocimientos sistemáticos sobre el Derecho, que busca describir, interpretar y sistematizar las normas jurídicas.',
    },
    {
      termino: 'Derecho positivo',
      significado:
        'Conjunto de normas jurídicas establecidas y en vigor en un determinado tiempo y lugar, creadas por una autoridad legítima.',
    },
    {
      termino: 'Epistemología jurídica',
      significado:
        'Disciplina que estudia el conocimiento del Derecho, analizando su origen, validez, método y límites.',
    },
    {
      termino: 'Filosofía del derecho',
      significado:
        'Rama de la filosofía que reflexiona sobre la esencia, fundamentos y valores del Derecho, así como su relación con la justicia y la moral.',
    },
    {
      termino: 'Imperativo categórico',
      significado:
        'Principio formulado por Kant que ordena actuar conforme a normas morales universales, independientemente de cualquier condición o consecuencia.',
    },
    {
      termino: 'Imperativo hipotético',
      significado:
        'Principio kantiano que ordena una acción como medio para alcanzar un fin determinado, dependiendo de condiciones específicas.',
    },
    {
      termino: 'Iusnaturalismo',
      significado:
        'Corriente filosófico-jurídica que sostiene la existencia de un Derecho natural, basado en principios universales e inmutables, anteriores y superiores al derecho positivo.',
    },
    {
      termino: 'Justicia',
      significado:
        'Valor fundamental del Derecho que implica dar a cada quien lo que le corresponde, garantizando la equidad y el respeto a los derechos de las personas.',
    },
    {
      termino: 'Moral',
      significado:
        'Conjunto de principios y valores que orientan la conducta humana en función del bien y el mal, influyendo en la formulación del Derecho.',
    },
    {
      termino: 'Ontología del derecho',
      significado:
        'Rama de la Filosofía del Derecho que estudia la naturaleza, estructura y existencia del Derecho como fenómeno normativo y social.',
    },
    {
      termino: 'Positivismo jurídico',
      significado:
        'Corriente filosófico-jurídica que sostiene que el Derecho es un sistema de normas creado por la autoridad competente, sin necesidad de fundamentación en principios morales o naturales.',
    },
  ],
}
