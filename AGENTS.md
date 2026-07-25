# AGENTS.md - Contexto, Arquitectura y Directrices del Proyecto

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
  - **Librerías por CDN:** Se pueden usar librerías JS/CSS ligeras cargadas exclusivamente vía CDN (ej. Chart.js, MathJax, TailwindCSS, FontAwesome, Lucide Icons, Canvas-Confetti).

---

## 👨‍🎓 Perfil del Estudiante y Enfoque Pedagógico

- **Carrera:** Licenciatura en Administración de Empresas.
- **Nivel de Matemáticas/Estadística:** Introductorio a Intermedio (Estadística 1).
- **Catedrático:** Prof. Ruldin Ayala.
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
     - 🏆 *Categoría Dominante (Líder)*
     - 🎯 *Nivel de Concentración de Mercado* ($>50\%$ vs fragmentado)
     - 📈 *Brecha de Liderazgo* (Margen $\%$ sobre el 2.º lugar)
     - 💡 *Diagnóstico y Recomendación Ejecutiva Automática*

---

## 📁 Estructura de Archivos del Repositorio

El repositorio se organiza mediante archivos HTML autocontenidos o modularizados estáticamente:

- [index.html](file:///d:/U/2026/Semestre2/Estadistica/WebAppEstadistica/index.html): Página principal / Dashboard rediseñado con accesos directos por semana y simulador rápido de repaso.
- [sem2_clasifica_variables.html](file:///d:/U/2026/Semestre2/Estadistica/WebAppEstadistica/sem2_clasifica_variables.html): Módulo interactivo para entrenamiento en clasificación de variables (cualitativas, cuantitativas, nominales, ordinales, de razón/intervalo).
- [sem2_estadistica_business_lab.html](file:///d:/U/2026/Semestre2/Estadistica/WebAppEstadistica/sem2_estadistica_business_lab.html): Simulador de Muestreo probabilístico en La Terminal Z.4 (Método Físico, Tabla de Números Aleatorios y Hoja Electrónica).
- [sem3.html](file:///d:/U/2026/Semestre2/Estadistica/WebAppEstadistica/sem3.html): Módulo de Tablas de Frecuencia (Escalas Likert, Caso Café Xela y Tabulador Universal con Barras Visuales y KPIs de Decisiones Gerenciales).
- `AGENTS.md`: Este archivo de contexto, arquitectura y reglas para asistentes de código IA.

---

## 🤖 Indicaciones para Agentes de Inteligencia Artificial

Al modificar, corregir o agregar nuevas funciones a este repositorio, cualquier agente de IA debe cumplir estrictamente con lo siguiente:

1. **Preservar el carácter estático:** Nunca propongas ni crees endpoints de API, código Node/Express, ni dependencias de npm que requieran servidor en producción.
2. **Priorizar el valor pedagógico y gerencial:** Al crear o modificar simuladores, incluye siempre una sección de **"Interpretación Administrativa"** o **"Diagnóstico Ejecutivo"** junto a los resultados numéricos y gráficos.
3. **Mantener la consistencia visual y de autoría:** Asegura que los nuevos módulos sigan el diseño visual existente (estilo moderno, limpio y responsive) e incluyan la mención al catedrático **Ruldin Ayala** en los pies de página sin códigos numéricos irrelevantes.
4. **Código autocontenido y mantenible:** Documenta los algoritmos de cálculo estadístico en JS con comentarios claros sobre las fórmulas empleadas.
