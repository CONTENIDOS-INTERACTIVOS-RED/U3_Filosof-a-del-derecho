<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(:subTitulo="'2. El estado'")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

      .row.mb-4.bg-azul-claro.p-4.py-xl-0
        .col-12.col-xl-9.d-flex
          p.my-auto El Estado es una de las instituciones fundamentales en la organización de la sociedad. Se trata de una estructura política y jurídica que tiene como finalidad la regulación de la convivencia, la administración de la justicia y la garantía de los derechos y deberes de los ciudadanos. A lo largo de la historia, el concepto de Estado ha evolucionado, adquiriendo diferentes formas y estructuras, según los contextos históricos, políticos y filosóficos en los que se ha desarrollado. Su estudio es esencial para comprender el funcionamiento de las sociedades contemporáneas, porque de su existencia dependen el orden, la estabilidad y la implementación de las normas que rigen la vida en comunidad.
        .col-3.d-none.d-xl-block
          img.h-100(src='@/assets/curso/unidad/img-29.png', alt='Texto que describa la imagen')

      #t_2_1.titulo-segundo(data-aos="flip-up")
        div.d-flex
          span.me-3 2.1
          h2 El Estado en la filosofía
      
      p.mb-4 En la Antigua Grecia, Platón y Aristóteles establecieron las primeras teorías sistemáticas sobre el Estado.

      .row.mb-4
        .col-4.d-none.d-xl-block
          img(src='@/assets/curso/unidad/img-30.png', alt='Texto que describa la imagen')
        .col-12.col-xl-8
          .bg-marron.p-4(data-aos='fade-up')
            span En “La República” Platón (2004), concibe el Estado como un organismo estructurado en tres clases sociales, cada una reflejando una parte del alma humana: los filósofos gobernantes, guiados por la razón y la sabiduría, los guardianes o guerreros, encargados de la protección con valentía y honor, y los productores, responsables de las necesidades materiales y dominados por el deseo.
          .bg-marron-oscuro.p-4(data-aos='fade-up')
            span La justicia surge cuando cada grupo cumple su función sin interferir en la de los demás, manteniendo así la armonía social. Para Platón, el gobierno ideal es una aristocracia dirigida por filósofos, debido a que solo ellos poseen el conocimiento del bien y la capacidad para gobernar sin dejarse llevar por intereses personales.

      .row.mb-4
        .col-12.col-xl-8
          .bg-verde-claro.p-4(data-aos='fade-up')
            span Por su parte, Aristóteles define el Estado como una comunidad natural que surge para satisfacer las necesidades humanas y alcanzar el bien común. Considera que el ser humano es un animal político, pues solo en sociedad puede desarrollar plenamente su s capacidades.
          .bg-verde-oscuro.p-4(data-aos='fade-up')
            span.text-white El Estado es la evolución de comunidades más pequeñas como la familia y la aldea, pero es la única que garantiza una vida autosuficiente y orientada a la virtud. Para Aristóteles, el fin último del Estado, no es solo la supervivencia, sino la promoción de una vida buena y justa para sus ciudadanos.
        .col-4.d-none.d-xl-block
          img(src='@/assets/curso/unidad/img-33.png', alt='Texto que describa la imagen')

      p.mb-4 En la filosofía moderna, el pensamiento contractualista de Thomas Hobbes, John Locke y Jean-Jacques Rousseau, tuvo un impacto significativo en la concepción del Estado.
      p.mb-4 Para <b>Hobbes (2017)</b>, el Estado es una institución creada por los seres humanos para garantizar la paz y el orden social, evitando el caos del estado de naturaleza. Sostiene que, en ausencia de un poder soberano, los individuos vivirían en un estado de guerra constante, donde la vida sería "solitaria, pobre, desagradable, brutal y corta".

      .row.mb-4
        .col-12.col-lg-5.col-xl-4.d-none.d-lg-block(data-aos="zoom-in")
          img(src='@/assets/curso/unidad/img-34.png', alt='Texto que describa la imagen')
        .col-12.col-lg-7.col-xl-8
          AcordionA(tipo="b")
            .div(titulo="Primer tema")
              p Hobbes describe el estado de naturaleza como una condición en la que los seres humanos, movidos por su deseo de supervivencia y poder, viven en una lucha de "todos contra todos". Para salir de esta situación caótica, los individuos acuerdan ceder parte de su libertad a un soberano mediante un contrato social, a cambio de seguridad y orden.
            .div(titulo="Segundo tema")
              p El Estado, según Hobbes, debe tener un poder absoluto para garantizar la estabilidad. Este poder puede estar en manos de un monarca o de una asamblea, pero debe ser indivisible y soberano, es decir, no debe estar limitado por otras instituciones. Solo así puede imponer leyes y evitar el regreso al estado de naturaleza.
            .div(titulo="Tercer tema")
              p Para Hobbes, la responsabilidad del Estado es garantizar la paz y la protección de los ciudadanos, mientras que la responsabilidad de los individuos es obedecer al soberano. La desobediencia solo se justifica si el Estado deja de cumplir su función principal: garantizar la vida de sus súbditos.

      .d-flex.align-items-start.bg-verde-oscuro.p-4(data-aos='fade-up').d-flex.align-items-center.flex-column.flex-md-row.mb-4
        img.me-3(style='width: 110px' src='@/assets/curso/unidad/img-35.png', alt='Texto descriptivo de la imagen')
        .my-auto
          p.pe-xl-3.mb-0.text-white Para <b>Locke (2006)</b>, por su parte, el Estado es una institución creada para garantizar los derechos naturales de los individuos, especialmente la vida, la libertad y la propiedad. A diferencia de Hobbes, quien concebía el Estado como un poder absoluto necesario para evitar el caos, Locke lo ve como un ente con poder limitado y sujeto al consentimiento de los ciudadanos. El 

      .row.position-relative.mb-5.py-4.bg-fondo-slider.bg-full-width
        div.px-4.px-md-5.py-md-3
          SlyderA(tipo="b").bg-white
            .row.p-4.px-md-5.py-lg-5.justify-content-between
              .col-md-12.col-lg-7.mb-4.mb-md-0.d-flex.flex-column.justify-content-center
                p.text-bold Primer tema
                p Describe el estado de naturaleza como una condición en la que los seres humanos viven en relativa paz y libertad, guiados por la ley natural. Sin embargo, la ausencia de un poder común para resolver disputas genera inseguridad y conflictos. Para proteger sus derechos, las personas acuerdan formar un gobierno mediante un contrato social, delegando ciertos poderes al Estado, pero sin renunciar a su soberanía individual.
              .d-none.d-lg-block.col-md-6.col-lg-5(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/unidad/img-36.png', alt='Texto que describa la imagen')
            .row.p-4.px-md-5.py-lg-5.justify-content-between
              .col-md-12.col-lg-7.mb-4.mb-md-0.d-flex.flex-column.justify-content-center
                p.text-bold Segundo tema
                p El principal propósito del Estado es proteger los derechos naturales de los ciudadanos. Locke sostiene que el poder del Estado debe ser limitado y dividido en distintas ramas para evitar abusos. Así, propone un gobierno basado en la separación de poderes, en el que la autoridad legislativa es suprema porque dicta las leyes que garantizan la libertad y la propiedad.
              .d-none.d-lg-block.col-md-6.col-lg-5(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/unidad/img-37.png', alt='Texto que describa la imagen')
            .row.p-4.px-md-5.py-lg-5.justify-content-between
              .col-md-12.col-lg-7.mb-4.mb-md-0.d-flex.flex-column.justify-content-center
                p.text-bold Tercer tema
                p Locke introduce la idea de que, si el Estado no cumple con su función de proteger los derechos naturales o actúa de manera despótica, los ciudadanos tienen el Derecho a la rebelión y pueden cambiar o derrocar al gobierno. Esto establece la base filosófica para la democracia liberal y el constitucionalismo moderno.
              .d-none.d-lg-block.col-md-6.col-lg-5(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/unidad/img-38.png', alt='Texto que describa la imagen')

      p.mb-4 Para <b>Rousseau</b>, el Estado es una institución creada por los ciudadanos mediante un contrato social, con el propósito de garantizar la libertad y la igualdad dentro de la comunidad. En su obra “El contrato social” Rousseau (2017), plantea una visión del Estado distinta a la de Hobbes y Locke, dado que no lo ve solo como un mecanismo de protección, sino como una expresión de la voluntad general del pueblo.

      .row.mb-4
        .col-12.col-lg-5.col-xl-4.d-none.d-lg-block(data-aos="zoom-in")
          img(src='@/assets/curso/unidad/img-39.png', alt='Texto que describa la imagen')
        .col-12.col-lg-7.col-xl-8
          AcordionA(tipo="b")
            .div(titulo="Primer tema")
              p Rousseau describe el estado de naturaleza como una etapa en la que los seres humanos vivían libres e iguales, sin corrupción ni desigualdades sociales. Sin embargo, con el surgimiento de la propiedad privada y la sociedad organizada, aparecieron la desigualdad, la competencia y la opresión. Para recuperar la libertad perdida, los individuos acuerdan formar un contrato social, pero no para someterse a un soberano, sino para constituir una comunidad política basada en la voluntad general.
            .div(titulo="Segundo tema")
              p Para Rousseau, el verdadero soberano no es un rey ni una élite gobernante, sino el pueblo en su conjunto, que actúa a través de la voluntad general. Esta voluntad general representa el bien común y debe prevalecer sobre los intereses particulares. Así, el Estado no solo protege la seguridad, sino que también busca la justicia y la igualdad.
            .div(titulo="Tercer tema")
              p Sostiene que los ciudadanos no pierden su libertad al formar un Estado, sino que la ejercen de manera colectiva. La soberanía no se delega completamente en un gobernante, sino que se mantiene en el pueblo, quien debe participar activamente en la toma de decisiones.
            .div(titulo="Cuarto tema")
              p Rechaza la desigualdad extrema y propone un Estado que garantice la justicia social, regulando la propiedad y evitando que unos pocos acumulen poder a costa de los demás. Aunque acepta la necesidad de leyes y autoridades, cree que estas deben reflejar la voluntad general y no los intereses de una minoría.


      #t_2_2.titulo-segundo(data-aos="flip-up")
        div.d-flex
          span.me-3 2.2
          h2 El Estado en el Derecho

      p.mb-4 Desde la perspectiva jurídica, el Estado es la entidad que establece y aplica el derecho dentro de una comunidad política. Se define a partir de tres elementos esenciales: territorio, población y poder soberano. La existencia del Estado implica la creación y aplicación de un sistema normativo que regule las relaciones entre los ciudadanos y las instituciones.

      p.mb-4 En términos jurídicos, el Estado se organiza en distintos modelos de gobierno y sistemas legales. Entre los más comunes se encuentran:

      TabsC.mb-4
        .tabs-content.border.px-4.p-md-5.py-3(titulo='Estados unitarios y federales', :icon="require('@/assets/curso/unidad/img-40.svg')")
          .row
            .d-none.d-lg-block.col-md-12.col-lg-5(data-aos='zoom-in')
              figure
                img(src='@/assets/curso/unidad/img-41.png', alt='Descripción de la imagen')
            .col-md-12.col-lg-7.mb-4.mb-md-0
              h4(data-aos='fade-up') Estados unitarios y federales
              p(data-aos='fade-up') En un Estado unitario, como Francia, el poder se centraliza en el gobierno nacional, mientras que en un Estado federal, como Estados Unidos o Alemania, existen distintos niveles de gobierno con autonomía relativa.
        .tabs-content.border.px-4.p-md-5.py-3(titulo='Estados de Derecho', :icon="require('@/assets/curso/unidad/img-40.svg')")
          .row 
            .d-none.d-lg-block.col-md-12.col-lg-5(data-aos='zoom-in')
              figure
                img(src='@/assets/curso/unidad/img-42.png', alt='Descripción de la imagen')
            .col-md-12.col-lg-7.mb-4.mb-md-0
              h4(data-aos='fade-up') Estados de Derecho 
              p(data-aos='fade-up') Se caracterizan por la primacía de la Ley sobre el poder político. En estos sistemas, las instituciones estatales están sujetas al Derecho y deben respetar los principios constitucionales.
        .tabs-content.border.px-4.p-md-5.py-3(titulo='Estados democráticos, autocráticos y totalitarios', :icon="require('@/assets/curso/unidad/img-40.svg')")
          .row
            .d-none.d-lg-block.col-md-12.col-lg-5(data-aos='zoom-in')
              figure
                img(src='@/assets/curso/unidad/img-43.png', alt='Descripción de la imagen')
            .col-md-12.col-lg-7.mb-4.mb-md-0
              h4(data-aos='fade-up') Estados democráticos, autocráticos y totalitarios
              p(data-aos='fade-up') Los Estados democráticos se basan en la participación ciudadana y el respeto por los derechos fundamentales. En contraste, los regímenes autocráticos y totalitarios concentran el poder en una sola figura o grupo, limitando la participación y las libertades individuales.

      .row.bg-fondo-1.bg-full-width.py-4.mb-4
        div.px-5.pb-md-3

          .row.mb-4
            .col-3.d-none.d-xl-block
              img(src='@/assets/curso/unidad/img-44.png', alt='Texto que describa la imagen')
            .col-12.col-xl-9
              p.mb-4 El Derecho constitucional es la rama jurídica que estudia la estructura y funcionamiento del Estado. Define sus poderes (ejecutivo, legislativo y judicial), la organización de los territorios y los derechos y deberes de los ciudadanos. En este contexto, la soberanía es un principio clave, dado que implica la capacidad del Estado para ejercer su autoridad sin injerencias externas.
              .bg-marron.p-4(data-aos='fade-up')
                span Uno de los aspectos más relevantes del Derecho estatal es la relación entre el Estado y el individuo. A través de normas y regulaciones, el Estado establece derechos fundamentales como la igualdad, la libertad y la propiedad, pero también impone obligaciones como el pago de impuestos y el respeto a las leyes. Esta relación es objeto de constantes debates jurídicos, especialmente en temas como el alcance de la intervención estatal en la economía, la protección de la privacidad y la seguridad ciudadana. 

      #t_2_3.titulo-segundo(data-aos="flip-up")
        div.d-flex
          span.me-3 2.3
          h2 El caso colombiano

      p.mb-4 La organización del Estado colombiano está definida en la Constitución Política de 1991, que lo establece como un Estado social de Derecho, democrático, participativo y pluralista. Se estructura en tres ramas del poder público, organismos de control y otros entes autónomos, con un modelo de descentralización territorial:

      .row.mb-4
        .col-12.col-lg-7.col-xl-8
          AcordionA(tipo="b")
            .div(titulo="Rama Ejecutiva")
              p Encargada de la administración del Estado y la ejecución de las leyes. Está conformada por:<br><br>●	<b>Presidente de la República</b>. Jefe de Estado, Jefe de Gobierno y Suprema Autoridad Administrativa. Su período es de cuatro años sin posibilidad de reelección.<br>●	<b>Vicepresidente</b>. Reemplaza al presidente en caso de ausencia y cumple funciones asignadas.<br>●	<b>Ministros y directores de departamentos administrativos</b>. Encargados de dirigir las políticas de cada sector.<br>●	<b>Gobernadores y alcaldes</b>. Representan al Ejecutivo en los niveles departamental y municipal.

            .div(titulo="Rama Legislativa")
              p Responsable de crear, modificar y derogar leyes. Se compone del <b>Congreso de la República</b>, que tiene dos cámaras:<br><br>●	<b>Senado de la República</b>. Representa el ámbito nacional, con 108 senadores elegidos por voto popular.<br><br>●	<b>Cámara de Representantes</b>. Representa a los departamentos y distritos, con 188 representantes.

            .div(titulo="Rama Judicial")
              p Administra justicia de manera autónoma e independiente. Está conformada por varias jurisdicciones y altas cortes:<br><br>●	<b>Corte Constitucional</b>. Vigila la supremacía de la Constitución.<br>●	Corte Suprema de Justicia. Máximo tribunal de la jurisdicción ordinaria.<br>●	Consejo de Estado. Máximo tribunal de lo contencioso-administrativo.<br>●	Consejo Superior de la Judicatura. Administra la justicia y la carrera judicial.<br>●	Fiscalía General de la Nación. Investiga y acusa en procesos penales.

        .col-12.col-lg-5.col-xl-4.d-none.d-lg-block(data-aos="zoom-in")
          img(src='@/assets/curso/unidad/img-45.png', alt='Texto que describa la imagen')

      #t_2_4.titulo-segundo(data-aos="flip-up")
        div.d-flex
          span.me-3 2.4
          h2 Interrelación entre filosofía y Derecho, en la concepción del Estado

      p.mb-4 Aunque la filosofía y el Derecho abordan el concepto de Estado desde perspectivas diferentes, ambos enfoques se complementan. La filosofía proporciona las bases teóricas sobre la legitimidad, la justicia y la función del Estado, mientras que el Derecho traduce estos principios en normas concretas que regulan su estructura y funcionamiento.

      .row.mb-4
        .col-4.d-none.d-xl-block
          img(src='@/assets/curso/unidad/img-46.png', alt='Texto que describa la imagen')
        .col-12.col-xl-8
          .d-flex.align-items-start.bg-azul-claro.p-4(data-aos='fade-up').d-flex.align-items-center.flex-column.flex-md-row.mb-4
            img.me-3(style='width: 90px' src='@/assets/curso/unidad/img-47.svg', alt='Texto descriptivo de la imagen')
            .my-auto
              p.pe-xl-3.mb-0 La <b>teoría del contrato social</b>, desarrollada por Hobbes, Locke y Rousseau, influyó en la redacción de constituciones modernas y en la consolidación de los Estados democráticos. De igual forma, el principio de separación de poderes, formulado por Montesquieu, es un pilar fundamental en muchos sistemas jurídicos actuales.

          span Asimismo, las teorías marxistas sobre el Estado, han influido en la regulación de la propiedad y en la creación de modelos de bienestar social en distintos países. En la actualidad, el debate entre la intervención del Estado y la libertad individual sigue siendo una cuestión clave en la filosofía política y en el Derecho constitucional.

      .row.mb-5
        .col-12.col-xl-8
          .bg-verde-claro.p-4(data-aos='fade-up')
            span El Estado es una institución fundamental para la organización de la sociedad, pues garantiza la estabilidad, el orden y la protección de los derechos individuales y colectivos. Desde la filosofía, se han desarrollado diversas teorías que buscan explicar su origen, legitimidad y funciones, mientras que el Derecho establece los mecanismos que regulan su estructura y su relación con los ciudadanos. 
          .bg-verde-oscuro.p-4(data-aos='fade-up')
            span.text-white A lo largo de la historia, el concepto de Estado ha evolucionado, adaptándose a diferentes contextos políticos y sociales. En la actualidad, el debate sobre el rol del Estado sigue vigente en cuestiones como la globalización, los derechos humanos y el avance de la tecnología. Tanto la filosofía como el Derecho, continúan explorando nuevas formas de entender y organizar el poder estatal, con el objetivo de construir sociedades más justas y equitativas.
        .col-4.d-none.d-xl-block
          img(src='@/assets/curso/unidad/img-49.png', alt='Texto que describa la imagen')

      .bg-full-width.border-top-9-azul
        .px-5.pt-5.pb-0
          h2 Material complementario
          .row
            .col-12.col-md-6.col-lg-8
              p.d-flex.my-4
                img.me-3.mb-auto.mt-1(src='@/assets/componentes/book.svg' :style="{'max-width':'16px'}")
                a.text-small.text-primary(target="_blank", href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/75952") Russo Foresto, J. J. (2016). Democratización y competición política: conceptos y casos. Plaza y Valdés (México).
              p.d-flex.my-4
                img.me-3.mb-auto.mt-1(src='@/assets/componentes/youtube-icon.svg' :style="{'max-width':'16px'}")
                a.text-small.text-primary(target="_blank", href="https://www.youtube.com/watch?v=R4c18dwFw2I&t=2s") [Vídeo] Magic Markers. (2021). Qué es el estado y cuál es tu papel
            .col-12.col-md-6.col-lg-3
              figure
                img(src='@/assets/componentes/material-complementario.svg' alt='Imagen de material complementario')

      p



  </template>

<script>
export default {
  name: 'Tema2',
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
