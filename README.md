# 📊 Plataforma Educativa de Estadística 1

### Universidad Mariano Gálvez de Guatemala (UMG) | Licenciatura en Administración de Empresas

Bienvenido a la **Plataforma Educativa de Estadística 1**, un portal web estático e interactivo diseñado para apoyar el aprendizaje práctico y la toma de decisiones empresariales.

---

## 👨‍🏫 Autor y Creador

- **Ruldin Ayala**
- **Curso:** Estadística 1
- **Carrera:** Licenciatura en Administración de Empresas
- **Institución:** Universidad Mariano Gálvez de Guatemala (UMG)

---

## 🎯 Propósito del Proyecto

El objetivo principal de esta plataforma es proporcionar a los estudiantes de Administración de Empresas herramientas visuales, interactivas y aplicadas al contexto empresarial guatemalteco y regional.

A diferencia del enfoque tradicional basado en la memorización de fórmulas, este proyecto promueve la **interpretación gerencial y ejecutiva de los datos**:

- **Comprensión Práctica:** Explicaciones paso a paso de los conceptos clave del curso.
- **Laboratorios y Simuladores:** Herramientas dinámicas para la recolección, muestreo y tabulación de datos en tiempo real.
- **Casos de Estudio Locales:** Ejercicios contextualizados en el mercado guatemalteco (ej. La Terminal Z.4, Café en Xela, Calzado en Pastores, Cemaco, San Martín).
- **Indicadores de Decisión (KPIs):** Generación automática de diagnósticos ejecutivos, cuotas de mercado y análisis de brechas de liderazgo.

---

## 🚀 Contenido y Módulos del Proyecto

1. 🎓 **`index.html` (Portal Académico General UMG):**
   - Landing page principal con acceso a **Estadística I** e **Informática I**.
   - Cajas centrales interactivas, mensajes de optimismo y liderazgo gerencial para Guatemala, e identidad institucional con el logo de la Universidad Mariano Gálvez.

2. 📊 **`Estadistica1/index_estadistica.html` (Dashboard de Estadística I):**
   - Acceso rápido a simuladores por semana.
   - Barra de acceso directo con herramientas activas (Clasificador, Business Lab, Tabulador, Pareto, Sturges, Parcial 1 y Estadígrafos).
   - **Centro de Configuración de API OpenRouter para el Alumno:** Panel interactivo y modal seguro para que cada estudiante gestione su propia API Key almacenada localmente en su navegador (`localStorage`), con el modelo por defecto `inclusionai/ling-3.0-flash-fin:free`, selector de modelos, prueba de conexión en vivo con telemetría de latencia (ms) y purga de seguridad para computadoras de laboratorios compartidos.

3. 📊 **`Estadistica1/sem2_clasifica_variables.html` (Clasificación de Variables):**
   - Entrenamiento interactivo para clasificar variables cualitativas, cuantitativas, nominales, ordinales, de intervalo y de razón.

4. 🎲 **`Estadistica1/sem2_estadistica_business_lab.html` (Simulador de Muestreo - Caso La Terminal Z.4):**
   - Laboratorio de Muestreo Probabilístico utilizando Método Físico, Tabla de Números Aleatorios y Hojas Electrónicas.

5. 📈 **`Estadistica1/sem3.html` (Tablas de Frecuencia y Análisis de Mercado):**
   - Tabulador universal con soporte para Escalas Likert, análisis del caso Café Xela, visualización de cuota de mercado en barras y tarjetas de KPIs gerenciales.

6. 📉 **`Estadistica1/sem4_graficos_pareto.html` (Gráficos Cualitativos y Pareto 80/20):**
   - Construcción de gráfico de barras, pastel y diagrama de Pareto con interpretación gerencial.
   - Hoja de trabajo aplicada a toma de decisiones administrativas.
   - Exportación de informe en PDF con gráfico y conclusiones.

