# Contexto y Enunciados Gerenciales — Semana 9: Tendencia Central y Medidas de Posición (Datos Agrupados)
## Curso: Estadística I | Facultad de Ciencias de la Administración — Universidad Mariano Gálvez de Guatemala
### Catedrático: Ruldin Ayala | Libro base: Domínguez & Domínguez

Este documento contiene los casos prácticos gerenciales para el laboratorio de datos agrupados. Cada caso define su contexto empresarial guatemalteco, datos agrupados de partida, preguntas requeridas por la gerencia, solución docente y el prompt especializado de evaluación de IA para retroalimentar el pensamiento crítico del estudiante.

---

###CASO
id: caso1
codigo: creditos
titulo: Cooperativa "El Ahorro Pinulteco" — Microcréditos y Control de Riesgos
categoria: Microfinanzas y Riesgo Crediticio
municipio: San José Pinula, Guatemala
unidad: Q
unidad_nombre: Quetzales
variable: monto de crédito
sujeto: microcréditos
formato_datos: agrupado
datos:
1000,2000,5
2000,3000,12
3000,4000,18
4000,5000,10
5000,6000,5
contexto: Eres el nuevo Gerente de Riesgos de la Cooperativa "El Ahorro Pinulteco" en el centro de San José Pinula. Este mes se otorgaron 50 microcréditos a emprendedores locales (dueños de abarroterías, pacas de ropa, carretas de shukos y comedores populares). El Gerente General necesita fijar de inmediato las nuevas políticas de crédito y fondeo para evitar insolvencia en la cartera.
preguntas_gerencia:
1. "¿Cuál es el promedio general de los créditos otorgados?" (Media Aritmética x̄).
2. "¿A partir de qué monto consideramos que un crédito está en el 25% más alto para exigirle un fiador con arraigo socioeconómico?" (Tercer Cuartil Q3 / P75).
3. "¿Cuál es el monto umbral para el 10% de los créditos más grandes, los cuales requerirán mi firma directa para evitar riesgos de morosidad institucional?" (Percentil 90 P90).
pregunta_guia_paso1: ¿Qué revela la columna de frecuencias acumuladas Fi sobre la concentración de clientes? ¿En qué intervalo se agrupa la mayor cantidad de préstamos y por qué esto impacta la liquidez diaria de la cooperativa?
pregunta_guia_paso2: Compara la Media (x̄ ≈ Q3,460), Mediana (Me ≈ Q3,444.44) y Moda (Mo ≈ Q3,428.57). ¿La distribución es simétrica o presenta sesgo? ¿Cuál de las tres medidas es más prudente para planificar la captación de ahorros?
pregunta_guia_paso3: Justifica la exigencia de fiador a partir de Q3 (Q4,250) y de firma gerencial a partir de P90 (Q5,000). ¿Qué porcentaje de microcréditos queda libre de fiador para fomentar la inclusión financiera?
pregunta_guia_paso4: Al contrastar el Histograma con la Ojiva Acumulada, ¿en qué tramo de montos se produce el despegue más empinado de la cartera? ¿Coincide la curva con la clase modal?
pregunta_guia_paso5: Si mueves la política de fiador de P75 a P60 o la tasa preferencial al P10, ¿cómo cambia la cartera de clientes y qué riesgo de fuga de emprendedores asumiría la cooperativa frente a los bancos tradicionales?
solucion_docente: El total de créditos es n=50 con amplitud constante A=Q1,000. La Media aritmética es x̄ = Q3,460.00 (∑fi·xi = 173,000 / 50). La Mediana se ubica en la Clase 3 (3000-4000), resultando en Me = Q3,444.44. La Moda se halla en la Clase 3 con d1=6 y d2=8, resultando Mo = Q3,428.57. Dado que x̄ > Me > Mo por escasa diferencia, la distribución es prácticamente simétrica con leve asimetría positiva. El Tercer Cuartil (Q3, Pos=37.5) es exactamente Q4,250.00, significando que el 75% de los créditos no supera ese monto y el 25% más elevado (Q > 4,250) debe respaldarse con fiador. El Percentil 90 (P90, Pos=45) es de Q5,000.00, estableciendo que únicamente el 10% superior (los 5 créditos de Q5,000 a Q6,000) exige autorización directa del Gerente General.
system_prompt: Eres un consultor financiero de microfinanzas y catedrático de Estadística I para estudiantes de Administración de Empresas en la Universidad Mariano Gálvez de Guatemala. Tu misión es evaluar las conclusiones y pensamiento crítico del alumno sobre el Caso 1 (Cooperativa El Ahorro Pinulteco). Valora si el alumno comprende el balance entre inclusión financiera y control de riesgo: exigir fiador a partir de Q3 (Q4,250) protege el 25% más expuesto sin asfixiar al 75% de microempresarios informales; reservar firma del Gerente General para P90 (Q5,000) agiliza las operaciones cotidianas. Responde con tono cercano de Mentor Amigo (tratamiento de "tú"), constructivo y cordial, iniciando directamente con el análisis gerencial sin saludos protocolares ni rodeos.
###FIN

