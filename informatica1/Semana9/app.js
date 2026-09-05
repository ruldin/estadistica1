// XP + progress + nav
let XP = 0;
function addXP(n){XP+=n;document.getElementById('statExp').textContent=XP;document.getElementById('quizScore').textContent='XP: '+XP;}
window.addEventListener('scroll',()=>{
  const h=document.documentElement;const p=h.scrollTop/(h.scrollHeight-h.clientHeight)*100;
  document.getElementById('progressBar').style.width=p+'%';
  document.querySelectorAll('.nav-links a').forEach(a=>{
    const s=document.querySelector(a.getAttribute('href'));if(!s)return;
    const r=s.getBoundingClientRect();
    a.classList.toggle('active',r.top<150&&r.bottom>150);
  });
});
document.getElementById('hamburger').onclick=()=>document.getElementById('navLinks').classList.toggle('open');

// MISIÓN 1
let modo='LAN';
function setModo(m){modo=m;
  document.getElementById('btnLAN').classList.toggle('active',m==='LAN');
  document.getElementById('btnWAN').classList.toggle('active',m==='WAN');
  updateSim();
}
function updateSim(){
  const d=+document.getElementById('devices').value;
  document.getElementById('devVal').textContent=d;
  const heavy=document.getElementById('heavy').checked;
  const box=document.getElementById('simResult');
  const canvas=document.getElementById('netCanvas');
  // draw device dots
  canvas.querySelectorAll('.dev').forEach(e=>e.remove());
  for(let i=0;i<Math.min(d,20);i++){
    const el=document.createElement('div');el.className='dev';
    el.style.cssText=`position:absolute;width:26px;height:26px;background:#fff;border:2px solid ${modo==='LAN'?'#22c55e':'#f59e0b'};border-radius:8px;display:flex;align-items:center;justify-content:center;font-size:14px;left:${8+ (i%10)*9}%;top:${i<10?12:62}%;`;
    el.textContent=['💻','🖨️','📱','💳','🖥️'][i%5];canvas.appendChild(el);
  }
  document.querySelectorAll('.packet').forEach(p=>p.style.animationDuration=(modo==='LAN'?'1.2s':'3s'));
  if(modo==='LAN'){
    document.getElementById('infoTipo').textContent='LAN — Tu sucursal';
    document.getElementById('infoVel').textContent='1 - 10 Gbps';
    document.getElementById('infoLat').textContent='< 5 ms ⚡';
    box.innerHTML = heavy&&d>12 ? '⚠️ Mucha carga para un solo switch. Agrega otro switch o segmenta la LAN. <b>+10 XP</b>' : '✅ LAN feliz: impresora, POS y servidor hablan rapidísimo. <b>+10 XP</b>';
  }else{
    document.getElementById('infoTipo').textContent='WAN — Guate ↔ Xela ↔ Petén';
    document.getElementById('infoVel').textContent='Según ISP (Tigo/Claro)';
    document.getElementById('infoLat').textContent='30 - 70 ms 🐢';
    box.innerHTML = heavy ? '💡 Con ERP pesado necesitas <b>mínimo 100 Mbps + VPN</b> en la WAN. <b>+10 XP</b>' : '✅ WAN enlaza sucursales y sincroniza tu ERP central. <b>+10 XP</b>';
  }
  addXP(2);
}
updateSim();

// MISIÓN 2
const MEDIOS={
 fibra:{t:'🔆 Fibra Óptica',d:'Pulsos de luz por cable de vidrio. Lo más rápido y estable.',v:'50-500 Mbps · <15 ms',c:'Q350/mes (100 Mb)',donde:'Sedes centrales, zona 10, centros comerciales, oficinas centrales.',pro:'Velocidad brutal + ideal para ERP y videollamadas.',con:'No llega al área rural. En Nebaj ni la esperes.'},
 micro:{t:'📻 Microondas / Radiofrecuencia',d:'Dos antenas que se “ven” punto a punto. Sin cavar zanjas.',v:'20-100 Mbps · 15-30 ms',c:'Q800/mes + Q8,000 instalación',donde:'Bodega ↔ planta a pocos km con línea de vista.',pro:'Buena velocidad sin depender de fibra.',con:'La lluvia fuerte la degrada. Necesita torres y permiso.'},
 movil:{t:'📱 Telefonía Móvil 4G/5G',d:'La red de Tigo/Claro que usa tu celular. Cobertura amplia.',v:'10-50 Mbps · 30-70 ms',c:'Q150-Q300/mes',donde:'Vendedores en ruta, GPS de camiones, POS portátil, respaldo barato.',pro:'Barata y llega a casi todo el país.',con:'Se satura en horas pico. No da 100 Mbps sola.'},
 satelite:{t:'🛰️ Satelital LEO (Starlink)',d:'Constelación de satélites bajos. Internet del cielo.',v:'50-200 Mbps · 25-50 ms',c:'Q450/mes + equipo Q3,500',donde:'Fincas Huehuetenango, Nebaj, Petén, minas, aldeas sin torre.',pro:'Cobertura 100% rural. Tu única opción real en Nebaj.',con:'Equipo caro y la tormenta muy fuerte puede afectarla.'}
};
function openMedio(k){const m=MEDIOS[k];
 document.getElementById('medioContent').innerHTML=`<h2>${m.t}</h2><p>${m.d}</p><p>📊 <b>${m.v}</b></p><p>💰 <b>${m.c}</b></p><p>📍 <b>Úsala en:</b> ${m.donde}</p><p>✅ ${m.pro}</p><p>⛔ ${m.con}</p>`;
 document.getElementById('medioModal').classList.add('open');addXP(5);
}
function closeMedio(){document.getElementById('medioModal').classList.remove('open');}
function miniCheck(btn,ok){
 document.querySelectorAll('#miniOpts button').forEach(b=>b.className='');
 btn.classList.add(ok?'good':'bad');
 document.getElementById('miniFb').innerHTML=ok?'✅ ¡Exacto! Sin fibra en la montaña, el satélite manda. <b>+15 XP</b>':'❌ La fibra no llega entre montañas sin infraestructura. Piensa rural.';
 if(ok)addXP(15);
}

