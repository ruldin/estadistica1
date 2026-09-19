// ===== Semana 10 Ciberseguridad — lógica interactiva (100% cliente) =====
let XP = 0;
function addXP(n){XP+=n;const a=document.getElementById('statExp');if(a)a.textContent=XP;const b=document.getElementById('quizScore');if(b)b.textContent='XP: '+XP;}
window.addEventListener('scroll',()=>{
  const h=document.documentElement;const p=h.scrollTop/(h.scrollHeight-h.clientHeight)*100;
  const bar=document.getElementById('progressBar');if(bar)bar.style.width=p+'%';
  document.querySelectorAll('.nav-links a').forEach(a=>{
    const s=document.querySelector(a.getAttribute('href'));if(!s)return;
    const r=s.getBoundingClientRect();a.classList.toggle('active',r.top<150&&r.bottom>150);
  });
});
const ham=document.getElementById('hamburger');if(ham)ham.onclick=()=>document.getElementById('navLinks').classList.toggle('open');

// ---- Misión 1: Tríada CIA ----
const CIA={
  c:{t:'🔒 Confidencialidad',falla:'Falla: un empleado comparte su contraseña del ERP por WhatsApp. Un atacante lee planillas y precios de compra.',impacto:'Impacto gerente: fuga de información → competencia ajusta precios y pierdes licitaciones. Pilar roto: acceso a no autorizados.',tip:'Defensa: Need to Know + doble factor (2FA) + Política de Uso Aceptable (PUA).'},
  i:{t:'✅ Integridad',falla:'Falla: un virus altera facturas electrónicas (DTE) y cambia montos antes de enviar a la SAT.',impacto:'Impacto gerente: multas SAT + desconfianza de clientes. Los datos ya no son confiables para decidir.',tip:'Defensa: antivirus + control de cambios + copias de seguridad cifradas.'},
  d:{t:'⚡ Disponibilidad',falla:'Falla: un DDoS tumba tu tienda en línea el día de pago de quincena.',impacto:'Impacto gerente: Q0 ventas por horas + clientes molestos en redes. La info existe pero nadie la puede usar.',tip:'Defensa: doble enlace + UPS + plan de continuidad del negocio.'}
};
function showCIA(k){
  document.querySelectorAll('.cia-card').forEach(c=>c.classList.remove('active-c','active-i','active-d'));
  const el=document.getElementById('cia-'+k);if(el)el.classList.add(k==='c'?'active-c':k==='i'?'active-i':'active-d');
  const m=CIA[k];
  document.getElementById('ciaDetail').innerHTML=`<h3>${m.t}</h3><p>💥 <b>${m.falla}</b></p><p>📉 ${m.impacto}</p><p>🛡️ <b>${m.tip}</b></p>`;
  addXP(5);
}
function ciaQuiz(ok,btn){
  const fb=document.getElementById('ciaFb');
  document.querySelectorAll('#ciaQuiz button').forEach(b=>{b.classList.remove('good','bad');b.style.cssText='';});
  if(ok){btn.style.cssText='background:rgba(16,185,129,.2);border-color:#10b981;color:#6ee7b7';fb.innerHTML='✅ ¡Correcto! Disponibilidad = que el sistema esté accesible cuando el gerente lo necesita. <b>+10 XP</b>';addXP(10);}
  else{btn.style.cssText='background:rgba(239,68,68,.2);border-color:#ef4444';fb.textContent='❌ No: confidencialidad es “quién puede ver”, integridad es “que no lo alteren”. Caída = disponibilidad.';}
}

// ---- Misión 2: Malware lab ----
const MAL={
  virus:{n:'🦠 Virus',como:'Necesita que abras un archivo (factura.xlsm infectada). Se replica y borra reportes.',costo:'Q6,000 en horas-hombre + multas SAT por no declarar a tiempo.'},
  worm:{n:'🪱 Gusano (Worm)',como:'Se propaga SOLO por la red, sin que nadie haga clic. En 10 min infecta las 12 PCs.',costo:'Toda la LAN caída 2 días ≈ Q15,000 en ventas + soporte.'},
  spy:{n:'🕵️ Spyware',como:'Silencioso: registra teclas y roba usuarios/claves bancarias por semanas.',costo:'Vacían Q25,000 de la cuenta nómina antes de notarlo.'},
  ransom:{n:'🔐 Ransomware',como:'Cifra el servidor contable y deja nota: “paga 1 BTC o pierdes todo”.',costo:'Rescate + 5 días parados ≈ Q40,000. Con backup externo: Q0 rescate.'},
  ddos:{n:'🌊 DDoS',como:'10,000 bots piden tu catálogo a la vez. El servidor se satura y clientes reales ven error.',costo:'6 horas sin vender en línea ≈ Q18,000 + daño reputacional.'}
};
const malOn={virus:false,worm:false,spy:false,ddos:false,ransom:false};
function toggleMal(k){
  malOn[k]=!malOn[k];
  document.getElementById('mal-'+k).classList.toggle('on',malOn[k]);
  renderMal();addXP(3);
}
function renderMal(){
  const act=Object.keys(malOn).filter(k=>malOn[k]);
  const box=document.getElementById('malDetail');
  if(!act.length){box.innerHTML='👆 Activa al menos un malware para ver <b>cómo falla</b> el negocio y cuánto cuesta.';return;}
  box.innerHTML=act.map(k=>`<p><b>${MAL[k].n}:</b> ${MAL[k].como}<br>💸 <b>${MAL[k].costo}</b></p>`).join('')+
  `<p class="small">🛡️ Lección gerente: antivirus + parches + <b>backup cifrado fuera de la empresa</b> + capacitación. Ningún software basta sin personas entrenadas.</p>`;
  if(malOn.ransom&&!malOn.spy)box.innerHTML+=`<p>💡 Activa también el <b>spyware</b>: así entra el ransomware (primero espían, luego cifran).</p>`;
}

// ---- Misión 3: DDoS slider ----
function ddosCalc(){
  const bots=+document.getElementById('bots').value;
  document.getElementById('botsVal').textContent=bots.toLocaleString();
  const cap=2000; // capacidad servidor pyme
  const pct=Math.min(100,Math.round(bots/cap*60));
  const health=Math.max(0,100-Math.round(bots/cap*100));
  document.getElementById('ddosFill').style.width=Math.min(100,pct)+'%';
  document.getElementById('serverFill').style.width=health+'%';
  const v=document.getElementById('ddosVerdict');
  if(bots<800){v.style.background='rgba(16,185,129,.15)';v.textContent='🟢 Servidor estable: filtra tráfico falso sin problema.';}
  else if(bots<2500){v.style.background='rgba(245,158,11,.15)';v.textContent='🟡 Servidor lento: clientes esperan 8s, algunos abandonan el carrito.';}
  else{v.style.background='rgba(239,68,68,.15)';v.textContent='🔴 ¡CAÍDO! DoS/DDoS exitoso: 0 ventas + quejas. Necesitas CDN + firewall + ISP con mitigación.';}
}

// ---- Misión 4: Detector phishing (5 mensajes) ----
const PHISH=[
  {de:'WhatsApp +502 5XXX-XXXX “Primo en USA”',txt:'“Hola primo, soy yo, cambié de número. Me retuvieron una encomienda en aduana, deposita Q1,500 a esta cuenta y mañana te pago. No le digas a nadie.”',fraude:true,s:'Señales: número desconocido, urgencia, secreto, pago a cuenta personal, “encomienda retenida” = modalidad típica GT.'},
  {de:'empleos.gt.real@gmail.com',txt:'“¡Felicidades! Ganarás Q8,000/mes solo dando likes en TikTok. Solo envíanos el código de 6 dígitos que llegó a tu WhatsApp para activarte.”',fraude:true,s:'Señales: sueldo irreal por likes + piden tu código de verificación = te roban la cuenta de WhatsApp.'},
  {de:'notificaciones@sat.gob.gt (verificado)',txt:'“Le recordamos el calendario de vencimientos del IVA en Agencia Virtual. Para dudas llame al 2321-XXXX o visite su agencia.” Sin enlaces ni adjuntos.',fraude:false,s:'Señales de legítimo: no pide clic urgente, no trae adjunto .zip, remite a canales oficiales.'},
  {de:'“Banco Industrial” <seguridad-biurgente.top>',txt:'“SU BANCA EN LÍNEA HA SIDO BLOQUEADA. Actualice su token aquí en 24h o se suspenderá su cuenta empresarial.” + botón.',fraude:true,s:'Señales: dominio falso (.top), mayúsculas urgentes, enlace a login idéntico (spoofing) para robar usuario + token.'},
  {de:'Contabilidad interna <maria@tuempresa.com>',txt:'“Adjunto reporte de viáticos POS de Zona 10 para revisión del gerente. (Archivo interno, sin links externos).”',fraude:false,s:'Legítimo probable: remitente interno conocido, sin urgencia ni links raros. Igual verifica por otro canal si hay montos.'}
];
let phi=0,phiOk=0,phiDone={};
function renderPhish(){
  const box=document.getElementById('phishBox');if(!box)return;
  const m=PHISH[phi];
  box.innerHTML=`<div class="msg"><div class="from">📩 De: <b>${m.de}</b> (${phi+1}/${PHISH.length})</div><div class="body">“${m.txt}”</div>
  <div class="msg-btns"><button onclick="phishVote(false)">✅ Legítimo</button><button onclick="phishVote(true)">🚨 Fraude</button></div>
  <div class="signal" id="phishFb">Aciertos: ${phiOk} · Decide como gerente: ¿autorizas clic/pago o lo reportas?</div></div>`;
}
function phishVote(v){
  const m=PHISH[phi];const fb=document.getElementById('phishFb');
  const key=phi;
  if(v===m.fraude){if(!phiDone[key]){phiOk++;addXP(10);}phiDone[key]=true;
    fb.innerHTML=`✅ Correcto: ${m.fraude?'ES FRAUDE.':'ES LEGÍTIMO.'} ${m.s} <b>+10 XP</b><br><button class="btn small ghost" style="margin-top:.5rem" onclick="phishNext()">Siguiente mensaje →</button>`;}
  else{fb.innerHTML=`❌ Cuidado gerente: ${m.fraude?'SÍ es fraude.':'NO es fraude.'} ${m.s}<br><button class="btn small ghost" style="margin-top:.5rem" onclick="phishNext()">Entendido, siguiente →</button>`;}
}
function phishNext(){phi=(phi+1)%PHISH.length;renderPhish();}