7. 📐 **`Estadistica1/sem5_regla_sturges.html` (Regla de Sturges y Distribución de Frecuencias):**
   - Módulo completo con conceptos, guía de 5 pasos y caso tutorial de **Lácteos El Oriental S.A.**
   - Laboratorio para pegar datasets y calcular automáticamente: `n`, `k`, `R`, `A`, tabla de frecuencias y clase modal.
   - Gráficos: histograma, polígono y ojiva.
   - Selector de tipo de dato (normal, moneda, unidades, tiempo en horas `hrs`, minutos `min`, segundos `s`, decimales, litros, metros).
   - Hoja de trabajo con campos de análisis y exportación PDF.
   - Campo **Contexto** en laboratorio, incluido en el PDF para documentar el enunciado del ejercicio.

8. 📝 **`Estadistica1/sem6_resolucion_parcial1.html` (Resolución del Primer Examen Parcial):**
   - Solucionario y retroalimentación pedagógica interactiva del Primer Examen Parcial (Variante B, 15 Pts).
   - Explicación analítica paso a paso de las 4 series: Clasificación de variables corporativas, Muestreo probabilístico en Escuintla, Tabulación & Diagrama de Pareto 80/20 de calzado y Regla de Sturges en tiempos de transporte.
   - Tooltips explicativos en fórmulas, números y encabezados que se despliegan al pasar el puntero.
   - Tablas interactivas con cálculo de frecuencias relativas, porcentajes y acumulados.
   - Cuestionario de autoevaluación rápida con retroalimentación instantánea.

9. 📊 **`Estadistica1/sem7_frecuencia_pareto.html` (Semana 7: Polígonos de Frecuencia, Ojivas e Histogramas Comparativos):**
   - Tutorial integral y paso a paso para construir e interpretar gráficos cuantitativos continuos:
     - **Histograma de frecuencias:** Identificación de modas, concentración y sesgo.
     - **Polígono de frecuencias:** Conexión de marcas de clase $(X_i)$ y anclaje en extremos a frecuencia cero $(X_1 - A, 0)$ y $(X_k + A, 0)$.
     - **Ojivas Acumuladas:** Ojiva "Menor que" (ascendente $F_a$) y Ojiva "Mayor que" (descendente), cálculo visual de la mediana ($Me$) e interpolación de percentiles.
     - **Superposición Mixta y Comparativa:** Superposición de Histograma + Polígono de una misma serie, y superposición de Polígonos u Ojivas entre dos series independientes (**Serie A vs Serie B**) para análisis de turnos, sucursales y periodos, utilizando la muestra total ($N = n_A + n_B$) y el rango global para estandarizar los intervalos y marcas de clase de ambas series.
     - **Flexibilidad en Selección de Clases ($k$):** Selector de cálculo de clases entre la **Regla de Sturges (automática por defecto con $N$ total en comparativas)** y **Definición Manual/Libre ($k$ personalizado)**, actualizando dinámicamente el desglose paso a paso (Paso 2 y Paso 4) y la amplitud de intervalos $A$.
     - **Caso Textil San Lucas S.A.:** Comparativa de turnos matutino vs vespertino en confección de exportación.
     - **Laboratorio Interactivo & Exportación PDF:** Ingreso de datasets simples o comparativos, selector de tipo de dato (Q, u, L, m, decimales) y generación de informe ejecutivo con gráfico en alta resolución y conclusiones gerenciales con jsPDF.

