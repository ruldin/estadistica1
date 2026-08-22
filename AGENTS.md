# AGENTS.md - Contexto, Arquitectura y Directrices del Proyecto

Memoria persistente con Engram (OBLIGATORIO)
Engram es la memoria del proyecto (MCP `user-engram`). El usuario no debe tener que recordarte el contexto en cada sesión: tú eres responsable de leerla al inicio y escribirla durante el trabajo. No esperes a que te lo pidan.

Al iniciar cada sesión (primera acción, sin excepción)
Ejecuta en este orden antes de responder o modificar código:

1. `engram_stats` — confirmar estado del vault (memorias, entidades)
2. `engram_briefing` — briefing estructurado de sesión (compromisos, actividad reciente, alertas)
3. `engram_recall` con el tema o tarea actual — buscar memorias relevantes (ej. `"Semana 4 gráficos Pareto"`)
4. `engram_alerts` (opcional) — pendientes, seguimientos vencidos o contradicciones

Si el vault está vacío o casi vacío, bootstrap con `engram_remember` usando el contenido de este `AGENTS.md` y el estado actual del repo.

Durante el trabajo (después de CADA cambio relevante)
Llama a `engram_remember` de forma proactiva — no al final de la sesión, sino inmediatamente tras:

| Evento                                   | Qué guardar                                   |
| ---------------------------------------- | --------------------------------------------- |
| Decisión de diseño o arquitectura        | Qué se decidió, por qué, archivos afectados   |
| Bug encontrado o corregido               | Síntoma, causa raíz, fix aplicado             |
| Convención o patrón nuevo                | Regla, ejemplo de uso, archivos de referencia |
| Cambio en API, schema o flujo de negocio | Comportamiento anterior vs nuevo              |
| Commit o deploy relevante                | Rama, hash, resumen de cambios                |

Formato recomendado para `engram_remember`:

- `content`: afirmación clara y autocontenida (qué, por qué, dónde, aprendizaje)
- `type`: `semantic` (hechos), `episodic` (eventos), `procedural` (cómo hacer algo)
- `entities`: ej. `["WebAppEstadistica", "Ruldin Ayala", "UMG"]`
- `topics`: ej. `["Semana4", "graficos-pareto", "chartjs"]`
- `salience`: 0.7–1.0 para decisiones arquitectónicas; 0.5 para detalles menores

Herramientas complementarias:

- `engram_ask` — cuando necesites una respuesta sintetizada, no una lista de memorias
- `engram_surface` — surfacing proactivo según contexto actual
- `engram_connect` — relacionar memorias (`supersedes`, `contradicts`, `elaborates`, etc.)
- `engram_audit` — contrastar `AGENTS.md` u otro doc externo contra el vault

Al finalizar la sesión o tarea

- `engram_checkpoint` — resumen de lo logrado (goal, accomplished, learned, next steps) antes de compactación o cierre
- Actualizar `AGENTS.md` si hubo cambios importantes en código, APIs o convenciones
- Actualizar README.md con las nuevas funcionalidades y páginas que tiene el sitio

Post-compactación (contexto truncado)
Si el contexto fue compactado, ejecuta inmediatamente antes de continuar:

1. `engram_stats`
2. `engram_briefing`
3. `engram_recall` con la tarea actual

Regla de oro
Si aprendiste algo que te ayudaría en una sesión futura, guárdalo en Engram ahora. Si el usuario tuvo que explicártelo dos veces, fallaste en persistir la memoria.

Actualizaciones de AGENTS.md
Cada actualización importante en el código debe reflejarse también en este archivo con la información relevante del proyecto.

## 📌 Contexto General del Proyecto

Este proyecto es una **plataforma educativa estática de apoyo docente** desarrollada por el profesor **Ruldin Ayala** para el curso de **Estadística 1** de la carrera de **Administración de Empresas** en la **Universidad Mariano Gálvez de Guatemala (UMG)**.

El objetivo principal es brindar a los estudiantes:

- **Tutoriales y Guías Interactivas:** Explicaciones paso a paso de los capítulos del curso con un enfoque práctico y aplicado a la toma de decisiones empresariales.
- **Laboratorios y Simuladores Estadísticos:** Herramientas dinámicas e interactivas que permiten ingresar datos, calcular medidas estadísticas (descriptivas, probabilidad, muestreo, etc.), visualizar gráficos de cuota de mercado e interpretar resultados ejecutivos.
- **Reforzamiento Teórico y Práctico:** Dinámicas de autoevaluación, clasificación de variables y resolución de casos de estudio empresariales guatemaltecos (ej. La Terminal Z.4, Café en Xela, Calzado en Pastores, Cemaco, San Martín).