// ---- Misión 5: Skimming cajero ----
let skimFound={};
function skim(k){
  skimFound[k]=true;
  document.getElementById('skim-'+k).classList.add('found');
  const n=Object.keys(skimFound).length;
  const fb=document.getElementById('skimFb');
  const info={slot:'Ranura con skimmer: se siente floja/sobresaliente y copia la banda magnética.',cam:'Microcámara en el teclado: graba tu PIN. ¡Tapa siempre con la mano!',sticker:'Calcomanía falsa “fuera de servicio / llame aquí”: te desvía a un número de estafadores.'};
  fb.innerHTML=`✅ Hallazgo ${n}/3: <b>${info[k]}</b>${n===3?'<br>🏆 ¡Auditoría completa! Regla gerente: jala la ranura, tapa el PIN, usa cajeros internos y alertas SMS. <b>+20 XP</b>':''}`;
  if(n===3)addXP(20);else addXP(5);
}

// ---- Misión 6: Ransomware timeline ----
let rStep=0;
const RSTEPS=['1️⃣ Clic en “DTE pendiente SAT.zip” → se ejecuta el ransomware.','2️⃣ Cifra servidor contable + planillas en 20 min. Pantalla: “TUS ARCHIVOS ESTÁN BLOQUEADOS”.','3️⃣ Piden rescate Q30,000 en cripto en 48h o borran todo.','4️⃣ Decisión gerente: ❌ NO PAGAR (financia crimen, 40% no recupera) → restaurar backup externo + PUA + denuncia.'];
function rNext(){
  if(rStep<RSTEPS.length){
    const d=document.createElement('div');d.className='tstep unlocked done';d.textContent=RSTEPS[rStep];
    document.getElementById('ransomTime').appendChild(d);rStep++;addXP(5);
    if(rStep===RSTEPS.length)document.getElementById('ransomFb').innerHTML='✅ Lección: con <b>backup cifrado externo + capacitación</b> el rescate vale Q0. Sin backup, la empresa quiebra. <b>+10 XP</b>';
  }
}
function rReset(){rStep=0;document.getElementById('ransomTime').innerHTML='';document.getElementById('ransomFb').innerHTML='';}

// ---- Quiz ----
const QUIZ=[
  {q:'1. Un atacante lee planillas porque alguien compartió su clave. ¿Qué pilar CIA se rompió?',o:['Disponibilidad','Confidencialidad','Integridad','Ninguno'],a:1},
  {q:'2. ¿Qué malware cifra archivos y pide rescate?',o:['Spyware','Gusano','Ransomware','Virus simple'],a:2},
  {q:'3. ¿Qué malware se propaga SOLO por la red sin clic del usuario?',o:['Gusano (Worm)','Virus clásico','Spoofing','Phishing'],a:0},
  {q:'4. SMS “Su banca ha sido bloqueada, actualice su token aquí” es típicamente...',o:['Mensaje legítimo','Phishing + spoofing','Backup','VPN'],a:1},
  {q:'5. Te piden el código de 6 dígitos de WhatsApp por una oferta de empleo. Debes...',o:['Enviarlo rápido','Ignorar y reportar, jamás compartirlo','Reenviarlo a amigos','Pagar Q100'],a:1},
  {q:'6. Como administrador, la mejor defensa integral es...',o:['Solo antivirus','Antivirus + PUA + capacitación + backups externos','Desconectar todo','Pagar rescates'],a:1}
];
let qi=0,qs=0;
function renderQuiz(){
  const box=document.getElementById('quizBox');if(!box)return;
  if(qi>=QUIZ.length){box.classList.add('hidden');const d=document.getElementById('diploma');d.classList.remove('hidden');
    document.getElementById('dipText').textContent=`Sacaste ${qs}/${QUIZ.length}. XP total: ${XP}. Ya puedes defender una Política de Uso Aceptable ante tu junta directiva.`;return;}
  const it=QUIZ[qi];
  box.innerHTML=`<div class="q"><h3>${it.q}</h3>${it.o.map((o,i)=>`<button onclick="answer(${i})">${o}</button>`).join('')}</div><p>Pregunta ${qi+1} de ${QUIZ.length} · Aciertos: ${qs}</p>`;
}
function answer(i){
  const btns=document.querySelectorAll('#quizBox button');
  btns.forEach((b,j)=>{if(j===QUIZ[qi].a)b.classList.add('correct');});
  if(i===QUIZ[qi].a){qs++;addXP(10);}else{btns[i].classList.add('wrong');}
  setTimeout(()=>{qi++;renderQuiz();},800);
}

// ---- Glosario ----
const GLOS=[['Ciberseguridad','Protección de activos digitales contra robo, alteración o interrupción.'],['Tríada CIA','Confidencialidad + Integridad + Disponibilidad. El modelo base.'],['Malware','Software malicioso: virus, gusanos, spyware, ransomware.'],['Ransomware','Cifra archivos y exige rescate. Se frena con backups externos.'],['DDoS','Miles de equipos inundan tu servidor hasta tumbarlo.'],['Ingeniería social','Manipulación psicológica para que TÚ entregues la clave.'],['Phishing','Mensajes falsos que suplantan SAT/bancos para robar datos.'],['Spoofing','Falsificar remitente (IP, SMS, dominio) para parecer confiable.'],['Skimming','Aparato en cajeros/POS que clona tarjetas + cámara roba PIN.'],['PUA','Política de Uso Aceptable: reglas de conducta digital de la empresa.'],['Backup 3-2-1','3 copias, 2 medios, 1 externa/cifrada. Tu seguro contra ransomware.'],['2FA','Doble factor: contraseña + código. Frena el 90% de robos de cuenta.']];
function renderGlos(f=''){
  const g=document.getElementById('glos');if(!g)return;
  g.innerHTML=GLOS.filter(([k])=>k.toLowerCase().includes(f.toLowerCase())).map(([k,v])=>`<div class="g-item"><b>${k}</b><p>${v}</p></div>`).join('');
}
function filterGlos(){renderGlos(document.getElementById('glosSearch').value);}

