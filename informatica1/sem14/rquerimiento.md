Quiero hacer un simulador web de CRM Y SCM, para que mis alumnos
puedan tener un primer acercamiento y entender el propósito de esta herramienta y cómo funciona, de principio a fin, y al final que puedan generar un reporte dónde quede toda la bitácora de lo que hicieron en clase, con su nombre y número de carnet y que lo descarguen en formato PDF, similar a la actividad de la semana 13.

Será una página estática con datos puestos en código duro.
toma la guia de clase crm_scm.md comoo base del contenido para que tengas contexto.
El tema:
Desarrolladora Inmobiliaria (Proyectos Residenciales en Zona 10 )
Basado directamente en el caso práctico de la Guía Didáctica.   Enfoque del Negocio: Venta de apartamentos en preventa e integración con la cadena de abastecimiento para la construcción.
Flujo Integrado de Principio a Fin: CRM (Captura y Calificación): El estudiante registra la recepción de un prospecto (por llamada o correo) interesado en un apartamento. Registra la cotización y arma el expediente digital para la precalificación bancaria (BI/Banrural) y FHA.   CRM (Cierre e Hito): Al recibir la aprobación del crédito hipotecario, el sistema cambia el estado del cliente a "Cierre de Venta".   SCM (Desencadenamiento de Suministro): La venta del apartamento activa automáticamente la orden de pedido de insumos de construcción (concreto, acero, acabados).SCM (Gestión Logística): Muestra el flujo B2B/EDI con proveedores locales (ej. Cementos Progreso, importadores de piso) y calcula la ruta de entrega considerando restricciones de tráfico urbano.   Reporte Final: "Expediente de Cierre de Venta y Orden de Suministro", que consolida la ficha del cliente, cotización, aprobación del crédito FHA y el plan de despacho de materiales para su apartamento.

haz el modelo para que la actividad dure por espacio de 30 a 40 minutos, para que puedan, despacio entender cómo funciona, haz que cambien datos aunque se almacenen en memoria o db local del navegador,  y que analicen el comportamiento de CRM y SCM.

La misión será que entiendan perfectamente el concepto.

Web Estática:
toma en concideración que de ser posible se puede usar la base de datos del navegador para almacenar datos del simulador.
Estructura en Pasos (Stepper Wizard): Diseña la interfaz dividida en 4 o 5 pestañas secuenciales (ej. 1. Captura de Prospecto $\rightarrow$ 2. Cotización y Cierre $\rightarrow$ 3. Inventario y Proveedores $\rightarrow$ 4. Ruteo y Logística $\rightarrow$ 5. Reporte).Interacción Guiada: Los estudiantes completan campos predeterminados (o eligen opciones de menús desplegables) que simulan el llenado de datos en el TPS/CRM/SCM.   Simulación de Fórmulas Teóricas: Incluye en la pestaña de SCM el cálculo automatizado de la complejidad multiplicativa de la cadena ($N = \text{Proveedores} \times \text{Fabricantes} \times \text{Distribuidores}$) para que visualicen cómo cambia el número de enlaces según el caso.   