---

## 🛠️ Arquitectura y Restricciones Técnicas

### ⚠️ REGLA DE ORO: Sitio Estrictamente Estático

- **No Backend / No Servers:** No se permite la inclusión de código de servidor (Node.js, Python, PHP, Ruby, Java, etc.) ni bases de datos activas (MySQL, PostgreSQL, MongoDB, etc.).
- **Tecnologías Permitidas:**
  - **HTML5:** Estructura semántica, accesible, limpia y navegable.
  - **CSS3 / TailwindCSS (vía CDN):** Estilos modernos, diseño responsive, glassmorphism, tipografías ejecutivas (`Inter` & `Space Grotesk`) y paletas de colores profesionales.
  - **JavaScript (Vanilla / ES6+):** Toda la lógica de cálculo estadístico, interacción con el usuario, generación de gráficos de barras (SVG / Canvas / HTML dinámico) y manipulación del DOM se ejecuta **100% en el navegador del cliente**.
  - **Librerías por CDN o vendor local:** Preferir CDN para CSS/JS ligeros (TailwindCSS, MathJax, FontAwesome, Lucide Icons, Canvas-Confetti). Para Chart.js en `sem4_graficos_pareto.html` se usan copias locales en `vendor/` (`chart.umd.min.js`, `chartjs-plugin-datalabels.min.js`) para garantizar gráficos sin depender de CDN externo.

---

## 👨‍🎓 Perfil del Estudiante y Enfoque Pedagógico

- **Carrera:** Licenciatura en Administración de Empresas.
- **Nivel de Matemáticas/Estadística:** Introductorio a Intermedio (Estadística 1).
- **Catedrático:** Ruldin Ayala.
- **Enfoque Pedagógico:**
  - Menos memorización de fórmulas abstractas y **más interpretación administrativa de los resultados** (ej. en lugar de solo calcular la media, desviación estándar o frecuencias, explicar qué significan para el control de calidad, la cuota de mercado o la inversión publicitaria).
  - Ejemplos contextualizados en empresas, comercio, finanzas y mercado guatemalteco/regional (Quetzales GTQ, variables empresariales, estudios de mercado).
  - Explicaciones visuales paso a paso (fórmulas formateadas de manera clara, tablas resumidas, procedimientos desglosados y paneles de KPIs).

---

## 🎨 Principios de Diseño e Interfaz (UI/UX)

1. **Estética Profesional y Premium:**
   - Paleta de colores cuidada: Tonos azules ejecutivos, verdes financieros, ambares de advertencia, grises oscuros y acentos vibrantes para estados interactivos.
   - Tipografía moderna e inteligible (`Inter` para texto base y `Space Grotesk` para encabezados).
   - Componentes dinámicos con micro-animaciones (hover, transiciones suaves, feedback instantáneo).
2. **Navegación Intuitiva y Reducción de Ruido (UX First):**
   - La página principal (`index.html`) cuenta con una **Barra de Acceso Directo a Simuladores** en la parte superior y tarjetas de módulos organizadas claramente por semanas para que el alumno no se pierda.
3. **Simuladores, Gráficos e Indicadores Gerenciales:**
   - Formularios limpios para ingreso de datos (brutos o conteo directo).
   - **Participación de Mercado Visual:** Todo módulo de tabulación debe incluir barras proporcionales y coloreadas de cuotas porcentuales ($\%$).
   - **Indicadores de Toma de Decisiones (KPIs):** Todo reporte tabulado debe incluir tarjetas de indicadores ejecutivos:
     - 🏆 _Categoría Dominante (Líder)_
     - 🎯 _Nivel de Concentración de Mercado_ ($>50\%$ vs fragmentado)
     - 📈 _Brecha de Liderazgo_ (Margen $\%$ sobre el 2.º lugar)
     - 💡 _Diagnóstico y Recomendación Ejecutiva Automática_

---

## 📁 Estructura de Archivos del Repositorio

El repositorio se organiza mediante archivos HTML autocontenidos o modularizados estáticamente:

