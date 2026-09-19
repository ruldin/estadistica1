// ===== Semana 11 Herramientas de Seguridad y Privacidad — lógica 100% cliente =====
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

// ---- M1 Ecosistema ----
const ECO={
  a:{t:'🪪 Autenticación',falla:'Verifica que eres quien dices ser: contraseña + token + huella.',impacto:'Si falta, cualquiera entra con una clave robada y lee planillas, precios y nómina.',tip:'Defensa gerente: MFA obligatorio + 2FA en banca/correo/ERP + PUA firmada.'},
  p:{t:'🧱 Prevención',falla:'Bloquea el acceso no autorizado: ACL/RBAC, cifrado, firewall, VPN, antivirus, backups.',impacto:'Si falta, el atacante se mueve libre, cifra todo y te pide rescate en quetzales.',tip:'Defensa gerente: RBAC por roles + firewall con reglas + VPN remota + backup 3-2-1 probado.'},
  d:{t:'📡 Detección',falla:'IDS vigila el tráfico en tiempo real y alerta; la seguridad física cuida el hardware.',impacto:'Sin detección, el robo dura semanas sin que nadie lo note (promedio 200+ días).',tip:'Defensa gerente: IDS con alertas + cámaras/puertas + monitoreo temperatura/humedad.'}
};
function showEco(k){
  document.querySelectorAll('.cia-card').forEach(c=>c.classList.remove('active-c','active-i','active-d'));
  const el=document.getElementById('eco-'+k);if(el)el.classList.add(k==='a'?'active-c':k==='p'?'active-i':'active-d');
  const m=ECO[k];
  document.getElementById('ecoDetail').innerHTML=`<h3>${m.t}</h3><p>🧭 <b>${m.falla}</b></p><p>📉 ${m.impacto}</p><p>🛡️ <b>${m.tip}</b></p>`;
  addXP(5);
}
// ---- M2 Factores + password ----
const FACT={
  sabe:'<b>🧠 Algo que sabes:</b> contraseña/PIN/OOW. Barato pero se olvida, se comparte por WhatsApp y se phishea. Ej. chapín: PIN del cajero dictado por teléfono = cuenta vacía.',
  posee:'<b>🔑 Algo que posees:</b> tarjeta, llave, token RSA/app con código de 60 s. Si te roban la clave, sin el objeto no entran. Ej.: token del banco que cambia cada minuto.',
  es:'<b>👆 Algo que eres:</b> huella, retina, rostro. No se olvida, pero si se filtra no la puedes cambiar. Úsala como segundo factor, nunca como único.'
};
function toggleFactor(k){
  document.getElementById('factorDetail').innerHTML=`<p>${FACT[k]}</p><p class="small">💡 Regla gerente: combina 2 categorías distintas (MFA). Dos contraseñas no son MFA.</p>`;
  addXP(3);
}
function pwCheck(){
  const v=(document.getElementById('pwInput').value||'');
  let s=0;
  if(v.length>=8)s+=25; if(v.length>=12)s+=20;
  if(/[A-Z]/.test(v)&&/[a-z]/.test(v))s+=20;
  if(/\d/.test(v))s+=15; if(/[^A-Za-z0-9]/.test(v))s+=20;
  s=Math.min(100,s);
  const f=document.getElementById('pwFill');
  f.style.width=s+'%';
  f.style.background=s<40?'#ef4444':s<75?'#f59e0b':'#22c55e';
  document.getElementById('pwFb').innerHTML=s<40?'🔴 Débil: un ataque de diccionario la tumba en minutos. Alárgala y agrega símbolo.':s<75?'🟡 Media: aguanta curiosos, no un ataque dirigido. Suma 12+ y símbolo.':'🟢 Fuerte: larga + variada + única. Activa 2FA de todos modos. <b>+10 XP</b>';
  if(s>=75)addXP(2);
}
// ---- M3 MFA ----
function mfaTry(){
  const p=document.getElementById('mfaPass').checked;
  const t=document.getElementById('mfaToken').checked;
  const fb=document.getElementById('mfaFb');
  document.getElementById('gear1').classList.toggle('locked',!p);
  document.getElementById('gear2').classList.toggle('locked',!t);
  if(p&&t){fb.innerHTML='✅ <b>Acceso concedido a ti, denegado al atacante:</b> robó tu contraseña pero no tiene tu token de 60 s. Así el MFA frena el 90%+ de tomas de cuenta. <b>+15 XP</b>';addXP(15);}
  else if(p&&!t){fb.innerHTML='❌ <b>Atacante adentro:</b> con solo la contraseña filtrada abrió tu ERP y vació Q18,500. Te faltó el segundo engranaje.';}
  else{fb.innerHTML='⛔ Ni tú entras: sin el primer factor no hay identidad que verificar.';}
}
// ---- M4 ACL vs RBAC ----
function aclCalc(){
  const emp=+document.getElementById('empRange').value;
  document.getElementById('empVal').textContent=emp;
  const rec=8, roles=4;
  const acl=emp*rec, rbac=roles*rec+emp;
  document.getElementById('aclFill').style.width=Math.min(100,acl/3)+'%';
  document.getElementById('rbacFill').style.width=Math.min(100,rbac/3)+'%';
  document.getElementById('aclNum').textContent=acl+' reglas';
  document.getElementById('rbacNum').textContent='~'+rbac+' reglas';
  const v=document.getElementById('aclVerdict');
  if(emp<=10){v.style.background='rgba(245,158,11,.15)';v.textContent='🟡 Con '+emp+' personas la ACL aún se entiende, pero cada alta/baja toca '+rec+' archivos.';}
  else{v.style.background='rgba(239,68,68,.15)';v.textContent='🔴 Con '+emp+' personas la ACL es ingobernable ('+acl+' reglas). RBAC la deja en ~'+rbac+': das permisos a 4 roles y solo vinculas personas. +10 XP';addXP(2);}
}
// ---- M5 Cifrado demo ----
function cesar(s,k){return s.replace(/[a-zA-Z]/g,c=>{const b=c<='Z'?65:97;return String.fromCharCode((c.charCodeAt(0)-b+k)%26+b);});}
function cifrarDemo(){
  const m=document.getElementById('plainMsg').value||'';
  const sym=cesar(m,3)+' ⟵ clave GT-2026 (quien tenga la clave lo lee)';
  document.getElementById('symOut').textContent='🔒 '+btoa(unescape(encodeURIComponent(sym))).slice(0,120);
  document.getElementById('asyOut').textContent='🔒 Cifrado con PÚBLICA (todos pueden cifrar) → solo tu PRIVADA abre: '+btoa(unescape(encodeURIComponent('PRIV['+cesar(m,7)+']'))).slice(0,120);
  if(m.length>5)addXP(1);
}
// ---- M6 Firewall + VPN ----
let fwOk=0,fwDone={};
function fwClick(el,ok){
  const key=el.textContent;
  if(fwDone[key])return; fwDone[key]=true;
  el.classList.add(ok?'allow':'block');
  if(ok){fwOk++;el.textContent+=' — PASA ✓';}else{fwOk++;el.textContent+=' — BLOQUEADO ⛔';}
  document.getElementById('fwFb').textContent=fwOk+'/4 inspeccionados. Regla: FEL + correo corporativo pasan; .zip raro y streaming se bloquean. +'+(fwOk*3)+' XP';
  addXP(3);
}
function vpnToggle(){
  const on=document.getElementById('vpnOn').checked;
  document.getElementById('vpnFb').textContent=on?'VPN ON: el túnel cifra la planilla; el espía del café solo ve ruido.':'VPN OFF: viajas desnudo en WiFi público — el espía lee montos y claves.';
}
let vpnTimer=null;
function vpnSend(){
  const on=document.getElementById('vpnOn').checked;
  const t=document.getElementById('tunnel'),p=document.getElementById('vpnPkt');
  const btn=document.getElementById('vpnBtn');
  if(vpnTimer){clearTimeout(vpnTimer);vpnTimer=null;}
  // Reinicio INSTANTÁNEO: sin transición el paquete vuelve al inicio de un salto;
  // con transición activa regresaría deslizándose 2.2s y el reintento partiría desde la derecha (el bug reportado).
  p.style.transition='none';
  t.classList.remove('run');
  void p.offsetWidth; // fija el reset antes de reactivar la animación
  p.style.transition='';
  p.textContent=on?'💼🔒':'💼📖';
  document.getElementById('vpnFb').textContent='📤 Enviando por el túnel...';
  if(btn)btn.disabled=true;
  requestAnimationFrame(()=>{t.classList.add('run');});
  vpnTimer=setTimeout(()=>{
    document.getElementById('vpnFb').innerHTML=on?'✅ <b>Llegó cifrada a la intranet</b> atravesando el firewall. Espía del WiFi: 😭 solo basura. <b>+10 XP</b>':'❌ <b>Interceptada en el WiFi del centro comercial:</b> leyeron “Planilla Q60,000” y el usuario del ERP.';
    if(on)addXP(10);
    if(btn)btn.disabled=false;
    vpnTimer=null;
  },2300);
}
// ---- M7 Backups ----
function bkCheck(){
  const boxes=document.querySelectorAll('#bkList input[type=checkbox]');
  const n=[...boxes].filter(b=>b.checked).length;
  document.getElementById('bkFb').textContent=n+'/4 — '+(n===4?'✅ Ciclo completo: con copia offsite probada + UPS/SAN, el rescate vale Q0. +15 XP':'Sin ciclo completo, un ransomware o un apagón te deja en Q0.');
  if(n===4)addXP(15); else addXP(2);
}
// ---- M8 IDS radar ----
let radarOn=false;
function radarToggle(){
  radarOn=!radarOn;
  document.getElementById('radar').style.opacity=radarOn?'1':'.45';
  document.getElementById('idsFb').innerHTML=radarOn?'✅ <b>IDS encendido:</b> detectó 2 patrones (exfiltración 2 a.m. + 500 logins fallidos) y alertó al administrador. Sin IDS seguirías ciego. <b>+10 XP</b>':'IDS apagado: el ataque entra sin que nadie lo vea.';
  if(radarOn)addXP(10);
}
// ---- M9 Rigor/balanza ----
function rigCalc(){
  const r=+document.getElementById('rigRange').value;
  document.getElementById('rigVal').textContent=r;
  document.getElementById('beam').style.transform=`rotate(${(r-5)*3}deg)`;
  const fb=document.getElementById('rigFb');
  if(r<=3){fb.textContent='🟢 Muy usable, poco seguro: todos felices hasta que vacían la cuenta.';}
  else if(r<=7){fb.textContent='✅ Punto gerente (4–7): MFA + RBAC + VPN sin pedir 3 claves para imprimir. La gente lo cumple. +8 XP';addXP(2);}
  else{fb.textContent='🔴 Tan estricto que el equipo usa su Gmail y USB personales (shadow IT): más riesgo que antes.';}
}
// ---- M10 PII ----
const PII=[
  {t:'Número de DPI/CUI 2345-67890-0101',pii:true,s:'PII directa: identifica a la persona. Cifrado + acceso por rol + consentimiento.'},
  {t:'“Me gusta el café de Antigua”',pii:false,s:'Opinión genérica sin identificar: no es PII.'},
  {t:'Historial médico + sueldo Q9,500',pii:false,s:'Ojo: ESO SÍ es PII sensible (salud + finanzas).',trick:true},
  {t:'Huella dactilar del reloj biométrico',pii:true,s:'Biometría = PII permanente. Si se filtra no la cambias: guárdala como plantilla, no como foto.'},
  {t:'Factura #4521 por Q350 sin nombre',pii:false,s:'Sin nombre/DPI no identifica: dato operativo, no PII.'},
  {t:'Excel “Planilla_final.xlsx” con nombres + cuentas',pii:true,s:'PII financiera crítica: prohibido en Excel suelto; solo ERP con RBAC y cifrado.'}
];
let piiI=0,piiOk=0,piiDone={};
function renderPii(){
  const box=document.getElementById('piiBox');if(!box)return;
  const m=PII[piiI];
  const realPii=m.trick?true:m.pii;
  box.innerHTML=`<div class="msg"><div class="from">🪪 Dato ${piiI+1}/${PII.length} — ¿lo tratarías como PII?</div><div class="body"><b>“${m.t}”</b></div>
  <div class="msg-btns"><button onclick="piiVote(false)">📄 Dato común</button><button onclick="piiVote(true)">🔒 Es PII</button></div>
  <div class="signal" id="piiFb">Aciertos: ${piiOk} · Piensa como gerente: ¿identifica a alguien o revela salud/finanzas/biometría?</div></div>`;
  box.dataset.real=realPii?'1':'0';
}
function piiVote(v){
  const m=PII[piiI];const real=m.trick?true:m.pii;
  const fb=document.getElementById('piiFb');
  if(!piiDone[piiI]&&v===real){piiOk++;addXP(10);piiDone[piiI]=true;
    fb.innerHTML=`✅ Correcto: ${m.s} <b>+10 XP</b><br><button class="btn small ghost" style="margin-top:.5rem" onclick="piiNext()">Siguiente dato →</button>`;}
  else if(v===real){fb.innerHTML=`✅ Bien: ${m.s}<br><button class="btn small ghost" style="margin-top:.5rem" onclick="piiNext()">Siguiente →</button>`;}
  else{fb.innerHTML=`❌ Revisa: ${m.s}<br><button class="btn small ghost" style="margin-top:.5rem" onclick="piiNext()">Entendido, siguiente →</button>`;}
}
function piiNext(){piiI=(piiI+1)%PII.length;renderPii();}
function fairCheck(){
  const n=[...document.querySelectorAll('.fair')].filter(b=>b.checked).length;
  document.getElementById('fairFb').textContent=n+'/4 principios. '+(n===4?'✅ Empresa responsable: consentimiento + mínimo + salvaguardas + respuesta. +10 XP':'Te falta blindaje legal: sin consentimiento y mínimo, una fuga de DPI cuesta multa + reputación.');
  if(n===4)addXP(10);
}
// ---- Quiz ----
const QUIZ=[
  {q:'1. Tu contraseña se filtró pero tienes MFA con app. ¿Qué pasa?',o:['Entran igual','Se quedan fuera sin el código dinámico','El MFA no sirve','Hay que pagar rescate'],a:1},
  {q:'2. Con 40 empleados y 8 recursos, ¿qué es más gobernable?',o:['ACL persona×recurso (320 reglas)','RBAC por 4 roles','Sin controles','Una sola clave para todos'],a:1},
  {q:'3. ¿Qué diferencia al cifrado asimétrico?',o:['Una sola clave','Par pública (cifra) + privada (abre)','No usa claves','Solo para WiFi'],a:1},
  {q:'4. Vendedor en WiFi público sin VPN envía planilla. Riesgo correcto:',o:['Ninguno','Intercepción: viaja legible','El firewall lo cifra solo','El antivirus crea VPN'],a:1},
  {q:'5. “Backup” en disco conectado al mismo servidor, nunca probado:',o:['Es 3-2-1 válido','No es offsite ni probado: con ransomware se cifra también','Basta con UPS','Es un IDS'],a:1},
  {q:'6. Excel con nombres + DPI + cuentas bancarias en carpeta compartida:',o:['Práctica aceptable','PII crítica sin control: ERP con RBAC + cifrado + consentimiento','Solo le falta color','Es disponibilidad'],a:1}
];
let qi=0,qs=0;
function renderQuiz(){
  const box=document.getElementById('quizBox');if(!box)return;
  if(qi>=QUIZ.length){box.classList.add('hidden');const d=document.getElementById('diploma');d.classList.remove('hidden');
    document.getElementById('dipText').textContent=`Sacaste ${qs}/${QUIZ.length}. XP total: ${XP}. Ya puedes exigir MFA, RBAC y 3-2-1 ante tu junta directiva.`;return;}
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
const GLOS=[['Autenticación','Verificar que eres quien dices ser (3 factores).'],['MFA','Dos o más factores de distintas categorías. Frena tomas de cuenta.'],['ACL','Permisos por persona y recurso. Caos a escala.'],['RBAC','Permisos por rol organizacional. Orden gerencial.'],['Cifrado simétrico','Una clave compartida para abrir y cerrar.'],['Cifrado asimétrico','Pública cifra, privada abre. Base de banca y FEL.'],['Firewall','Filtra paquetes según reglas de la empresa.'],['VPN','Túnel cifrado del remoto a la intranet.'],['Backup 3-2-1','3 copias, 2 medios, 1 offsite probada.'],['UPS / SAN','Energía continua y almacenamiento dedicado.'],['IDS','Radar que alerta patrones sospechosos en tiempo real.'],['PUA','Reglas de conducta digital firmadas y exigibles.'],['PII / DPI','Datos que identifican: DPI, biometría, salud, finanzas.'],['Principios justos','Consentimiento + mínimo + salvaguardas proporcionales.']];
function renderGlos(f=''){
  const g=document.getElementById('glos');if(!g)return;
  g.innerHTML=GLOS.filter(([k])=>k.toLowerCase().includes(f.toLowerCase())).map(([k,v])=>`<div class="g-item"><b>${k}</b><p>${v}</p></div>`).join('');
}
function filterGlos(){renderGlos(document.getElementById('glosSearch').value);}

/* ============ EJERCICIO EN PAREJAS (4 casos herramientas) ============ */
const CASOS=[
  {id:'A',titulo:'Caso A · Sin MFA — Cooperativa “Luz Pinulteca” 🏦',ctx:'La tesorera usaba solo contraseña en la banca empresarial (“para no complicarse”). Tras un phishing le robaron la clave y vaciaron Q18,500 a 3 cuentas nuevas. El banco confirma: con app de código dinámico el traslado se habría frenado. No hay PUA de 2FA.',meta:['👥 Finanzas 5 personas','🎯 Falta MFA','💰 Pérdida Q18,500','📍 San José Pinula'],guia:['Copiloto: ¿por qué una sola contraseña no es defensa (algo que se sabe se phishea)?','¿Qué pilar cae primero (confidencialidad) y qué cae después (integridad del saldo)?','¿MFA + límites + doble firma a qué costo evitan repetirlo? Investiguen “MFA banca Guatemala”.'],ref:'💰 Referencia: app 2FA Q0 · Límites y doble firma Q0 · Capacitación Q550 · Token físico Q350 c/u.',ataque:'Falta de MFA (solo contraseña)'},
  {id:'B',titulo:'Caso B · Caos de permisos — Retail “La Torre Zona 11” 🏬',ctx:'25 empleados con accesos dados “uno por uno” (ACL) a caja, bodega, planillas y proveedores. Un ex-vendedor despedido entró 2 semanas después con su usuario activo y anuló Q9,800 en devoluciones falsas. Nadie sabe quién puede qué.',meta:['👥 25 empleados','🎯 ACL ingobernable','💰 Fraude Q9,800','📍 Zona 11, alto flujo'],guia:['Copiloto: ¿por qué ACL persona×recurso colapsa con 25×8 = 200 reglas?','¿Qué rol RBAC crearían (Caja, Bodega, Supervisor, Auditor) y qué le quitan a quién?','¿Baja inmediata + revisión mensual a qué costo?'],ref:'💰 Referencia: ordenar RBAC Q0 (orden) · Auditoría accesos Q600 · Capacitación PUA Q550.',ataque:'ACL sin gobierno (falta RBAC)'},
  {id:'C',titulo:'Caso C · WiFi espiado — Distribuidora de Occidente 🚚',ctx:'El vendedor estrella envía desde el WiFi del centro comercial (sin VPN) la planilla con sueldos y la lista de precios en Excel sin cifrar. Un sniffer copió todo; la competencia bajó Q2 por quintal y la empresa perdió un pedido de Q22,000. El firewall de oficina nunca ve ese tráfico remoto.',meta:['👥 Ventas Holt 8','🎯 Sin VPN ni cifrado','💰 Pedido Q22,000','📍 Xela / Occidente'],guia:['Copiloto: ¿por qué el firewall de oficina no protege el café (el túnel sí)?','¿Simétrico o asimétrico para ese Excel y por qué no mandarlo por WhatsApp?','¿VPN + disco cifrado + regla PUA a qué costo?'],ref:'💰 Referencia: VPN empresarial Q250/mes · Disco cifrado Q700 · Capacitación Q550.',ataque:'Trabajo remoto sin VPN/cifrado'},
  {id:'D',titulo:'Caso D · DPI en Excel + backup falso — Clínica Santa Fe, Xela 🏥',ctx:'Recepción guarda 800 fichas (nombre + DPI + historial + seguro) en “Pacientes_final.xlsx” compartido a todos, sin consentimiento firmado. El IDS alertó exfiltración a las 2 a.m. y nadie miró. El “backup” es un disco conectado al mismo PC (sin offsite, sin prueba). Un ransomware cifró todo: rescate Q24,000.',meta:['👥 Salud 12 personas','🎯 PII + sin 3-2-1','💰 Rescate Q24,000','📍 Quetzaltenango'],guia:['Copiloto: ¿qué datos son PII y qué principio justo se violó (consentimiento/mínimo/salvaguarda)?','¿Por qué ese “backup” no es 3-2-1 (offsite + prueba)?','¿ERP con RBAC + offsite cifrado a qué costo vs Q24,000?'],ref:'💰 Referencia: nube cifrada offsite Q300/mes · ERP/RBAC Q1,200/año · Capacitación PII Q650.',ataque:'PII sin control + backup falso'}
];
const ATAQUES=['Falta de MFA (solo contraseña)','ACL sin gobierno (falta RBAC)','Trabajo remoto sin VPN/cifrado','PII sin control + backup falso','Phishing clásico','Ransomware por USB','DDoS','Skimming'];
const PILARES=['Confidencialidad','Integridad','Disponibilidad','Confidencialidad + Integridad','Integridad + Disponibilidad','Los tres (CIA completo)'];
let casoActual=0;const respuestas=[{},{},{},{}];
function irCaso(i){guardarBorrador();casoActual=i;document.querySelectorAll('.cnav').forEach(b=>b.classList.toggle('active',+b.dataset.case===i));renderCaso();document.getElementById('casoBox').scrollIntoView({behavior:'smooth',block:'start'});}
function guardarBorrador(){
  try{
    const g=id=>{const el=document.getElementById(id);return el?el.value.trim():'';};
    if(!document.getElementById('f_just'))return;
    const prev=respuestas[casoActual]||{};
    respuestas[casoActual]={ataque:g('f_ataque')||prev.ataque,pilar:g('f_pilar')||prev.pilar,just:g('f_just'),debate:g('f_debate'),perd:g('f_perd')?+g('f_perd'):prev.perd,prev:g('f_prev')?+g('f_prev'):prev.prev,medida:g('f_medida')||prev.medida,fact:g('f_fact'),roi:prev.roi,acierto:prev.acierto,ia:prev.ia||null};
  }catch(e){}
}
function avanzarCaso(){
  // S11: mentor IA desactivado en esta página — avanzar directo sin consultas.
  guardarBorrador();
  irCaso((casoActual+1)%4);
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
   <details class="guia"><summary>🧭 Guía del copiloto + investigación (leer y debatir)</summary><ul>${c.guia.map(g=>`<li>${g}</li>`).join('')}</ul></details>
   <div class="fcase">
    <fieldset><legend>1️⃣ Diagnóstico de la herramienta (decidan juntos)</legend>
     <div class="opt-grid">
      <label>🎯 Herramienta que falló / falta<select id="f_ataque">${ATAQUES.map(e=>`<option ${r.ataque===e?'selected':''}>${e}</option>`).join('')}</select></label>
      <label>🔺 Pilar CIA vulnerado<select id="f_pilar">${PILARES.map(e=>`<option ${r.pilar===e?'selected':''}>${e}</option>`).join('')}</select></label>
     </div>
     <label>🛠️ ¿Por qué es esa herramienta y no otra? + hallazgo investigado (mín. 40 caracteres)<textarea id="f_just" rows="3" placeholder="Ej. Es falta de MFA porque con solo clave el phishing bastó; investigamos que el banco ofrece 2FA gratis y...">${r.just||''}</textarea></label>
     <label>🗣️ ¿Qué debatieron? ¿Hubo desacuerdo? (mín. 30 caracteres)<textarea id="f_debate" rows="2" placeholder="Ej. El copiloto pensó en antivirus, pero el piloto mostró que el problema era identidad, no malware...">${r.debate||''}</textarea></label>
    </fieldset>
    <fieldset><legend>2️⃣ Decisión administrativa (en Quetzales Q)</legend>
     <div class="budget-line">
      <label>💸 Pérdida estimada Q<input type="number" id="f_perd" min="0" value="${r.perd||''}" placeholder="Ej. 18500"></label>
      <label>🛡️ Costo prevención Q<input type="number" id="f_prev" min="0" value="${r.prev||''}" placeholder="Ej. 550"></label>
      <label>📋 Medida estrella<select id="f_medida"><option value="">Seleccione...</option>${['MFA/2FA obligatorio + límites y doble firma','RBAC por roles + baja inmediata + auditoría','VPN + cifrado + regla de trabajo remoto','Backup 3-2-1 offsite cifrado + prueba mensual','ERP con PII controlada + consentimiento','PUA firmada + capacitación + simulacros'].map(e=>`<option ${r.medida===e?'selected':''}>${e}</option>`).join('')}</select></label>
     </div>
     <label>📊 ¿Por qué le conviene al gerente pagar la prevención? (mín. 30 caracteres)<textarea id="f_fact" rows="2" placeholder="Ej. Sí conviene: Q550 evita perder Q18,500; con un incidente se pagan 30 años...">${r.fact||''}</textarea></label>
     <div class="calc-box" id="calcBox">🧮 ROI prevención: se calcula al guardar (pérdida evitada ÷ costo).</div>
    </fieldset>
    <div class="case-btns"><button class="btn ghost" onclick="irCaso(${(casoActual+3)%4})">← Anterior</button><button class="btn primary" onclick="guardarCaso()">💾 Guardar caso ${CASOS[casoActual].id}</button><button class="btn ghost" onclick="avanzarCaso()">Siguiente →</button></div>
    <div id="casoMsg" class="form-msg"></div>
    <div class="mentor-box" id="mentorBox" style="display:none">
      <div class="mentor-head"><b>🤖 Mentoría IA · Mentor Amigo</b><span id="mentor-badge">${mentorBadge(r)}</span></div>
      <p class="small">Valida tu análisis antes de avanzar: punto de vista, retroalimentación y consejo gerencial. Quedará en el PDF. Si la IA falla, puedes continuar.</p>
      <div class="mentor-ai" id="mentor-inline" style="${r.ia&&r.ia.feedback?'':'display:none'}">${r.ia&&r.ia.feedback?esc(r.ia.feedback):''}</div>
      <div class="case-btns">
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
  if(just.length<40)errs.push('Justificación + hallazgo muy cortos (mín. 40 caracteres).');
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
  document.getElementById('calcBox').textContent=`🧮 Cada Q1 en prevención evita Q${roi} en pérdidas. ${acierto?'🎯 ¡Diagnóstico correcto de la herramienta! +25 XP':'⚠️ Diagnóstico distinto al esperado ('+CASOS[casoActual].ataque+'). Igual suma si tu justificación es sólida.'}`;
  msg.className='form-msg ok';msg.textContent=`✅ Caso ${CASOS[casoActual].id} guardado. +25 XP`;
  document.querySelector(`.cnav[data-case="${casoActual}"]`).classList.add('done');
  addXP(25);actualizarProgreso();
  // S11: mentor IA desactivado — guardar NO consulta al mentor.
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
function trunc(s,n){s=String(s==null?'':s);return s.length>n?s.slice(0,n)+'…':s;}
function sanitizeAi(raw){
  if(!raw)return '';
  let t=String(raw).replace(/<think>[\s\S]*?<\/think>/gi,'').replace(/<think>[\s\S]*/gi,'').replace(/<\/think>/gi,'');
  const answerMark=/(🎯|🧭|💼|punto de vista|retroalimentaci[oó]n|consejo gerencial)/i;
  const reasonSig=/(analy[sz]e|evaluate|role\s*:|tone\s*:|structure\s*:|constraints?\s*:|goal\s*:|objectives?\s*:|student'?s response|\*method\s*:\*|\*cia pillar\s*:\*|cadena de pensamiento|razonamiento interno|análisis interno|must contain only|no english)/i;
  const m=answerMark.exec(t);
  if(m&&m.index>0&&reasonSig.test(t.slice(0,m.index))){t=t.slice(m.index);}
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
  t=t.replace(/^[\s\n]*(¡?\s*hola\b|estimad[oa]\b|saludos\b|buen día\b)[^\n]*(\n)?/i,'');
  t=t.trim();
  if(!answerMark.test(t))return '';
  return t;
}
async function consultarMentorIA(auto){
  // S11: mentor IA desactivado en esta página — no realizar consultas.
  return;
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
   <div style="font-size:13px">Informática I · Semana 11: Herramientas de Seguridad y Privacidad · Ejercicio en Parejas</div>
   <div style="font-size:12px">XP en simuladores: ${XP} · Aciertos: ${respuestas.filter(r=>r.acierto).length}/4 · Quiz: ${qs}/${QUIZ.length}</div></div>
   <h2>🛡️ Reporte de herramientas de seguridad — Piloto + Copiloto (40 min)</h2>
   <table border="1" cellspacing="0" cellpadding="6" width="100%"><tr><td><b>🧑‍✈️ Piloto:</b> ${esc(g('nombrePiloto'))}<br><b>Carnet:</b> ${esc(g('carnetPiloto'))}</td><td><b>🧭 Copiloto:</b> ${esc(g('copilotoNombre'))}<br><b>Carnet:</b> ${esc(g('carnetCopiloto'))}</td></tr>
   <tr><td><b>Fecha:</b> ${esc(fecha)}</td><td><b>Roles alternados:</b> ${document.getElementById('alternar').checked?'Sí':'No'}</td></tr></table>`;
  CASOS.forEach((c,i)=>{const r=respuestas[i];
   h+=`<h3>${c.titulo} ${r.acierto?'✅':'⚠️'}</h3>
   <table border="1" cellspacing="0" cellpadding="6" width="100%">
   <tr><td><b>Herramienta diagnosticada:</b> ${esc(r.ataque)}<br><small>Esperada: ${esc(c.ataque)}</small></td><td><b>Pilar CIA:</b> ${esc(r.pilar)}</td></tr>
   <tr><td><b>Pérdida estimada: Q${(+r.perd).toLocaleString()}</b></td><td><b>Prevención: Q${(+r.prev).toLocaleString()}</b> (1 Q evita ${esc(r.roi)} Q)</td></tr>
   <tr><td colspan="2"><b>Medida estrella:</b> ${esc(r.medida)}</td></tr></table>
   <p><b>Justificación + hallazgo:</b> ${esc(r.just)}</p><p><b>Debate:</b> ${esc(r.debate)}</p><p><b>Decisión gerencial:</b> ${esc(r.fact)}</p>`;
   if(r.ia&&r.ia.status==='ok'&&r.ia.feedback){h+=`<p><b>🤖 Mentor IA (${esc(r.ia.model||'OpenRouter')}):</b> ${esc(r.ia.feedback)}</p>`;}
   else if(r.ia&&r.ia.status==='error'){h+=`<p><b>🤖 Mentor IA:</b> Sin conexión (${esc(r.ia.error||'red')}); el análisis quedó registrado.</p>`;}
   else{h+=`<p><b>🤖 Mentor IA:</b> Caso sin consulta de mentoría.</p>`;}});
  h+=`<h3>Cierre</h3><p><b>Compromiso PUA:</b> ${esc(g('compromiso'))}</p><p><b>Reflexión conjunta:</b> ${esc(g('opinionFinal'))}</p>
  <p><b>Totales:</b> Pérdidas evitables Q${totalPerd.toLocaleString()} · Inversión preventiva Q${totalPrev.toLocaleString()}</p>
  <p>Declaramos que debatimos cada caso y las respuestas son de nuestra autoría. _____________ (Piloto) &nbsp; _____________ (Copiloto)</p>
  <p style="font-size:11px">Montos didácticos en Quetzales. Guardar como: Apellidos_Carnets_Sem11.pdf y subir a Canvas → “Ejercicio Herramientas en Pareja S11”.</p>`;
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
    doc.setFillColor(127,29,29);doc.rect(0,0,216,30,'F');
    doc.setTextColor(255,255,255);doc.setFont('helvetica','bold');doc.setFontSize(12);
    doc.text('Universidad Mariano Gálvez de Guatemala',X,10);
    doc.setFontSize(10);doc.setFont('helvetica','normal');
    doc.text('Facultad de Ciencias de la Administración · Informática I · Semana 11: Herramientas',X,16);
    doc.text('Ejercicio en Parejas · Reporte de herramientas de seguridad (40 min)',X,22);
    let y=36;
    doc.setTextColor(0,0,0);doc.setFontSize(10);
    y=pdfBlock(doc,'XP en simuladores: '+XP+'   ·   Aciertos: '+respuestas.filter(r=>r.acierto).length+'/4   ·   Quiz: '+qs+'/'+QUIZ.length,y);
    doc.autoTable({startY:y,margin:{left:X,right:X},
      head:[['Piloto','Copiloto']],
      body:[[[pdfClean(g('nombrePiloto'))+'\nCarnet: '+pdfClean(g('carnetPiloto'))],[pdfClean(g('copilotoNombre'))+'\nCarnet: '+pdfClean(g('carnetCopiloto'))]],
            [['Fecha: '+fecha],['Roles alternados: '+(document.getElementById('alternar').checked?'Sí':'No')]]],
      headStyles:{fillColor:[220,38,38]},styles:{fontSize:10}});
    y=doc.lastAutoTable.finalY+6;
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
          ['Herramienta: '+R('ataque')+' (esperada: '+C('ataque')+')','Pilar CIA: '+R('pilar')],
          ['Pérdida estimada: Q'+(+r.perd).toLocaleString(),'Prevención: Q'+(+r.prev).toLocaleString()+' (1 Q evita '+r.roi+' Q)'],
          [{content:'Medida estrella: '+R('medida'),colSpan:2}]
        ],
        styles:{fontSize:9},columnStyles:{0:{cellWidth:95},1:{cellWidth:95}}});
      y=doc.lastAutoTable.finalY+4;
      y=pdfBlock(doc,'Justificación + hallazgo: ',r.just,y);
      y=pdfBlock(doc,'Debate piloto/copiloto: ',r.debate,y);
      y=pdfBlock(doc,'Decisión gerencial: ',r.fact,y+1);
      if(r.ia&&r.ia.status==='ok'&&r.ia.feedback){y=pdfBlock(doc,'Mentor IA ('+String(r.ia.model||'OpenRouter').slice(0,60)+'): ',String(r.ia.feedback).slice(0,1200),y+1);}
      else if(r.ia&&r.ia.status==='error'){y=pdfBlock(doc,'Mentor IA: ','Sin conexión ('+String(r.ia.error||'red').slice(0,200)+'). Análisis registrado.',y+1);}
      else{y=pdfBlock(doc,'Mentor IA: ','Caso sin consulta de mentoría.',y+1);}
      y+=2;
    });
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
    doc.text('Montos didácticos en Quetzales. Subir a Canvas como Apellidos_Carnets_Sem11.pdf',X,y);
    const n=doc.getNumberOfPages();
    for(let i=1;i<=n;i++){doc.setPage(i);doc.setFontSize(8);doc.setTextColor(120,120,120);doc.text('Página '+i+' de '+n+' · EscudoGerencial UMG S11',145,272);}
    doc.save('Apellidos_Carnets_Sem11.pdf');
    addXP(50);
    const msg=document.getElementById('cierreMsg');
    msg.className='form-msg ok';msg.textContent='✅ PDF descargado. Súbanlo a Canvas como Apellidos_Carnets_Sem11.pdf';
  }catch(e){
    document.getElementById('reporteFinal').innerHTML=construirReporte();
    document.getElementById('reporteFinal').style.display='block';
    setTimeout(()=>window.print(),300);
  }
}
function pdfClean(s){return String(s==null?'':s).replace(/[^\x09\x0A\x0D\x20-\xFF]/g,'');}
function pdfBlock(doc,label,text,y){
  const W=190,X=10,lineH=5,limit=268;
  label=pdfClean(label);
  const lines=[label].concat(doc.setFont('helvetica','normal').setFontSize(10).splitTextToSize(pdfClean(text||'—'),W));
  let idx=0;
  while(idx<lines.length){
    if(y+lineH>limit){doc.addPage();y=15;}
    doc.setFont('helvetica',idx===0?'bold':'normal');
    doc.text(lines[idx],X,y);y+=lineH;idx++;
  }
  return y+2;
}
/* ============ TAREA INDIVIDUAL ============ */
const TAREA_ESP={perd5:5*4600,prev:300*12+900+550};
TAREA_ESP.veces=TAREA_ESP.perd5/TAREA_ESP.prev;
function tGet(id){const el=document.getElementById(id);return el?el.value.trim():'';}
function verificarTarea(){
  const msg=document.getElementById('t_calcMsg');
  const perd=+tGet('t_perd5'),prev=+tGet('t_prevAnual'),vec=+tGet('t_veces');
  const ops=tGet('t_ops');
  const out=[];let ok=0;
  if(perd===TAREA_ESP.perd5){out.push('✅ (a) Pérdida 5 días correcta: 5 × 4,600 = Q'+TAREA_ESP.perd5.toLocaleString()+'.');ok++;}
  else if(perd>0){out.push('🔎 (a) Revisa: <b>5</b> × <b>Q4,600</b>. Tu resultado: Q'+perd.toLocaleString()+'.');}
  else{out.push('⛔ (a) Ingresa la pérdida por 5 días (pista: 5 × 4,600).');}
  if(prev===TAREA_ESP.prev){out.push('✅ (b) Prevención anual correcta: (300 × 12) + 900 + 550 = Q'+TAREA_ESP.prev.toLocaleString()+'.');ok++;}
  else if(prev>0){out.push('🔎 (b) Revisa: primero <b>300 × 12</b> y luego <b>+ 900 + 550</b>. Tu resultado: Q'+prev.toLocaleString()+'.');}
  else{out.push('⛔ (b) Ingresa la prevención anual (mensual × 12 + anuales).');}
  if(prev>0&&vec>0){
    const esp=perd>0?(perd/prev):TAREA_ESP.veces;
    if(Math.abs(vec-TAREA_ESP.veces)<=0.25&&Math.abs(prev-TAREA_ESP.prev)<1&&Math.abs(perd-TAREA_ESP.perd5)<1){out.push('✅ (c) Correcto: ~'+TAREA_ESP.veces.toFixed(1)+' veces. Un incidente paga 4+ años de prevención.');ok++;}
    else{out.push('🔎 (c) Revisa: <b>pérdida ÷ prevención</b> ('+perd.toLocaleString()+' ÷ '+prev.toLocaleString()+' ≈ '+esp.toFixed(1)+'). Se espera ≈ '+TAREA_ESP.veces.toFixed(1)+'.');}
  }else{out.push('⛔ (c) Ingresa la división.');}
  if(ops.length<15)out.push('✍️ Escribe tus <b>operaciones</b>: vale puntos en el parcial.');
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
   <div style="font-size:13px">Informática I · Semana 11: Tarea individual “La Silla del Gerente — Backups que Nunca se Probaron”</div>
   <div style="font-size:12px">XP en simuladores: ${XP}</div></div>
   <h2>📌 Tarea: Hotel Posada del Viajero (Antigua Guatemala)</h2>
   <table border="1" cellspacing="0" cellpadding="6" width="100%"><tr><td><b>Estudiante:</b> ${esc(tGet('t_nombre'))}<br><b>Carnet:</b> ${esc(tGet('t_carnet'))}</td><td><b>Sección:</b> ${esc(tGet('t_seccion'))}<br><b>Fecha:</b> ${esc(fecha)}</td></tr></table>
   <p><b>Caso (resumen):</b> USB desconocida cifró reservas; rescate Q28,000 en 48 h; backup en disco conectado (sin offsite, sin prueba); pérdida Q4,600/día; planilla Q60,000.</p>
   <h3>T.1 · Decisión: ${esc(tGet('t_decision')==='SI'?'SÍ PAGAR':'NO PAGAR')}</h3>
   <p><b>Argumento 1:</b> ${esc(tGet('t_arg1'))}</p><p><b>Argumento 2:</b> ${esc(tGet('t_arg2'))}</p><p><b>Argumento 3:</b> ${esc(tGet('t_arg3'))}</p>
   <h3>T.2 · Números</h3>
   <table border="1" cellspacing="0" cellpadding="6" width="100%"><tr><td><b>(a) Pérdida 5 días: Q${(+tGet('t_perd5')).toLocaleString()}</b></td><td><b>(b) Prevención anual: Q${(+tGet('t_prevAnual')).toLocaleString()}</b></td><td><b>(c) Veces: ${esc(tGet('t_veces'))}</b></td></tr></table>
   <p><b>Operaciones:</b> ${esc(tGet('t_ops'))}</p>
   <h3>T.3 · Regla PUA</h3><p>${esc(tGet('t_pua'))}</p>
   <h3>Conclusión</h3><p>${esc(tGet('t_concl'))}</p>
   <p>Declaro que esta tarea es de mi autoría. _____________ (firma)</p>
   <p style="font-size:11px">Guía de aprendizaje (no es el examen). Guardar como: Apellido_Carnet_TareaSem11.pdf y subir a Canvas.</p>`;
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
    doc.text('Facultad de Ciencias de la Administración · Informática I · Semana 11',X,16);
    doc.text('Tarea individual: La Silla del Gerente S11 (guía del parcial)',X,22);
    let y=36;doc.setTextColor(0,0,0);
    const fecha=tGet('t_fecha')||new Date().toLocaleDateString('es-GT');
    doc.autoTable({startY:y,margin:{left:X,right:X},head:[['Estudiante','Sección']],
      body:[[[pdfClean(tGet('t_nombre'))+'\nCarnet: '+pdfClean(tGet('t_carnet'))],[pdfClean(tGet('t_seccion'))+'\nFecha: '+fecha]]],
      headStyles:{fillColor:[109,40,217]},styles:{fontSize:10}});
    y=doc.lastAutoTable.finalY+6;
    y=pdfBlock(doc,'Caso (resumen): ','USB desconocida cifró reservas; rescate Q28,000 en 48 h; backup en disco conectado sin offsite ni prueba; pérdida Q4,600/día; planilla Q60,000.',y);
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
    doc.text('Guía de aprendizaje (no es el examen). Subir a Canvas como Apellido_Carnet_TareaSem11.pdf',X,y);
    const n=doc.getNumberOfPages();
    for(let i=1;i<=n;i++){doc.setPage(i);doc.setFontSize(8);doc.setTextColor(120,120,120);doc.text('Página '+i+' de '+n+' · EscudoGerencial UMG S11',145,272);}
    doc.save('Apellido_Carnet_TareaSem11.pdf');
    addXP(50);
    const msg=document.getElementById('t_msg');
    msg.className='form-msg ok';msg.textContent='✅ PDF descargado. Súbelo a Canvas como Apellido_Carnet_TareaSem11.pdf';
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
renderPii();renderCaso();actualizarProgreso();renderQuiz();renderGlos();cifrarDemo();aclCalc();rigCalc();vpnToggle();syncApiUi();validarTareaCierre();
const fc=document.getElementById('fechaClase');if(fc)fc.valueAsDate=new Date();
const tf=document.getElementById('t_fecha');if(tf)tf.valueAsDate=new Date();
