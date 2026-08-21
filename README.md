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
   - Barra de acceso directo con herramientas activas (Clasificador, Business Lab, Tabulador, Pareto, Sturges y Parcial 1).
   - Centro de navegación principal para módulos cuantitativos.

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
   - Selector de tipo de dato (normal, moneda, unidades, decimales, litros, metros).
   - Hoja de trabajo con campos de análisis y exportación PDF.
   - Campo **Contexto** en laboratorio, incluido en el PDF para documentar el enunciado del ejercicio.

8. 📝 **`Estadistica1/sem6_resolucion_parcial1.html` (Resolución del Primer Examen Parcial):**
   - Solucionario y retroalimentación pedagógica interactiva del Primer Examen Parcial (Variante B, 15 Pts).
   - Explicación analítica paso a paso de las 4 series: Clasificación de variables corporativas, Muestreo probabilístico en Escuintla, Tabulación & Diagrama de Pareto 80/20 de calzado y Regla de Sturges en tiempos de transporte.
   - Tooltips explicativos en fórmulas, números y encabezados que se despliegan al pasar el puntero.
   - Tablas interactivas con cálculo de frecuencias relativas, porcentajes y acumulados.
   - Cuestionario de autoevaluación rápida con retroalimentación instantánea.

9. 📊 **`Estadistica1/GoogleSheetSim.html` (Simulador Google Sheets & Slides):**
   - Simulador interactivo de Diagrama de Pareto enfocado en casos empresariales y presentación de informes.

10. 💻 **`informatica1/index_informatica.html` (Portal de Informática I):**
    - Dashboard principal para el curso de **Informática I**, con diseño ejecutivo cian/azul, accesos directos por semana y mapa curricular.

11. 🤖 **`informatica1/Guia_IA_Administradores.html` (Semana 7: IA para la Gestión Empresarial 2026):**
    - Guía interactiva integral sobre Inteligencia Artificial aplicada a la administración:
      - **Glosario & Fundamentos:** Tokens, embeddings, temperatura, KV cache.
      - **Arquitectura Eficiente:** Modelos densos vs. MoE (Mezcla de Expertos) y compresión MLA (-90% memoria).
      - **Modelos de Frontera:** Comparativa entre ecosistemas cerrados, pesos abiertos y modelos asiáticos (DeepSeek, Qwen, Kimi).
      - **Calculadora de Costos & ROI:** Proyección financiera de consumo de tokens (Input vs. Output) y margen de seguridad.
      - **Agentes ReAct:** Simulador del ciclo cognitivo de automatización (Pensamiento, Acción, Observación, Respuesta).
      - **Gobernanza:** Mitigación de Shadow AI, supervisión humana y marcos normativos.

12. 📦 **`vendor/` (Librerías locales):**
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
- **Estado actual:** Módulos habilitados hasta **Semana 5**.
- **Cobertura funcional:** Simuladores interactivos, KPIs gerenciales, gráficos y exportación PDF en módulos aplicados.
- **Enfoque vigente:** Aprendizaje estadístico orientado a decisiones empresariales (no memorización aislada de fórmulas).

---

© 2026 **Ruldin Ayala** - Universidad Mariano Gálvez de Guatemala.
