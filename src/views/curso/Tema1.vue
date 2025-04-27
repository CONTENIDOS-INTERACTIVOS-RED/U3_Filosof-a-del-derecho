<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'1. Ejes filosóficos del Derecho'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    .row.bg-fondo-1.bg-full-width.py-4.mb-0
      div.px-5.pb-md-3

        p.mb-4 La filosofía del Derecho es una disciplina fundamental dentro del pensamiento jurídico, pues permite entender la esencia, los valores y las bases del Derecho. Su estudio no solo enriquece la comprensión del Derecho como fenómeno normativo y social, sino que también contribuye al análisis crítico de su validez, legitimidad y aplicación en la sociedad. Para ello, la aproximación al Derecho desde la filosofía puede hacerse a partir de tres grandes ejes: 
        .row.mb-4.justify-content-center
          .col-10.col-md-8.col-lg-6.col-xl-4.mx-auto.mb-4.mb-xl-0(data-aos='zoom-in')
            .custom-image-card.d-flex.flex-column.p-4.py-md-5
              img.mx-auto.mb-4(src='@/assets/curso/unidad/img-11.svg', style='width: 80px')
              p.text-bold.mb-4.text-center Primer tema
              p.px-1.text-small.mb-0.d-flex.text-center La ontología, que se ocupa de la esencia.
          .col-10.col-md-8.col-lg-6.col-xl-4.mx-auto.mb-4.mb-xl-0(data-aos='zoom-in')
            .custom-image-card.d-flex.flex-column.p-4.py-md-5
              img.mx-auto.mb-4(src='@/assets/curso/unidad/img-12.svg', style='width: 80px')
              p.text-bold.mb-4.text-center Segundo tema
              p.px-1.text-small.mb-0.d-flex.text-center La epistemología, que busca entender cómo se conoce el Derecho.
          .col-10.col-md-8.col-lg-6.col-xl-4.mx-auto.mb-4.mb-xl-0(data-aos='zoom-in')
            .custom-image-card.d-flex.flex-column.p-4.py-md-5
              img.mx-auto.mb-4(src='@/assets/curso/unidad/img-13.svg', style='width: 80px')
              p.text-bold.mb-4.text-center Tercer tema
              p.px-1.text-small.mb-0.d-flex.text-center La axiología, que se centra en los fundamentos del Derecho.

    .d-flex.align-items-start.bg-verde-oscuro.bg-full-width.p-4(data-aos='fade-up').d-flex.align-items-center.flex-column.flex-md-row.mb-4
      img.me-3(style='width: 90px' src='@/assets/curso/unidad/img-14.svg', alt='Texto descriptivo de la imagen')
      .my-auto
        p.pe-xl-3.mb-0.text-white Estos ejes permiten abordar la naturaleza del Derecho, así como la manera en que es conocido y comprendido, y los valores que lo sustentan. A continuación, se desarrollará cada uno de estos ejes con el fin de ofrecer un panorama detallado de su relevancia en la reflexión jurídica.

    #t_1_1.titulo-segundo(data-aos="flip-up")
      div.d-flex
        span.me-3 1.1
        h2 Ontología del Derecho: la naturaleza del Derecho

    .row.mb-4
      .col-12.col-xl-8
        .bg-marron.p-4.mb-4(data-aos='fade-up')
          span Es una rama de la filosofía jurídica que estudia la naturaleza del Derecho y su existencia. Se centra en responder preguntas fundamentales como: ¿Qué es el Derecho? ¿Existe independientemente de la sociedad o es una construcción humana? ¿Cuáles son sus elementos esenciales?
        p.mb-4 La ontología, en términos generales, es la disciplina filosófica que estudia el ser, es decir, lo que existe y cómo existe. Aplicada al Derecho, la ontología busca determinar qué es el Derecho en su sentido más profundo y qué características lo definen como fenómeno normativo y social. Para ello, analiza la estructura fundamental del Derecho, su origen y su relación con la realidad. Examina si el Derecho es una entidad objetiva que existe por sí misma o si es una creación humana que varía, según el contexto social y político.
        span Principales preguntas ontológicas del Derecho:
      .col-4.d-none.d-xl-block
        img(src='@/assets/curso/unidad/img-16.png', alt='Texto que describa la imagen')
         
    .row.position-relative.mb-5.py-4.bg-fondo-slider.bg-full-width
      div.px-4.px-md-5.py-md-3
        SlyderA(tipo="b").bg-white
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .d-none.d-lg-block.col-md-6.col-lg-5(data-aos="zoom-in")
              figure
                img(src='@/assets/curso/unidad/img-17.png', alt='Texto que describa la imagen')
            .col-md-12.col-lg-7.mb-4.mb-md-0.d-flex.flex-column.justify-content-center
              p.text-bold ¿El Derecho es una realidad objetiva o una construcción social? 
              p Algunas corrientes sostienen que el Derecho tiene una existencia objetiva y se fundamenta en principios universales, mientras que otras afirman que es un producto de las relaciones sociales y políticas.
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .d-none.d-lg-block.col-md-6.col-lg-5(data-aos="zoom-in")
              figure
                img(src='@/assets/curso/unidad/img-18.png', alt='Texto que describa la imagen')
            .col-md-12.col-lg-7.mb-4.mb-md-0.d-flex.flex-column.justify-content-center
              p.text-bold ¿El Derecho es independiente de la moral?
              p Se debate si el Derecho debe necesariamente reflejar valores morales o si puede existir sin referencia a la ética.
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .d-none.d-lg-block.col-md-6.col-lg-5(data-aos="zoom-in")
              figure
                img(src='@/assets/curso/unidad/img-19.png', alt='Texto que describa la imagen')
            .col-md-12.col-lg-7.mb-4.mb-md-0.d-flex.flex-column.justify-content-center
              p.text-bold ¿Cuál es la estructura esencial del Derecho?
              p Se estudia la relación entre normas, instituciones y la sociedad en la conformación del Derecho.

    h2 Corrientes filosóficas sobre la ontología del Derecho
    p.mb-4 Existen diversas corrientes filosóficas que han desarrollado diferentes respuestas sobre la naturaleza del Derecho. Entre las más importantes se encuentran:

    .row.mb-4
      .col-12.col-lg-7.col-xl-8
        AcordionA(tipo="b")
          .div(titulo="Iusnaturalismo")(data-aos="fade-up")
            p El iusnaturalismo sostiene que el Derecho tiene un fundamento en la naturaleza humana y en principios morales universales. Para esta corriente, el Derecho no es solo un conjunto de normas impuestas por una autoridad, sino que debe estar en armonía con la justicia y la razón.
          .div(titulo="Iuspositivismo")(data-aos="fade-up")
            p El iuspositivismo, por otro lado, sostiene que el Derecho es un sistema de normas creado por el Estado, como autoridad legítima, sin necesidad de fundamentarse en la moral. Para positivistas como Hans Kelsen, el Derecho es un conjunto de normas que se separan de la moral. Esta visión es vista por algunas posturas como problemática toda vez que es posible la creación de una norma que sea válida conforme al procedimiento legal incluso si es injusta.
          .div(titulo="Realismo jurídico")(data-aos="fade-up")
            p El realismo jurídico pone el énfasis en la práctica del Derecho y en cómo las normas son aplicadas en la realidad. Esta corriente sostiene que el Derecho no puede reducirse sólo a textos normativos, sino que su verdadera naturaleza se encuentra en la forma en que jueces, tribunales y ciudadanos lo interpretan y aplican.
      .col-12.col-lg-5.col-xl-4.d-none.d-lg-block(data-aos="zoom-in")
        img(src='@/assets/curso/unidad/img-20.png', alt='Texto que describa la imagen')

    .d-flex.align-items-start.bg-azul-claro.bg-full-width.p-4(data-aos='fade-up').d-flex.align-items-center.flex-column.flex-md-row.mb-4
      img.me-3(style='width: 90px' src='@/assets/curso/unidad/img-21.svg', alt='Texto descriptivo de la imagen')
      .my-auto
        p.pe-xl-3.mb-0 La ontología del Derecho es un campo fundamental dentro de la filosofía jurídica, dado que permite comprender la esencia del Derecho y su relación con la realidad social. A lo largo de la historia, diferentes corrientes han tratado de explicar su naturaleza, desde quienes lo consideran una manifestación de principios morales universales hasta quienes lo ven como una construcción social y política. 

    .row.mb-4
      .col-3.d-none.d-xl-block
        img(src='@/assets/curso/unidad/img-22.png', alt='Texto que describa la imagen')
      .col-12.col-xl-9
        p.mb-4 En la práctica, la forma en que se concibe el Derecho influye en su interpretación y aplicación. Un sistema jurídico basado en el iusnaturalismo buscará reflejar principios morales universales, mientras que un sistema positivista se centrará en la estructura normativa. De igual manera, el realismo y las teorías críticas, resaltan el papel del Derecho en la sociedad y su impacto en la vida cotidiana.
        .bg-marron.p-4(data-aos='fade-up')
          span El estudio de la ontología del Derecho sigue siendo relevante en el debate jurídico contemporáneo, puesto que permite una mejor comprensión del Derecho como fenómeno normativo, social y político. A través de este análisis, se pueden evaluar las estructuras jurídicas existentes y reflexionar sobre la legitimidad y justicia de los sistemas normativos vigentes.
    
    #t_1_2.titulo-segundo(data-aos="flip-up")
      div.d-flex
        span.me-3 1.2
        h2 Epistemología jurídica: el conocimiento del Derecho

    p.mb-4 La epistemología jurídica analiza cómo es posible conocer y comprender el Derecho. Para algunos académicos este conocimiento debe sistematizarse a partir de métodos o procedimientos. En ese sentido, se busca la veracidad del hecho jurídico dándole el carácter científico a la aproximación jurídica. Así pues, algunas de las cuestiones que aborda incluyen:

    .row.mb-4
      .col-6.col-lg-4.mx-auto.mb-4.mb-xl-0.p-4.d-flex.bg-azul-oscuro(data-aos="zoom-in")
        p.my-auto.text-white ¿El Derecho es una ciencia?
      .col-6.col-lg-4.mx-auto.mb-4.mb-xl-0.p-4.bg-azul(data-aos="zoom-in")
        p.my-auto.text-white ¿Cuál es el método adecuado para su estudio?
      .col-6.col-lg-4.mx-auto.mb-4.mb-xl-0.p-4.bg-azul-oscuro(data-aos="zoom-in")
        p.my-auto.text-white ¿Es posible un conocimiento objetivo del Derecho?

    p.mb-4 Existen diversas aproximaciones epistemológicas al estudio del Derecho:

    h2 Formalismo jurídico

    .row.mb-4
      .col-12.col-xl-8
        .d-flex.align-items-start.bg-rojo.p-4(data-aos='fade-up').d-flex.align-items-center.flex-column.flex-md-row.mb-4
          img.me-3(style='width: 90px' src='@/assets/curso/unidad/img-23.svg', alt='Texto descriptivo de la imagen')
          .my-auto
            p.pe-xl-3.mb-0 Considera que el Derecho puede estudiarse mediante métodos lógico-deductivos para estudiar el razonamiento jurídico. Acá, según Gómez (2022), opera para la deducción el silogismo. ¿Qué quiere decir eso? En términos de la lógica el silogismo es definido por la RAE como razonamiento que consta de tres proposiciones: dos premisas y una conclusión.
        span Además del método deductivo, Gómez (2022), sostiene que es fundamental que en el ejercicio del Derecho desde los métodos lógicos quien ejerce el Derecho debe identificar los tipos de juicios más comunes y que darán sustento a su argumentación. A saber, en estos se identifican:
      .col-4.d-none.d-xl-block
        img(src='@/assets/curso/unidad/img-24.png', alt='Texto que describa la imagen')
    
    TabsC.mb-4
      .tabs-content.border.px-4.p-md-5.py-3(titulo='Categórico', :icon="require('@/assets/curso/unidad/img-25.svg')")
        .row
          .d-none.d-lg-block.col-md-12.col-lg-5(data-aos='zoom-in')
            figure
              img(src='@/assets/curso/unidad/img-26.png', alt='Descripción de la imagen')
          .col-md-12.col-lg-7.mb-4.mb-md-0
            h4(data-aos='fade-up') Categórico
            p(data-aos='fade-up') Es aquel que afirma o niega algo de manera absoluta, sin depender de condiciones. Se expresa en forma de proposiciones universales o particulares. Ejemplo en Derecho: "Todo contrato debe cumplir con los requisitos de validez establecidos en la Ley".
      .tabs-content.border.px-4.p-md-5.py-3(titulo='Hipotético', :icon="require('@/assets/curso/unidad/img-25.svg')")
        .row
          .d-none.d-lg-block.col-md-12.col-lg-5(data-aos='zoom-in')
            figure
              img(src='@/assets/curso/unidad/img-27.png', alt='Descripción de la imagen')
          .col-md-12.col-lg-7.mb-4.mb-md-0
            h4(data-aos='fade-up') Hipotético
            p(data-aos='fade-up') Es aquel que establece una relación condicional entre dos proposiciones. Se expresa en la forma "si A, entonces B". En Derecho, esto se refleja en normas que dependen del cumplimiento de una condición. Ejemplo en Derecho: "Si una persona comete un delito, será sancionada, según lo establecido en el código penal".
      .tabs-content.border.px-4.p-md-5.py-3(titulo='Disyuntivo', :icon="require('@/assets/curso/unidad/img-25.svg')")
        .row
          .d-none.d-lg-block.col-md-12.col-lg-5(data-aos='zoom-in')
            figure
              img(src='@/assets/curso/unidad/img-28.png', alt='Descripción de la imagen')
          .col-md-12.col-lg-7.mb-4.mb-md-0
            h4(data-aos='fade-up') Disyuntivo
            p(data-aos='fade-up') Es aquel que plantea alternativas excluyentes o no excluyentes dentro de una proposición. Se estructura en forma de "o A, o B". En Derecho, esto aparece en normas que presentan opciones. Ejemplo en Derecho: "El demandado puede contestar la demanda dentro del plazo señalado o allanarse a la pretensión del demandante".

    h2 Enfoques sociológicos y realistas

    .row.mb-4
      .col-12.col-xl-8
        p.mb-4 Plantean que el estudio del Derecho debe incluir su dimensión social y política. En este sentido, la norma jurídica no puede analizarse de manera aislada, sino dentro del contexto en que se aplica. Para algunos teóricos la sociología jurídica debe estudiarse como otra rama del Derecho, independiente de la filosofía. Pese a lo anterior, tanto la sociología como la filosofía del Derecho dan sentido al sustento de la normativa, así como a la evolución del Derecho como ciencia, siendo así complementarias.
        h2 Hermenéutica jurídica
        .d-flex.align-items-start.bg-azul-claro.p-4(data-aos='fade-up').d-flex.align-items-center.flex-column.flex-md-row.mb-4
          img.me-3(style='width: 90px' src='@/assets/curso/unidad/img-29.svg', alt='Texto descriptivo de la imagen')
          .my-auto
            p.pe-xl-3.mb-0 Para Hernández (2020), la hermenéutica jurídica se encarga de la interpretación del Derecho, y de manera concreta de la norma. Acá el proceso interpretativo corresponde a quien quiera fundamentar un proceso argumentativo en el marco del ordenamiento jurídico. ¿Qué quiere decir esto? Que si bien la aplicación del Derecho implica interpretación de las normas por parte de jueces y juristas, en relación al componente epistemológico la hermenéutica permite a cualquier persona la interpretación del Derecho al ahondar en su contenido previo a su aplicación.

      .col-4.d-none.d-xl-block
        img(src='@/assets/curso/unidad/img-30.png', alt='Texto que describa la imagen')

    #t_1_3.titulo-segundo(data-aos="flip-up")
      div.d-flex
        span.me-3 1.3
        h2 Axiología del Derecho: los valores y la justicia

    p.mb-4 La axiología jurídica estudia los valores fundamentales que sustentan el Derecho, como la justicia, la equidad y la libertad. Su análisis permite cuestionar la legitimidad de las normas y evaluar si el Derecho cumple su función social de manera ética y justa. Las características de la axiología incluyen:

    .row.mb-4
      .col-4.d-none.d-xl-block
        img(src='@/assets/curso/unidad/img-31.png', alt='Texto que describa la imagen')
      .col-12.col-xl-8
        .d-flex.align-items-start.bg-marron-oscuro.p-4(data-aos='fade-up').d-flex.align-items-center.flex-column.flex-md-row.mb-4
          img.me-3(style='width: 90px' src='@/assets/curso/unidad/img-32.svg', alt='Texto descriptivo de la imagen')
          .my-auto
            p.pe-xl-3.mb-2.text-bold Estudio de los valores jurídicos
            span Examina cuáles son los valores esenciales del Derecho y cómo estos influyen en la creación y aplicación de las normas.
        .d-flex.align-items-start.bg-marron-oscuro.p-4(data-aos='fade-up').d-flex.align-items-center.flex-column.flex-md-row.mb-4
          img.me-3(style='width: 90px' src='@/assets/curso/unidad/img-33.svg', alt='Texto descriptivo de la imagen')
          .my-auto
            p.pe-xl-3.mb-2.text-bold Relación entre Derecho y moral
            span Analiza hasta qué punto el Derecho debe reflejar principios éticos y morales.
        .d-flex.align-items-start.bg-marron-oscuro.p-4(data-aos='fade-up').d-flex.align-items-center.flex-column.flex-md-row.mb-4
          img.me-3(style='width: 90px' src='@/assets/curso/unidad/img-34.svg', alt='Texto descriptivo de la imagen')
          .my-auto
            p.pe-xl-3.mb-2.text-bold Crítica y fundamentación del Derecho
            span Permite evaluar si un sistema jurídico es legítimo o si debe modificarse para alcanzar mayores niveles de justicia.

    p.mb-4 Algunas de las concepciones más importantes incluyen:
    .row.mb-4
      .col-12.col-lg-7.col-xl-8
        AcordionA(tipo="b")
          .div(titulo="Justicia como equidad")(data-aos="fade-up")
            p John Rawls propone que una sociedad justa debe garantizar la igualdad de oportunidades y la distribución equitativa de los bienes. Sandel (2018), explica que bajo esta visión se contempla la racionalidad del ser humano, definiéndolo como capaz de cooperar. Además, desde esta perspectiva se rechaza al utilitarismo, pues lo esperado es que todas las personas gocen de la misma libertad independiente de su condición, género, raza, entre otros; lo que Rawls llama el velo de la ignorancia.
          .div(titulo="Justicia utilitarista")(data-aos="fade-up")
            p Sostiene que el Derecho debe maximizar el bienestar del mayor número de personas Así, la aplicación de las normas se evalúa en función de su impacto en la felicidad colectiva.
          .div(titulo="Justicia conmutativa")(data-aos="fade-up")
            p La justicia conmutativa se refiere a la equidad en los intercambios entre individuos. Su principio fundamental es la igualdad aritmética, es decir, que lo dado debe ser equivalente a lo recibido. Se aplica en relaciones contractuales, comerciales y civiles, donde las partes deben respetar el equilibrio en las transacciones.
      .col-12.col-lg-5.col-xl-4.d-none.d-lg-block(data-aos="zoom-in")
        img(src='@/assets/curso/unidad/img-35.png', alt='Texto que describa la imagen')

    .row.mb-4
      .col-12.col-lg-5.col-xl-4.d-none.d-lg-block(data-aos="zoom-in")
        img(src='@/assets/curso/unidad/img-36.png', alt='Texto que describa la imagen')
      .col-12.col-lg-7.col-xl-8
        AcordionA(tipo="b")
          .div(titulo="Justicia distributiva")(data-aos="fade-up")
            p La justicia distributiva se enfoca en la distribución equitativa de bienes y cargas dentro de una comunidad. En lugar de basarse en la igualdad aritmética, sigue un criterio de proporcionalidad, es decir, cada persona debe recibir, según su necesidad o contribución a la sociedad. Sandel (2018) explica que para Rawls uno de los principios consiste en establecer los términos de cooperación social, para recibir los beneficios; es decir: derechos adquiridos fundamentados en las instituciones sociales.
          .div(titulo="Libertad")(data-aos="fade-up")
            p Este concepto se comprende desde distintas visiones. Por un lado, algunos autores como Nozick proponen una aproximación que defiende la libertad individual como valor supremo. Desde esta perspectiva los individuos son dueños de sí mismos y tienen el Derecho de actuar sin interferencias, siempre que no dañen a otros.<br><br>Por otro lado, para autores como Sandel (2018), esa visión es insuficiente puesto que no toma en cuenta el contexto social y las condiciones de cada individuo. Para él, la libertad no solo consiste en la ausencia de restricciones externas, sino también en la capacidad de participar activamente en la comunidad y en la vida política. En este sentido, se acerca más a la tradición que enfatiza la importancia del bien común y la deliberación colectiva.
          .div(titulo="Igualdad")(data-aos="fade-up")
            p Sandel también explora la idea de igualdad a través de distintas teorías de justicia, en especial la de John Rawls, quien propone la igualdad de oportunidades y la diferencia como principios fundamentales de la justicia. Aunque reconoce el valor de la teoría rawlsiana, Sandel critica que esta se basa en una concepción demasiado neutral de la justicia, sin considerar los lazos comunitarios y las concepciones del bien que comparten los ciudadanos.<br><br>Desde su perspectiva, la igualdad no debe limitarse a la distribución de bienes materiales o derechos formales, sino que debe considerar las relaciones sociales y los valores colectivos. Así, una sociedad justa no solo garantiza igualdad de oportunidades, sino que también fomenta un sentido compartido de responsabilidad y pertenencia.

    .row.mb-5
      .col-12.col-xl-8
        .bg-verde-claro.p-4.mb-0(data-aos='fade-up')
          span A través de la axiología jurídica, se establece una relación entre el Derecho y la moral, permitiendo evaluar la legitimidad de las normas y su contribución a la justicia social. Estas aproximaciones son esenciales para comprender su naturaleza, su conocimiento y su función dentro de la sociedad. La ontología del Derecho permite entender su esencia y origen, la epistemología jurídica analiza cómo se construye el conocimiento del Derecho, y la axiología del Derecho estudia los valores que fundamentan su legitimidad y aplicación. 
        .bg-verde.p-4.mb-0(data-aos='fade-up')
          span Estos ejes no solo enriquecen el pensamiento jurídico, sino que también tienen implicaciones prácticas en la interpretación y aplicación del Derecho. Un jurista que comprende estos fundamentos filosóficos podrá abordar los problemas jurídicos con una perspectiva crítica y ética, contribuyendo al desarrollo de un sistema normativo más justo y equitativo.
      .col-4.d-none.d-xl-block
        img(src='@/assets/curso/unidad/img-37.png', alt='Texto que describa la imagen')

    .bg-full-width.border-top-9-azul
      .px-5.pt-5.pb-0
        h2 Material complementario
        .row
          .col-12.col-md-6.col-lg-8
            p.d-flex.my-4
              img.me-3.mb-auto.mt-1(src='@/assets/componentes/book.svg' :style="{'max-width':'16px'}")
              a.text-small.text-primary(target="_blank", href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/40200") Gómez Gallardo, P. (2017). Filosofía del derecho (2 ed.). IURE Editores.
            p.d-flex.my-4
              img.me-3.mb-auto.mt-1(src='@/assets/componentes/youtube-icon.svg' :style="{'max-width':'16px'}")
              a.text-small.text-primary(target="_blank", href="https://www.youtube.com/watch?v=CgM-QRgQFM8") [Vídeo] Ruiz, Carlos (2018). Filosofía del Derecho- Introducción
          .col-12.col-md-6.col-lg-3
            figure
              img(src='@/assets/componentes/material-complementario.svg' alt='Imagen de material complementario')


</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({}),

  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