// MISIÓN 3 builder
const parts={router:false,switch:false,ap:false,ups:false};
const PRICES={router:450,switch:350,ap:600,ups:850};
function togglePart(p){
 parts[p]=!parts[p];
 document.getElementById('part-'+p).classList.toggle('on',parts[p]);
 document.getElementById('n-'+p).classList.toggle('on',parts[p]);
 document.getElementById('n-'+p).classList.toggle('off',!parts[p]);
 if(p==='router'||p==='switch'){document.getElementById('n-pc').classList.toggle('on',parts.router&&parts.switch);document.getElementById('w-router-switch').classList.toggle('live',parts.router&&parts.switch);}
 if(p==='router'||p==='ap'){document.getElementById('w-router-ap').classList.toggle('live',parts.router&&parts.ap);}
 if(parts.switch)document.getElementById('w-switch-pc').classList.toggle('live',parts.switch&&parts.router);
 const n=Object.values(parts).filter(Boolean).length;
 const pct=n*25;
 document.getElementById('healthFill').style.width=pct+'%';
 document.getElementById('healthTitle').textContent=`Salud de la red: ${pct}% ${pct===100?'🚀':pct>=50?'🙂':'😵'}`;
 const msgs={router:['❌ Router: sin puerta a internet','✅ Router: puerta a Tigo/Claro abierta'],switch:['❌ Switch: PCs e impresoras sueltas','✅ Switch: todo cableado conectado'],ap:['❌ AP: sin Wi-Fi para POS móvil','✅ AP: Wi-Fi para tablets y POS'],ups:['❌ UPS: un apagón te cierra la venta','✅ UPS: aguantas apagones']};
 for(const k in msgs)document.getElementById('c-'+k).textContent=msgs[k][parts[k]?1:0];
 const fel=document.getElementById('felBox');
 const ok=parts.router&&(parts.switch||parts.ap);
 fel.classList.toggle('ok',ok);
 fel.textContent=ok?'🧾 SAT FEL: 🟢 OPERATIVO — puedes facturar sin parar':'🧾 SAT FEL: 🔴 BLOQUEADO — sin conexión continua no hay factura';
 if(pct===100){fel.textContent+=' + 🔋 protegido contra apagones';addXP(20);}
 else addXP(3);
}
function blackout(){
 const msg=document.getElementById('blackoutMsg');
 if(parts.ups){msg.textContent='🔋 ¡UPS al rescate! Sigues facturando 30-45 min. ✅ +10 XP';addXP(10);}
 else{msg.textContent='💥 Todo apagado: router muerto, POS muerto, clientes molestos. Instala un UPS.';}
 msg.style.fontWeight='800';
}

// MISIÓN 4 lab
function labCalc(){
 const bw=+document.getElementById('bw').value, lat=+document.getElementById('lat').value,
 sla=+document.getElementById('sla').value, u=+document.getElementById('users').value;
 document.getElementById('bwVal').textContent=bw;document.getElementById('latVal').textContent=lat;
 document.getElementById('slaVal').textContent=sla;document.getElementById('usersVal').textContent=u;
 const perUser=bw/u;
 const felOk=bw>=20&&lat<100, erpOk=perUser>=5&&lat<70, vidOk=perUser>=8&&lat<50;
 setMeter('Fel',felOk?100:35,felOk?'✅ OK':'❌ Riesgo FEL');
 setMeter('Erp',erpOk?90:30,erpOk?'✅ Fluido':'❌ Lento');
 setMeter('Vid',vidOk?85:25,vidOk?'✅ HD':'❌ Cortada');
 const downH=((100-sla)/100*8760).toFixed(1);
 const v=document.getElementById('verdict');
 if(bw>=100&&lat<=50&&sla>=99.5){v.style.background='#dcfce7';v.textContent=`🚀 Sucursal nivel gerente: ${downH}h caídas/año. Lista para FEL+ERP+Zoom.`;}
 else if(bw<30){v.style.background='#fee2e2';v.textContent=`🔴 Gerente preocupado: ${perUser.toFixed(1)} Mbps por persona no alcanza ni para el POS.`;}
 else{v.style.background='#fef9c3';v.textContent=`🟡 Vas bien pero ajusta: sube a 100 Mbps o baja latencia. Caídas estimadas: ${downH}h/año.`;}
}
function setMeter(k,pct,txt){document.getElementById('m'+k).style.width=pct+'%';document.getElementById('m'+k).style.background=pct>60?'#22c55e':'#ef4444';document.getElementById('m'+k+'T').textContent=txt;}
labCalc();