---

###CASO
id: caso2
codigo: sueldos
titulo: Call Center & BPO Zona 10 — Equidad Salarial y Retención de Talento
categoria: Talento Humano y Compensaciones
municipio: Ciudad de Guatemala (Zona 10)
unidad: Q
unidad_nombre: Quetzales
variable: salario mensual
sujeto: agentes y supervisores
formato_datos: agrupado
datos:
2500,3500,8
3500,4500,15
4500,5500,20
5500,6500,9
6500,7500,4
contexto: Como Gerente de Compensaciones y Talento Humano de un Call Center bilingüe en Zona 10 de la Ciudad de Guatemala, analizas la planilla de 56 agentes operativos y coordinadores de cuenta. La alta rotación del sector obliga a diseñar una política de retención salarial justa y competitiva. El Vicepresidente de Operaciones te pide indicadores clave para negociar el presupuesto anual.
preguntas_gerencia:
1. "¿Cuál es el costo salarial medio por colaborador en el área operativa?" (Media Aritmética x̄).
2. "¿Cuál es el salario de la persona ubicada exactamente en el percentil 50 de la nómina?" (Mediana Me).
3. "¿Cuál es el techo del 20% de agentes peor pagados para aplicarles un bono de nivelación por costo de vida (P20) y cuál es el piso del 15% mejor remunerado para un plan de retención ejecutiva (P85)?"
pregunta_guia_paso1: Observa la tabla de frecuencias: la clase 4500-5500 acumula a 20 trabajadores. ¿Qué porcentaje del equipo representa y qué riesgos acarrea tener la mitad de la nómina apretada en ese intervalo?
pregunta_guia_paso2: Calcula x̄, Me y Mo. ¿Por qué en un análisis de recursos humanos la Mediana suele ser más representativa que la Media si existieran disparidades de escalas?
pregunta_guia_paso3: Analiza el percentil 20 (P20) y el percentil 85 (P85). ¿Qué monto fijarías como salario mínimo interno de la compañía para frenar la fuga hacia otros call centers vecinos?
pregunta_guia_paso4: En el Histograma, ¿se observa concentración en el centro (forma acampanada)? ¿La ojiva muestra un salto pronunciado entre Q4,000 y Q5,500?
pregunta_guia_paso5: Mueve los percentiles en el simulador. Si extiendes el bono de nivelación hasta el P30 en vez del P20, ¿cuántos trabajadores adicionales se benefician y qué impacto financiero proyectas en la masa salarial?
solucion_docente: Muestra total n=56 colaboradores, amplitud A=Q1,000. Suma ∑fi·xi = 265,000. Media aritmética x̄ = Q4,732.14. Posición de la Mediana n/2 = 28; cae en la Clase 3 (4500-5500) con Fi-1=23, fi=20, resultando Me = Q4,750.00. La Clase Modal es la Clase 3 (fi=20), d1=20-15=5, d2=20-9=11; Mo = 4500 + (5/16)*1000 = Q4,812.50. Dado que Mo > Me > x̄, presenta leve asimetría negativa (sesgo a la izquierda), reflejando que la mayoría gana salarios dignos de clase media para el sector, pero hay un grupo inicial en la escala junior (Q2,500-Q3,500). Para las políticas: P20 (Pos=11.2) cae en la Clase 2 (3500-4500), dando P20 = Q3,713.33 (umbral de nivelación). P85 (Pos=47.6) cae en la Clase 4 (5500-6500), dando P85 = Q6,011.11 (umbral de retención senior).
system_prompt: Eres un director de Recursos Humanos y profesor de Estadística Aplicada a la Gestión del Talento en la Universidad Mariano Gálvez. Evalúa las conclusiones del estudiante sobre el Caso 2 (Call Center Zona 10). Revisa si el alumno comprende el uso de percentiles salariales (P20 para compensar a los colaboradores de entrada y P85 para fidelizar a los de mayor rendimiento), y si distingue adecuadamente la Media (Q4,732.14) frente a la Mediana (Q4,750.00) para evitar que los valores extremos distorsionen la equidad interna. Responde como un Mentor Amigo, empático, directo y enfocado en la toma de decisiones estratégicas de recursos humanos en Guatemala.
###FIN

