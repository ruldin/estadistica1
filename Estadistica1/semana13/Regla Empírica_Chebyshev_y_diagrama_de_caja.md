1\. **Regla Empírica**  
Es una guía que indica la proporción aproximada de datos que caen dentro de determinado número de desviaciones estándar respecto a la media.

* **Condición de aplicación:** Se utiliza cuando la distribución de los datos en un histograma o gráfico es **aproximadamente simétrica** o en forma de campana.  
* **Porcentajes clave:**  
  * **\~68%** de las observaciones se encuentran a una desviación estándar de la media ($\bar{x}\pm 1S$).  
  * **\~95%** de las observaciones se ubican a dos desviaciones estándar de la media ($\bar{x}\pm 2S$).  
  * **\~99.7%** (prácticamente todas las observaciones) caen dentro de tres desviaciones estándar de la media ($\bar{x}\pm 3S$).

---

2\. **Teorema o Regla de Chebyshev**  
Es un principio estadístico más general que establece un límite mínimo garantizado de observaciones contenidas alrededor de la media.

* **Condición de aplicación:** Se aplica a **cualquier conjunto de datos, sin importar la forma de la distribución** (incluso si la distribución es sesgada o asimétrica)89.  
* **Regla principal:** Establece que **al menos 3/4 partes (el 75%)** de las observaciones estarán contenidas dentro de dos desviaciones estándar alrededor de la media ($\bar{x}\pm 2S$).

---

3\. **Diagrama de Caja (Boxplot)**  
Es una técnica gráfica descriptiva que permite visualizar de manera rápida la variabilidad, la simetría y las características principales de una variable, así como comparar varios conjuntos de datos simultáneamente.

* **Los 5 números básicos:** Su construcción se apoya en el resumen de cinco medidas de posición:  
  * **Valor Mínimo**  
  * **Primer Cuartil (**${C}_{1}$ **o** ${Q}_{1}$**):** Acumula el 25% de los datos.  
  * **Mediana (**${C}_{2}$ **o** ${Q}_{2}$**):** Punto central que divide la distribución al 50%.  
  * **Tercer Cuartil (**${C}_{3}$ **o** ${Q}_{3}$**):** Acumula el 75% de los datos.  
  * **Valor Máximo**  
* **Estructura del gráfico:**  
  * **Caja central:** Se dibuja un rectángulo cuyos extremos van de ${C}_{1}$ a ${C}_{3}$, marcando la mediana con una línea vertical dentro de la caja.   
  * La longitud de la caja es el **Rango Intercuartil** ($RIC={C}_{3}-{C}_{1}$).  
  * **Bigotes:** Son líneas que se extienden a los lados hasta límites calculados como ${L}_{1}={C}_{1}-1.5(RIC)$ a la izquierda y ${L}_{2}={C}_{3}+1.5(RIC)$ a la derecha.  
  * **Datos Anómalos (Outliers):** Cualquier valor que se ubique más allá de las líneas límite se marca con un asterisco o símbolo separado, identificándolo explícitamente como una observación atípica

**Explicación:**  
Para entender mejor cómo interactúan la **Regla Empírica**, el **Teorema de Chebyshev** y el **Diagrama de Caja**, trabajaremos con un ejemplo numérico concreto paso a paso.  
---

**Paso 1: El conjunto de datos**  
Supongamos que un administrador mide el tiempo de atención en minutos para una muestra de $n=10$ clientes en una sucursal:

$Datos\ ordenados(minutos):10,12,14,15,16,18,20,22,24,29$  
---

**Paso 2: Cálculo de la Media (**$\bar{x}$**) y la Desviación Estándar (**$S$**)**

1. **Media muestral (**$\bar{x}$**):**34  
2. $\bar{x}=\frac{\sum\limits_{}^{}{x}_{i}}{n}=\frac{10+12+14+15+16+18+20+22+24+29}{10}=\frac{180}{10}=18\ minutos$  
3.   
4. **Varianza muestral (**${S}^{2}$**) y Desviación Estándar (**$S$**):**25  
   * Suma de desviaciones al cuadrado: \$(10-18)^2 \+ (12-18)^2 \+ \\dots \+ (29-18)^2 \= 306\$  
   * Varianza: ${S}^{2}=\frac{306}{10-1}=\frac{306}{9}=34$2  
   * Desviación estándar: $S=\sqrt{34}\approx 5.83\ minutos$

---

**Paso 3: Aplicación de la Regla Empírica y Teorema de Chebyshev**  
**A. Regla Empírica (Aplica si la distribución es aproximadamente simétrica)**6

* **Intervalo a 1 desviación estándar (**$\bar{x}\pm 1S$**):**6  
* $18\pm 5.83=(12.17,23.83)$  
  * *Verificación en los datos:* Los valores que caen dentro de este rango son $\{14,15,16,18,20,22\}$ (6 de 10 datos \= **60%**, muy cercano al \~68% estimado).  
* **Intervalo a 2 desviaciones estándar (**$\bar{x}\pm 2S$**):**  
* $18\pm 2(5.83)=18\pm 11.66=(6.34,29.66)$  
  * *Verificación en los datos:* Todos los valores ($10$ a $29$) caen dentro del intervalo (10 de 10 datos \= **100%**, la regla predice \~95%).

**B. Teorema de Chebyshev (Aplica a cualquier tipo de distribución)**

* Para $k=2$ desviaciones estándar, el teorema garantiza que **al menos el 75%** ($1-1/{2}^{2}=3/4$) de las observaciones estarán contenidas entre $6.34$ y $29.66$ minutos.  
* En nuestro conjunto real, el **100%** de los datos se encuentra en ese intervalo, cumpliendo la garantía mínima del 75%.