// Comparativa
function renderBars(){
 const rows=[...document.querySelectorAll('#techTable tbody tr')];
 const max=Math.max(...rows.map(r=>+r.dataset.vel));
 document.getElementById('speedBars').innerHTML=rows.map(r=>{
  const v=+r.dataset.vel;const name=r.cells[0].textContent;
  return `<div class="bar-row"><span>${name}</span><div class="bar"><div style="width:${v/max*100}%"></div></div><b>${r.cells[1].textContent}</b></div>`;
 }).join('');
}
renderBars();
function sortTable(c){
 const tb=document.querySelector('#techTable tbody');const rows=[...tb.rows];
 rows.sort((a,b)=>a.cells[c].textContent.localeCompare(b.cells[c].textContent,'es',{numeric:true}));
 tb.append(...rows);renderBars();
}
function highlightRural(){resetTable();[...document.querySelectorAll('#techTable tbody tr')].forEach(r=>{if(r.dataset.rural==='4')r.classList.add('hl-row');else r.classList.add('dim');});addXP(5);}
function highlightSpeed(){resetTable();[...document.querySelectorAll('#techTable tbody tr')].forEach(r=>{if(+r.dataset.vel>200)r.classList.add('hl-row');else r.classList.add('dim');});addXP(5);}
function resetTable(){document.querySelectorAll('#techTable tbody tr').forEach(r=>r.classList.remove('hl-row','dim'));}

// Guatemala zonas
const ZONAS={
 metro:{t:'🏙️ Ciudad de Guatemala — Oficinas centrales',d:'Fibra óptica 200 Mbps (Q500/mes) + backup 4G. Tigo y Claro pelean por ti: exige SLA 99.9% y VPN entre sedes. Aquí sí hay fibra.'},
 huehue:{t:'☕ Huehuetenango — Finca cafetalera',d:'Starlink LEO (Q450/mes) para planillas y exportación + 4G de respaldo. La montaña bloquea fibra y microondas. Caso real del PDF.'},
 nebaj:{t:'💊 Nebaj, Quiché — Farmacia rural',d:'Principal: Starlink o 4G empresarial. Respaldo: el otro. UPS obligatorio por variaciones de voltaje. Sin esto no hay FEL ni cobro con tarjeta.'},
 ruta:{t:'🚚 Flota logística nacional',d:'4G/5G ilimitado por camión (Q250 c/u) + GPS + POS portátil. La WAN móvil sigue a tu flota donde vaya.'},
 peten:{t:'🌴 Petén rural / mina / agro',d:'Starlink total. Equipo Q3,500 pero cobertura 100%. Suma panel solar + UPS si no hay red eléctrica estable.'}
};
function zona(k){const z=ZONAS[k];if(!z)return;
 // fix key with space issue
 document.getElementById('zonaCard').innerHTML=`<h3>${z.t}</h3><p>${z.d}</p><p>💰 <b>Tip gerente:</b> siempre cotiza instalación + mensualidad en Quetzales y pide el SLA por escrito.</p>`;
 addXP(5);
}
const SECTORES=[
 {t:'☕ Agroindustria — Huehuetenango',d:'Fincas cafetaleras usan Starlink para planillas, clima IoT y órdenes de exportación. <b>Decisión gerente:</b> pagar equipo alto una vez (Q3,500) para no perder cosechas por estar incomunicado.'},
 {t:'🚚 Logística & Ruta — Cobertura nacional',d:'Camiones con 4G/5G: GPS en vivo + cobro con POS portátil. <b>Decisión gerente:</b> eliges plan de datos por línea; la latencia de 50 ms no importa, la cobertura sí.'},
 {t:'🏪 Comercio & Retail — Sucursales interior',d:'Tiendas combinan fibra/4G principal + respaldo para nunca parar el FEL. <b>Decisión gerente:</b> doble enlace cuesta Q200 extra pero evita perder un sábado entero de ventas.'}
];
function tabSector(i,btn){
 document.querySelectorAll('.tab').forEach(b=>b.classList.remove('active'));btn.classList.add('active');
 document.getElementById('sectorCard').innerHTML=`<h3>${SECTORES[i].t}</h3><p>${SECTORES[i].d}</p>`;addXP(5);
}
tabSector(0,document.querySelector('.tab'));

