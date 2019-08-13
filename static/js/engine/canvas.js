// Cases canvas filling

function draw(){
var c1 = document.getElementById('c1').getContext('2d');
var c2 = document.getElementById('c2').getContext('2d');
var c3 = document.getElementById('c3').getContext('2d');
var c4 = document.getElementById('c4').getContext('2d');
var c5 = document.getElementById('c5').getContext('2d');
var c6 = document.getElementById('c6').getContext('2d');
var c7 = document.getElementById('c7').getContext('2d');
var c8 = document.getElementById('c8').getContext('2d');
var c9 = document.getElementById('c9').getContext('2d');
var c10 = document.getElementById('c10').getContext('2d');
var c11 = document.getElementById('c11').getContext('2d');
var c12 = document.getElementById('c12').getContext('2d');
var c13 = document.getElementById('c13').getContext('2d');
var c14 = document.getElementById('c14').getContext('2d');
var c15 = document.getElementById('c15').getContext('2d');
var c16 = document.getElementById('c16').getContext('2d');
var c17 = document.getElementById('c17').getContext('2d');
var c18 = document.getElementById('c18').getContext('2d');
var c19 = document.getElementById('c19').getContext('2d');
var c20 = document.getElementById('c20').getContext('2d');
var c21 = document.getElementById('c21').getContext('2d');
var c22 = document.getElementById('c22').getContext('2d');
var c23 = document.getElementById('c23').getContext('2d');
var c24 = document.getElementById('c24').getContext('2d');
var c25 = document.getElementById('c25').getContext('2d');
var c26 = document.getElementById('c26').getContext('2d');
var c27 = document.getElementById('c27').getContext('2d');
var c28 = document.getElementById('c28').getContext('2d');
var c29 = document.getElementById('c29').getContext('2d');
var c30 = document.getElementById('c30').getContext('2d');
var c31 = document.getElementById('c31').getContext('2d');
var c32 = document.getElementById('c32').getContext('2d');
var c33 = document.getElementById('c33').getContext('2d');
var c34 = document.getElementById('c34').getContext('2d');
var c35 = document.getElementById('c35').getContext('2d');
var c36 = document.getElementById('c36').getContext('2d');
var c0 = document.getElementById('zerozone').getContext('2d');
var toto1 = document.getElementById('toto11').getContext('2d');
var toto2 = document.getElementById('toto12').getContext('2d');
var toto3 = document.getElementById('toto13').getContext('2d');
var firdo = document.getElementById('firdo').getContext('2d');
var secdo = document.getElementById('secdo').getContext('2d');
var tirdo = document.getElementById('tirdo').getContext('2d');
var firstei = document.getElementById('spfirstei').getContext('2d');
var lastei = document.getElementById('splastei').getContext('2d');
var speven = document.getElementById('speven').getContext('2d');
var speodd = document.getElementById('spodd').getContext('2d');
var spered = document.getElementById('spred').getContext('2d');
var speblack = document.getElementById('spblack').getContext('2d');

// Draw tokens

function dawred() {
    var redvas=document.getElementById("spred");
    var twodredvas=redvas.getContext("2d");
    twodredvas.drawImage(document.getElementById("gbred") ,0,0);
}dawred();

function dawblack() {
    var blackvas=document.getElementById("spblack");
    var twodblackvas=blackvas.getContext("2d");
    twodblackvas.drawImage(document.getElementById("gbblack") ,0,0);
}dawblack();

/// svg for totkens ///

function printoken5() {
    var tok5=document.getElementById("token5");
    var twodtok5=tok5.getContext("2d");
    twodtok5.drawImage(document.getElementById("jt5") ,0,0);
}printoken5();

function printoken10() {
    var tok10=document.getElementById("token10");
    var twodtok10=tok10.getContext("2d");
    twodtok10.drawImage(document.getElementById("jt10") ,0,0);
}printoken10();

function printoken20() {
    var tok20=document.getElementById("token20");
    var twodtok20=tok20.getContext("2d");
    twodtok20.drawImage(document.getElementById("jt20") ,0,0);
}printoken20();

function printoken50() {
    var tok50=document.getElementById("token50");
    var twodtok50=tok50.getContext("2d");
    twodtok50.drawImage(document.getElementById("jt50") ,0,0);
}printoken50();

function printoken100() {
    var tok100=document.getElementById("token100");
    var twodtok100=tok100.getContext("2d");
    twodtok100.drawImage(document.getElementById("jt100") ,0,0);
}printoken100();

function printoken200() {
    var tok200=document.getElementById("token200");
    var twodtok200=tok200.getContext("2d");
    twodtok200.drawImage(document.getElementById("jt200") ,0,0);
}printoken200();


// Black Text Canvas

c1.font = '24px Arial';
c1.fillStyle = "#000";
c1.fillText('1',18,32);

c3.font = '24px Helvetica';
c3.fillStyle = "#000";
c3.fillText('3',18,32);

c5.font = '24px Helvetica';
c5.fillStyle = "#000";
c5.fillText('5',18,32);

c7.font = '24px Helvetica';
c7.fillStyle = "#000";
c7.fillText('7',18,32);

c9.font = '24px Helvetica';
c9.fillStyle = "#000";
c9.fillText('9',18,32);

c11.font = '24px Helvetica';
c11.fillStyle = "#000";
c11.fillText('11',12,32);

c13.font = '24px Helvetica';
c13.fillStyle = "#000";
c13.fillText('13',12,32);

c15.font = '24px Helvetica';
c15.fillStyle = "#000";
c15.fillText('15',12,32);

c17.font = '24px Helvetica';
c17.fillStyle = "#000";
c17.fillText('17',12,32);

c19.font = '24px Helvetica';
c19.fillStyle = "#000";
c19.fillText('19',12,32);

c21.font = '24px Helvetica';
c21.fillStyle = "#000";
c21.fillText('21',12,32);

c23.font = '24px Helvetica';
c23.fillStyle = "#000";
c23.fillText('23',12,32);

c25.font = '24px Helvetica';
c25.fillStyle = "#000";
c25.fillText('25',12,32);

c27.font = '24px Helvetica';
c27.fillStyle = "#000";
c27.fillText('27',12,32);

c29.font = '24px Helvetica';
c29.fillStyle = "#000";
c29.fillText('29',12,32);

c31.font = '24px Helvetica';
c31.fillStyle = "#000";
c31.fillText('31',12,32);

c33.font = '24px Helvetica';
c33.fillStyle = "#000";
c33.fillText('33',12,32);

c35.font = '24px Helvetica';
c35.fillStyle = "#000";
c35.fillText('35',12,32);


// White text Canvas

c2.font = '24px Arial';
c2.fillStyle = "#fff";
c2.fillText('2',18,32);

c4.font = '24px Arial';
c4.fillStyle = "#fff";
c4.fillText('4',18,32);

c6.font = '24px Arial';
c6.fillStyle = "#fff";
c6.fillText('6',18,32);

c8.font = '24px Arial';
c8.fillStyle = "#fff";
c8.fillText('8',18,32);

c10.font = '24px Arial';
c10.fillStyle = "#fff";
c10.fillText('10',12,32);

c12.font = '24px Arial';
c12.fillStyle = "#fff";
c12.fillText('12',12,32);

c14.font = '24px Arial';
c14.fillStyle = "#fff";
c14.fillText('14',12,32);

c16.font = '24px Arial';
c16.fillStyle = "#fff";
c16.fillText('16',12,32);

c18.font = '24px Arial';
c18.fillStyle = "#fff";
c18.fillText('18',12,32);

c20.font = '24px Arial';
c20.fillStyle = "#fff";
c20.fillText('20',12,32);

c22.font = '24px Arial';
c22.fillStyle = "#fff";
c22.fillText('22',12,32);

c24.font = '24px Arial';
c24.fillStyle = "#fff";
c24.fillText('24',12,32);

c26.font = '24px Arial';
c26.fillStyle = "#fff";
c26.fillText('26',12,32);

c28.font = '24px Arial';
c28.fillStyle = "#fff";
c28.fillText('28',12,32);

c30.font = '24px Arial';
c30.fillStyle = "#fff";
c30.fillText('30',12,32);

c32.font = '24px Arial';
c32.fillStyle = "#fff";
c32.fillText('32',12,32);

c34.font = '24px Arial';
c34.fillStyle = "#fff";
c34.fillText('34',12,32);

c36.font = '24px Arial';
c36.fillStyle = "#fff";
c36.fillText('36',12,32);

// 0

c0.font = '24px Arial';
c0.fillStyle = "#fff";
c0.fillText('0',18,82)

// Special

toto1.font = '12px Arial';
toto1.fillStyle = "#000";
toto1.fillText('2to1',13,28);

toto2.font = '12px Arial';
toto2.fillStyle = "#000";
toto2.fillText('2to1',13,28);

toto3.font = '12px Arial';
toto3.fillStyle = "#000";
toto3.fillText('2to1',13,28);

firdo.font = '24px Arial';
firdo.fillStyle = "#000";
firdo.fillText('First 12',60,33);

secdo.font = '24px Arial';
secdo.fillStyle = "#000";
secdo.fillText('Middle 12',48,33);

tirdo.font = '24px Arial';
tirdo.fillStyle = "#000";
tirdo.fillText('Last 12',62,33);

firstei.font = '19px Arial';
firstei.fillStyle = "##000";
firstei.fillText('1-18',30,32);

lastei.font = '19px Arial';
lastei.fillStyle = "##000";
lastei.fillText('19-36',25,32);

speodd.font = '19px Arial';
speodd.fillStyle = "##000";
speodd.fillText('Odd',30,32);

speven.font = '19px Arial';
speven.fillStyle = "#000";
speven.fillText('Even',30,32);

}draw();

//////// add svgs to canvas for red and black gambles /////////

