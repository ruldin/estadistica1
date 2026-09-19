**Contenido de Estudio: Ciberseguridad y Protección de Activos de Información**

**Curso:** Informática I 

**Nivel:** Licenciatura en Administración de Empresas (UMG Guatemala) 

**Referencia:** Capítulos 8 y 9 del Libro de Texto (Seguridad de los SI e Impactos Sociales/Privacidad)

---

**1\. Herramientas de Seguridad de la Información (Subcapítulo 8.4)**

Para garantizar la **confidencialidad**, la **integridad** y la **disponibilidad** de los datos, las organizaciones disponen de diversas herramientas tecnológicas que forman parte de su esquema de defensa. 

Estas herramientas se clasifican en tres categorías principales: **autenticación**, **prevención** y **detección**.

**Mecanismos de Autenticación**

La autenticación asegura que la persona o sistema que intenta acceder a un recurso de información sea efectivamente quien afirma ser\]. 

Se fundamenta en tres factores de identificación:

1. **Algo que se sabe:** Corresponde a datos memorizados, como nombres de usuario, **contraseñas**, números PIN o preguntas fuera del monedero (*Out-Of-Wallet / OOW*) .

2. **Algo que se posee:** Identificadores físicos o digitales en poder del usuario, tales como tarjetas de acceso, llaves físicas, tarjetas inteligentes o **tokens de seguridad** (por ejemplo, tokens RSA SecurID que generan códigos dinámicos temporales) .

3. **Algo que se es (Biometría):** Validación de características biológicas o físicas únicas del individuo, como escaneos de retina, **huellas dactilares** o reconocimiento de la geometría facial .

**Autenticación Multifactorial (MFA)**

Dado que el uso de un solo factor (como una contraseña) resulta fácil de vulnerar, la **autenticación multifactorial (MFA)** exige combinar dos o más factores de distintas categorías . Por ejemplo, un usuario debe ingresar un código PIN memorizado (*algo que sabe*) junto con el código cambiante que muestra su token físico (*algo que posee*) para autorizar un acceso .

---

**2\. Prevención y Gestión de Vulnerabilidades (Subcapítulo 8.5)**

Las herramientas de prevención se diseñan para bloquear el acceso no autorizado a la red y proteger la infraestructura corporativa frente a fallas e interrupciones .

**Controles de Acceso Técnico**

Una vez que el usuario ha sido autenticado, los controles de acceso determinan qué privilegios específicos posee sobre los datos (leer, escribir, agregar o eliminar) :

* **Lista de Control de Acceso (ACL):** Asigna permisos directamente a usuarios individuales sobre cada recurso específico . Aunque es simple en entornos pequeños, se vuelve compleja y difícil de administrar a gran escala  .

* **Control de Acceso Basado en Roles (RBAC):** Asigna los derechos de acceso a **roles organizacionales** (por ejemplo, "Auditor" o "Gerente de Ventas") y luego vincula a los empleados con dichos roles . Esto simplifica notablemente la administración gerencial y mejora la seguridad operativa .

**Mecanismos de Cifrado (Encriptación)**

El cifrado altera la estructura de los datos para volverlos incomprensibles para cualquier persona que no posea la clave de descifrado :

* **Cifrado Simétrico:** Utiliza una única clave compartida tanto para cifrar como para descifrar la información .

* **Cifrado de Clave Pública (Asimétrico):** Emplea un par de claves: una **clave pública** que se distribuye abiertamente para codificar mensajes y una **clave privada** en poder exclusivo del destinatario para descifrarlos .

**Defensas Perimetrales y Redes Remotas**

* **Firewalls (Cortafuegos):** Dispositivos de software o hardware que inspeccionan el tráfico de red entrante y saliente, bloqueando los paquetes de datos que no cumplen con las reglas estipuladas por la empresa .

* **Redes Privadas Virtuales (VPN):** Crean un túnel cifrado a través de Internet que permite a los empleados remotos conectarse de forma segura a la intranet de la empresa sobrepasando el firewall corporativo .