// Wizard Nebaj
function wizard(n){
 [1,2,3].forEach(i=>{document.getElementById('w'+i).classList.toggle('hidden',i!==n);document.getElementById('s'+i).classList.toggle('active',i<=n);});
 document.getElementById('reto').scrollIntoView({behavior:'smooth'});
}
const COST={satelite:{m:450,i:3500,n:'Satelital LEO'},movil:{m:250,i:300,n:'4G LTE'},fibra:{m:350,i:500,n:'Fibra 100Mb'},micro:{m:800,i:8000,n:'Microondas'},ninguno:{m:0,i:0,n:'Sin respaldo'}};
function cotizar(){
 const p=document.getElementById('selPrincipal').value,b=document.getElementById('selBackup').value;
 let inst=COST[p].i+COST[b].i, men=COST[p].m+COST[b].m, hw=0;const items=[];
 if(hwRouter.checked){hw+=450;items.push('Router Q450');}
 if(hwSwitch.checked){hw+=350;items.push('Switch Q350');}
 if(hwAP.checked){hw+=600;items.push('AP Wi-Fi Q600');}
 if(hwUPS.checked){hw+=850;items.push('UPS Q850');}
 if(hwVPN.checked){men+=100;items.push('VPN Q100/mes');}
 inst+=hw;
 // score gerente
 let s=0,fb=[];
 if(p==='satelite'||p==='movil'){s+=30;}else if(p==='fibra'){s+=10;fb.push('⚠️ Fibra en Nebaj casi no existe: propuesta poco realista.');}else{s+=20;}
 if(b!=='ninguno'){s+=25;}else{fb.push('🔴 Sin respaldo no cumples FEL continuo. Un corte = cero ventas.');}
 if(hwUPS.checked){s+=20;}else{fb.push('🔴 Sin UPS en Nebaj con apagones = suicidio operativo.');}
 if(hwRouter.checked&&hwSwitch.checked&&hwAP.checked){s+=15;}else{fb.push('🟡 Te falta hardware LAN: router+switch+AP es el trío mínimo.');}
 if(hwVPN.checked){s+=10;}else{fb.push('🟡 Sin VPN tus datos financieros viajan expuestos.');}
 if(s>=90)fb.push('🌟 ¡Nivel gerente general! Propuesta sólida, realista y con continuidad.');
 else if(s>=70)fb.push('👍 Bien, casi lista para presentar a junta directiva.');
 else fb.push('📚 Repasa misiones 3 y 5 antes de presentar.');
 document.getElementById('cotiza').innerHTML=`<p>🔗 Principal: <b>${COST[p].n}</b> (Q${COST[p].m}/mes) · Respaldo: <b>${COST[b].n}</b> (Q${COST[b].m}/mes)</p><p>🔧 Hardware: ${items.join(' · ')||'ninguno'}</p><h3>💰 Inversión inicial: Q${inst.toLocaleString()} · Mensualidad: Q${men.toLocaleString()}/mes</h3><p class="small">Estimación didáctica en Quetzales. Anual primer año ≈ Q${(inst+men*12).toLocaleString()}.</p>`;
 document.getElementById('scoreVal').textContent=s;
 document.getElementById('scoreFill').style.width=s+'%';
 document.getElementById('scoreMsg').innerHTML=fb.join('<br>');
 addXP(Math.round(s/5));
}

// Quiz
const QUIZ=[
 {q:'1. Tu tienda conecta 5 PCs e impresoras dentro del mismo local. ¿Qué red es?',o:['WAN','LAN ✅','VPN','SAT'],a:1},
 {q:'2. Necesitas un finca en Huehuetenango sin fibra. ¿Mejor opción?',o:['Fibra óptica','Microondas sin línea de vista','Satelital LEO ✅','Cable USB'],a:2},
 {q:'3. ¿Qué equipo emite el Wi-Fi para tablets y POS?',o:['UPS','Switch','Punto de Acceso (AP) ✅','Satelite'],a:2},
 {q:'4. La latencia es...',o:['Cuánto cabe por segundo','Tiempo de respuesta en ms ✅','Factura electrónica','Precio del router'],a:1},
 {q:'5. En Nebaj hay apagones. ¿Qué salva tus ventas?',o:['Más velocidad','UPS + regulador ✅','Otro POS sin luz','Nada'],a:1},
 {q:'6. Sin internet no puedes emitir...',o:['FEL a la SAT ✅','Tickets en papel','Inventario físico','Nada'],a:0},
];
let qi=0,qs=0;
function renderQuiz(){
 const box=document.getElementById('quizBox');
 if(qi>=QUIZ.length){
  box.classList.add('hidden');
  const d=document.getElementById('diploma');d.classList.remove('hidden');
  document.getElementById('dipText').textContent=`Sacaste ${qs}/${QUIZ.length}. XP total: ${XP}. Ya puedes defender un presupuesto de red en Quetzales ante tu jefe.`;
  return;
 }
 const item=QUIZ[qi];
 box.innerHTML=`<div class="q"><h3>${item.q}</h3>${item.o.map((o,i)=>`<button onclick="answer(${i})">${o}</button>`).join('')}</div><p>Pregunta ${qi+1} de ${QUIZ.length} · Aciertos: ${qs}</p>`;
}
function answer(i){
 const btns=document.querySelectorAll('#quizBox button');
 btns.forEach((b,j)=>{if(j===QUIZ[qi].a)b.classList.add('correct');});
 if(i===QUIZ[qi].a){qs++;addXP(10);}else{btns[i].classList.add('wrong');}
 setTimeout(()=>{qi++;renderQuiz();},800);
}
renderQuiz();

