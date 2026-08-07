# 📊 Plataforma Educativa de Estadística 1

### Universidad Mariano Gálvez de Guatemala (UMG) | Licenciatura en Administración de Empresas

Bienvenido a la **Plataforma Educativa de Estadística 1**, un portal web estático e interactivo diseñado para apoyar el aprendizaje práctico y la toma de decisiones empresariales.

---

## 👨‍🏫 Autor y Creador

- **Prof. Ruldin Ayala**
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

1. 🏠 **`index.html` (Dashboard Principal):**
   - Acceso rápido a simuladores por semana.
   - Barra de acceso directo con **5 herramientas activas**.
   - Centro de navegación principal para módulos y laboratorios.

2. 📊 **`sem2_clasifica_variables.html` (Clasificación de Variables):**
   - Entrenamiento interactivo para clasificar variables cualitativas, cuantitativas, nominales, ordinales, de intervalo y de razón.

3. 🎲 **`sem2_estadistica_business_lab.html` (Simulador de Muestreo - Caso La Terminal Z.4):**
   - Laboratorio de Muestreo Probabilístico utilizando Método Físico, Tabla de Números Aleatorios y Hojas Electrónicas.

4. 📈 **`sem3.html` (Tablas de Frecuencia y Análisis de Mercado):**
   - Tabulador universal con soporte para Escalas Likert, análisis del caso Café Xela, visualización de cuota de mercado en barras y tarjetas de KPIs gerenciales.

5. 📉 **`sem4_graficos_pareto.html` (Gráficos Cualitativos y Pareto 80/20):**
   - Construcción de gráfico de barras, pastel y diagrama de Pareto con interpretación gerencial.
   - Hoja de trabajo aplicada a toma de decisiones administrativas.
   - Exportación de informe en PDF con gráfico y conclusiones.

6. 📐 **`sem5_regla_sturges.html` (Regla de Sturges y Distribución de Frecuencias):**
   - Módulo completo con conceptos, guía de 5 pasos y caso tutorial de **Lácteos El Oriental S.A.**
   - Laboratorio para pegar datasets y calcular automáticamente: `n`, `k`, `R`, `A`, tabla de frecuencias y clase modal.
   - Gráficos: histograma, polígono y ojiva.
   - Selector de tipo de dato (normal, moneda, unidades, decimales, litros, metros).
   - Hoja de trabajo con campos de análisis y exportación PDF.
   - Campo **Contexto** en laboratorio, incluido en el PDF para documentar el enunciado del ejercicio.

7. 📦 **`vendor/` (Librerías locales):**
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

© 2026 **Prof. Ruldin Ayala** - Universidad Mariano Gálvez de Guatemala.
