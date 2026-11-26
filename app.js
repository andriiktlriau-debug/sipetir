var STAGES=[
{n:"Permohonan Masuk",o:"OSS"},
{n:"Verifikasi Administrasi",o:"Dinas DPMPTSP"},
{n:"Verifikasi Dokumen Teknis",o:"Dinas ESDM"},
{n:"Permohonan Lampiran Teknis",o:"Dinas DPMPTSP"},
{n:"Penerbitan Lampiran Teknis",o:"Dinas ESDM"},
{n:"Persetujuan Persyaratan Permohonan Perizinan",o:"Dinas ESDM"},
{n:"Penerbitan Izin",o:"Dinas DPMPTSP"}];
var D=[
{id:"IZN-2026-0101",nk:"9120014567101",nm:"PT Sinar Kampar Energi",jn:"Izin Usaha Penyediaan Tenaga Listrik untuk Kepentingan Sendiri",st:1,done:false,log:["2026-11-17","2026-11-17"],by:["Admin"],lk:{}},
{id:"IZN-2026-0102",nk:"9120014567102",nm:"CV Teknik Siak Mandiri",jn:"Izin Usaha Jasa Penunjang Tenaga Listrik",st:2,done:false,log:["2026-11-05","2026-11-05","2026-11-12"],by:["Admin","Verifikator 1"],lk:{1:"https://example.com/tabel-verifikasi/0102-adm"}},
{id:"IZN-2026-0103",nk:"9120014567103",nm:"PT Rokan Daya Utama",jn:"Izin Usaha Penyediaan Tenaga Listrik untuk Kepentingan Sendiri",st:3,done:false,log:["2026-10-26","2026-10-26","2026-11-02","2026-11-09"],by:["Admin","Verifikator 1","NANO TRISUCI, ST"],lk:{1:"https://example.com/tabel-verifikasi/0103-adm",2:"https://example.com/tabel-verifikasi/0103-teknis"}},
{id:"IZN-2026-0104",nk:"9120014567104",nm:"PT Indragiri Listrik Prima",jn:"Izin Usaha Jasa Penunjang Tenaga Listrik",st:4,done:false,log:["2026-10-15","2026-10-15","2026-10-21","2026-10-30","2026-11-10"],by:["Admin","Verifikator 1","NANO TRISUCI, ST","Verifikator 1"],lk:{1:"https://example.com/tabel-verifikasi/0104-adm",2:"https://example.com/tabel-verifikasi/0104-teknis"}},
{id:"IZN-2026-0105",nk:"9120014567105",nm:"PT Dumai Power Services",jn:"Izin Usaha Penyediaan Tenaga Listrik untuk Kepentingan Sendiri",st:5,done:false,log:["2026-10-05","2026-10-05","2026-10-09","2026-10-19","2026-10-28","2026-11-06"],by:["Admin","Verifikator 1","NANO TRISUCI, ST","Verifikator 1","M. DEDI, ST"],lk:{1:"https://example.com/tabel-verifikasi/0105-adm",2:"https://example.com/tabel-verifikasi/0105-teknis"}},
{id:"IZN-2026-0106",nk:"9120014567106",nm:"PT Bengkalis Elektrik Jaya",jn:"Izin Usaha Jasa Penunjang Tenaga Listrik",st:6,done:false,log:["2026-09-22","2026-09-22","2026-09-28","2026-10-08","2026-10-16","2026-10-27","2026-11-04"],by:["Admin","Verifikator 1","NANO TRISUCI, ST","Verifikator 1","M. DEDI, ST","NANO TRISUCI, ST"],lk:{1:"https://example.com/tabel-verifikasi/0106-adm",2:"https://example.com/tabel-verifikasi/0106-teknis"}},
{id:"IZN-2026-0107",nk:"9120014567107",nm:"PT Pelalawan Energi Sejahtera",jn:"Izin Usaha Penyediaan Tenaga Listrik untuk Kepentingan Sendiri",st:6,done:true,log:["2026-09-01","2026-09-01","2026-09-04","2026-09-15","2026-09-22","2026-10-01","2026-10-08","2026-10-15"],by:["Admin","Verifikator 1","NANO TRISUCI, ST","Verifikator 1","M. DEDI, ST","NANO TRISUCI, ST","Verifikator 2"],lk:{1:"https://example.com/tabel-verifikasi/0107-adm",2:"https://example.com/tabel-verifikasi/0107-teknis"}}];
D[6].tek={iuptls:{kab:"Pelalawan",alamat:"Jl. Lintas Timur Km 45, Pangkalan Kerinci",pic:"Hendra Saputra",wa:"081234567890",email:"hendra@contoh.co.id",kap:"3200",kapu:"kW",sifat:"Utama",mesin:[{jenis:"Diesel",mt:"Caterpillar 3516",jml:"2",kap:"1600"}],gen:[{mt:"Stamford HCI634",jml:"2",kap:"2000",tgn:"400"}],trans:"Tidak ada",dist:"Jaringan 20 kV sepanjang 1,2 kms",umku:"UMKU-120000000123",lamp:"https://example.com/lampiran-teknis-pelalawan",izin:"https://example.com/izin-iuptls-pelalawan"}};
D[5].tek={iujptl:{kab:"Bengkalis",pic:"Siti Rahma",wa:"082198765432",email:"siti@contoh.co.id",usaha:[{jenis:"Pembangunan dan pemasangan Instalasi Tenaga Listrik",bidang:"Distribusi Tenaga Listrik",sub:"Jaringan distribusi tegangan menengah",kual:"Menengah",nosert:"SBU-0123/2025",noreg:"REG-0098765",tgl:"2025-03-14"}],lamp:"https://example.com/lampiran-teknis-bengkalis",izin:"https://example.com/izin-iujptl-bengkalis"}};
var filt="all",stageF=-1;
function fmt(s){var p=s.split("-");return p[2]+"/"+p[1]+"/"+p[0]}
function today(){var n=new Date();return n.getFullYear()+"-"+("0"+(n.getMonth()+1)).slice(-2)+"-"+("0"+n.getDate()).slice(-2)}
function dd(a,b){return Math.max(0,Math.round((new Date(b)-new Date(a))/86400000))}
function render(){
var q=document.getElementById("q").value.toLowerCase();
var fs=document.getElementById("fs").value;
var cnt=STAGES.map(function(){return 0});
D.forEach(function(d){if(!d.done)cnt[d.st]++});
var done=D.filter(function(d){return d.done}).length;
var h='<div class="stat'+(stageF===-1?" on":"")+'" data-s="-1"><b>'+D.length+'</b><span>Total permohonan</span></div>';
STAGES.forEach(function(s,i){if(i===0)return;h+='<div class="stat'+(stageF===i?" on":"")+'" data-s="'+i+'"><b>'+(i===1?cnt[0]+cnt[1]:cnt[i])+'</b><span>'+(i===1?"Permohonan Masuk &amp; Verifikasi Administrasi":s.n)+'</span></div>'});
document.getElementById("stats").innerHTML=h;
var out="";
D.filter(function(d){
var fj=document.getElementById("fj").value;if(fj!=="all"&&d.jn!==fj)return false;
if(fs==="proses"&&d.done)return false;
if(fs==="selesai"&&!d.done)return false;
if(stageF>=0&&(d.done||(stageF===1?d.st>1:d.st!==stageF)))return false;
if(stageF===-2&&!d.done)return false;
return (d.id+d.nm+d.jn).toLowerCase().indexOf(q)>-1}).forEach(function(d){
var i=D.indexOf(d);
out+='<div class="item"><div class="top"><div><strong>'+esc(d.nm)+'</strong><div class="meta">No. Kegiatan Usaha: '+esc(d.nk||"-")+' · '+esc(d.jn)+' · Tanggal Permohonan '+fmt(d.log[0])+'</div></div>'+
'<span class="badge'+(d.done?" ok":"")+'">'+(d.done?"Izin terbit":"Tahap "+(d.st+1)+" dari 7")+'</span></div><div class="steps">';
STAGES.forEach(function(s,k){
var c=d.done||k<d.st?"done":(k===d.st?"cur":"");
var sk=(k===1)?d.log[0]:d.log[k];var t=sk?fmt(sk):"-";var du="",rn="";if(k===0){}else if(d.done||k<d.st){if(d.log[k+1])du=dd(sk,d.log[k+1])+" hari"}else if(k===d.st){du=dd(sk,today())+" hari";rn=" run"}
out+='<div class="s '+c+'"><div class="dot">'+(c==="done"?"✓":(k+1))+'</div>'+s.n+'<small>'+s.o+'</small><small>'+(k<=d.st||d.done?t:"")+'</small>'+(du?'<small class="dur'+rn+'">Lama: '+du+(rn?' (berjalan)':'')+'</small>':'')+'<small class="by'+(d.by[k]?'':' w')+'">'+(d.by[k]?'✓ '+esc(d.by[k]):(k===d.st&&!d.done?'Menunggu persetujuan':''))+'</small>'+(d.lk&&d.lk[k]?'<small><a href="'+esc(d.lk[k])+'" target="_blank" rel="noopener">Tabel Verifikasi</a></small>':'')+'</div>'});
out+='</div><div class="act">';
if(!d.done){
var last=d.st===6;
var can=!!(ME&&AUTH[d.st].indexOf(ME.u)>-1);out+='<button class="p" data-a="next" data-i="'+i+'"'+(can?'':' disabled')+'>'+(last?"Terbitkan Izin":"Selesaikan tahap & lanjut")+'</button>';
out+='<span class="badge">Berjalan '+dd(d.log[0],today())+' hari sejak permohonan</span>';
out+='<span class="note">Posisi saat ini: '+STAGES[d.st].n+' ('+STAGES[d.st].o+')</span>';

}else out+='<span class="note">Izin diterbitkan pada '+fmt(d.log[7]||d.log[6])+' oleh Dinas DPMPTSP.</span><span class="badge ok">Lama penerbitan izin: '+dd(d.log[0],d.log[7]||d.log[6])+' hari sejak permohonan</span>';
var ad=!!(ME&&ME.u==="admin");out+='</div><div class="act">';out+='<button class="dg" data-a="back" data-i="'+i+'"'+((ad&&(d.done||d.st>1))?'':' disabled')+'>&larr; Kembali ke tahap sebelumnya</button>';
out+='<button class="dg" data-a="del" data-i="'+i+'"'+(ME&&ME.u==="admin"?'':' disabled')+'>Hapus</button></div></div>'});
document.getElementById("list").innerHTML=out||'<div class="empty">Tidak ada permohonan yang cocok.</div>';
}
function esc(s){return s.replace(/[&<>"]/g,function(c){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]})}
document.getElementById("stats").onclick=function(e){var el=e.target.closest(".stat");if(!el||el.dataset.s===undefined)return;var v=+el.dataset.s;stageF=(stageF===v)?-1:v;document.getElementById("fs").value="all";render()};
var pend=-1,dlgN=document.getElementById("dlgn"),dnN=document.getElementById("dnn");
document.getElementById("list").onclick=function(e){var b=e.target.closest("[data-a]");if(!b||b.disabled)return;pend=+b.dataset.i;var d=D[pend];
if(b.dataset.a==="back"){if(!ME||ME.u!=="admin"||!(d.done||d.st>1))return;var t=d.done?6:d.st-1;document.getElementById("dbt").textContent=d.nm+": persetujuan tahap "+(t+1)+" ("+STAGES[t].n+") akan dibatalkan dan tahap tersebut diproses ulang.";document.getElementById("dlgb").showModal();return}
if(b.dataset.a==="del"){if(!ME||ME.u!=="admin")return;document.getElementById("dht").textContent=d.nm+" ("+d.nk+")";document.getElementById("dlgh").showModal();return}
if(!(ME&&AUTH[d.st].indexOf(ME.u)>-1))return;
document.getElementById("dnt").textContent=d.nm+" · Tahap "+(d.st+1)+": "+STAGES[d.st].n;dnN.value="";var ds=document.getElementById("dns");var lst=(d.st===2||d.st===4||d.st===5)?TT_ESDM:TT_DP;ds.innerHTML='<option value="">-- Pilih nama Tenaga Teknis --</option>'+lst.map(function(x){return "<option>"+esc(x)+"</option>"}).join("");dnN.style.display="none";ds.style.display="block";ds.style.borderColor="";document.getElementById("lkw").style.display=(d.st===1||d.st===2)?"block":"none";dnN.style.borderColor="";var lk=document.getElementById("lkn");lk.value="";lk.style.borderColor="";cek();dlgN.showModal();ds.focus()};
function okDn(){if(document.getElementById("do").disabled)return;var v=nmv();if(!v){var el=document.getElementById("dns");el.style.borderColor="#c0392b";el.focus();return}var d=D[pend];var vf=(d.st===1||d.st===2);var lk=document.getElementById("lkn"),L=lk.value.trim();
if(vf&&(!L||!/^https?:\/\//i.test(L))){lk.style.borderColor="#c0392b";lk.focus();return}
d.lk=d.lk||{};if(vf)d.lk[d.st]=L;d.by[d.st]=v;
if(d.st===6){d.done=true;d.log[7]=today()}else{d.st++;d.log[d.st]=today()}dlgN.close();render()}
function cek(){var d=D[pend];if(!d)return;var vf=(d.st===1||d.st===2);var ok=nmv()&&(!vf||/^https?:\/\/\S+/i.test(document.getElementById("lkn").value.trim()));document.getElementById("do").disabled=!ok}
dnN.oninput=function(){this.style.borderColor="";cek()};
function nmv(){return document.getElementById("dns").value}
document.getElementById("dns").onchange=function(){this.style.borderColor="";cek()};
document.getElementById("lkn").oninput=function(){this.style.borderColor="";cek()};
document.getElementById("do").onclick=okDn;
function saveF(nm,data){var n=document.getElementById("exn");
try{var tp=/\.csv$/i.test(nm)?"text/csv;charset=utf-8":(/\.json$/i.test(nm)?"application/json;charset=utf-8":"text/plain;charset=utf-8");
var blob=(typeof Blob!=="undefined"&&data instanceof Blob)?data:new Blob([data],{type:tp});
var a=document.createElement("a");a.href=URL.createObjectURL(blob);a.download=nm;document.body.appendChild(a);a.click();
setTimeout(function(){URL.revokeObjectURL(a.href);a.remove()},1500);n.textContent="File berhasil diunduh."}catch(e){n.textContent="Unduhan gagal."}}
function cs(v){return '"'+String(v==null?"":v).replace(/"/g,'""')+'"'}
function expData(){var H=["No. Kegiatan Usaha","Nama Perusahaan","Jenis Izin","Tanggal Permohonan","Status"];
STAGES.forEach(function(s,k){var p="Tahap "+(k+1)+" "+s.n;H.push(p+" - Tanggal Mulai",p+" - Tenaga Teknis");if(k===1||k===2)H.push(p+" - Link Tabel Verifikasi")});H.push("Tanggal Izin Terbit","Lama Penerbitan Izin (hari)","Daftar Tenaga Teknis yang Menyelesaikan");
var rows=[H];D.forEach(function(d){var r=[d.nk,d.nm,d.jn,d.log[0],d.done?"Izin terbit":"Tahap "+(d.st+1)+": "+STAGES[d.st].n];
STAGES.forEach(function(s,k){var f=d.done||k<d.st;r.push((k===1?d.log[0]:d.log[k])||"",f?(d.by[k]||""):"");if(k===1||k===2)r.push(f?((d.lk&&d.lk[k])||""):"")});
r.push(d.done?(d.log[7]||""):"",d.done?dd(d.log[0],d.log[7]||d.log[6]):"",tt(d,"; "));rows.push(r)});
saveF("data-permohonan-izin-"+today()+".csv","\ufeff"+rows.map(function(r){return r.map(cs).join(";")}).join("\r\n"))}
function expBackup(){saveF("backup-data-permohonan-"+today()+".json",JSON.stringify({aplikasi:"monitoring-izin",versi:1,dibuat:new Date().toISOString(),data:D},function(k,v){return k==="url"?undefined:v},2))}

var LIBX="https://cdnjs.cloudflare.com/ajax/libs/exceljs/4.4.0/exceljs.min.js";
var LIBP="https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js";
var LIBT="https://cdnjs.cloudflare.com/ajax/libs/jspdf-autotable/3.5.31/jspdf.plugin.autotable.min.js";
function msg(t){document.getElementById("exn").textContent=t}
function loadJs(u){return new Promise(function(res,rej){var e=document.createElement("script");e.src=u;e.onload=res;e.onerror=function(){rej(new Error("load"))};document.head.appendChild(e)})}
var H1=["No","Nama Perusahaan","No. Kegiatan Usaha","Jenis Izin","Tanggal Permohonan","Posisi Proses Saat Ini","Lama Proses (hari)","Tanggal Izin Terbit","Tenaga Teknis yang Menyelesaikan"];
var H2=["No","Nama Perusahaan","Tahap","Instansi","Tanggal Mulai","Tanggal Selesai","Lama (hari)","Status","Tenaga Teknis","Link Tabel Verifikasi"];
function tt(d,sep){var a=[];for(var k=1;k<=6;k++){if((d.done||k<d.st)&&d.by[k])a.push(STAGES[k].n+": "+d.by[k])}return a.length?a.join(sep):"-"}
function getRows(){var rk=[],rw=[],ri=[];
D.forEach(function(d,i){
rk.push([i+1,d.nm,d.nk||"",d.jn,fmt(d.log[0]),d.done?"Izin terbit":(d.st+1)+". "+STAGES[d.st].n,d.done?dd(d.log[0],d.log[7]||d.log[6]):dd(d.log[0],today()),d.done?fmt(d.log[7]||d.log[6]):"-",tt(d,"\n")]);
STAGES.forEach(function(s,k){var fin=d.done||k<d.st;if(!fin&&k!==d.st)return;
var sk=(k===1)?d.log[0]:d.log[k];var sel=fin?d.log[k+1]:"";
var lama=(k===0)?"-":(fin?(d.log[k+1]?dd(sk,d.log[k+1]):"-"):dd(sk,today()));
rw.push([i+1,d.nm,(k+1)+". "+s.n,s.o,fmt(sk),sel?fmt(sel):"-",lama,fin?"Selesai":"Sedang diproses",fin?(d.by[k]||"-"):"-",(d.lk&&d.lk[k])||""]);ri.push(i)})});
return {rk:rk,rw:rw,ri:ri}}
function needDL(){msg("Menyiapkan file...");return true}
function failMsg(){msg("Gagal membuat file. Pastikan perangkat terhubung ke internet.")}
var BD={top:{style:"thin"},left:{style:"thin"},bottom:{style:"thin"},right:{style:"thin"}};
function mkSheet(wb,name,title,head,data,widths,ctr,linkCol,shade){
var n=head.length;
var ws=wb.addWorksheet(name,{pageSetup:{paperSize:9,orientation:"landscape",fitToPage:true,fitToWidth:1,fitToHeight:0,margins:{left:.4,right:.4,top:.6,bottom:.6,header:.3,footer:.3}},views:[{state:"frozen",ySplit:3}]});
ws.mergeCells(1,1,1,n);var t=ws.getCell(1,1);t.value=title;t.font={bold:true,size:14};t.alignment={horizontal:"left",vertical:"middle"};ws.getRow(1).height=24;
ws.mergeCells(2,1,2,n);var u=ws.getCell(2,1);u.value="Dicetak: "+fmt(today())+" oleh "+(ME?ME.n:"-");u.font={italic:true,size:9,color:{argb:"FF4A5870"}};
var hr=ws.getRow(3);
head.forEach(function(h,i){var c=hr.getCell(i+1);c.value=h;c.font={bold:true,color:{argb:"FFFFFFFF"}};c.fill={type:"pattern",pattern:"solid",fgColor:{argb:"FF1F5FBF"}};c.alignment={horizontal:"center",vertical:"middle",wrapText:true};c.border=BD});
hr.height=32;
data.forEach(function(r,ri){var row=ws.getRow(4+ri);
r.forEach(function(v,i){var c=row.getCell(i+1);
var isL=Array.isArray(linkCol)?linkCol.indexOf(i)>-1:i===linkCol;if(isL&&v){c.value={text:Array.isArray(linkCol)?"Buka link":"Tabel Verifikasi",hyperlink:v};c.font={color:{argb:"FF1F5FBF"},underline:true}}else c.value=v;
c.border=BD;c.alignment={vertical:"middle",wrapText:true,horizontal:ctr.indexOf(i)>-1?"center":"left"};
if(shade[ri])c.fill={type:"pattern",pattern:"solid",fgColor:{argb:"FFF1F5FB"}}})});
widths.forEach(function(w,i){ws.getColumn(i+1).width=w});
ws.pageSetup.printTitlesRow="3:3";ws.headerFooter={oddFooter:"&CHalaman &P dari &N"};
if(data.length)ws.autoFilter={from:{row:3,column:1},to:{row:3+data.length,column:n}};
return ws}
function expXlsx(){if(!needDL())return;var R=getRows();
loadJs(LIBX).then(function(){
var wb=new ExcelJS.Workbook();wb.creator="Monitoring Izin";wb.created=new Date();
mkSheet(wb,"Rekap Permohonan","Data Permohonan Izin",H1,R.rk,[6,34,22,48,18,40,16,18,60],[0,4,6,7],-1,R.rk.map(function(x,i){return i%2===1}));
mkSheet(wb,"Riwayat Tahapan","Riwayat Tahapan Permohonan Izin",H2,R.rw,[6,34,44,18,16,16,12,18,24,22],[0,3,4,5,6,7],9,R.ri.map(function(x){return x%2===1}));
return wb.xlsx.writeBuffer()}).then(function(buf){
saveF("data-permohonan-izin-"+today()+".xlsx",new Blob([buf],{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"}))
}).catch(function(){failMsg()})}
function expPdf(){if(!needDL())return;var R=getRows();
loadJs(LIBP).then(function(){return loadJs(LIBT)}).then(function(){
var J=window.jspdf.jsPDF;var doc=new J({orientation:"landscape",unit:"mm",format:"a4"});
var meta="Dicetak: "+fmt(today())+" oleh "+(ME?ME.n:"-");
function head(t){doc.setFont("helvetica","bold");doc.setFontSize(14);doc.text(t,14,14);doc.setFont("helvetica","normal");doc.setFontSize(9);doc.text(meta,14,19)}
var st={fontSize:8,cellPadding:1.8,valign:"middle",lineColor:[184,196,220],lineWidth:.2,textColor:[27,36,48]};
var hs={fillColor:[31,95,191],textColor:255,halign:"center",valign:"middle",fontStyle:"bold"};
head("Data Permohonan Izin");
doc.autoTable({startY:23,head:[H1],body:R.rk,theme:"grid",styles:st,headStyles:hs,margin:{left:14,right:14,bottom:14},
columnStyles:{0:{cellWidth:9,halign:"center"},1:{cellWidth:38},2:{cellWidth:28},3:{cellWidth:44},4:{cellWidth:22,halign:"center"},5:{cellWidth:32},6:{cellWidth:16,halign:"center"},7:{cellWidth:20,halign:"center"},8:{cellWidth:60}},
didParseCell:function(h){if(h.section==="body"&&h.row.index%2===1)h.cell.styles.fillColor=[241,245,251]}});
doc.addPage();head("Riwayat Tahapan Permohonan Izin");
var H2p=H2.slice(0,9);var body=R.rw.map(function(r){return r.slice(0,9)});
doc.autoTable({startY:23,head:[H2p],body:body,theme:"grid",styles:st,headStyles:hs,margin:{left:14,right:14,bottom:14},
columnStyles:{0:{cellWidth:10,halign:"center"},1:{cellWidth:48},2:{cellWidth:58},3:{cellWidth:26,halign:"center"},4:{cellWidth:24,halign:"center"},5:{cellWidth:24,halign:"center"},6:{cellWidth:16,halign:"center"},7:{cellWidth:25,halign:"center"},8:{cellWidth:38}},
didParseCell:function(h){if(h.section==="body"&&R.ri[h.row.index]%2===1)h.cell.styles.fillColor=[241,245,251]}});
var n=doc.internal.getNumberOfPages();
for(var i=1;i<=n;i++){doc.setPage(i);doc.setFontSize(8);doc.setTextColor(90,100,120);doc.text("Halaman "+i+" dari "+n,148.5,205,{align:"center"})}
return doc.output("blob")}).then(function(b){saveF("data-permohonan-izin-"+today()+".pdf",b)}).catch(function(){failMsg()})}
document.getElementById("ex").onclick=function(){EXV="main";document.getElementById("dlge").showModal()};
document.getElementById("xb").onclick=function(){document.getElementById("dlge").close()};
document.getElementById("xc").onclick=function(){document.getElementById("dlge").close();if(EXV==="main")expData();else expTX(EXV,"csv")};
document.getElementById("xx").onclick=function(){document.getElementById("dlge").close();if(EXV==="main")expXlsx();else expTX(EXV,"xlsx")};
document.getElementById("xp").onclick=function(){document.getElementById("dlge").close();if(EXV==="main")expPdf();else expTX(EXV,"pdf")};

document.getElementById("eh").onclick=function(){if(!ME||ME.u!=="admin")return;expBackup()};
document.getElementById("bc").onclick=function(){document.getElementById("dlgb").close()};
document.getElementById("bk").onclick=function(){var d=D[pend];if(ME&&ME.u==="admin"&&d&&(d.done||d.st>1)){var t=d.done?6:d.st-1;d.done=false;d.log.length=t+1;d.by.length=t;if(d.lk)delete d.lk[t];d.st=t}document.getElementById("dlgb").close();render()};
document.getElementById("hc").onclick=function(){document.getElementById("dlgh").close()};
document.getElementById("hy").onclick=function(){if(ME&&ME.u==="admin"&&D[pend])D.splice(pend,1);document.getElementById("dlgh").close();render()};
document.getElementById("dc").onclick=function(){dlgN.close()};
dnN.onkeydown=function(e){if(e.key==="Enter")okDn()};
document.getElementById("q").oninput=render;
document.getElementById("fs").onchange=render;
document.getElementById("fj").onchange=render;
var dlg=document.getElementById("dlg");
document.getElementById("add").onclick=function(){if(!ME||ME.u!=="admin")return;document.getElementById("tg").value=today();dlg.showModal()};
document.getElementById("cx").onclick=function(){dlg.close()};
document.getElementById("sv").onclick=function(){
var n=document.getElementById("n").value.trim();if(!n){document.getElementById("n").focus();return}
var nk=document.getElementById("nk").value.trim();if(!nk){document.getElementById("nk").focus();return}
var tg=document.getElementById("tg").value;if(!tg){document.getElementById("tg").focus();return}
var no=("000"+(D.length+101)).slice(-4);
D.unshift({id:"IZN-2026-"+no,nm:n,nk:nk,jn:document.getElementById("j").value,st:1,log:[tg,today()],by:[ME?ME.n:"Admin"]});
document.getElementById("n").value="";document.getElementById("nk").value="";dlg.close();render()};
var USERS=[{u:"admin",p:"admin123",n:"Admin",o:"OSS"},{u:"dpmptsp",p:"dpmptsp123",n:"Dinas DPMPTSP",o:"Dinas DPMPTSP"},{u:"esdm",p:"esdm123",n:"Dinas ESDM",o:"Dinas ESDM"}];
var ME=null;
var AUTH={0:["admin"],1:["admin","dpmptsp"],2:["admin","esdm"],3:["admin","dpmptsp"],4:["admin","esdm"],5:["admin","esdm"],6:["admin","dpmptsp"]};
var UL={admin:"Admin",dpmptsp:"DPMPTSP",esdm:"ESDM"};
var TT_ESDM=["NANO TRISUCI, ST","DARWIN MARASI SITUNGKIR, ST","M. DEDI, ST","ANDRI YULIANTO, ST"];
var TT_DP=["Verifikator 1","Verifikator 2","Verifikator 3"];
function masuk(){if(document.getElementById("lb").disabled)return;var u=document.getElementById("lu").value.trim().toLowerCase(),p=document.getElementById("lp").value;
var f=USERS.filter(function(x){return x.u===u&&x.p===p})[0];
if(!f){document.getElementById("le").textContent="Username atau kata sandi salah.";return}
ME=f;document.getElementById("le").textContent="";document.getElementById("lp").value="";rstEye();
document.body.classList.remove("out");document.getElementById("lg").classList.add("hide");
document.getElementById("me").textContent=f.n;document.getElementById("add").disabled=(f.u!=="admin");document.getElementById("eh").disabled=(f.u!=="admin");var okt=(f.u==="admin"||f.u==="esdm");document.getElementById("sb1").disabled=!okt;document.getElementById("sb2").disabled=!okt;render()}
function keluar(){ME=null;go("main");rstEye();document.getElementById("lu").value="";document.body.classList.add("out");document.getElementById("lg").classList.remove("hide");lcek()}
function lcek(){document.getElementById("lb").disabled=!(document.getElementById("lu").value.trim()&&document.getElementById("lp").value)}
["lu","lp"].forEach(function(id){var el=document.getElementById(id);el.oninput=lcek;el.onchange=lcek});
lcek();setTimeout(lcek,500);
function rstEye(){var i=document.getElementById("lp");i.type="password";document.getElementById("eyes").style.display="none";var b=document.getElementById("eye");b.title="Tampilkan kata sandi";b.setAttribute("aria-label","Tampilkan kata sandi")}
document.getElementById("eye").onclick=function(){var i=document.getElementById("lp");var show=(i.type==="password");i.type=show?"text":"password";document.getElementById("eyes").style.display=show?"":"none";var t=show?"Sembunyikan kata sandi":"Tampilkan kata sandi";this.title=t;this.setAttribute("aria-label",t);i.focus()};
document.getElementById("lb").onclick=masuk;
document.getElementById("sbL").onclick=keluar;
document.getElementById("sbH").onclick=function(){go("main")};
document.getElementById("sbT").onclick=function(){document.body.classList.toggle("sbc")};
if(window.innerWidth<800)document.body.classList.add("sbc");
document.getElementById("lp").onkeydown=function(e){if(e.key==="Enter")masuk()};
document.getElementById("lu").onkeydown=function(e){if(e.key==="Enter")masuk()};
var KAB=["Kuantan Singingi","Indragiri Hulu","Indragiri Hilir","Pelalawan","Siak","Kampar","Rokan Hulu","Bengkalis","Rokan Hilir","Kepulauan Meranti","Kota Pekanbaru","Kota Dumai"];
var JIU1="Izin Usaha Penyediaan Tenaga Listrik untuk Kepentingan Sendiri",JIU2="Izin Usaha Jasa Penunjang Tenaga Listrik";
var FT={
iuptls:{ttl:"Data IUPTLS",sub:JIU1,jn:JIU1,f:[
{k:"kab",l:"Kabupaten/Kota",t:"sel",o:KAB},
{k:"alamat",l:"Alamat Pembangkit",t:"ta"},
{k:"pic",l:"PIC",t:"tx"},
{k:"wa",l:"Nomor WhatsApp",t:"tel"},
{k:"email",l:"Email",t:"email"},
{k:"kap",l:"Total Kapasitas",t:"kap"},
{k:"sifat",l:"Sifat Penggunaan",t:"sel",o:["Utama","Cadangan","Darurat"]},
{k:"mesin",l:"Data Mesin Penggerak",t:"rows",c:[{k:"jenis",l:"Jenis penggerak",t:"sel",o:["Diesel","Turbin Gas","Turbin Uap","Turbin Air","Surya (PV)","Angin","Lainnya"]},{k:"mt",l:"Merek / Tipe",t:"tx"},{k:"jml",l:"Jumlah unit",t:"num"},{k:"kap",l:"Kapasitas/unit (kW)",t:"num"}]},
{k:"gen",l:"Data Generator",t:"rows",c:[{k:"mt",l:"Merek / Tipe",t:"tx"},{k:"jml",l:"Jumlah unit",t:"num"},{k:"kap",l:"Kapasitas/unit (kVA)",t:"num"},{k:"tgn",l:"Tegangan (V)",t:"num"}]},
{k:"trans",l:"Jaringan Transmisi",t:"ta"},
{k:"dist",l:"Jaringan Distribusi",t:"ta"},
{k:"umku",l:"Nomor PB-UMKU",t:"tx"},
{k:"lamp",l:"Link File Lampiran Teknis",t:"link"},
{k:"izin",l:"Link Izin",t:"link"}]},
iujptl:{ttl:"Data IUJPTL",sub:JIU2,jn:JIU2,f:[
{k:"kab",l:"Kabupaten/Kota",t:"sel",o:KAB},
{k:"pic",l:"PIC",t:"tx"},
{k:"wa",l:"Nomor WhatsApp",t:"tel"},
{k:"email",l:"Email",t:"email"},
{k:"usaha",l:"Sertifikat Badan Usaha",t:"rows",cas:1,c:[{k:"jenis",l:"Jenis Usaha"},{k:"bidang",l:"Bidang Usaha"},{k:"sub",l:"Sub Bidang Usaha"},{k:"kual",l:"Kualifikasi"}]},
{k:"lamp",l:"Link File Lampiran Teknis",t:"link"},
{k:"izin",l:"Link Izin",t:"link"}]}};
var PB=["Pembangkit Listrik Tenaga Uap (PLTU)","Pembangkit Listrik Tenaga Gas (PLTG)","Pembangkit Listrik Tenaga Gas-Uap (PLTGU)","Pembangkit Listrik Tenaga Panas Bumi (PLTP)","Pembangkit Listrik Tenaga Air (PLTA)","Pembangkit Listrik Tenaga Air skala kecil dan menengah","Pembangkit Listrik Tenaga Diesel (PLTD)","Pembangkit Listrik Tenaga Mesin Gas-Uap (PLTMGU)","Pembangkit Listrik Tenaga Nuklir (PLTN)","Pembangkit Listrik Tenaga Surya (PLTS)","Pembangkit Listrik Tenaga Bayu (PLTB)","Pembangkit Listrik Tenaga Biomassa","Pembangkit Listrik Tenaga Biogas","Pembangkit Listrik Tenaga Sampah (PLTSa)","Battery Energy Storage System (BESS)","Pembangkit listrik tenaga energi baru dan energi terbarukan lainnya"];
var PT=["Jaringan transmisi tegangan tinggi, tegangan ekstratinggi, dan/atau tegangan ultratinggi","Gardu induk"];
var PD=["Jaringan distribusi tegangan menengah","Jaringan distribusi tegangan rendah"];
var PM=["Instalasi pemanfaatan tegangan tinggi","Instalasi pemanfaatan tegangan menengah","Instalasi pemanfaatan tegangan rendah"];
var NS=["Tidak ada pembagian sub bidang"],NB=["Tidak ada pembagian bidang"];
var KQ=["Kecil","Menengah","Besar"],KL=["Sesuai ketentuan peraturan perundang-undangan terkait"];
var BID4={"Pembangkitan Tenaga Listrik":PB,"Transmisi Tenaga Listrik":PT,"Distribusi Tenaga Listrik":PD,"Instalasi Pemanfaatan Tenaga Listrik":PM};
var JU=[
{n:"Konsultansi dalam bidang Instalasi Tenaga Listrik",b:BID4,q:KQ},
{n:"Pembangunan dan pemasangan Instalasi Tenaga Listrik",b:BID4,q:KQ},
{n:"Pemeriksaan dan pengujian Instalasi Tenaga Listrik",b:BID4,q:KQ},
{n:"Pengoperasian Instalasi Tenaga Listrik",b:BID4,q:KQ},
{n:"Pemeliharaan Instalasi Tenaga Listrik",b:BID4,q:KQ},
{n:"Penelitian dan pengembangan",b:null,q:KL}];
function juf(n){return JU.filter(function(x){return x.n===n})[0]}
function uBid(j){var u=juf(j);return u?(u.b?Object.keys(u.b):NB):[]}
function uSub(j,b){var u=juf(j);if(!u||!b)return [];if(!u.b)return NS;var s=u.b[b];return s&&s.length?s:NS}
function uKual(j){var u=juf(j);return u?u.q:[]}
function sOpt(list,val,ph){if(list.length===1)return "<option selected>"+E(list[0])+"</option>";return '<option value="" disabled hidden'+(val?"":" selected")+">"+E(ph)+"</option>"+list.map(function(x){return "<option"+(x===val?" selected":"")+">"+E(x)+"</option>"}).join("")}
var TV="",TI=-1;
function E(v){return esc(String(v==null?"":v))}
function go(v){var m=document.getElementById("vm"),t=document.getElementById("vt");var ac={main:"sbH",iuptls:"sb1",iujptl:"sb2"}[v];["sbH","sb1","sb2"].forEach(function(i){document.getElementById(i).classList.toggle("act",i===ac)});
if(v==="main"){m.classList.remove("hid");t.classList.add("hid")}
else{TV=v;m.classList.add("hid");t.classList.remove("hid");document.getElementById("tq").value="";document.getElementById("tf").value="all";rT();window.scrollTo(0,0)}}
function cmpl(c,t){return c.f.every(function(f){var v=t[f.k];if(f.t==="rows")return !!(v&&v.length);if(f.t==="file")return !!v;return !!(v&&String(v).trim())})}
function sT(d){var t=d.tek&&d.tek[TV];if(!t)return "kosong";return cmpl(FT[TV],t)?"lengkap":"belum"}
function fl(x,lab){if(!x)return "<b>"+lab+":</b> belum diisi";var u=String(x);return "<b>"+lab+":</b> "+(/^https?:\/\//i.test(u)?'<a href="'+E(u)+'" target="_blank" rel="noopener">Buka link</a>':E(u))}
function sm(t){if(!t)return '<div class="tsum">Data teknis belum diisi.</div>';
var p=[];function L(k,v){if(v)p.push("<b>"+k+":</b> "+E(v))}
L("Kab/Kota",t.kab);L("PIC",t.pic);L("WhatsApp",t.wa);L("Email",t.email);
var h;
if(TV==="iuptls"){L("Alamat Pembangkit",t.alamat);if(t.kap)L("Total Kapasitas",t.kap+" "+(t.kapu||""));L("Sifat Penggunaan",t.sifat);L("Nomor PB-UMKU",t.umku);
h='<div class="tsum">'+p.join(" &nbsp;|&nbsp; ")+"</div>";
h+='<div class="tsum"><b>Mesin penggerak:</b> '+((t.mesin||[]).length)+" data &nbsp;|&nbsp; <b>Generator:</b> "+((t.gen||[]).length)+" data"+(t.trans?" &nbsp;|&nbsp; <b>Transmisi:</b> "+E(t.trans):"")+(t.dist?" &nbsp;|&nbsp; <b>Distribusi:</b> "+E(t.dist):"")+"</div>"}
else{h='<div class="tsum">'+p.join(" &nbsp;|&nbsp; ")+"</div>";
h+='<div class="tsum">'+(t.usaha||[]).map(function(r,i){return "<b>Sertifikat Badan Usaha "+(i+1)+":</b> "+E(r.jenis)+" / "+E(r.bidang)+" / "+E(r.sub)+" ("+E(r.kual)+")"+(r.nosert?" &middot; No. Sertifikat: "+E(r.nosert):"")+(r.noreg?" &middot; No. Register: "+E(r.noreg):"")+(r.tgl?" &middot; Terbit: "+fmt(r.tgl):"")}).join("<br>")+"</div>"}
h+='<div class="tsum">'+fl(t.lamp,"Lampiran Teknis")+" &nbsp;|&nbsp; "+fl(t.izin,"Izin")+"</div>";return h}
function rT(){var c=FT[TV];document.getElementById("ttl").textContent=c.ttl;document.getElementById("tsb").textContent=c.sub;
var q=document.getElementById("tq").value.toLowerCase(),f=document.getElementById("tf").value;
var all=D.filter(function(d){return d.jn===c.jn});var cnt={lengkap:0,belum:0,kosong:0};all.forEach(function(d){cnt[sT(d)]++});
function bx(k,n,lb){return '<div class="stat'+(f===k?" on":"")+'" data-f="'+k+'"><b>'+n+"</b><span>"+lb+"</span></div>"}
document.getElementById("tst").innerHTML=bx("all",all.length,"Total perusahaan")+bx("lengkap",cnt.lengkap,"Data lengkap")+bx("belum",cnt.belum,"Data belum lengkap")+bx("kosong",cnt.kosong,"Belum diisi");
var out="";
all.forEach(function(d){var s=sT(d);if(f!=="all"&&s!==f)return;if((d.nm+" "+(d.nk||"")).toLowerCase().indexOf(q)<0)return;
var lb=s==="lengkap"?"Data lengkap":(s==="belum"?"Belum lengkap":"Belum diisi");
out+='<div class="item"><div class="top"><div><strong>'+E(d.nm)+'</strong><div class="meta">No. Kegiatan Usaha: '+E(d.nk||"-")+" &middot; Proses permohonan: "+(d.done?"Izin terbit":E(STAGES[d.st].n))+'</div></div><span class="badge'+(s==="lengkap"?" ok":"")+'">'+lb+"</span></div>"+sm(d.tek&&d.tek[TV])+'<div class="act"><button class="p" data-t="edit" data-i="'+D.indexOf(d)+'">Input / Ubah Data Teknis</button></div></div>'});
document.getElementById("tlist").innerHTML=out||'<div class="empty">Tidak ada perusahaan yang cocok.</div>'}
function opt(o,v,nop){return (nop?"":'<option value="" disabled hidden'+(v?"":" selected")+'>-- Pilih --</option>')+o.map(function(x){return "<option"+(x===v?" selected":"")+">"+E(x)+"</option>"}).join("")}
function rw(f,r){if(f.cas){var j=r.jenis||"",b=r.bidang||"";return '<div class="rw cas"><div class="rwl">Sertifikat Badan Usaha</div><select data-c="jenis" title="Jenis Usaha">'+sOpt(JU.map(function(x){return x.n}),j,"Jenis Usaha")+'</select><select data-c="bidang" title="Bidang Usaha">'+sOpt(uBid(j),b,"Bidang Usaha")+'</select><select data-c="sub" title="Sub Bidang Usaha">'+sOpt(uSub(j,b),r.sub||"","Sub Bidang Usaha")+'</select><select data-c="kual" title="Kualifikasi">'+sOpt(uKual(j),r.kual||"","Kualifikasi")+'</select><div class="fg"><span>Nomor Sertifikat</span><input data-c="nosert" type="text" title="Nomor Sertifikat" value="'+E(r.nosert)+'"></div><div class="fg"><span>Nomor Register</span><input data-c="noreg" type="text" title="Nomor Register" value="'+E(r.noreg)+'"></div><div class="fg"><span>Tanggal Terbit</span><input data-c="tgl" type="date" title="Tanggal Terbit" value="'+E(r.tgl)+'"></div><button type="button" class="rx" title="Hapus baris">&times;</button></div>'}return '<div class="rw">'+f.c.map(function(c){var v=r[c.k];
return c.t==="sel"?'<select data-c="'+c.k+'" title="'+c.l+'">'+opt(c.o,v).replace("-- Pilih --",c.l)+"</select>":'<input data-c="'+c.k+'" type="'+(c.t==="num"?"number":"text")+'"'+(c.t==="num"?' min="0" step="any"':"")+(c.dl?' list="'+c.dl+'"':"")+' placeholder="'+c.l+'" title="'+c.l+'" value="'+E(v)+'">'}).join("")+'<button type="button" class="rx" title="Hapus baris">&times;</button></div>'}
function fld(f,t){var v=t?t[f.k]:undefined,h=f.cas?"":"<label>"+f.l+"</label>";
if(f.t==="tx"||f.t==="tel"||f.t==="email")h+='<input data-k="'+f.k+'" type="'+(f.t==="tx"?"text":f.t)+'" value="'+E(v)+'">';
else if(f.t==="ta")h+='<textarea data-k="'+f.k+'">'+E(v)+"</textarea>";
else if(f.t==="sel")h+='<select data-k="'+f.k+'">'+opt(f.o,v)+"</select>";
else if(f.t==="kap")h+='<div class="g2"><input data-k="kap" type="number" min="0" step="any" value="'+E(t&&t.kap)+'"><select data-k="kapu">'+opt(["kW","MW","kVA","MVA"],(t&&t.kapu)||"kW",1)+"</select></div>";
else if(f.t==="rows"){var rs=(v&&v.length)?v:[{}];h+='<div class="rows" data-k="'+f.k+'">'+rs.map(function(r){return rw(f,r)}).join("")+'</div><button type="button" class="ra" data-k="'+f.k+'">'+(f.cas?"+ Sertifikat Badan Usaha":"+ Tambah baris")+'</button>'}
else if(f.t==="link")h+='<input data-k="'+f.k+'" type="url" placeholder="https://..." value="'+E(v)+'">';
else if(f.t==="file")h+='<input data-k="'+f.k+'" type="file" accept=".pdf,.doc,.docx,.jpg,.jpeg,.png">'+(v?'<div class="note">File saat ini: '+E(v.name)+' <label style="display:inline"><input type="checkbox" data-del="'+f.k+'" style="width:auto"> hapus file</label></div>':"");
return h}
function rnum(){document.querySelectorAll('#dtf .rows[data-k="usaha"] .rwl').forEach(function(l,i){l.textContent="Sertifikat Badan Usaha "+(i+1)})}
function oT(i){TI=i;var d=D[i],c=FT[TV],t=d.tek&&d.tek[TV];
document.getElementById("dtt").textContent=c.ttl+" - "+d.nm;document.getElementById("dts").textContent="No. Kegiatan Usaha: "+(d.nk||"-");
document.getElementById("dtf").innerHTML=c.f.map(function(f){return fld(f,t)}).join("");rnum();document.getElementById("dte").textContent="";
document.getElementById("dlgt").showModal()}
function svT(){var c=FT[TV],d=D[TI],box=document.getElementById("dtf"),o={},er="",ex=(d.tek&&d.tek[TV])||{};
c.f.forEach(function(f){if(er)return;
if(f.t==="rows"){var rs=[];box.querySelectorAll('.rows[data-k="'+f.k+'"] .rw').forEach(function(r){var x={},any=false;r.querySelectorAll("[data-c]").forEach(function(i){x[i.dataset.c]=i.value.trim();if(i.value.trim())any=true});if(any){if(f.cas&&(!x.jenis||!x.bidang||!x.sub||!x.kual)&&!er)er="Lengkapi Jenis Usaha, Bidang Usaha, Sub Bidang Usaha, dan Kualifikasi pada setiap Sertifikat Badan Usaha.";rs.push(x)}});o[f.k]=rs;return}
if(f.t==="link"){var lv=box.querySelector('[data-k="'+f.k+'"]').value.trim();if(lv&&!/^https?:\/\/\S+$/i.test(lv)){er=f.l+" harus diawali http:// atau https://.";return}o[f.k]=lv;return}
if(f.t==="file"){var inp=box.querySelector('input[data-k="'+f.k+'"]'),fx=inp.files[0],del=box.querySelector('input[data-del="'+f.k+'"]');
if(fx){if(fx.size>10*1024*1024){er=f.l+": ukuran file maksimal 10 MB.";return}o[f.k]={name:fx.name,size:fx.size,url:URL.createObjectURL(fx)}}else if(ex[f.k]&&!(del&&del.checked))o[f.k]=ex[f.k];return}
if(f.t==="kap"){o.kap=box.querySelector('[data-k="kap"]').value.trim();o.kapu=box.querySelector('[data-k="kapu"]').value;return}
o[f.k]=box.querySelector('[data-k="'+f.k+'"]').value.trim()});
if(!er&&o.email&&!/^\S+@\S+\.\S+$/.test(o.email))er="Format email tidak valid.";
if(!er&&o.wa&&!/^\+?[0-9][0-9 \-]{7,}$/.test(o.wa))er="Nomor WhatsApp tidak valid (gunakan angka, misalnya 081234567890).";
if(er){document.getElementById("dte").textContent=er;return}
d.tek=d.tek||{};d.tek[TV]=o;document.getElementById("dlgt").close();rT()}
function okTek(){return ME&&(ME.u==="admin"||ME.u==="esdm")}
document.getElementById("sb1").onclick=function(){if(okTek())go("iuptls")};
document.getElementById("sb2").onclick=function(){if(okTek())go("iujptl")};
document.getElementById("tq").oninput=rT;document.getElementById("tf").onchange=rT;
document.getElementById("tst").onclick=function(e){var el=e.target.closest(".stat");if(!el)return;document.getElementById("tf").value=el.dataset.f;rT()};
document.getElementById("tlist").onclick=function(e){var b=e.target.closest("[data-t]");if(!b||!okTek())return;oT(+b.dataset.i)};
document.getElementById("dtc").onclick=function(){document.getElementById("dlgt").close()};
document.getElementById("dtv").onclick=svT;
document.getElementById("dtf").onchange=function(e){var t=e.target,c=t.dataset&&t.dataset.c;if(c!=="jenis"&&c!=="bidang")return;var row=t.closest(".rw");if(!row||!row.classList.contains("cas"))return;
var g=function(k){return row.querySelector('[data-c="'+k+'"]')};var j=g("jenis").value;
if(c==="jenis"){g("bidang").innerHTML=sOpt(uBid(j),"","Bidang Usaha");g("kual").innerHTML=sOpt(uKual(j),"","Kualifikasi")}
g("sub").innerHTML=sOpt(uSub(j,g("bidang").value),"","Sub Bidang Usaha")};
document.getElementById("dtf").onclick=function(e){
var a=e.target.closest(".ra");if(a){var f=FT[TV].f.filter(function(x){return x.k===a.dataset.k})[0];document.querySelector('#dtf .rows[data-k="'+f.k+'"]').insertAdjacentHTML("beforeend",rw(f,{}));rnum();return}
var x=e.target.closest(".rx");if(x){var row=x.parentNode,box=row.parentNode;if(box.children.length>1){row.remove();rnum()}else row.querySelectorAll("[data-c]").forEach(function(i){i.value=""})}};
var EXV="main";
var TXS={
iuptls:[
{h:"Kabupaten/Kota",v:function(t){return t.kab},w:18,pdf:"A"},
{h:"Alamat Pembangkit",v:function(t){return t.alamat},w:36,pdf:"A"},
{h:"PIC",v:function(t){return t.pic},w:20,pdf:"A"},
{h:"Nomor WhatsApp",v:function(t){return t.wa},w:18,pdf:"A"},
{h:"Email",v:function(t){return t.email},w:26,pdf:"A"},
{h:"Total Kapasitas",v:function(t){return t.kap?t.kap+" "+(t.kapu||""):""},w:16,pdf:"A",c:1},
{h:"Sifat Penggunaan",v:function(t){return t.sifat},w:16,pdf:"A",c:1},
{h:"Data Mesin Penggerak",v:function(t){return (t.mesin||[]).map(function(r){return [r.jenis,r.mt,r.jml?r.jml+" unit":"",r.kap?r.kap+" kW/unit":""].filter(Boolean).join(", ")}).join("\n")},w:44,pdf:"B"},
{h:"Data Generator",v:function(t){return (t.gen||[]).map(function(r){return [r.mt,r.jml?r.jml+" unit":"",r.kap?r.kap+" kVA/unit":"",r.tgn?r.tgn+" V":""].filter(Boolean).join(", ")}).join("\n")},w:44,pdf:"B"},
{h:"Jaringan Transmisi",v:function(t){return t.trans},w:30,pdf:"B"},
{h:"Jaringan Distribusi",v:function(t){return t.dist},w:30,pdf:"B"},
{h:"Nomor PB-UMKU",v:function(t){return t.umku},w:22,pdf:"B"},
{h:"Link File Lampiran Teknis",v:function(t){return t.lamp},w:24,L:1},
{h:"Link Izin",v:function(t){return t.izin},w:24,L:1}],
iujptl:[
{h:"Kabupaten/Kota",v:function(t){return t.kab},w:18,pdf:"A"},
{h:"PIC",v:function(t){return t.pic},w:20,pdf:"A"},
{h:"Nomor WhatsApp",v:function(t){return t.wa},w:18,pdf:"A"},
{h:"Email",v:function(t){return t.email},w:26,pdf:"A"},
{h:"Jenis Usaha",v:function(t){return (t.usaha||[]).map(function(r){return r.jenis}).join("\n")},w:40,pdf:"B"},
{h:"Bidang Usaha",v:function(t){return (t.usaha||[]).map(function(r){return r.bidang}).join("\n")},w:28,pdf:"B"},
{h:"Sub Bidang Usaha",v:function(t){return (t.usaha||[]).map(function(r){return r.sub}).join("\n")},w:38,pdf:"B"},
{h:"Kualifikasi",v:function(t){return (t.usaha||[]).map(function(r){return r.kual}).join("\n")},w:18,pdf:"B",c:1},
{h:"Nomor Sertifikat",v:function(t){return (t.usaha||[]).map(function(r){return r.nosert||"-"}).join("\n")},w:22,pdf:"B"},
{h:"Nomor Register",v:function(t){return (t.usaha||[]).map(function(r){return r.noreg||"-"}).join("\n")},w:20,pdf:"B"},
{h:"Tanggal Terbit",v:function(t){return (t.usaha||[]).map(function(r){return r.tgl?fmt(r.tgl):"-"}).join("\n")},w:16,pdf:"B",c:1},
{h:"Link File Lampiran Teknis",v:function(t){return t.lamp},w:24,L:1},
{h:"Link Izin",v:function(t){return t.izin},w:24,L:1}]};
function tBuild(k){var spec=TXS[k],H=["No","Nama Perusahaan","No. Kegiatan Usaha","Status Data"].concat(spec.map(function(x){return x.h})),R=[];
D.filter(function(d){return d.jn===FT[k].jn}).forEach(function(d,i){var t=d.tek&&d.tek[k];var st=t?(cmpl(FT[k],t)?"Data lengkap":"Belum lengkap"):"Belum diisi";
R.push([i+1,d.nm,d.nk||"",st].concat(spec.map(function(x){return t?(x.v(t)||""):""})))});
return {H:H,R:R,spec:spec}}
function expTX(k,f){if(!needDL())return;var b=tBuild(k),c=FT[k];
if(f==="csv"){saveF("data-teknis-"+k+"-"+today()+".csv","\ufeff"+[b.H].concat(b.R).map(function(r){return r.map(function(v){return cs(String(v).replace(/\n/g,"; "))}).join(";")}).join("\r\n"));return}
if(f==="xlsx"){loadJs(LIBX).then(function(){var wb=new ExcelJS.Workbook();wb.creator="Monitoring Izin";wb.created=new Date();
var w=[6,34,22,16],ctr=[0,3],lk=[];b.spec.forEach(function(x,i){w.push(x.w);if(x.c)ctr.push(i+4);if(x.L)lk.push(i+4)});
mkSheet(wb,c.ttl,c.ttl+" - Data Teknis Perusahaan",b.H,b.R,w,ctr,lk,b.R.map(function(x,i){return i%2===1}));
return wb.xlsx.writeBuffer()}).then(function(buf){saveF("data-teknis-"+k+"-"+today()+".xlsx",new Blob([buf],{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"}))}).catch(function(){failMsg()});return}
loadJs(LIBP).then(function(){return loadJs(LIBT)}).then(function(){
var J=window.jspdf.jsPDF,doc=new J({orientation:"landscape",unit:"mm",format:"a4"});var meta="Dicetak: "+fmt(today())+" oleh "+(ME?ME.n:"-");
function head(t){doc.setFont("helvetica","bold");doc.setFontSize(14);doc.text(t,10,14);doc.setFont("helvetica","normal");doc.setFontSize(9);doc.text(meta,10,19)}
var hs={fillColor:[31,95,191],textColor:255,halign:"center",valign:"middle",fontStyle:"bold"};
function tab(tag){var ix=tag==="A"?[0,1,2,3]:[0,1];b.spec.forEach(function(x,i){if(x.pdf===tag)ix.push(i+4)});
doc.autoTable({startY:23,head:[ix.map(function(i){return b.H[i]})],body:b.R.map(function(r){return ix.map(function(i){return r[i]})}),theme:"grid",
styles:{fontSize:7.5,cellPadding:1.6,valign:"middle",overflow:"linebreak",lineColor:[184,196,220],lineWidth:.2,textColor:[27,36,48]},headStyles:hs,margin:{left:10,right:10,bottom:14},columnStyles:{0:{cellWidth:9,halign:"center"}},
didParseCell:function(h){if(h.section==="body"&&h.row.index%2===1)h.cell.styles.fillColor=[241,245,251]}})}
head(c.ttl+" - Identitas dan Kontak");tab("A");doc.addPage();head(c.ttl+" - Data Teknis");tab("B");
var n=doc.internal.getNumberOfPages();for(var i=1;i<=n;i++){doc.setPage(i);doc.setFontSize(8);doc.setTextColor(90,100,120);doc.text("Halaman "+i+" dari "+n,148.5,205,{align:"center"})}
return doc.output("blob")}).then(function(bl){saveF("data-teknis-"+k+"-"+today()+".pdf",bl)}).catch(function(){failMsg()})}
document.getElementById("tex").onclick=function(){EXV=TV;document.getElementById("dlge").showModal()};
render();