/* ============ MÓDULO EJERCICIO EN PAREJAS ============ */
const CASOS=[
  {id:'A',titulo:'Caso A · Skimming en POS — Tienda Zona 11 🏧',ctx:'“Comercial La Torre, S.A.” (Zona 11) recibe 3 contracargos: clientes dicen que tras pagar con tarjeta en su POS les vaciaron la cuenta. Sospechan terminal manipulada o empleado que fotografió tarjetas + PIN a la vista.',meta:['👥 Clientes retail','🎯 Foco: robo de datos tarjeta','💰 Techo defensa: Q3,000','📍 Zona 11, alto flujo'],guia:['Copiloto: ¿esto es malware o manipulación física + descuido humano?','¿Qué pilar CIA se rompió (confidencialidad del PIN/datos)?','¿POS chip + tapar PIN + cámaras + rotar personal evita que se repita?'],ref:'💰 Referencia: POS con chip/contactless Q1,200 · Cámaras Q900 · Capacitación PUA Q500 · Seguro contracargos 3% venta.',ataque:'Skimming / clonación en POS'},
  {id:'B',titulo:'Caso B · WhatsApp secuestrado — Importadora Escuintla 💬',ctx:'Al gerente le llega WhatsApp de su “socio” (foto real) pidiendo Q9,000 urgente a una cuenta nueva por un contenedor retenido. Era una cuenta clonada; además le piden el código de 6 dígitos “para verificar”. La asistente casi lo envía.',meta:['👥 10 empleados','🎯 Ingeniería social pura','💰 Casi pierden Q9,000','📍 Escuintla / puerto'],guia:['Copiloto: ¿qué señales (urgencia, secreto, cuenta nueva, código) delatan fraude?','¿Qué pilar se ataca: confidencialidad de credenciales?','¿Qué regla PUA pondrían: verificar por llamada conocida + jamás compartir códigos?'],ref:'💰 Referencia: Verificación en 2 pasos Q0 · Capacitación Q500 · Línea de verificación Q200/mes.',ataque:'Ingeniería social por WhatsApp'},
  {id:'C',titulo:'Caso C · Falso correo SAT — Ransomware en oficina contable 📧',ctx:'Contadora abre “SAT: omisos IVA/DTE pendiente de auditoría” con adjunto .zip. A los 20 min el servidor contable muestra “archivos cifrados, pague Q30,000”. No hay backup externo, solo USB conectado (también cifrado).',meta:['👥 Contabilidad 6 personas','🎯 Phishing → ransomware','💰 Rescate Q30,000','📍 Ciudad de Guatemala'],guia:['Copiloto: ¿por qué el .zip + urgencia SAT es phishing clásico?','¿Qué pilares caen: integridad (datos alterados) + disponibilidad (todo bloqueado)?','¿Backup 3-2-1 externo habría hecho el rescate = Q0?'],ref:'💰 Referencia: Backup nube cifrado Q300/mes · Antivirus empresarial Q600/año · Simulacro phishing Q400.',ataque:'Phishing SAT → Ransomware'},
  {id:'D',titulo:'Caso D · Spoofing bancario — Tesorería pyme 🏦',ctx:'El tesorero recibe SMS “G&T: su token empresarial será suspendido, actualícelo aquí” con link a login idéntico al real. Ingresa usuario, clave y token. Minutos después salen 2 transferencias por Q14,000.',meta:['👥 Tesorería','🎯 Spoofing + robo credenciales','💰 Pérdida Q14,000','📍 Banca local GT'],guia:['Copiloto: ¿cómo verificar el dominio real vs. falso antes de loguearse?','¿Qué pilar se rompió primero (confidencialidad) y qué cayó después (integridad del saldo/disponibilidad del dinero)?','¿2FA por app + límites de transferencia + doble firma habrían frenado el daño?'],ref:'💰 Referencia: Token app Q0 · Límites y doble firma Q0 · Capacitación Q500 · Seguro fraude Q350/mes.',ataque:'Spoofing bancario (phishing)'}
];
const ATAQUES=['Skimming / clonación en POS','Ingeniería social por WhatsApp','Phishing SAT → Ransomware','Spoofing bancario (phishing)','Virus por USB','Ataque DDoS','Gusano de red','Robo de identidad'];
const PILARES=['Confidencialidad','Integridad','Disponibilidad','Confidencialidad + Integridad','Integridad + Disponibilidad','Los tres (CIA completo)'];
let casoActual=0;const respuestas=[{},{},{},{}];
function irCaso(i){guardarBorrador();casoActual=i;document.querySelectorAll('.cnav').forEach(b=>b.classList.toggle('active',+b.dataset.case===i));renderCaso();document.getElementById('casoBox').scrollIntoView({behavior:'smooth',block:'start'});}
// Guarda el formulario actual sin validar, para no perder el avance al navegar.
function guardarBorrador(){
  try{
    const g=id=>{const el=document.getElementById(id);return el?el.value.trim():'';};
    if(!document.getElementById('f_just'))return;
    const prev=respuestas[casoActual]||{};
    respuestas[casoActual]={ataque:g('f_ataque')||prev.ataque,pilar:g('f_pilar')||prev.pilar,just:g('f_just'),debate:g('f_debate'),perd:g('f_perd')?+g('f_perd'):prev.perd,prev:g('f_prev')?+g('f_prev'):prev.prev,medida:g('f_medida')||prev.medida,fact:g('f_fact'),roi:prev.roi,acierto:prev.acierto,ia:prev.ia||null};
  }catch(e){}
}
// Avance al siguiente caso con validación suave de mentoría IA: recomienda consultar,
// pero NUNCA bloquea (si no hay conexión o no hay key, el alumno continúa).
function avanzarCaso(){
  guardarBorrador();
  const r=respuestas[casoActual]||{};
  const guardado=!!(r.roi&&r.just); // roi solo existe tras Guardar validado
  if(!guardado){irCaso((casoActual+1)%4);return;}
  if(r.ia&&r.ia.status==='ok'){irCaso((casoActual+1)%4);return;}
  if(r.ia&&r.ia.status==='error'){
    if(confirm('La mentoría IA no pudo conectarse en este caso, pero tu respuesta quedó guardada.\n\n¿Deseas continuar al siguiente caso de todos modos?'))irCaso((casoActual+1)%4);
    return;
  }
  // Sin mentoría aún: ofrecer consulta proactiva, con opción de continuar.
  const key=getStoredApiSettings().apiKey;
  if(!key){
    if(confirm('Aún no consultas al Mentor IA en este caso (se recomienda antes de avanzar).\n\n¿Deseas configurar tu API Key ahora? (Cancelar = continuar sin mentoría)')){openIaModal('api-config-modal');}
    else{irCaso((casoActual+1)%4);}
    return;
  }
  if(confirm('Aún no validas este caso con el Mentor IA (punto de vista + retroalimentación + consejo).\n\nAceptar = consultar al mentor ahora · Cancelar = continuar sin mentoría.')){consultarMentorIA(false);}
  else{irCaso((casoActual+1)%4);}
}
function mentorBadge(r){
  if(r&&r.ia&&r.ia.status==='ok')return '✅ Mentor consultado'+(r.ia.model?' ('+esc(String(r.ia.model).split('/').pop())+')':'');
  if(r&&r.ia&&r.ia.status==='error')return '⚠️ Sin conexión: puedes continuar';
  return '⏳ Sin consultar';
}
function liderDeCaso(i){const alt=document.getElementById('alternar')?.checked;if(!alt)return 'Piloto lidera · Copiloto debate';return (i%2===0)?'🧑‍✈️ Lidera PILOTO · 🧭 debate COPILOTO':'🧭 Lidera COPILOTO · 🧑‍✈️ debate PILOTO';}
function renderCaso(){
  const c=CASOS[casoActual],r=respuestas[casoActual];const box=document.getElementById('casoBox');if(!box)return;
  box.innerHTML=`<div class="card"><div class="case-head"><h3>${c.titulo}</h3>
   <div class="case-meta">${c.meta.map(m=>`<span>${m}</span>`).join('')}</div>
   <div style="margin-top:.5rem;font-size:.85rem">🎙️ Rol: <b>${liderDeCaso(casoActual)}</b></div></div>
   <p>${c.ctx}</p><p class="small">${c.ref}</p>
   <details class="guia"><summary>🧭 Guía del copiloto (leer en voz alta y debatir)</summary><ul>${c.guia.map(g=>`<li>${g}</li>`).join('')}</ul></details>
   <div class="fcase">
    <fieldset><legend>1️⃣ Diagnóstico del fallo (decidan juntos)</legend>
     <div class="opt-grid">
      <label>🎯 Método de fallo / ataque<select id="f_ataque">${ATAQUES.map(e=>`<option ${r.ataque===e?'selected':''}>${e}</option>`).join('')}</select></label>
      <label>🔺 Pilar CIA vulnerado<select id="f_pilar">${PILARES.map(e=>`<option ${r.pilar===e?'selected':''}>${e}</option>`).join('')}</select></label>
     </div>
     <label>🛠️ ¿Por qué es ese método y no otro? (mín. 40 caracteres)<textarea id="f_just" rows="3" placeholder="Ej. Es skimming porque hubo contracargos tras uso del POS y coincide con PIN expuesto, no con un virus masivo...">${r.just||''}</textarea></label>
     <label>🗣️ ¿Qué debatieron? ¿Hubo desacuerdo? (mín. 30 caracteres)<textarea id="f_debate" rows="2" placeholder="Ej. El copiloto pensó en virus, pero el piloto mostró que solo afectó tarjetas del POS...">${r.debate||''}</textarea></label>
    </fieldset>
    <fieldset><legend>2️⃣ Decisión administrativa (en Quetzales Q)</legend>
     <div class="budget-line">
      <label>💸 Pérdida estimada Q<input type="number" id="f_perd" min="0" value="${r.perd||''}" placeholder="Ej. 14000"></label>
      <label>🛡️ Costo prevención Q<input type="number" id="f_prev" min="0" value="${r.prev||''}" placeholder="Ej. 1500"></label>
      <label>📋 Medida estrella<select id="f_medida"><option value="">Seleccione...</option>${['PUA + capacitación anti-phishing','Doble factor (2FA) en todo','Backup 3-2-1 externo cifrado','POS chip/contactless + cámaras','Doble firma + límites bancarios','Antivirus + parches + simulacros'].map(e=>`<option ${r.medida===e?'selected':''}>${e}</option>`).join('')}</select></label>
     </div>
     <label>📊 ¿Por qué le conviene al gerente pagar la prevención? (mín. 30 caracteres)<textarea id="f_fact" rows="2" placeholder="Ej. Sí conviene: Q1,500 evita perder Q14,000; se paga solo con evitar un incidente...">${r.fact||''}</textarea></label>
     <div class="calc-box" id="calcBox">🧮 ROI prevención: se calcula al guardar (pérdida evitada ÷ costo).</div>
    </fieldset>
    <div class="case-btns"><button class="btn ghost" onclick="irCaso(${(casoActual+3)%4})">← Anterior</button><button class="btn primary" onclick="guardarCaso()">💾 Guardar caso ${CASOS[casoActual].id}</button><button class="btn ghost" onclick="avanzarCaso()">Siguiente →</button></div>
    <div id="casoMsg" class="form-msg"></div>
    <div class="mentor-box" id="mentorBox">
      <div class="mentor-head"><b>🤖 Mentoría IA · Mentor Amigo</b><span id="mentor-badge">${mentorBadge(r)}</span></div>
      <p class="small">Antes de avanzar, valida tu análisis con el mentor: te dará su <b>punto de vista</b>, <b>retroalimentación</b> y un <b>consejo gerencial</b>. La respuesta quedará en el PDF final. Si la IA falla, puedes continuar igualmente.</p>
      <div class="mentor-ai" id="mentor-inline" style="${r.ia&&r.ia.feedback?'':'display:none'}">${r.ia&&r.ia.feedback?esc(r.ia.feedback):''}</div>
      <div class="case-btns">
        <button class="btn small primary" id="btnMentor" onclick="consultarMentorIA(false)">🤖 Consultar Mentor IA</button>
        <button class="btn small ghost" onclick="openIaModal('api-config-modal')">⚙️ Configurar API Key</button>
      </div>
      <div id="mentorMsg" class="form-msg"></div>
    </div>
   </div></div>`;
}
function guardarCaso(){
  const msg=document.getElementById('casoMsg');
  const v=id=>document.getElementById(id).value.trim();
  const ataque=v('f_ataque'),pilar=v('f_pilar'),just=v('f_just'),debate=v('f_debate'),perd=+v('f_perd'),prev=+v('f_prev'),medida=v('f_medida'),fact=v('f_fact');
  const errs=[];
  if(just.length<40)errs.push('Justificación muy corta (mín. 40 caracteres).');
  if(debate.length<30)errs.push('Falta describir el debate (mín. 30 caracteres).');
  if(!(perd>0))errs.push('Estima la pérdida en Q.');
  if(!(prev>=0&&v('f_prev')!==''))errs.push('Ingresa el costo de prevención en Q.');
  if(!medida)errs.push('Elige la medida estrella.');
  if(fact.length<30)errs.push('Factibilidad muy corta (mín. 30 caracteres).');
  if(errs.length){msg.className='form-msg err';msg.innerHTML='⛔ '+errs.join('<br>⛔ ');return;}
  const roi=prev>0?(perd/prev).toFixed(1):'—';
  const acierto=ataque===CASOS[casoActual].ataque;
  const previa=respuestas[casoActual]&&respuestas[casoActual].ia?respuestas[casoActual].ia:null;
  respuestas[casoActual]={ataque,pilar,just,debate,perd,prev,medida,fact,roi,acierto,ia:previa};
  document.getElementById('calcBox').textContent=`🧮 Cada Q1 en prevención evita Q${roi} en pérdidas. ${acierto?'🎯 ¡Diagnóstico correcto del método de fallo! +25 XP':'⚠️ Diagnóstico distinto al esperado ('+CASOS[casoActual].ataque+'). Igual suma si tu justificación es sólida.'}`;
  msg.className='form-msg ok';msg.textContent=`✅ Caso ${CASOS[casoActual].id} guardado. +25 XP`;
  document.querySelector(`.cnav[data-case="${casoActual}"]`).classList.add('done');
  addXP(25);actualizarProgreso();
  // Mentoría proactiva: tras guardar, consultar al mentor IA automáticamente si hay key y aún no hay feedback.
  const s=getStoredApiSettings();
  if(s.apiKey&&!(previa&&previa.status==='ok')){
    msg.textContent+=` · 🤖 Consultando al Mentor IA...`;
    setTimeout(()=>consultarMentorIA(true),400);
  } else if(!s.apiKey){
    msg.textContent+=` · 🤖 Tip: consulta al Mentor IA abajo antes de avanzar (requiere API Key).`;
  }
}
function casosCompletos(){return respuestas.filter(r=>r.roi&&r.just&&r.ataque).length;}
function actualizarProgreso(){
  const n=casosCompletos();
  const f=document.getElementById('casesFill');if(f)f.style.width=(n/4*100)+'%';
  const t=document.getElementById('casesTxt');if(t)t.textContent=`${n}/4 casos completos`;
  validarCierre();
}
function validarCierre(){
  const g=id=>document.getElementById(id).value.trim();
  const okDatos=g('nombrePiloto').length>=5&&g('carnetPiloto').length>=5&&g('copilotoNombre').length>=5&&g('carnetCopiloto').length>=5;
  const okCasos=casosCompletos()===4;
  const okOp=g('opinionFinal').length>=50&&g('compromiso').value&&document.getElementById('declaro').checked;
  const btn=document.getElementById('btnPDF');const msg=document.getElementById('cierreMsg');
  const faltan=[];
  if(!okDatos)faltan.push('datos de la pareja');
  if(!okCasos)faltan.push(`${casosCompletos()}/4 casos`);
  if(g('opinionFinal').length<50)faltan.push('reflexión final (50+)');
  if(!g('compromiso'))faltan.push('compromiso PUA');
  if(!document.getElementById('declaro').checked)faltan.push('declaración de autoría');
  if(btn)btn.disabled=faltan.length>0;
  if(msg){msg.className='form-msg '+(faltan.length?'err':'ok');msg.textContent=faltan.length?('⏳ Falta: '+faltan.join(' · ')):'✅ Todo listo. Genera tu PDF para Canvas.';}
  return !faltan.length;
}
['nombrePiloto','carnetPiloto','copilotoNombre','carnetCopiloto','fechaClase','opinionFinal','compromiso','declaro','alternar'].forEach(id=>{
  document.addEventListener('input',e=>{if(e.target&&e.target.id===id)validarCierre();});
  document.addEventListener('change',e=>{if(e.target&&e.target.id===id){if(id==='alternar')renderCaso();validarCierre();}});
});
/* ============ MENTORÍA IA (OpenRouter, 100% cliente) ============ */
// Mismas claves que ambos portales: la key configurada en Estadística/Informática se reutiliza aquí.
const API_STORAGE_KEY_BIAS='bias-lab-settings';
const API_STORAGE_KEY_GLOBAL='openrouter_settings';
const DEFAULT_API_URL='https://openrouter.ai/api/v1/chat/completions';
const DEFAULT_MODEL='inclusionai/ling-3.0-flash-fin:free';
function getStoredApiSettings(){
  try{
    const raw=localStorage.getItem(API_STORAGE_KEY_BIAS)||localStorage.getItem(API_STORAGE_KEY_GLOBAL);
    if(raw){const p=JSON.parse(raw);return{apiKey:p.apiKey||'',apiUrl:p.apiUrl||DEFAULT_API_URL,model:p.model||DEFAULT_MODEL};}
  }catch(e){}
  return{apiKey:'',apiUrl:DEFAULT_API_URL,model:DEFAULT_MODEL};
}
function openIaModal(id){const el=document.getElementById(id);if(el){el.style.display='flex';if(id==='api-config-modal')syncApiUi();}}
function closeIaModal(id){const el=document.getElementById(id);if(el)el.style.display='none';}
function syncApiUi(){
  const s=getStoredApiSettings();
  const k=document.getElementById('cfg-api-key');if(k&&!k.value)k.value=s.apiKey;
  const u=document.getElementById('cfg-api-url');if(u&&!u.value)u.value=s.apiUrl;
  const m=document.getElementById('cfg-model-select');
  if(m){const opts=Array.from(m.options).map(o=>o.value);m.value=opts.includes(s.model)?s.model:opts[0];}
  const ok=!!(s.apiKey&&s.apiKey.trim());
  const badge=document.getElementById('ia-global-badge');if(badge)badge.textContent=ok?('✅ IA lista ('+s.model.split('/').pop()+')'):'⚠️ IA sin configurar';
  const nav=document.getElementById('nav-api-badge');if(nav)nav.textContent=ok?'Conectada':'Pendiente';
}
function saveApiSettings(){
  const k=(document.getElementById('cfg-api-key').value||'').trim();
  const u=(document.getElementById('cfg-api-url').value||'').trim()||DEFAULT_API_URL;
  const m=(document.getElementById('cfg-model-select').value||'').trim()||DEFAULT_MODEL;
  const payload={apiKey:k,apiUrl:u,model:m};
  try{localStorage.setItem(API_STORAGE_KEY_BIAS,JSON.stringify(payload));localStorage.setItem(API_STORAGE_KEY_GLOBAL,JSON.stringify(payload));}catch(e){}
  syncApiUi();
  const f=document.getElementById('cfg-test-feedback');if(f){f.className='form-msg ok';f.textContent='✅ Configuración guardada en este navegador.';}
}
function purgeApiKey(){
  if(!confirm('¿Olvidar tu API Key de este navegador?'))return;
  try{const s=getStoredApiSettings();s.apiKey='';localStorage.setItem(API_STORAGE_KEY_BIAS,JSON.stringify(s));localStorage.setItem(API_STORAGE_KEY_GLOBAL,JSON.stringify(s));}catch(e){}
  document.getElementById('cfg-api-key').value='';syncApiUi();
}
async function testApiConnection(){
  const f=document.getElementById('cfg-test-feedback');
  const s={apiKey:(document.getElementById('cfg-api-key').value||'').trim(),apiUrl:(document.getElementById('cfg-api-url').value||'').trim()||DEFAULT_API_URL,model:document.getElementById('cfg-model-select').value||DEFAULT_MODEL};
  if(!s.apiKey){f.className='form-msg err';f.textContent='⛔ Ingresa primero tu API Key.';return;}
  f.className='form-msg';f.textContent='⏳ Contactando OpenRouter...';
  try{
    const r=await fetch(s.apiUrl,{method:'POST',headers:{'Authorization':'Bearer '+s.apiKey,'Content-Type':'application/json','HTTP-Referer':location.origin,'X-Title':'UMG Informatica 1 Mentoria'},body:JSON.stringify({model:s.model,max_tokens:10,messages:[{role:'user',content:'Di OK'}]})});
    const d=await r.json();
    if(r.ok&&d.choices&&d.choices.length){f.className='form-msg ok';f.textContent='✅ ¡Conexión exitosa con '+s.model+'.';}
    else{f.className='form-msg err';f.textContent='⛔ Error '+(r.status)+': '+((d.error&&d.error.message)||r.statusText);}
  }catch(e){f.className='form-msg err';f.textContent='⛔ Error de red: '+e.message;}
}
// Recorta texto para cuidar los tokens de contexto.
function trunc(s,n){s=String(s==null?'':s);return s.length>n?s.slice(0,n)+'…':s;}
// Limpia trazas de razonamiento (<think>, preámbulos de análisis, ecos de instrucciones,
// notas de evaluación interna tipo "Method: ... -> Correct") y conserva solo la respuesta
// final del mentor (punto de vista + retroalimentación + consejo). Si no queda ningún
// apartado real, devuelve '' para que la app pida reintentar en vez de mostrar basura.
function sanitizeAi(raw){
  if(!raw)return '';
  let t=String(raw).replace(/<think>[\s\S]*?<\/think>/gi,'').replace(/<think>[\s\S]*/gi,'').replace(/<\/think>/gi,'');
  // 1) Si hay un preámbulo de razonamiento antes del primer apartado real, cortarlo.
  const answerMark=/(🎯|🧭|💼|punto de vista|retroalimentaci[oó]n|consejo gerencial)/i;
  const reasonSig=/(analy[sz]e|evaluate|role\s*:|tone\s*:|structure\s*:|constraints?\s*:|goal\s*:|objectives?\s*:|student'?s response|\*method\s*:\*|\*cia pillar\s*:\*|cadena de pensamiento|razonamiento interno|análisis interno|must contain only|no english)/i;
  const m=answerMark.exec(t);
  if(m&&m.index>0&&reasonSig.test(t.slice(0,m.index))){
    t=t.slice(m.index);
  }
  // 2) Filtrar líneas de razonamiento / eco de instrucciones, tolerando viñetas y negritas.
  const REASON_FIELDS='goal|objectives?|steps?|method|justification|debate|feasibility|analy[sz]is|evaluation|reasoning|constraints?|tone|role|structure|case details|student.?s response|cia pillar|pensamiento|razonamiento interno|análisis interno|cadena de pensamiento';
  const reasonFieldRe=new RegExp('^[\\s*\\-•>]*\\*{0,2}('+REASON_FIELDS+')\\b[^:\\n]{0,40}:','i');
  const echoRe=/must contain only|no english|starting directly with|only the \d+ sections/i;
  const arrowRe=/->\s*\*{0,2}(correct|partially|incorrect)/i;
  t=t.split('\n').filter(ln=>{
    if(!ln.trim())return true;
    if(reasonFieldRe.test(ln))return false;
    if(echoRe.test(ln))return false;
    if(arrowRe.test(ln))return false;
    if(/^\s*\d+\.\s*(\*\*)?(analyze|evaluate)\b/i.test(ln))return false;
    return true;
  }).join('\n');
  // 3) Quitar saludos iniciales residuales.
  t=t.replace(/^[\s\n]*(¡?\s*hola\b|estimad[oa]\b|saludos\b|buen día\b)[^\n]*(\n)?/i,'');
  t=t.trim();
  // 4) Sin apartados reales no hay retroalimentación que mostrar.
  if(!answerMark.test(t))return '';
  return t;
}
/* Consulta proactiva al Mentor Amigo. auto=true cuando se dispara sola tras guardar. */
async function consultarMentorIA(auto){
  const c=CASOS[casoActual];
  const r=respuestas[casoActual]||{};
  const mMsg=document.getElementById('mentorMsg');
  const btn=document.getElementById('btnMentor');
  // Requiere caso guardado (o al menos justificación escrita)
  const just=((document.getElementById('f_just')||{}).value||r.just||'').trim();
  if(just.length<40){
    if(mMsg){mMsg.className='form-msg err';mMsg.textContent='⛔ Escribe primero tu justificación (mín. 40 caracteres) y guarda el caso.';}
    if(!auto)openIaModal('mentor-modal'),showMentorError('Escribe primero tu justificación del caso y pulsa Guardar.');
    return;
  }
  const s=getStoredApiSettings();
  if(!s.apiKey){
    if(mMsg){mMsg.className='form-msg err';mMsg.textContent='⚠️ Configura tu API Key para recibir la mentoría (puedes continuar sin ella).';}
    openIaModal('api-config-modal');
    return;
  }
  // Armar contexto COMPACTO (control de tokens): solo lo esencial del caso + respuesta del alumno.
  const ataque=(document.getElementById('f_ataque')||{}).value||r.ataque||'';
  const pilar=(document.getElementById('f_pilar')||{}).value||r.pilar||'';
  const debate=trunc((document.getElementById('f_debate')||{}).value||r.debate||'',300);
  const fact=trunc((document.getElementById('f_fact')||{}).value||r.fact||'',400);
  const perd=(document.getElementById('f_perd')||{}).value||r.perd||'';
  const prev=(document.getElementById('f_prev')||{}).value||r.prev||'';
  const medida=(document.getElementById('f_medida')||{}).value||r.medida||'';
  const systemPrompt='Eres el Mentor Amigo de ciberseguridad para estudiantes de Administración (UMG Guatemala). Trátalos de TÚ, con tono cercano, constructivo y motivador, para que se sientan cómodos. NUNCA uses etiquetas frías como "Incorrecto". Si hay que corregir, hazlo con empatía ("¡Buen intento! ... fijémonos juntos en..."). Responde SIEMPRE en español, aunque el texto del alumno venga en otro idioma. Tu respuesta debe contener ÚNICAMENTE estos 3 apartados breves (140-200 palabras en total): 1) Punto de vista sobre su diagnóstico 2) Retroalimentación técnica (método de ataque y pilar CIA correctos) 3) Consejo gerencial práctico en quetzales. No muestres tu proceso de análisis ni notas internas, no repitas estas instrucciones, no uses saludos iniciales: empieza directamente con el punto de vista.';
  const userPrompt='Caso: '+c.titulo+' | Contexto: '+trunc(c.ctx,550)+' | Ataque esperado: '+c.ataque+' | Respuesta del alumno -> método: '+ataque+', pilar CIA: '+pilar+', pérdida Q'+perd+', prevención Q'+prev+', medida: '+medida+'. Justificación: "'+trunc(just,500)+'" Debate: "'+debate+'" Factibilidad: "'+fact+'" Evalúa como mentor amigo en español.';
  // UI loading
  openIaModal('mentor-modal');
  document.getElementById('mentor-case-title').textContent='Caso '+c.id;
  document.getElementById('mentor-loading').style.display='block';
  document.getElementById('mentor-content').style.display='none';
  document.getElementById('mentor-error').style.display='none';
  document.getElementById('mentor-retry').style.display='none';
  if(btn)btn.disabled=true;
  if(mMsg){mMsg.className='form-msg';mMsg.textContent='⏳ Consultando al Mentor IA...';}
  try{
    const resp=await fetch(s.apiUrl,{method:'POST',
      headers:{'Authorization':'Bearer '+s.apiKey,'Content-Type':'application/json','HTTP-Referer':location.origin||'http://localhost','X-Title':'UMG Informatica 1 Mentoria'},
      body:JSON.stringify({model:s.model,reasoning:{exclude:true},messages:[{role:'system',content:systemPrompt},{role:'user',content:userPrompt}],temperature:0.4,max_tokens:1200})});
    const data=await resp.json();
    let raw='';
    if(resp.ok&&data.choices&&data.choices.length){
      const ch=data.choices[0];
      if(ch.message&&typeof ch.message.content==='string'&&ch.message.content.trim())raw=ch.message.content.trim();
      else if(ch.message&&typeof ch.message.reasoning==='string')raw=ch.message.reasoning.trim();
      else if(typeof ch.text==='string')raw=ch.text.trim();
    } else {
      throw new Error('Error '+(resp.status)+': '+((data.error&&data.error.message)||resp.statusText));
    }
    let fb=sanitizeAi(raw);
    if(!fb){
      if(data.choices[0]&&data.choices[0].finish_reason==='length')throw new Error('El modelo agotó sus tokens. Prueba con google/gemini-2.0-flash-exp:free en Configurar API Key.');
      throw new Error('El modelo devolvió su análisis interno en lugar de la retroalimentación final. Pulsa "Reintentar" y si se repite, cambia de modelo en "Configurar API Key" (p. ej. google/gemini-2.0-flash-exp:free).');
    }
    // Guardar en el caso (estará en el PDF)
    respuestas[casoActual].ia={feedback:fb,model:s.model,timestamp:new Date().toISOString(),status:'ok'};
    showMentorOk(c,r,fb,s.model);
    if(mMsg){mMsg.className='form-msg ok';mMsg.textContent='✅ Mentoría recibida. Ya puedes avanzar al siguiente caso.';}
    const badge=document.getElementById('mentor-badge');if(badge)badge.textContent=mentorBadge(respuestas[casoActual]);
    const inline=document.getElementById('mentor-inline');if(inline){inline.style.display='block';inline.textContent=fb;}
  }catch(e){
    // FALLO SUAVE: guardar el error pero permitir continuar.
    respuestas[casoActual].ia={feedback:'',model:s.model,timestamp:new Date().toISOString(),status:'error',error:String(e.message||e)};
    showMentorError('No se pudo consultar al mentor IA ('+e.message+'). Tu respuesta quedó guardada y puedes continuar al siguiente caso sin problema; podrás reintentar la mentoría o generar el PDF igualmente.');
    if(mMsg){mMsg.className='form-msg err';mMsg.textContent='⚠️ Sin conexión con la IA: puedes continuar al siguiente caso. Tu respuesta quedó guardada.';}
    const badge=document.getElementById('mentor-badge');if(badge)badge.textContent=mentorBadge(respuestas[casoActual]);
  }finally{
    if(btn)btn.disabled=false;
  }
}
function showMentorOk(c,r,fb,model){
  document.getElementById('mentor-loading').style.display='none';
  document.getElementById('mentor-error').style.display='none';
  document.getElementById('mentor-content').style.display='block';
  document.getElementById('mentor-user-text').textContent='"'+trunc(r.just||((document.getElementById('f_just')||{}).value||''),400)+'"';
  document.getElementById('mentor-response-text').textContent=fb;
  document.getElementById('mentor-model-badge').textContent='Modelo: '+model;
}
function showMentorError(msg){
  openIaModal('mentor-modal');
  document.getElementById('mentor-loading').style.display='none';
  document.getElementById('mentor-content').style.display='none';
  const e=document.getElementById('mentor-error');e.style.display='block';e.textContent='⚠️ '+msg;
  document.getElementById('mentor-retry').style.display='inline-block';
}
function esc(s){return String(s||'').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');}
function construirReporte(){
  const g=id=>document.getElementById(id).value.trim();
  const fecha=g('fechaClase')||new Date().toLocaleDateString('es-GT');
  const totalPerd=respuestas.reduce((a,r)=>a+(+r.perd||0),0);
  const totalPrev=respuestas.reduce((a,r)=>a+(+r.prev||0),0);
  let h=`<div style="text-align:center;border-bottom:3px solid #dc2626;padding-bottom:10px;margin-bottom:12px">
   <div style="font-size:15px;font-weight:800">🎓 Universidad Mariano Gálvez de Guatemala — Facultad de Ciencias de la Administración</div>
   <div style="font-size:13px">Informática I · Semana 10: Ciberseguridad e Integridad de la Información · Ejercicio en Parejas</div>
   <div style="font-size:12px">XP obtenido en simuladores: ${XP} · Aciertos diagnóstico: ${respuestas.filter(r=>r.acierto).length}/4 · Quiz: ${qs}/${QUIZ.length}</div></div>
   <h2>🛡️ Reporte de análisis de fallos de ciberseguridad — Piloto + Copiloto</h2>
   <table border="1" cellspacing="0" cellpadding="6" width="100%"><tr><td><b>🧑‍✈️ Piloto:</b> ${esc(g('nombrePiloto'))}<br><b>Carnet:</b> ${esc(g('carnetPiloto'))}</td><td><b>🧭 Copiloto:</b> ${esc(g('copilotoNombre'))}<br><b>Carnet:</b> ${esc(g('carnetCopiloto'))}</td></tr>
   <tr><td><b>Fecha:</b> ${esc(fecha)}</td><td><b>Roles alternados:</b> ${document.getElementById('alternar').checked?'Sí':'No'}</td></tr></table>`;
  CASOS.forEach((c,i)=>{const r=respuestas[i];
   h+=`<h3>${c.titulo} ${r.acierto?'✅':'⚠️'}</h3>
   <table border="1" cellspacing="0" cellpadding="6" width="100%">
   <tr><td><b>Método diagnosticado:</b> ${esc(r.ataque)}<br><small>Esperado: ${esc(c.ataque)}</small></td><td><b>Pilar CIA:</b> ${esc(r.pilar)}</td></tr>
   <tr><td><b>Pérdida estimada: Q${(+r.perd).toLocaleString()}</b></td><td><b>Prevención: Q${(+r.prev).toLocaleString()}</b> (1 Q evita ${esc(r.roi)} Q)</td></tr>
   <tr><td colspan="2"><b>Medida estrella:</b> ${esc(r.medida)}</td></tr></table>
   <p><b>Justificación:</b> ${esc(r.just)}</p><p><b>Debate:</b> ${esc(r.debate)}</p><p><b>Decisión gerencial:</b> ${esc(r.fact)}</p>`;
   if(r.ia&&r.ia.status==='ok'&&r.ia.feedback){h+=`<p><b>🤖 Retroalimentación del Mentor IA (${esc(r.ia.model||'OpenRouter')}):</b> ${esc(r.ia.feedback)}</p>`;}
   else if(r.ia&&r.ia.status==='error'){h+=`<p><b>🤖 Mentor IA:</b> No se pudo consultar al mentor en este caso (${esc(r.ia.error||'sin conexión')}); la pareja continuó con su análisis y este quedó registrado para revisión docente.</p>`;}
   else{h+=`<p><b>🤖 Mentor IA:</b> Caso sin consulta de mentoría (la pareja avanzó sin validación IA).</p>`;}});
  h+=`<h3>Cierre</h3><p><b>Compromiso PUA de la pareja:</b> ${esc(g('compromiso'))}</p><p><b>Reflexión conjunta:</b> ${esc(g('opinionFinal'))}</p>
  <p><b>Totales:</b> Pérdidas evitables Q${totalPerd.toLocaleString()} · Inversión preventiva Q${totalPrev.toLocaleString()}</p>
  <p>Declaramos que debatimos cada caso y las respuestas son de nuestra autoría. _____________ (Piloto) &nbsp; _____________ (Copiloto)</p>
  <p style="font-size:11px">Montos didácticos estimados en Quetzales. Guardar como: Apellidos_Carnets_Ciber.pdf y subir a Canvas → Tarea “Ejercicio Ciberseguridad en Pareja”.</p>`;
  return h;
}
function vistaPrevia(){
  if(casosCompletos()<4){document.getElementById('cierreMsg').className='form-msg err';document.getElementById('cierreMsg').textContent='⛔ Completa los 4 casos primero.';return;}
  document.getElementById('reporteFinal').innerHTML=construirReporte();
  document.getElementById('reporteFinal').style.display='block';
  document.getElementById('reporteFinal').scrollIntoView({behavior:'smooth'});
}
function generarPDF(){
  if(!validarCierre()){document.getElementById('cierreMsg').scrollIntoView({behavior:'smooth'});return;}
  // Si la librería no cargó (sin internet), respaldo con impresión del navegador
  if(!(window.jspdf&&window.jspdf.jsPDF&&window.jspdf.jsPDF.API&&window.jspdf.jsPDF.API.autoTable)){
    document.getElementById('reporteFinal').innerHTML=construirReporte();
    document.getElementById('reporteFinal').style.display='block';
    setTimeout(()=>window.print(),300);return;
  }
  try{
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF({unit:'mm',format:'letter'});
    const g=id=>document.getElementById(id).value.trim();
    const fecha=g('fechaClase')||new Date().toLocaleDateString('es-GT');
    const W=190, X=10;
    // Encabezado institucional
    doc.setFillColor(127,29,29);doc.rect(0,0,216,30,'F');
    doc.setTextColor(255,255,255);doc.setFont('helvetica','bold');doc.setFontSize(12);
    doc.text('Universidad Mariano Gálvez de Guatemala',X,10);
    doc.setFontSize(10);doc.setFont('helvetica','normal');
    doc.text('Facultad de Ciencias de la Administración · Informática I · Semana 10: Ciberseguridad',X,16);
    doc.text('Ejercicio en Parejas · Reporte de análisis de fallos de ciberseguridad',X,22);
    let y=36;
    doc.setTextColor(0,0,0);doc.setFontSize(10);
    doc.setFont('helvetica','normal');
    y=pdfBlock(doc,'XP en simuladores: '+XP+'   ·   Diagnóstico: '+respuestas.filter(r=>r.acierto).length+'/4   ·   Quiz: '+qs+'/'+QUIZ.length,y);
    // Datos de la pareja
    doc.autoTable({startY:y,margin:{left:X,right:X},
      head:[['Piloto','Copiloto']],
      body:[[[pdfClean(g('nombrePiloto'))+'\nCarnet: '+pdfClean(g('carnetPiloto'))],[pdfClean(g('copilotoNombre'))+'\nCarnet: '+pdfClean(g('carnetCopiloto'))]],
            [['Fecha: '+fecha],['Roles alternados: '+(document.getElementById('alternar').checked?'Sí':'No')]]],
      headStyles:{fillColor:[220,38,38]},styles:{fontSize:10}});
    y=doc.lastAutoTable.finalY+6;
    // Casos
    CASOS.forEach((c,i)=>{
      const r=respuestas[i];
      if(y>240){doc.addPage();y=15;}
      doc.setFont('helvetica','bold');doc.setFontSize(11);doc.setTextColor(127,29,29);
      const t=doc.splitTextToSize(pdfClean(c.titulo)+(r.acierto?'  [OK]':'  [rev]'),W);
      if(y+t.length*6>270){doc.addPage();y=15;}
      doc.text(t,X,y);y+=t.length*6;doc.setTextColor(0,0,0);
      const R=k=>pdfClean(r[k]), C=k=>pdfClean(c[k]);
      doc.autoTable({startY:y,margin:{left:X,right:X},
        body:[
          ['Método diagnosticado: '+R('ataque')+' (esperado: '+C('ataque')+')','Pilar CIA: '+R('pilar')],
          ['Pérdida estimada: Q'+(+r.perd).toLocaleString(),'Prevención: Q'+(+r.prev).toLocaleString()+' (1 Q evita '+r.roi+' Q)'],
          [{content:'Medida estrella: '+R('medida'),colSpan:2}]
        ],
        styles:{fontSize:9},columnStyles:{0:{cellWidth:95},1:{cellWidth:95}}});
      y=doc.lastAutoTable.finalY+4;
      y=pdfBlock(doc,'Justificación: ',r.just,y);
      y=pdfBlock(doc,'Debate piloto/copiloto: ',r.debate,y);
      y=pdfBlock(doc,'Decisión gerencial: ',r.fact,y+1);
      if(r.ia&&r.ia.status==='ok'&&r.ia.feedback){
        y=pdfBlock(doc,'Mentor IA ('+String(r.ia.model||'OpenRouter').slice(0,60)+'): ',String(r.ia.feedback).slice(0,1200),y+1);
      }else if(r.ia&&r.ia.status==='error'){
        y=pdfBlock(doc,'Mentor IA: ','Sin conexión al consultar ('+String(r.ia.error||'error de red').slice(0,200)+'). La pareja continuó y su análisis quedó registrado.',y+1);
      }else{
        y=pdfBlock(doc,'Mentor IA: ','Caso sin consulta de mentoría (la pareja avanzó sin validación IA).',y+1);
      }
      y+=2;
    });
    // Cierre
    if(y>230){doc.addPage();y=15;}
    doc.setFont('helvetica','bold');doc.setFontSize(11);doc.setTextColor(127,29,29);
    doc.text('Cierre de la pareja',X,y);y+=7;doc.setTextColor(0,0,0);
    y=pdfBlock(doc,'Compromiso PUA: ',g('compromiso'),y);
    y=pdfBlock(doc,'Reflexión conjunta: ',g('opinionFinal'),y);
    const totalPerd=respuestas.reduce((a,r)=>a+(+r.perd||0),0);
    const totalPrev=respuestas.reduce((a,r)=>a+(+r.prev||0),0);
    y=pdfBlock(doc,'Totales estimados: ','Pérdidas evitables Q'+totalPerd.toLocaleString()+' · Inversión preventiva Q'+totalPrev.toLocaleString(),y);
    if(y>240){doc.addPage();y=15;}
    doc.setFont('helvetica','normal');doc.setFontSize(10);
    doc.text('Declaramos que debatimos cada caso y las respuestas son de nuestra autoría.',X,y);y+=12;
    doc.text('__________________________   (Piloto)',X,y);
    doc.text('__________________________   (Copiloto)',110,y);y+=8;
    doc.setFontSize(8);doc.setTextColor(100,100,100);
    doc.text('Montos didácticos estimados en Quetzales. Subir a Canvas como Apellidos_Carnets_Ciber.pdf',X,y);
    // Numeración de páginas
    const n=doc.getNumberOfPages();
    for(let i=1;i<=n;i++){doc.setPage(i);doc.setFontSize(8);doc.setTextColor(120,120,120);doc.text('Página '+i+' de '+n+' · CiberChapín UMG',150,272);}
    doc.save('Apellidos_Carnets_Ciber.pdf');
    addXP(50);
    const msg=document.getElementById('cierreMsg');
    msg.className='form-msg ok';msg.textContent='✅ PDF descargado. Súbanlo a Canvas como Apellidos_Carnets_Ciber.pdf';
  }catch(e){
    document.getElementById('reporteFinal').innerHTML=construirReporte();
    document.getElementById('reporteFinal').style.display='block';
    setTimeout(()=>window.print(),300);
  }
}
// Quita emojis y símbolos fuera de latin-1 (la fuente del PDF no los soporta)
function pdfClean(s){return String(s==null?'':s).replace(/[^\x09\x0A\x0D\x20-\xFF]/g,'');}
// Escribe un bloque etiqueta+texto con salto de página automático; devuelve el nuevo Y
function pdfBlock(doc,label,text,y){
  const W=190,X=10,lineH=5,limit=268;
  label=pdfClean(label);
  const lines=[label].concat(doc.setFont('helvetica','normal').setFontSize(10).splitTextToSize(pdfClean(text||'—'),W));
  let idx=0;
  // primera línea en negrita ya incluida: la reescribimos por partes es complejo; usamos todo normal salvo etiqueta
  while(idx<lines.length){
    if(y+lineH>limit){doc.addPage();y=15;}
    const isLabel=(idx===0);
    doc.setFont('helvetica',isLabel?'bold':'normal');
    doc.text(lines[idx],X,y);y+=lineH;idx++;
  }
  return y+2;
}
/* ============ TAREA INDIVIDUAL: LA SILLA DEL GERENTE (guía del parcial) ============ */
// Caso adaptado (NO es el examen): Beneficio de Café Las Nubes, Cobán.
// Rescate Q36,000/72h · pérdida Q5,200/día · planilla Q75,000 · prevención: Q350/mes + Q750/año + Q650/año.
const TAREA_ESP={perd5:5*5200,prev:350*12+750+650};
TAREA_ESP.veces=TAREA_ESP.perd5/TAREA_ESP.prev; // ≈4.64
function tGet(id){const el=document.getElementById(id);return el?el.value.trim():'';}
function verificarTarea(){
  const msg=document.getElementById('t_calcMsg');
  const perd=+tGet('t_perd5'),prev=+tGet('t_prevAnual'),vec=+tGet('t_veces');
  const ops=tGet('t_ops');
  const out=[];
  let ok=0;
  if(perd===TAREA_ESP.perd5){out.push('✅ (a) Pérdida 5 días correcta: 5 × 5,200 = Q'+TAREA_ESP.perd5.toLocaleString()+'.');ok++;}
  else if(perd>0){out.push('🔎 (a) Revisa: multiplica los <b>días (5)</b> por la <b>pérdida diaria (Q5,200)</b>. Tu resultado: Q'+perd.toLocaleString()+'.');}
  else{out.push('⛔ (a) Ingresa la pérdida por 5 días (pista: 5 × 5,200).');}
  if(prev===TAREA_ESP.prev){out.push('✅ (b) Prevención anual correcta: (350 × 12) + 750 + 650 = Q'+TAREA_ESP.prev.toLocaleString()+'.');ok++;}
  else if(prev>0){out.push('🔎 (b) Revisa: primero <b>350 × 12</b> (= backup anual) y luego <b>suma 750 + 650</b>. Tu resultado: Q'+prev.toLocaleString()+'.');}
  else{out.push('⛔ (b) Ingresa la prevención anual (pista: mensual × 12 + anuales).');}
  if(prev>0&&vec>0){
    const esp=perd>0?(perd/prev):TAREA_ESP.veces;
    if(Math.abs(vec-TAREA_ESP.veces)<=0.25&&Math.abs(prev-TAREA_ESP.prev)<1&&Math.abs(perd-TAREA_ESP.perd5)<1){out.push('✅ (c) Correcto: ~'+TAREA_ESP.veces.toFixed(1)+' veces. Con evitar UN incidente se pagan casi 5 años de prevención.');ok++;}
    else{out.push('🔎 (c) Revisa: divide <b>pérdida de un incidente ÷ prevención anual</b> (usa tus valores: '+perd.toLocaleString()+' ÷ '+prev.toLocaleString()+' ≈ '+esp.toFixed(1)+'). Se espera ≈ '+TAREA_ESP.veces.toFixed(1)+'.');}
  }else{out.push('⛔ (c) Ingresa cuántas veces cabe la prevención en la pérdida (división).');}
  if(ops.length<15)out.push('✍️ Escribe tus <b>operaciones</b> (las cuentas, no solo el resultado): es lo que más puntos vale en el parcial.');
  else{out.push('✅ Operaciones registradas.');ok++;}
  msg.className='form-msg '+(ok>=4?'ok':'err');
  msg.innerHTML=(ok>=4?'🎉 ¡Vas muy bien! ':'🧭 Sigue la tutoría: ')+out.join('<br>');
  if(ok>=4)addXP(20);
  validarTareaCierre();
}
function tareaCompleta(){
  const dec=tGet('t_decision');
  const a1=tGet('t_arg1'),a2=tGet('t_arg2'),a3=tGet('t_arg3');
  const perd=+tGet('t_perd5'),prev=+tGet('t_prevAnual'),vec=+tGet('t_veces');
  const ops=tGet('t_ops'),pua=tGet('t_pua'),concl=tGet('t_concl');
  return dec&&a1.length>=30&&a2.length>=30&&a3.length>=30&&perd>0&&prev>0&&vec>0&&ops.length>=15&&pua.length>=25&&concl.length>=60;
}
function validarTareaCierre(){
  const btn=document.getElementById('t_btnPDF');if(!btn)return false;
  const msg=document.getElementById('t_msg');
  const faltan=[];
  if(!(tGet('t_nombre').length>=5&&tGet('t_carnet').length>=5))faltan.push('tus datos (nombre + carnet)');
  if(!tGet('t_seccion'))faltan.push('sección');
  if(!tGet('t_decision'))faltan.push('T.1 decisión');
  const args=['t_arg1','t_arg2','t_arg3'].filter(id=>tGet(id).length<30).length;
  if(args)faltan.push(args+' argumento(s) corto(s) (30+)');
  if(!(+tGet('t_perd5')>0&&+tGet('t_prevAnual')>0&&+tGet('t_veces')>0))faltan.push('T.2 números');
  if(tGet('t_ops').length<15)faltan.push('T.2 operaciones');
  if(tGet('t_pua').length<25)faltan.push('T.3 regla PUA');
  if(tGet('t_concl').length<60)faltan.push('conclusión (60+)');
  if(!document.getElementById('t_declaro').checked)faltan.push('declaración de autoría');
  btn.disabled=faltan.length>0;
  if(msg){msg.className='form-msg '+(faltan.length?'err':'ok');msg.textContent=faltan.length?('⏳ Falta: '+faltan.join(' · ')):'✅ Todo listo. Genera tu PDF para Canvas.';}
  return !faltan.length;
}
function construirReporteTarea(){
  const fecha=tGet('t_fecha')||new Date().toLocaleDateString('es-GT');
  return `<div style="text-align:center;border-bottom:3px solid #6d28d9;padding-bottom:10px;margin-bottom:12px">
   <div style="font-size:15px;font-weight:800">🎓 Universidad Mariano Gálvez de Guatemala — Facultad de Ciencias de la Administración</div>
   <div style="font-size:13px">Informática I · Semana 10: Tarea individual “La Silla del Gerente — El Dilema del Rescate” (guía del parcial)</div>
   <div style="font-size:12px">XP en simuladores: ${XP}</div></div>
   <h2>📌 Tarea: análisis del caso — Beneficio de Café Las Nubes, S.A. (Cobán)</h2>
   <table border="1" cellspacing="0" cellpadding="6" width="100%"><tr><td><b>Estudiante:</b> ${esc(tGet('t_nombre'))}<br><b>Carnet:</b> ${esc(tGet('t_carnet'))}</td><td><b>Sección:</b> ${esc(tGet('t_seccion'))}<br><b>Fecha:</b> ${esc(fecha)}</td></tr></table>
   <p><b>Caso (resumen):</b> servidor de facturación cifrado tras falso correo SAT; rescate Q36,000 en 72 h; sin backup externo; planilla Q75,000 en 4 días; pérdida Q5,200/día. Decisión del administrador: ¿pagar?</p>
   <h3>T.1 · Decisión: ${esc(tGet('t_decision')==='SI'?'SÍ PAGAR':'NO PAGAR')}</h3>
   <p><b>Argumento 1:</b> ${esc(tGet('t_arg1'))}</p><p><b>Argumento 2:</b> ${esc(tGet('t_arg2'))}</p><p><b>Argumento 3:</b> ${esc(tGet('t_arg3'))}</p>
   <h3>T.2 · Números</h3>
   <table border="1" cellspacing="0" cellpadding="6" width="100%"><tr><td><b>(a) Pérdida 5 días: Q${(+tGet('t_perd5')).toLocaleString()}</b></td><td><b>(b) Prevención anual: Q${(+tGet('t_prevAnual')).toLocaleString()}</b></td><td><b>(c) Veces: ${esc(tGet('t_veces'))}</b></td></tr></table>
   <p><b>Operaciones:</b> ${esc(tGet('t_ops'))}</p>
   <h3>T.3 · Regla PUA</h3><p>${esc(tGet('t_pua'))}</p>
   <h3>Conclusión</h3><p>${esc(tGet('t_concl'))}</p>
   <p>Declaro que esta tarea es de mi autoría. _____________ (firma)</p>
   <p style="font-size:11px">Guía de aprendizaje con datos adaptados (no es el examen). En el parcial los montos y plazos serán distintos. Guardar como: Apellido_Carnet_TareaCiber.pdf y subir a Canvas.</p>`;
}
function vistaPreviaTarea(){
  if(!tareaCompleta()){validarTareaCierre();document.getElementById('t_msg').scrollIntoView({behavior:'smooth'});return;}
  const r=document.getElementById('reporteTarea');
  r.innerHTML=construirReporteTarea();r.style.display='block';
  r.scrollIntoView({behavior:'smooth'});
}
function generarPdfTarea(){
  if(!validarTareaCierre()){document.getElementById('t_msg').scrollIntoView({behavior:'smooth'});return;}
  if(!(window.jspdf&&window.jspdf.jsPDF&&window.jspdf.jsPDF.API&&window.jspdf.jsPDF.API.autoTable)){
    document.getElementById('reporteTarea').innerHTML=construirReporteTarea();
    document.getElementById('reporteTarea').style.display='block';
    setTimeout(()=>window.print(),300);return;
  }
  try{
    const { jsPDF } = window.jspdf;
    const doc=new jsPDF({unit:'mm',format:'letter'});
    const X=10,W=190;
    doc.setFillColor(76,29,149);doc.rect(0,0,216,30,'F');
    doc.setTextColor(255,255,255);doc.setFont('helvetica','bold');doc.setFontSize(12);
    doc.text('Universidad Mariano Gálvez de Guatemala',X,10);
    doc.setFontSize(10);doc.setFont('helvetica','normal');
    doc.text('Facultad de Ciencias de la Administración · Informática I · Semana 10',X,16);
    doc.text('Tarea individual: La Silla del Gerente (guía del parcial)',X,22);
    let y=36;doc.setTextColor(0,0,0);
    const fecha=tGet('t_fecha')||new Date().toLocaleDateString('es-GT');
    doc.autoTable({startY:y,margin:{left:X,right:X},head:[['Estudiante','Sección']],
      body:[[[pdfClean(tGet('t_nombre'))+'\nCarnet: '+pdfClean(tGet('t_carnet'))],[pdfClean(tGet('t_seccion'))+'\nFecha: '+fecha]]],
      headStyles:{fillColor:[109,40,217]},styles:{fontSize:10}});
    y=doc.lastAutoTable.finalY+6;
    y=pdfBlock(doc,'Caso (resumen): ','Servidor de facturación cifrado tras falso correo SAT; rescate Q36,000 en 72 h; sin backup externo; planilla Q75,000 en 4 días; pérdida Q5,200/día.',y);
    y=pdfBlock(doc,'T.1 Decisión: ',tGet('t_decision')==='SI'?'SÍ PAGAR el rescate':'NO PAGAR y restaurar / reconstruir',y);
    y=pdfBlock(doc,'Argumento 1: ',tGet('t_arg1'),y);
    y=pdfBlock(doc,'Argumento 2: ',tGet('t_arg2'),y);
    y=pdfBlock(doc,'Argumento 3: ',tGet('t_arg3'),y);
    if(y>230){doc.addPage();y=15;}
    doc.autoTable({startY:y,margin:{left:X,right:X},
      body:[['(a) Pérdida 5 días: Q'+(+tGet('t_perd5')).toLocaleString(),'(b) Prevención anual: Q'+(+tGet('t_prevAnual')).toLocaleString(),'(c) Veces: '+tGet('t_veces')]],
      styles:{fontSize:9}});
    y=doc.lastAutoTable.finalY+4;
    y=pdfBlock(doc,'T.2 Operaciones: ',tGet('t_ops'),y);
    y=pdfBlock(doc,'T.3 Regla PUA: ',tGet('t_pua'),y+1);
    y=pdfBlock(doc,'Conclusión: ',tGet('t_concl'),y+1);
    if(y>240){doc.addPage();y=15;}
    doc.setFont('helvetica','normal');doc.setFontSize(10);
    doc.text('Declaro que esta tarea es de mi autoría.',X,y);y+=12;
    doc.text('__________________________   (firma)',X,y);y+=8;
    doc.setFontSize(8);doc.setTextColor(100,100,100);
    doc.text('Guía de aprendizaje (datos adaptados, no es el examen). Subir a Canvas como Apellido_Carnet_TareaCiber.pdf',X,y);
    const n=doc.getNumberOfPages();
    for(let i=1;i<=n;i++){doc.setPage(i);doc.setFontSize(8);doc.setTextColor(120,120,120);doc.text('Página '+i+' de '+n+' · CiberChapín UMG',150,272);}
    doc.save('Apellido_Carnet_TareaCiber.pdf');
    addXP(50);
    const msg=document.getElementById('t_msg');
    msg.className='form-msg ok';msg.textContent='✅ PDF descargado. Súbelo a Canvas como Apellido_Carnet_TareaCiber.pdf';
  }catch(e){
    document.getElementById('reporteTarea').innerHTML=construirReporteTarea();
    document.getElementById('reporteTarea').style.display='block';
    setTimeout(()=>window.print(),300);
  }
}
['t_nombre','t_carnet','t_seccion','t_fecha','t_decision','t_arg1','t_arg2','t_arg3','t_perd5','t_prevAnual','t_veces','t_ops','t_pua','t_concl','t_declaro'].forEach(id=>{
  document.addEventListener('input',e=>{if(e.target&&e.target.id===id)validarTareaCierre();});
  document.addEventListener('change',e=>{if(e.target&&e.target.id===id)validarTareaCierre();});
});
// init
renderPhish();renderCaso();actualizarProgreso();renderQuiz();renderGlos();ddosCalc();syncApiUi();validarTareaCierre();
const fc=document.getElementById('fechaClase');if(fc)fc.valueAsDate=new Date();
const tf=document.getElementById('t_fecha');if(tf)tf.valueAsDate=new Date();