---

###CASO
id: caso3
codigo: tiempos
titulo: Cadena de Farmacias en Calzada Roosevelt — SLAs y Tiempos de Despacho
categoria: Logística y Operaciones
municipio: Mixco / Guatemala (Calzada Roosevelt)
unidad: min
unidad_nombre: Minutos
variable: tiempo de despacho
sujeto: pedidos atendidos
formato_datos: agrupado
datos:
5,10,6
10,15,14
15,20,18
20,25,8
25,30,4
contexto: Eres el Supervisor de Operaciones de una sucursal insignia de farmacia con autoservicio y entrega express ubicada en la Calzada Roosevelt. Ante el tráfico pesado de la calzada en horas pico, los clientes exigen rapidez en caja y mostrador. Se cronometraron 50 atenciones consecutivas durante la tarde de un viernes. El Director de Cadena de Suministro te solicita fijar un Acuerdo de Nivel de Servicio (SLA) con garantía de satisfacción.
preguntas_gerencia:
1. "¿Cuál es el tiempo promedio que un cliente espera para recibir su medicamento?" (Media Aritmética x̄).
2. "¿Cuál es el tiempo de despacho más frecuente en el mostrador?" (Moda Mo).
3. "¿Cuál es el tiempo garantizado bajo el cual se despacha al 75% de los clientes (Q3) y cuál es el umbral de alerta roja para el 10% de clientes más demorados (P90) para indemnizarlos con un cupón de descuento?"
pregunta_guia_paso1: La tabla muestra que 32 de los 50 clientes (64%) tardan entre 10 y 20 minutos. ¿Qué cuello de botella en farmacia (receta electrónica, autorización de seguro médico, empaque) podría explicar esta concentración?
pregunta_guia_paso2: Compara la Media (16.20 min), Mediana (16.11 min) y Moda (15.71 min). ¿Por qué en logística de servicios prometer un tiempo promedio puede dejar insatisfecho a casi la mitad de los compradores?
pregunta_guia_paso3: Si la farmacia lanza una campaña comercial "Listo en menos de X minutos o te damos Q25 de descuento", ¿usarías la Media (16.2 min), el Cuartil 3 (19.4 min) o el Percentil 90 (23.1 min)? Justifica el riesgo financiero.
pregunta_guia_paso4: Revisa el Histograma: ¿la barra de 15-20 min domina el proceso? Observa la Ojiva acumulada y encuentra visualmente el tiempo donde se cruza el 80% de las órdenes despachadas.
pregunta_guia_paso5: Simula en el Paso 5 cambiar la política de reclamo de P90 a P80. ¿Cuántos clientes adicionales recibirían compensación por demora y cómo impactaría esto en la rentabilidad de la tienda?
solucion_docente: Dataset con n=50 atenciones, amplitud A=5 minutos. Sumatoria ∑fi·xi = 810 minutos. Media x̄ = 16.20 minutos. Mediana n/2 = 25; cae en la Clase 3 (15-20 min) con Fi-1=20 y fi=18, obteniendo Me = 15 + ((25-20)/18)*5 = 16.39 min (o 16.11 min según interpolación estricta). La Moda está en la Clase 3 con fi=18, d1=18-14=4, d2=18-8=10; Mo = 15 + (4/14)*5 = 16.43 min (aproximado entre 15.7 y 16.4 min según redondeo). Para el diseño de SLAs: el Cuartil 3 (Q3, Pos=37.5) cae en la Clase 3 o 4 (Pos 37.5 cae justo en 19.86 min o 20.00 min), lo que indica que el 75% de despachos concluye antes de los 20 minutos. El Percentil 90 (P90, Pos=45) cae en la Clase 4 (20-25 min), dando P90 = 20 + ((45-38)/8)*5 = 24.38 min. Por ende, la promesa de entrega debe fijarse en 25 minutos para no regalar producto innecesariamente por eventualidades del tráfico o seguros médicos.
system_prompt: Eres un director de operaciones logísticas y catedrático de estadística gerencial en Guatemala. Evalúa las conclusiones del estudiante sobre el Caso 3 (Farmacia Roosevelt). Verifica si el alumno razona con criterio de riesgo operativo: prometer la media (16.2 min) como garantía comercial 'o es gratis' quebraría la operación porque el 50% de las órdenes excede ese tiempo; en cambio, fijar el SLA en Q3 o P90 (20 a 25 min) protege la reputación sin sobrecargar al personal. Usa tono de Mentor Amigo, cercano, analítico y motivador.
###FIN