---

**Paso 4: Construcción del Diagrama de Caja (Resumen de 5 números)**  
Para elaborar la gráfica de caja requerimos las cinco medidas de posición:

1. **Valor Mínimo:** $10$  
2. **Primer Cuartil (**${C}_{1}$ **o** ${Q}_{1}$**):** Mediana de la mitad inferior $\{10,12,14,15,16\}$ $\rightarrow$ ${C}_{1}=14$.  
3. **Mediana (**${C}_{2}$ **o** $\tilde{m}$**):** Promedio de los dos datos centrales $\frac{16+18}{2}$ $\rightarrow$ $\tilde{m}=17$.  
4. **Tercer Cuartil (**${C}_{3}$ **o** ${Q}_{3}$**):** Mediana de la mitad superior $\{18,20,22,24,29\}$ $\rightarrow$ ${C}_{3}=22$.  
5. **Valor Máximo:** $29$

**Cálculo del Rango Intercuartil (RIC) y Límites de Atípicos:**

* **Rango Intercuartil:**12  
* $RIC={C}_{3}-{C}_{1}=22-14=8\ minutos$  
*   
* **Límite inferior para la línea o bigote (**${L}_{1}$**):**  
* ${L}_{1}={C}_{1}-1.5(RIC)=14-1.5(8)=14-12=2$  
*   
* **Límite superior para la línea o bigote (**${L}_{2}$**):**  
* ${L}_{2}={C}_{3}+1.5(RIC)=22+1.5(8)=22+12=34$  
* 

**Estructura final del gráfico:**

* **La Caja:** Se dibuja desde ${C}_{1}=14$ hasta ${C}_{3}=22$, marcando una línea vertical interna en la mediana $\tilde{m}=17$14\.  
* **Los Bigotes:** La línea izquierda se extiende hasta el valor mínimo real ($10$) y la derecha hasta el máximo real ($29$).  
* **Datos Anómalos (Outliers):** Como ningún dato es menor que $2$ ni mayor que $34$, **no existen observaciones atípicas** en esta muestra

**Ejemplo 2 con valores atípicos:**

Tomando la misma variable de tiempo de atención (en minutos) para una muestra de $n=10$ clientes, introduciremos una observación atípica. Supongamos que un problema en el sistema causó que un cliente esperara **50 minutos**, mientras que los demás mantuvieron tiempos habituales:

$Datos\ ordenados(minutos):10,12,14,15,16,18,20,22,24,50$  
---

**Paso 1: Efecto del dato atípico en la Media vs. Mediana**

* **Mediana (**$\tilde{m}$**):** Es el promedio de los valores centrales 5 y 6:  
* $\tilde{m}=\frac{16+18}{2}=17minutos$  
* *La mediana se mantiene idéntica al ejemplo anterior (17 min) porque no se deja afectar por valores extremos.*  
* **Media (**$\bar{x}$**):**  
* $\bar{x}=\frac{10+12+14+15+16+18+20+22+24+50}{10}=\frac{201}{10}=20.1minutos$  
* *La media subió de 18 a 20.1 minutos debido a que es altamente sensible a valores extremos.*

---

**Paso 2: Obtención de los 5 números básicos**

1. **Mínimo:** $10$  
2. **Primer Cuartil (**${C}_{1}$**):** Mediana de la mitad inferior $\{10,12,14,15,16\}$ $\rightarrow$ ${C}_{1}=14$  
3. **Mediana (**${C}_{2}$**):** $\tilde{m}=17$  
4. **Tercer Cuartil (**${C}_{3}$**):** Mediana de la mitad superior $\{18,20,22,24,50\}$ $\rightarrow$ ${C}_{3}=22$  
5. **Máximo:** $50$

---

**Paso 3: Cálculo del Rango Intercuartil (RIC) y Límites**

* **Rango Intercuartil:**  
* $RIC={C}_{3}-{C}_{1}=22-14=8\ minutos$  
* **Límite inferior para la línea (**${L}_{1}$**):**  
* ${L}_{1}={C}_{1}-1.5(RIC)=14-1.5(8)=2$  
* **Límite superior para la línea (**${L}_{2}$**):**  
* ${L}_{2}={C}_{3}+1.5(RIC)=22+1.5(8)=34$  
  


---

**Paso 4: Identificación del Dato Atípico (Outlier)**  
Comparamos las observaciones con los límites calculados:

* Ningún valor es menor a ${L}_{1}=2$.  
* El valor $50$ sobrepasa el límite superior de ${L}_{2}=34$ ($50>34$).

Por lo tanto, **el valor 50 se clasifica formalmente como un dato anómalo o atípico (outlier)**.  
---

**Paso 5: Cómo cambia el dibujo del Diagrama de Caja**

1. **La Caja:** Se construye exactamente igual, desde ${C}_{1}=14$ hasta ${C}_{3}=22$, marcando la mediana en $17$.  
2. **Bigote Izquierdo:** Se extiende desde ${C}_{1}=14$ hacia la izquierda hasta el valor mínimo real ($10$).  
3. **Bigote Derecho (Regla clave con atípicos):** **No se extiende hasta 50**. La línea del bigote solo se traza hasta el **último valor no atípico dentro del límite** ${L}_{2}=34$, que en este caso es $24$.  
4. **Marcación del Atípico:** La observación de $50$ se grafica como un punto aislado o asterisco (`*`) separado a la derecha de la gráfica.

                    \+-----+-----+  
   |--------------|       |       |--------------|                    \*  
  10             14    17    22             24                   50  
(Mínimo)         C1  Mediana C3          (Máx no atípico)     (Outlier)