// Glosario
const GLOS=[['Ancho de banda','Cuánto dato cabe por segundo (Mbps). Como el ancho de una carretera.'],['Latencia','Retraso en ms. Como lo que tarda un tuc-tuc en responder.'],['SLA','Promesa escrita del proveedor (% tiempo activo). 99.5% = 44h caído/año.'],['ISP','Proveedor de internet (Tigo, Claro).'],['VPN','Túnel privado que cifra datos entre sucursales.'],['FEL','Factura Electrónica en Línea de la SAT. Sin internet no sale.'],['LAN','Red local: dentro de un edificio.'],['WAN','Red amplia: entre ciudades.'],['UPS','Batería que aguanta apagones 30-45 min.'],['Starlink LEO','Internet satelital bajo, ideal rural Guatemala.'],['AP','Punto de acceso: emite Wi-Fi.'],['Switch','Caja que conecta cables de PCs e impresoras.']];
function renderGlos(f=''){
 document.getElementById('glos').innerHTML=GLOS.filter(([k])=>k.toLowerCase().includes(f.toLowerCase())).map(([k,v])=>`<div class="g-item"><b>${k}</b><p>${v}</p></div>`).join('');
}
function filterGlos(){renderGlos(document.getElementById('glosSearch').value);}
renderGlos();

/* ================= MÓDULO EJERCICIO EN PAREJAS ================= */
const CASOS=[
 {id:'A',titulo:'Caso A · Oficina Central — Zona 10, Ciudad de Guatemala 🏙️',
  contexto:'La empresa “Comercial Los Altos, S.A.” abre su oficina central con gerencia, contabilidad y ventas. Todo opera en ERP en la nube, videollamadas con proveedores y facturación FEL todo el día. Si el internet cae 1 hora en quincena, se pierden ~Q8,000 en ventas y planillas.',
  meta:['👥 35 usuarios','🔌 Conexión requerida: 100% jornada (8h-18h)','💰 Techo mensual: Q1,200','📍 Fibra disponible: SÍ'],
  guia:['Copiloto, pregunta: ¿35 usuarios en Zoom + ERP caben en 30 Mbps? (No: piden 100+ Mbps).','¿Qué SLA exigirías a Tigo/Claro por escrito y por qué 99.9% > 99.5%?','¿El costo de 1 hora caída (Q8,000) justifica pagar Q200 extra por respaldo?'],
  ref:'💰 Referencia: Fibra 100 Mb Q350/mes · Fibra 200 Mb Q500/mes · Backup 4G Q199/mes · Router Q450 · Switch 24p Q900 · AP empresarial Q800 · UPS Q850 · VPN Q100/mes.'},
 {id:'B',titulo:'Caso B · Finca Cafetalera — Huehuetenango ☕',
  contexto:'Finca “El Volcán” (exportadora de café) necesita reportar planillas, humedad de silos (IoT) y órdenes de exportación. Solo 8 personas usan internet, pero en cosecha (3 meses) estar incomunicados 1 día = Q12,000 de penalización con el comprador. No hay fibra; la geografía montañosa bloquea señal.',
  meta:['👥 8 usuarios','🔌 Conexión: 70% del día, crítica en cosecha','💰 Techo mensual: Q800','📍 Fibra disponible: NO'],
  guia:['Copiloto, pregunta: ¿por qué fibra y microondas fallan aquí? (montaña, sin línea de vista).','¿Conviene pagar equipo Starlink Q3,500 una vez vs. perder Q12,000 por día caído?','¿Qué respaldo barato pondrías para época no-cosecha?'],
  ref:'💰 Referencia: Starlink Q450/mes + equipo Q3,500 · 4G rural Q250/mes · Router Q450 · Switch 8p Q350 · AP exterior Q700 · UPS Q850 · Panel solar opcional Q1,500.'},
 {id:'C',titulo:'Caso C · Logística “Rápido Chapín” — Bodega Villa Nueva + 12 camiones 🚚',
  contexto:'Bodega con 15 personas (inventario + despacho) y 12 pilotos en ruta por todo el país. Necesitan GPS en vivo, guías electrónicas y cobro con POS portátil en cada entrega. Si un camión pierde señal, igual debe poder cobrar offline y sincronizar después.',
  meta:['👥 15 en bodega + 12 pilotos','🔌 Conexión: bodega 100% + flota en movimiento','💰 Techo mensual: Q2,500 total','📍 Fibra en bodega: SÍ / en ruta: solo 4G-5G'],
  guia:['Copiloto, pregunta: ¿qué va en la bodega (fibra) y qué va en cada camión (SIM 4G)?','¿Cómo calculas 12 líneas × Q250 = Q3,000? ¿Qué recortarías para caber en Q2,500?','¿La latencia de 50 ms afecta al GPS y al POS? ¿Por qué sí/no?'],
  ref:'💰 Referencia: Fibra bodega Q350/mes · SIM 4G por camión Q150-Q250/mes · GPS Q80/mes c/u · POS portátil Q1,200 equipo · Router Q450 · Switch Q350 · UPS Q850.'},
 {id:'D',titulo:'Caso D · Farmacia Rural — Nebaj, Quiché 💊',
  contexto:'Cadena regional abre sucursal en Nebaj: 6 personas, inventario central, cobro con tarjeta y FEL a la SAT todo el día. Hay variaciones de voltaje y cortes de luz semanales. 1 día sin FEL = Q4,500 en ventas perdidas + multa SAT.',
  meta:['👥 6 usuarios','🔌 Conexión: 100% horario tienda (8h-20h)','💰 Techo mensual: Q900','📍 Fibra: NO · 4G: intermitente · Satélite: SÍ'],
  guia:['Copiloto, pregunta: ¿por qué el UPS no es opcional aquí?','Principal + respaldo: ¿Starlink + 4G o 4G + 4G? Justifica con FEL continuo.','¿El gasto mensual cabe en Q900? Muestra la suma Q/mes.'],
  ref:'💰 Referencia: Starlink Q450/mes + equipo Q3,500 · 4G backup Q199/mes · Router Q450 · Switch Q350 · AP Q600 · UPS Q850 (obligatorio) · VPN Q100/mes.'}
];
const ENLACES=['Fibra óptica','4G / 5G (Tigo/Claro)','Satelital LEO (Starlink)','Enlace Microondas'];
let casoActual=0;
const respuestas=[{},{},{},{}];