10. 📐 **`Estadistica1/sem8_medidas_tendencia_central.html` (Semana 8: Medidas de Tendencia Central — Media, Mediana y Moda):**
    - Módulo de supervivencia gerencial basado en la guía analítica:
      - **Fundamentos:** Parámetro $(\mu)$ vs. Estadístico $(\bar{x})$, la Media como centro de gravedad y vulnerabilidad ante outliers (*elefantes en la balanza*), la Mediana como topografía inmune a extremos (reina de salarios y tiempos de espera), y la Moda en retail e inventarios con detección de mercados fracturados (bimodalidad).
      - **El Gran Duelo Gerencial:** Caso del Puesto de Garnachas en la Feria Patronal (análisis de por qué la mediana salva la compra diaria de insumos perecederos y la media demuestra la capacidad ante el banco para créditos).
      - **Laboratorio Interactivo de Decisiones:** Ingreso libre de dataset, 6 casos predefinidos (Garnachas, Salarios directivos, Clínica privada, Cafetería UMG, Asesores comerciales y Boutique), máscaras de datos (Q, u, min, hrs, s, ★, decimales, L, m), botón de limpiar, cálculo automático de KPIs con diagnóstico de sesgo y recomendación gerencial.
      - **Selector Interactivo de Gráficos:** Visualización dinámica en 3 modalidades: **Histograma de Frecuencia** (columnas con destaque de estadígrafos), **Polígono de Frecuencias** (línea continua anclada a cero en marcas de clase $X_i$) y **Ojiva Acumulada** ($F_a$).
      - **Laboratorio IA Integrado (Next.js en iframe):** Acceso directo y visor integrado a la aplicación web interactiva (`https://temporary-instant-apogee-hran4bx.vercel.app/`) para evaluar el ciclo de 5 pasos: Contexto, Datos, Estadística, System Prompt y Decisión del Agente de IA.
      - **Tabla de Frecuencias y Exportación PDF:** Generación de informe ejecutivo A4 con captura del gráfico activo, tabla tabulada y respuestas del estudiante con jsPDF.

11. 🎮 **`Estadistica1/sem8_ejercicio.html` (Semana 8: CentralTrend — Casos Prácticos y Gamificación Empresarial):**
    - Simulador interactivo gamificado con diseño oscuro ejecutivo (`#0b0f19`), encabezado institucional UMG y 10 casos de estudio de mercado guatemalteco:
      - **Casos Empresariales:** Ventas de smoothies en campus universitario (distribución simétrica), views de reels virales en Antigua GT (outliers y sesgo positivo), redes sociales predilectas en mercadeo estudiantil (moda en datos cualitativos), tallas de camisetas típicas en Xela (bimodalidad y segmentación), promedio ponderado de calificaciones universitarias, tiempos de entrega motorizada en Calzada Roosevelt (impacto de bloqueos viales en la media vs mediana), sueldos en Call Center bilingüe de Zona 10 (dilema ético por sueldo del director regional), medios de cobro preferidos en La Terminal Z.4 y Mercado Central (Efectivo vs fintech/QR), ticket promedio de cafetería de café de altura en Cobán, y costo medio ponderado de acopio de quintales de café en Sacatepéquez.
      - **Evaluación y Guía Formativa con IA (OpenRouter):** Botón `Evaluación IA` al lado de `Siguiente caso` que envía el enunciado, las respuestas numéricas y el análisis gerencial del alumno a la API de OpenRouter (`bias-lab-settings` / `openrouter_settings`). Cuenta con un **enfoque pedagógico de Mentor Amigo** (tratamiento directo y cálido de "tú", proactivo y alentador, sin calificativos punitivos como "incorrecto" y comenzando directamente con el contenido sin saludos redundantes), **panel de reevaluación colapsable tipo acordeón** para probar puntualmente otros modelos (Gemini 2.0 Flash, Llama 3.3 70B, DeepSeek R1, Qwen 2.5, GPT-4o Mini) sin alterar la configuración principal guardada en el navegador, sanitización de etiquetas `<think>` y 3 apartados claros de consejo gerencial.
      - **Gamificación y Retroalimentación:** Sistema de puntajes (`pts`), verificación inmediata de cálculos (Media, Mediana, Moda y Media Ponderada), pistas contextuales por caso, cuadrícula dinámica de 10 medallas de honor (oro y plata), y contador de palabras para el análisis gerencial crítico.
      - **Reporte Oficial en PDF con IA:** Generación y descarga directa con jsPDF del informe ejecutivo de resultados con identidad UMG, incluyendo el análisis original del estudiante, la retroalimentación de la IA y el criterio técnico docente oficial bajo la firma de cátedra del **Prof. Ruldin Ayala**.