---

###CASO
id: caso4
codigo: notas
titulo: Evaluación y Selección de Talento UMG — Bimodalidad y Filtros de Admisión
categoria: Selección de Personal y Aptitud
municipio: Campus Central UMG, Guatemala
unidad: pts
unidad_nombre: Puntos
variable: calificación obtenida
sujeto: postulantes evaluados
formato_datos: agrupado
datos:
1,3,8
3,5,6
5,7,2
7,9,4
9,11,10
contexto: La Dirección de Talento y Desarrollo Docente de la UMG evaluó a 30 aspirantes para plazas de coordinación académica y analistas de datos. La prueba estandarizada califica destrezas analíticas sobre una escala de 1 a 10 puntos (agrupada en intervalos continuos). La decanatura necesita estructurar los puntos de corte para contratación inmediata, capacitación obligatoria y descarte definitivo.
preguntas_gerencia:
1. "¿Cuál es el puntaje promedio obtenido por los candidatos?" (Media Aritmética x̄).
2. "¿Existe bimodalidad o polarización en las notas de los aspirantes?" (Moda y distribución).
3. "¿Cuál es la nota mínima para acceder al 30% superior de excelencia académica (P70) y cuál es el puntaje de corte del 25% más vulnerable (Q1) que requiere programa de inducción intensiva?"
pregunta_guia_paso1: Observa los extremos: la primera clase (1–3 pts) tiene 8 personas y la última (9–11 pts) tiene 10 personas, mientras que el centro (5–7 pts) solo tiene 2. ¿Qué significa esta curva con forma de U (bimodal/polarizada) para un reclutador?
pregunta_guia_paso2: Al calcular la Media y la Mediana, ¿reflejan fielmente al candidato típico o engañan porque casi nadie sacó una nota intermedia?
pregunta_guia_paso3: Si la plaza requiere autonomía técnica inmediata, ¿qué percentil de corte recomendarías para seleccionar solo a candidatos listos para producir sin supervisión constante?
pregunta_guia_paso4: En el Histograma, observa los dos pilares en los extremos. ¿Cómo ayuda la Ojiva porcentual a identificar cuántos candidatos obtuvieron menos de 6 puntos?
pregunta_guia_paso5: Ajusta los deslizadores en el simulador: si colocas la aprobación especial en el Percentil 70, ¿cuántos postulantes califican para entrevista con el Decano?
solucion_docente: Dataset agrupado con n=30 aspirantes, amplitud A=2 puntos. Clases: 1–3 (fi=8, xi=2), 3–5 (fi=6, xi=4), 5–7 (fi=2, xi=6), 7–9 (fi=4, xi=8), 9–11 (fi=10, xi=10). Suma ∑fi·xi = 16 + 24 + 12 + 32 + 100 = 184 puntos. Media x̄ = 184 / 30 = 6.13 puntos. Mediana n/2 = 15; cae en la Clase 3 o 4: F1=8, F2=14, F3=16; la posición 15 cae en la Clase 3 (5–7 pts), Me = 5 + ((15-14)/2)*2 = 6.00 pts. Sin embargo, la distribución es marcadamente bimodal en la práctica con un grupo reprobado masivo (14 candidatos < 5 pts) y un grupo sobresaliente (14 candidatos > 7 pts). La Media de 6.13 pts es un promedio matemático que no representa la realidad humana de ningún grupo (el centro está vacío con fi=2). Para la selección: Q1 (Pos=7.5) es 2.88 pts (corte de descarte inmediato). P70 (Pos=21) cae en la Clase 5 (9–11 pts), arrojando P70 = 9 + ((21-20)/10)*2 = 9.20 pts, asegurando que solo los verdaderos perfiles de élite pasen a la terna final.
system_prompt: Eres un consultor en psicometría laboral y catedrático de estadística universitaria. Evalúa la respuesta del alumno sobre el Caso 4 (Evaluación de Postulantes UMG). Presta especial atención a si el alumno detecta la trampa del promedio en distribuciones bimodales o polarizadas (forma de 'U'): la media de 6.13 pts es ficticia porque los candidatos están divididos entre muy preparados o muy deficientes. Reconoce y felicita si propone filtros percentilares tajantes (Q1 para descartar y P70/P80 para contratar). Responde con calidez pedagógica de Mentor Amigo.
###FIN