function irCaso(i){
 casoActual=i;
 document.querySelectorAll('.cnav').forEach(b=>b.classList.toggle('active',+b.dataset.case===i));
 renderCaso();
 document.getElementById('casoBox').scrollIntoView({behavior:'smooth',block:'start'});
}
function liderDeCaso(i){
 const alt=document.getElementById('alternar')?.checked;
 if(!alt) return 'Piloto lidera · Copiloto debate';
 return (i%2===0) ? '🧑‍✈️ Lidera PILOTO · 🧭 debate COPILOTO' : '🧭 Lidera COPILOTO · 🧑‍✈️ debate PILOTO';
}
function renderCaso(){
 const c=CASOS[casoActual], r=respuestas[casoActual];
 const hw=r.hw||{};
 const box=document.getElementById('casoBox');
 box.innerHTML=`
 <div class="card">
  <div class="case-head"><h3>${c.titulo}</h3>
   <div class="case-meta">${c.meta.map(m=>`<span>${m}</span>`).join('')}</div>
   <div style="margin-top:.5rem;font-size:.85rem">🎙️ Rol: <b>${liderDeCaso(casoActual)}</b></div>
  </div>
  <p>${c.contexto}</p>
  <p class="small">${c.ref}</p>
  <details class="guia"><summary>🧭 Guía del copiloto (el copiloto la lee en voz alta y debate)</summary>
    <ul>${c.guia.map(g=>`<li>${g}</li>`).join('')}</ul>
    <p><b>Frases para debatir:</b> “¿Qué pasa si cae 1 hora en el peor momento?”, “¿Ese gasto cabe en el techo mensual?”, “¿Cómo garantizamos FEL / cobro sin parar?”</p>
  </details>
  <div class="fcase">
   <fieldset><legend>1️⃣ Decisión técnica (Piloto propone, Copiloto valida)</legend>
    <div class="opt-grid">
     <label>Enlace principal<select id="f_principal">${ENLACES.map(e=>`<option ${r.principal===e?'selected':''}>${e}</option>`).join('')}</select></label>
     <label>Enlace respaldo / backup<select id="f_backup"><option ${r.backup==='Sin respaldo'?'selected':''}>Sin respaldo</option>${ENLACES.map(e=>`<option ${r.backup===e?'selected':''}>${e}</option>`).join('')}</select></label>
    </div>
    <label>📶 Ancho de banda contratado (Mbps)<input type="number" id="f_bw" min="5" max="500" value="${r.bw||100}"></label>
    <label>🔧 Hardware incluido</label>
    <div class="hw-grid">
     ${['Router','Switch','Punto de acceso Wi-Fi','UPS + regulador','VPN'].map(h=>`<label><input type="checkbox" class="f_hw" value="${h}" ${hw[h]?'checked':''}> ${h}</label>`).join('')}
    </div>
   </fieldset>
   <fieldset><legend>2️⃣ Justificación (obligatorio debatir)</legend>
    <label>🛠️ ¿Por qué esta tecnología y no otra? (mín. 40 caracteres)<textarea id="f_just" rows="3" placeholder="Ej. Elegimos Starlink porque no hay fibra en la zona y su latencia de 25-50 ms sí permite FEL y ERP, mientras 4G solo daría 10-50 Mbps inestables...">${r.just||''}</textarea></label>
    <label>🗣️ ¿Qué debatieron? ¿Hubo desacuerdo? (mín. 30 caracteres)<textarea id="f_debate" rows="2" placeholder="Ej. El copiloto quería solo 4G por barato, pero el piloto mostró que 1 día caído cuesta Q12,000, así que acordamos...">${r.debate||''}</textarea></label>
   </fieldset>
   <fieldset><legend>3️⃣ Factibilidad económica (en Quetzales Q)</legend>
    <div class="budget-line">
     <label>💵 Mensualidad total Q<input type="number" id="f_men" min="0" value="${r.men||''}" placeholder="Ej. 650"></label>
     <label>🔨 Instalación + equipos Q<input type="number" id="f_inst" min="0" value="${r.inst||''}" placeholder="Ej. 5500"></label>
     <label>💸 Si cae 1 día, ¿cuánto pierde el negocio? Q<input type="number" id="f_perd" min="0" value="${r.perd||''}" placeholder="Ej. 4500"></label>
    </div>
    <label>📊 ¿Es factible? ¿Por qué le conviene al gerente pagar esto?<textarea id="f_fact" rows="2" placeholder="Ej. Sí es factible: Q650/mes cabe en el techo de Q900 y evita perder Q4,500 por día. Se recupera con 1 día evitado...">${r.fact||''}</textarea></label>
    <div class="calc-box" id="calcBox">🧮 Primer año estimado: Q — (se calcula al guardar)</div>
   </fieldset>
   <div class="case-btns">
     <button class="btn ghost" onclick="irCaso(${(casoActual+3)%4})">← Anterior</button>
     <button class="btn primary" onclick="guardarCaso()">💾 Guardar caso ${CASOS[casoActual].id}</button>
     <button class="btn ghost" onclick="irCaso(${(casoActual+1)%4})">Siguiente →</button>
   </div>
   <div id="casoMsg" class="form-msg"></div>
  </div>
 </div>`;
}
function guardarCaso(){
 const msg=document.getElementById('casoMsg');
 const v=id=>document.getElementById(id).value.trim();
 const principal=v('f_principal'), backup=v('f_backup'), bw=+v('f_bw'),
  just=v('f_just'), debate=v('f_debate'), men=+v('f_men'), inst=+v('f_inst'), perd=+v('f_perd'), fact=v('f_fact');
 const hw={};document.querySelectorAll('.f_hw').forEach(c=>hw[c.value]=c.checked);
 const errs=[];
 if(just.length<40)errs.push('Justificación técnica muy corta (mín. 40 caracteres). Debatan más.');
 if(debate.length<30)errs.push('Falta describir el debate (mín. 30 caracteres).');
 if(!(men>0))errs.push('Ingresa la mensualidad total en Q.');
 if(!(inst>=0&&v('f_inst')!==''))errs.push('Ingresa la instalación/equipos en Q (puede ser 0).');
 if(!(perd>0))errs.push('Estima la pérdida por 1 día caído en Q.');
 if(fact.length<30)errs.push('Factibilidad económica muy corta (mín. 30 caracteres).');
 if(!Object.values(hw).includes(true))errs.push('Selecciona al menos 1 hardware.');
 if(errs.length){msg.className='form-msg err';msg.innerHTML='⛔ '+errs.join('<br>⛔ ');return;}
 respuestas[casoActual]={principal,backup,bw,hw,just,debate,men,inst,perd,fact,anio:inst+men*12};
 document.getElementById('calcBox').textContent=`🧮 Primer año estimado: Q${(inst+men*12).toLocaleString()} (instalación Q${inst.toLocaleString()} + 12 × Q${men.toLocaleString()}/mes) · Si evitas 1 día caído ahorras Q${perd.toLocaleString()}.`;
 msg.className='form-msg ok';msg.textContent=`✅ Caso ${CASOS[casoActual].id} guardado. ¡Buen debate! +25 XP`;
 document.querySelector(`.cnav[data-case="${casoActual}"]`).classList.add('done');
 addXP(25);actualizarProgreso();
}
function casosCompletos(){return respuestas.filter(r=>r.principal&&r.just).length;}
function actualizarProgreso(){
 const n=casosCompletos();
 document.getElementById('casesFill').style.width=(n/4*100)+'%';
 document.getElementById('casesTxt').textContent=`${n}/4 casos completos`;
 validarCierre();
}
function datosValidos(){
 const v=id=>document.getElementById(id).value.trim();
 const m=document.getElementById('datosMsg');
 if(v('nombrePiloto').length<5||v('copilotoNombre').length<5){m.className='form-msg err';m.textContent='⛔ Escribe el nombre completo de ambos.';return false;}
 if(v('carnetPiloto').length<5||v('carnetCopiloto').length<5){m.className='form-msg err';m.textContent='⛔ Escribe ambos carnets (mín. 5 caracteres).';return false;}
 if(!v('seccion')){m.className='form-msg err';m.textContent='⛔ Selecciona la sección.';return false;}
 m.className='form-msg ok';m.textContent='✅ Datos listos.';return true;
}
function validarCierre(){
 const okDatos=document.getElementById('nombrePiloto').value.trim().length>=5&&document.getElementById('carnetPiloto').value.trim().length>=5&&document.getElementById('copilotoNombre').value.trim().length>=5&&document.getElementById('carnetCopiloto').value.trim().length>=5&&document.getElementById('seccion').value;
 const okCasos=casosCompletos()===4;
 const okOp=document.getElementById('opinionFinal').value.trim().length>=50&&document.getElementById('riesgoFinal').value&&document.getElementById('declaro').checked;
 const btn=document.getElementById('btnPDF');
 const msg=document.getElementById('cierreMsg');
 const faltan=[];
 if(!okDatos)faltan.push('datos de la pareja');
 if(!okCasos)faltan.push(`${casosCompletos()}/4 casos`);
 if(document.getElementById('opinionFinal').value.trim().length<50)faltan.push('opinión final (50+ caracteres)');
 if(!document.getElementById('riesgoFinal').value)faltan.push('riesgo principal');
 if(!document.getElementById('declaro').checked)faltan.push('declaración de autoría');
 btn.disabled=faltan.length>0;
 msg.className='form-msg '+(faltan.length?'err':'ok');
 msg.textContent=faltan.length?('⏳ Falta: '+faltan.join(' · ')):'✅ Todo listo. Genera tu PDF para Canvas.';
 return !faltan.length;
}
['nombrePiloto','carnetPiloto','copilotoNombre','carnetCopiloto','seccion','fechaClase','opinionFinal','riesgoFinal','declaro','alternar'].forEach(id=>{
 document.addEventListener('input',e=>{if(e.target&&e.target.id===id)validarCierre();});
 document.addEventListener('change',e=>{if(e.target&&e.target.id===id){if(id==='alternar')renderCaso();validarCierre();}});
});
function esc(s){return String(s||'').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');}
function construirReporte(){
 const g=id=>document.getElementById(id).value.trim();
 const fecha=g('fechaClase')||new Date().toLocaleDateString('es-GT');
 const totalMen=respuestas.reduce((a,r)=>a+(+r.men||0),0);
 const totalAnio=respuestas.reduce((a,r)=>a+(+r.anio||0),0);
 let h=`<div style="text-align:center;border-bottom:3px solid #1d4ed8;padding-bottom:10px;margin-bottom:12px">
  <div style="font-size:15px;font-weight:800">🎓 Universidad Mariano Gálvez de Guatemala — Facultad de Ciencias de la Administración</div>
  <div style="font-size:13px">Informática I · Módulo II: Redes y Telecomunicaciones · Ejercicio en Clase en Parejas (2.º año)</div></div>
  <h2>📝 Reporte de decisiones de conectividad — Piloto + Copiloto</h2>
  <table border="1" cellspacing="0" cellpadding="6" width="100%"><tr><td><b>🧑‍✈️ Piloto:</b> ${esc(g('nombrePiloto'))}<br><b>Carnet:</b> ${esc(g('carnetPiloto'))}</td><td><b>🧭 Copiloto:</b> ${esc(g('copilotoNombre'))}<br><b>Carnet:</b> ${esc(g('carnetCopiloto'))}</td></tr>
  <tr><td><b>Sección:</b> ${esc(g('seccion'))}</td><td><b>Fecha:</b> ${esc(fecha)} · <b>Roles alternados:</b> ${document.getElementById('alternar').checked?'Sí':'No'}</td></tr></table>`;
 CASOS.forEach((c,i)=>{
  const r=respuestas[i];
  h+=`<h3>${c.titulo}</h3><p><i>${c.contexto}</i></p>
  <table border="1" cellspacing="0" cellpadding="6" width="100%">
  <tr><td><b>Enlace principal:</b> ${esc(r.principal)} (${r.bw} Mbps)</td><td><b>Respaldo:</b> ${esc(r.backup)}</td></tr>
  <tr><td colspan="2"><b>Hardware:</b> ${Object.keys(r.hw||{}).filter(k=>r.hw[k]).join(', ')}</td></tr>
  <tr><td><b>Mensual Q${(+r.men).toLocaleString()}</b> · <b>Instalación Q${(+r.inst).toLocaleString()}</b> · <b>Año 1 Q${(+r.anio).toLocaleString()}</b></td><td><b>Pérdida 1 día caído: Q${(+r.perd).toLocaleString()}</b></td></tr></table>
  <p><b>Justificación técnica:</b> ${esc(r.just)}</p><p><b>Debate piloto/copiloto:</b> ${esc(r.debate)}</p><p><b>Factibilidad económica:</b> ${esc(r.fact)}</p>`;
 });
 h+=`<h3>Cierre</h3><p><b>Riesgo #1 en Guatemala según la pareja:</b> ${esc(g('riesgoFinal'))}</p><p><b>Opinión conjunta:</b> ${esc(g('opinionFinal'))}</p>
 <p><b>Totales estimados (4 casos):</b> Q${totalMen.toLocaleString()}/mes · Año 1: Q${totalAnio.toLocaleString()}</p>
 <p>Declaramos que debatimos cada caso y las respuestas son de nuestra autoría. ______________________ (Piloto) &nbsp; ______________________ (Copiloto)</p>
 <p style="font-size:11px">Precios didácticos estimados en Quetzales. Subir a Canvas como: Apellidos_Carnets_Redes.pdf</p>`;
 return h;
}
function vistaPrevia(){
 if(!validarCierre()&&casosCompletos()<4){document.getElementById('cierreMsg').className='form-msg err';document.getElementById('cierreMsg').textContent='⛔ Completa los 4 casos primero.';return;}
 datosValidos();
 document.getElementById('reporteFinal').innerHTML=construirReporte();
 document.getElementById('reporteFinal').style.display='block';
 document.getElementById('reporteFinal').scrollIntoView({behavior:'smooth'});
}
function generarPDF(){
 datosValidos();
 if(!validarCierre()){document.getElementById('cierreMsg').scrollIntoView({behavior:'smooth'});return;}
 document.getElementById('reporteFinal').innerHTML=construirReporte();
 document.getElementById('reporteFinal').style.display='block';
 addXP(50);
 setTimeout(()=>window.print(),300);
}
renderCaso();actualizarProgreso();
document.getElementById('fechaClase').valueAsDate=new Date();