- [index.html](file:///d:/U/2026/Semestre2/Estadistica/WebAppEstadistica/index.html): Portal Académico Principal / Landing General de la UMG con acceso centralizado a los cursos de **Estadística I** e **Informática I**, mensajes de liderazgo y optimismo educativo para futuros administradores guatemaltecos.
- [Estadistica1/index_estadistica.html](file:///d:/U/2026/Semestre2/Estadistica/WebAppEstadistica/Estadistica1/index_estadistica.html): Página principal / Dashboard de Estadística I con accesos directos por semana, logo UMG y navegación.
- [informatica1/index_informatica.html](file:///d:/U/2026/Semestre2/Estadistica/WebAppEstadistica/informatica1/index_informatica.html): Página principal / Dashboard del curso de **Informática I** con diseño visual adaptado (paleta cian/azul/índigo), accesos directos a herramientas de IA, mapa de contenidos y enlace al Módulo de Semana 7.
- [informatica1/Guia_IA_Administradores.html](file:///d:/U/2026/Semestre2/Estadistica/WebAppEstadistica/informatica1/Guia_IA_Administradores.html): Semana 7 de Informática I — Guía interactiva integral de IA para la Gestión Empresarial (2026): glosario técnico interactivo (tokens, embeddings, temperatura, KV Cache), arquitectura MoE vs. densos y reducción de memoria MLA con Chart.js, matriz de modelos de frontera cerrados vs. pesos abiertos y ecosistema chino, calculadora financiera de tokens y proyección de ROI empresarial, simulador del ciclo cognitivo de Agentes ReAct (Pensamiento, Acción, Observación, Respuesta), y marco de gobernanza, riesgos y mitigación de Shadow AI.
- [Estadistica1/sem2_clasifica_variables.html](file:///d:/U/2026/Semestre2/Estadistica/WebAppEstadistica/Estadistica1/sem2_clasifica_variables.html): Módulo interactivo para entrenamiento en clasificación de variables (cualitativas, cuantitativas, nominales, ordinales, de razón/intervalo).
- [Estadistica1/sem2_estadistica_business_lab.html](file:///d:/U/2026/Semestre2/Estadistica/WebAppEstadistica/Estadistica1/sem2_estadistica_business_lab.html): Simulador de Muestreo probabilístico en La Terminal Z.4 (Método Físico, Tabla de Números Aleatorios y Hoja Electrónica).
- [Estadistica1/sem3.html](file:///d:/U/2026/Semestre2/Estadistica/WebAppEstadistica/Estadistica1/sem3.html): Módulo de Tablas de Frecuencia (Escalas Likert, Caso Café Xela y Tabulador Universal con Barras Visuales y KPIs de Decisiones Gerenciales).
- [Estadistica1/sem4_graficos_pareto.html](file:///d:/U/2026/Semestre2/Estadistica/WebAppEstadistica/Estadistica1/sem4_graficos_pareto.html): Semana 4 — Gráficos cualitativos (barras, pastel) y Diagrama de Pareto con regla 80/20, laboratorio interactivo, hoja de trabajo con pensamiento crítico y exportación PDF (jsPDF), Chart.js local en `vendor/`.
- [Estadistica1/sem5_regla_sturges.html](file:///d:/U/2026/Semestre2/Estadistica/WebAppEstadistica/Estadistica1/sem5_regla_sturges.html): Semana 5 — Regla de Sturges para administradores: conceptos, guía de 5 pasos, caso tutorial Lácteos El Oriental (Teculután, Zacapa), laboratorio para pegar datasets, desglose paso a paso colapsable/expandible (n, k, R, A, tabla), gráficos histograma/polígono/ojiva y exportación de informe PDF. Incluye selector de tipo de dato en el laboratorio (moneda, unidades, tiempo en horas/minutos/segundos, decimales, litros, metros) y formato visual dinámico para intervalos, Xi, R, A y PDF, además de la columna `fp acum%`.
- [Estadistica1/sem6_resolucion_parcial1.html](file:///d:/U/2026/Semestre2/Estadistica/WebAppEstadistica/Estadistica1/sem6_resolucion_parcial1.html): Semana 6 — Resolución y retroalimentación pedagógica del Primer Examen Parcial (Variante B, 15 pts): Solucionario interactivo paso a paso para Serie I (Clasificación de 6 variables corporativas guatemaltecas con justificación), Serie II (Muestreo estratificado proporcional y muestreo sistemático con salto k en Escuintla), Serie III (Tabulación categórica, Pareto 80/20 y recomendación ejecutiva para calzado en San Pedro Sacatepéquez) y Serie IV (Regla de Sturges, límites nominales/reales, tabla completa de 6 clases, polígono/histograma y preguntas analíticas sobre tiempos de despacho). Incluye tooltips pedagógicos al pasar el puntero, gráficos con Chart.js y cuestionario de autoevaluación rápida.
- [Estadistica1/sem7_frecuencia_pareto.html](file:///d:/U/2026/Semestre2/Estadistica/WebAppEstadistica/Estadistica1/sem7_frecuencia_pareto.html): Semana 7 — Polígonos de Frecuencia, Ojivas e Histogramas Comparativos: tutorial paso a paso para gráficos cuantitativos continuos (Histograma, Polígono en marcas de clase Xi, Ojivas menor que y mayor que), superposición mixta (Histograma + Polígono) y superposición comparativa (Serie A vs Serie B) para contrastar turnos y sucursales (caso Textiles San Lucas S.A.), etiquetado personalizado de series, desglose paso a paso colapsable/expandible de todas las columnas (fi, fr, fp%, fp acum%, Fa, Fa Mayor, Xi), laboratorio interactivo con soporte de unidades de tiempo (horas, minutos, segundos), y exportación de informe ejecutivo a PDF (jsPDF).
- [Estadistica1/GoogleSheetSim.html](file:///d:/U/2026/Semestre2/Estadistica/WebAppEstadistica/Estadistica1/GoogleSheetSim.html): Simulador interactivo estilo Google Sheets & Slides de Diagrama de Pareto para casos empresariales.
- `vendor/`: Librerías JS empaquetadas localmente (Chart.js + plugin datalabels) usadas por Semanas 4, 5, 6 y 7.
- `cosas/`: Recursos multimedia y logotipos institucionales (`Umg.png`).
- `AGENTS.md`: Este archivo de contexto, arquitectura y reglas para asistentes de código IA.

### Semanas y Módulos habilitados

**Estadística I (`Estadistica1/index_estadistica.html`):**
1. Semana 2 — Clasifica Variables + Business Lab
2. Semana 3 — Tabulador & Caso Xela
3. Semana 4 — Gráficos & Pareto (+ PDF)
4. Semana 5 — Regla de Sturges (+ laboratorio + PDF)
5. Semana 6 — Resolución del Examen Parcial 1 (Solucionario interactivo + Tooltips + Autoevaluación)
6. Semana 7 — Polígonos, Ojivas & Superposición Comparativa (+ laboratorio + PDF)

**Informática I (`informatica1/index_informatica.html`):**
1. Semana 7 — IA para la Gestión Empresarial (Glosario, MoE/MLA, Modelos de Frontera, Calculadora ROI Tokens, Agentes ReAct y Gobernanza Shadow AI) en `informatica1/Guia_IA_Administradores.html`.

### Convención pedagógica recurrente

- Enfoque: interpretación administrativa (no solo fórmula).
- Casos guatemaltecos reales (Campero, Tortrix, Café Xela, Lácteos El Oriental / Zacapa, etc.).
- Laboratorio interactivo + sección de entrega/PDF donde el alumno escribe conclusiones (pensamiento crítico) antes de descargar.

---

## 🤖 Indicaciones para Agentes de Inteligencia Artificial

Al modificar, corregir o agregar nuevas funciones a este repositorio, cualquier agente de IA debe cumplir estrictamente con lo siguiente:

1. **Preservar el carácter estático:** Nunca propongas ni crees endpoints de API, código Node/Express, ni dependencias de npm que requieran servidor en producción.
2. **Priorizar el valor pedagógico y gerencial:** Al crear o modificar simuladores, incluye siempre una sección de **"Interpretación Administrativa"** o **"Diagnóstico Ejecutivo"** junto a los resultados numéricos y gráficos.
3. **Mantener la consistencia visual y de autoría:** Asegura que los nuevos módulos sigan el diseño visual existente (estilo moderno, limpio y responsive) e incluyan la mención al catedrático **Ruldin Ayala** en los pies de página sin códigos numéricos irrelevantes.
4. **Código autocontenido y mantenible:** Documenta los algoritmos de cálculo estadístico en JS con comentarios claros sobre las fórmulas empleadas.