12. 📊 **`Estadistica1/sem9_agrupados.html` (Semana 9: Estadígrafos de Tendencia Central para Datos Agrupados & Medidas de Posición):**
    - Módulo integral de cálculo, interpretación gerencial y hoja de trabajo aplicada:
      - **Selector Visual de 4 Casos de Negocio Dinámicos:** Selector destacado en cuadrícula con datos y contextos de [Estadistica1/contexto_sem9_agrupado.md](file:///d:/U/2026/Semestre2/Estadistica/WebAppEstadistica/Estadistica1/contexto_sem9_agrupado.md), actualización dinámica integral del banner de Briefing Ejecutivo (categoría, ubicación, tamaño de muestra `briefing-badge-n` según el caso y las 3 fichas de indicadores gerenciales contextualizadas), conmutación de estado a `[Activado]`, y limpieza automática de cálculos previos, conclusiones y dictámenes de IA (`clearStudentWork`) al cambiar de caso o pulsar "Cargar enunciado a mi Ficha":
        1. *Caso 1: Cooperativa "El Ahorro Pinulteco"* (San José Pinula, 50 microcréditos, Q, x̄, Q3 y P90).
        2. *Caso 2: Call Center & BPO Zona 10* (Zona 10 Ciudad de Guatemala, 56 colaboradores, Q, x̄ vs Me, D2 y P85).
        3. *Caso 3: Farmacia y Autoservicio Calzada Roosevelt* (Mixco, 50 despachos express, min, x̄, Q3 y P90).
        4. *Caso 4: Selección de Talento UMG* (Campus Central, 30 aspirantes evaluados, pts, x̄ bimodal, Q1 y P70).
      - **Navegación Guiada Paso a Paso:** Botones de navegación *Anterior* y *Siguiente* en cada una de las pestañas (Paso 0 a Paso 7) para guiar al estudiante de forma estructurada.
      - **Tutor Formativo IA (Mentor Amigo):** Botón `Retroalimentación IA` en cada paso para evaluar las conclusiones de pensamiento crítico del alumno mediante OpenRouter API (`inclusionai/ling-3.0-flash-fin:free`), con tono empático, formativo y constructivo de "tú", sin saludos ceremoniales iniciales y con modal de configuración seguro en `localStorage`.
      - **Cálculo de Estadígrafos Agrupados:** Media aritmética ponderada por frecuencias ($\bar{x} = \frac{\sum f_i \cdot x_i}{n}$), Mediana ($Me$) utilizando la columna de frecuencia acumulada $F_i$ como GPS ordinal e interpolación de clase, y Moda ($Mo$) a través del diferencial de frecuencias adyacentes ($\Delta_1$ y $\Delta_2$).
      - **Fórmula Madre de Medidas de Posición:** Interpolación unificada para Cuartiles ($Q_k$), Deciles ($D_k$) y Percentiles ($P_k$) con cálculo de posición ordinal y clase de trabajo.
      - **Soporte de Datasets:** Entrada por tabla agrupada manual/CSV o datos crudos que se agrupan automáticamente, selector de unidades de medida (Q, US$, pts, min, h, años, kg, cm, und) y carga rápida de casos.
      - **Visualización Gráfica:** Histograma interactivo con líneas verticales de estadígrafos $(\bar{x}, Me, Mo)$ y Ojiva porcentual acumulada (%Ac).
      - **Simulador de Políticas:** Deslizadores en tiempo real para evaluar el impacto de requisitos de crédito en la cartera de clientes y gráfico circular de composición.
      - **Diseño Responsive & Modal Móvil:** Barra lateral con `.sticky-source` optimizada para computadoras y estática en pantallas móviles (evitando solapamientos), botón flotante `Ver Tabla` y ventana modal para consultar la tabla de frecuencias sin perder la posición en los ejercicios.
      - **Modo Examen & Generación PDF Oficial:** Ficha del estudiante, autoevaluación con soluciones ocultas y exportación de hoja de trabajo oficial a PDF con jsPDF, imprimiendo tanto las respuestas y análisis del estudiante como los dictámenes pedagógicos del Mentor IA para cada paso y para las conclusiones generales.

13. 📊 **`Estadistica1/GoogleSheetSim.html` (Simulador Google Sheets & Slides):**
    - Simulador interactivo de Diagrama de Pareto enfocado en casos empresariales y presentación de informes.

14. 💻 **`informatica1/index_informatica.html` (Portal de Informática I):**
    - Dashboard principal para el curso de **Informática I**, con diseño ejecutivo cian/azul, accesos directos por semana y mapa curricular.

15. 🤖 **`informatica1/Guia_IA_Administradores.html` (Semana 7: IA para la Gestión Empresarial 2026):**
    - Guía interactiva integral sobre Inteligencia Artificial aplicada a la administración:
      - **Glosario & Fundamentos:** Tokens, embeddings, temperatura, KV cache.
      - **Arquitectura Eficiente:** Modelos densos vs. MoE (Mezcla de Expertos) y compresión MLA (-90% memoria).
      - **Modelos de Frontera:** Comparativa entre ecosistemas cerrados, pesos abiertos y modelos asiáticos (DeepSeek, Qwen, Kimi).
      - **Calculadora de Costos & ROI:** Proyección financiera de consumo de tokens (Input vs. Output) y margen de seguridad.
      - **Agentes ReAct:** Simulador del ciclo cognitivo de automatización (Pensamiento, Acción, Observación, Respuesta).
      - **Gobernanza:** Mitigación de Shadow AI, supervisión humana y marcos normativos.

16. 📦 **`vendor/` (Librerías locales):**
    - `chart.umd.min.js`
    - `chartjs-plugin-datalabels.min.js`
    - Se usan copias locales para reducir dependencia de CDN externo en módulos de gráficos.

---

## 🛠️ Tecnologías Utilizadas

- **HTML5 & CSS3 / Tailwind CSS (vía CDN):** Diseño responsive, limpio y moderno con estética ejecutiva.
- **JavaScript (Vanilla / ES6+):** Lógica de cálculo estadístico, simulación de datos e interacciones ejecutadas 100% en el navegador del cliente.
- **Gráficos:** Chart.js + plugin datalabels (en `vendor/` para módulos que requieren disponibilidad local).
- **PDF:** jsPDF para exportar reportes de laboratorio.
- **Iconos y Tipografía:** FontAwesome y Google Fonts (`Inter` & `Space Grotesk`).
- **Arquitectura:** 100% Sitio Estático (Sin backend ni servidores activos).

---

## ⚙️ Uso e Instalación

Al ser un sitio web 100% estático, no requiere instalación de dependencias ni servidores:

1. Clona o descarga este repositorio:
   ```bash
   git clone https://github.com/ruldin/estadistica1.git
   ```
2. Abre el archivo `index.html` directamente en cualquier navegador web moderno (Chrome, Edge, Firefox, Safari).

---

## 📌 Estado del Proyecto y Pruebas

- **Repositorio oficial:** [https://github.com/ruldin/estadistica1](https://github.com/ruldin/estadistica1)
- **Estado actual:** Módulos habilitados hasta **Semana 9**.
- **Cobertura funcional:** Simuladores interactivos, KPIs gerenciales, gráficos, laboratorio de IA y exportación PDF en módulos aplicados.
- **Enfoque vigente:** Aprendizaje estadístico orientado a decisiones empresariales (no memorización aislada de fórmulas).

---

© 2026 **Ruldin Ayala** - Universidad Mariano Gálvez de Guatemala.
