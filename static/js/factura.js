function mostrar(){
    let item1=document.getElementById('prod1');
    let item2=document.getElementById('prod2');
    let item3=document.getElementById('prod3');
    let adic=0;

// primer item
if(item1.selectedIndex==0){
    document.getElementById('desc01').value="";
    document.getElementById('vau01').value=0;
    document.getElementById('cant01').value=0;
}

if(item1.selectedIndex==1){
    document.getElementById('desc01').value="SUSUKI GSX-8R + Dos Cascos Integrales KNT 878 Negro Mate Visor Negro";
    document.getElementById('vau01').value=item1.options[item1.selectedIndex].value;
    document.getElementById('vat01').value=(parseFloat(document.getElementById('cant01').value)*parseFloat(document.getElementById('vau01').value)||0).toFixed(0);
}
if(item1.selectedIndex==2){
    document.getElementById('desc01').value="Honda CB 190R 2.0 2026 + CASCOS INTEGRAL  DOBLE VISOR LS2 FF808 STREAM + Impermedable ultra resistente";
    document.getElementById('vau01').value=item1.options[item1.selectedIndex].value;
    document.getElementById('vat01').value=(parseFloat(document.getElementById('cant01').value)*parseFloat(document.getElementById('vau01').value)||0).toFixed(0);
}
if(item1.selectedIndex==3){
    document.getElementById('desc01').value="VICTORY ZONTES 350 R1 + Cascos Integral X-Sports V151 Negro Mate y Visor + Guantes Inpermedables";
    document.getElementById('vau01').value=item1.options[item1.selectedIndex].value;
    document.getElementById('vat01').value=(parseFloat(document.getElementById('cant01').value)*parseFloat(document.getElementById('vau01').value)||0).toFixed(0);
}

// Segundo item
if(item2.selectedIndex==0){
    document.getElementById('desc02').value="";
    document.getElementById('vau02').value=0;
    document.getElementById('cant02').value=0;
}

if(item2.selectedIndex==1){
    document.getElementById('desc02').value="USUKI GSX-8R + Dos Cascos Integrales KNT 878 Negro Mate Visor Negro";
    document.getElementById('vau02').value=item2.options[item2.selectedIndex].value;
    document.getElementById('vat02').value=(parseFloat(document.getElementById('cant02').value)*parseFloat(document.getElementById('vau02').value)||0).toFixed(0);
}
if(item2.selectedIndex==2){
    document.getElementById('desc02').value="Honda CB 190R 2.0 2026 + CASCOS INTEGRAL  DOBLE VISOR LS2 FF808 STREAM + Impermedable ultra resistente";
    document.getElementById('vau02').value=item2.options[item2.selectedIndex].value;
    document.getElementById('vat02').value=(parseFloat(document.getElementById('cant02').value)*parseFloat(document.getElementById('vau02').value)||0).toFixed(0);
}
if(item2.selectedIndex==3){
    document.getElementById('desc02').value="VICTORY ZONTES 350 R1 + Cascos Integral X-Sports V151 Negro Mate y Visor + Guantes Inpermedables";
    document.getElementById('vau02').value=item2.options[item2.selectedIndex].value;
    document.getElementById('vat02').value=(parseFloat(document.getElementById('cant02').value)*parseFloat(document.getElementById('vau02').value)||0).toFixed(0);
}

// tercer item
if(item3.selectedIndex==0){
    document.getElementById('desc03').value="";
    document.getElementById('vau03').value=0;
    document.getElementById('cant03').value=0;
}

if(item3.selectedIndex==1){
    document.getElementById('desc03').value="USUKI GSX-8R + Dos Cascos Integrales KNT 878 Negro Mate Visor Negro";
    document.getElementById('vau03').value=item3.options[item3.selectedIndex].value;
    document.getElementById('vat03').value=(parseFloat(document.getElementById('cant03').value)*parseFloat(document.getElementById('vau03').value)||0).toFixed(0);
}
if(item3.selectedIndex==2){
    document.getElementById('desc03').value="Honda CB 190R 2.0 2026 + CASCOS INTEGRAL  DOBLE VISOR LS2 FF808 STREAM + Impermedable ultra resistente";
    document.getElementById('vau03').value=item3.options[item3.selectedIndex].value;
    document.getElementById('vat03').value=(parseFloat(document.getElementById('cant03').value)*parseFloat(document.getElementById('vau03').value)||0).toFixed(0);
}
if(item3.selectedIndex==3){
    document.getElementById('desc03').value="VICTORY ZONTES 350 R1 + Cascos Integral X-Sports V151 Negro Mate y Visor + Guantes Inpermedables";
    document.getElementById('vau03').value=item3.options[item3.selectedIndex].value;
    document.getElementById('vat03').value=(parseFloat(document.getElementById('cant03').value)*parseFloat(document.getElementById('vau03').value)||0).toFixed(0);
}
//CALCULAR ADICIONALES
let totaladic0=0;
if(document.getElementById('checkbox1').checked){
    totaladic0 +=250000;
}
if(document.getElementById('checkbox2').checked){
    totaladic0 +=1100000;
}
if(document.getElementById('checkbox3').checked){
    totaladic0 +=71700;
}
if(document.getElementById('checkbox3').checked){
    totaladic0 +=80000;
}
// Colocar total de adicionales 
document.getElementById('adic0').value=totaladic0;

//Calcular Subtotal
document.getElementById('subt').value=(parseFloat(document.getElementById('vat01').value)+parseFloat(document.getElementById('vat02').value)+parseFloat(document.getElementById('vat03').value)+parseFloat(document.getElementById('adic0').value)||0).toFixed(0);

// CALCULAR IVA
document.getElementById('iva').value=(parseFloat(document.getElementById('subt').value)*0.19||0).toFixed(0);

//CALCULAR DESCUENTO
if(document.getElementById('radio1').checked){ //efrctivo seleccionado
    document.getElementById('desc').value=(parseFloat(document.getElementById('subt').value)*0.10||0).toFixed(0);
}else if(document.getElementById('radio2').checked){ //Nequi seleccionado
    document.getElementById('desc').value=(parseFloat(document.getElementById('subt').value)*0.00||0).toFixed(0);
}else if(document.getElementById('radio3').checked){ //tarjeta credito seleccionado
    document.getElementById('desc').value=(parseFloat(document.getElementById('subt').value)*0.00||0).toFixed(0);
}

// Calcular Neto

document.getElementById('neto').value=(parseFloat(document.getElementById('subt').value)+parseFloat(document.getElementById('iva').value)-parseFloat(document.getElementById('desc').value)||0).toFixed(0);
}
function generar(){
    swal("Estimado cliente","disfrute su motocicleta","success");


}