* **Programas Antivirus:** Aplicaciones dedicadas a monitorear, detectar y neutralizar software malicioso en computadoras y servidores .

**Estrategia de Copias de Seguridad (Backups) y Resiliencia**

Un plan de respuesta ante desastres debe incluir  :

1. Realización periódica de **copias de seguridad** de todos los datos críticos .

2. **Almacenamiento fuera de las instalaciones (** **offsite** **)** de las copias de respaldo para protegerlas contra incidentes físicos localizados .

3. Pruebas continuas de **restauración de datos** para verificar la efectividad del respaldo .

4. Infraestructura de continuidad mediante **Fuentes de Alimentación Ininterrumpida (UPS)**, **sitios alternativos "en caliente"** y \*\*Redes de Área de Almacenamiento (SAN)\*\*  .

---

**3\. Detección de Intrusiones y Políticas de Seguridad (Subcapítulo 8.6)**

**Mecanismos de Detección**

* **Sistemas de Detección de Intrusiones (IDS):** Inspeccionan el tráfico de datos en tiempo real para identificar patrones sospechosos o violaciones activas de los perímetros de red, alertando a los administradores .

* **Seguridad Física:** Proteger el hardware corporativo e infraestructura mediante controles como puertas con cerradura, sensores de detección de intrusión física, monitoreo ambiental (temperatura/humedad) y vigilancia perimetral  .

**Formulación de Políticas Administrativas**

La seguridad técnica es ineficaz sin reglas administrativas claras:

* **Políticas de Seguridad de la Información:** Documentos formales que fijan las directrices administrativas sobre el uso correcto de los activos tecnológicos y las sanciones aplicables por incumplimiento .

* **Política de Uso Aceptable (PUA / AUP):** Acuerdo explícito que establece qué actividades están permitidas y cuáles prohibidas al utilizar la tecnología de la empresa  . Prohíbe prácticas como compartir credenciales, alojar proyectos personales o enviar mensajes masivos no autorizados .

* **Equilibrio entre Seguridad y Usabilidad:** Las medidas de seguridad no deben obstaculizar el trabajo diario . Si un control técnico es demasiado estricto o complejo, los usuarios buscarán formas informales de eludirlo, introduciendo mayores riesgos de seguridad .

---

**4\. Seguridad de la Información Personal y Privacidad (Subcapítulos 8.7 y 9.5)**

**Protección de la Información Personalmente Identificable (PII)**

La **privacidad** se define como la capacidad de un individuo para controlar la información sobre sí mismo . Dentro del entorno administrativo, se debe resguardar la **Información Personalmente Identificable (PII)** de clientes y empleados, que incluye :

* Nombres completos y números de identificación personal (DPI/CUI) .

* Fechas de nacimiento y registros biométricos .

* Expedientes médicos, antecedentes laborales e información financiera o bancaria .

**Principios de Información Justa y Cumplimiento Normativo**

Las organizaciones deben asumir la responsabilidad legal y ética de proteger los datos recolectados mediante marcos de **Principios de Información Justa**  :

* **Consentimiento e Identificación de Propósitos:** Informar al usuario para qué se usarán sus datos antes de recopilarlos .

* **Recopilación y Uso Limitado:** Recabar únicamente los datos necesarios y no utilizarlos para fines distintos a los autorizados sin un nuevo consentimiento .

* **Salvaguardias de Protección:** Implementar medidas de seguridad proporcionales a la sensibilidad de los datos almacenados .

**Buenas Prácticas de Resguardo para Empresas e Individuos**

* **Para Organizaciones:** Desarrollar planes de respuesta a incidentes, mantener sistemas actualizados, cifrar medios portátiles o bases de datos, asegurar servicios en la nube y capacitar continuamente al personal en concienciación de ciberseguridad .

* **Para Particulares:** Utilizar contraseñas largas, complejas y únicas, cambiar las claves periódicamente, activar la autenticación de dos factores (2FA/MFA) y mantener una postura escéptica frente a enlaces o correos desconocidos.

