var total=0;
var noOfPages=0;
var length=0;

window.onload=function Display(){
    console.log("loaded");
    console.log(pageno);
    var url= "http://localhost:8080/Summer_Internship_Backend/Display?page="+ pageno;
    console.log(url);
    axios.get(url).then(response=>{
    
    console.log("GET users", response.data);
    length= response.data.length;
    for(var i=0; i<length; i++){
      
        var initial_colour=((i+1)%2==0)? '#283A46' : '#273D49CC';
        var new_color='#2A5368';
        var name=response.data[i].cust_name;
        var num=response.data[i].cust_no;
        var inv= response.data[i].inv_no;
        var amt=response.data[i].amt;
        var due=response.data[i].due_date;
        var notes=response.data[i].note;
        var predict=response.data[i].predict_date;


        var table=document.getElementById("maintable");

        var row=table.insertRow(i+1);


        var cell1=row.insertCell(0);
        var element=document.createElement("input");
element.type="checkbox";
element.name="chk";
element.value=i+1;
element.onclick=function(hh){
    itr=this.value;
    if(this.checked){
        document.getElementsByTagName('tr')[itr].style.backgroundColor=new_color;

    }
    else{
        document.getElementsByTagName('tr')[itr].style.backgroundColor=initial_colour;
    }
};
 cell1.appendChild(element);
 var cell2= row.insertCell(1);
 cell2.innerHTML= name;
var cell3=row.insertCell(2);
cell3.innerHTML=num;
var cell4=row.insertCell(3);
cell4.innerHTML=inv;
var cell5=row.insertCell(4);
cell5.innerHTML=amt;
var cell6=row.insertCell(5);
cell6.innerHTML=due;
var cell7=row.insertCell(6);
cell7.innerHTML=predict;
var cell8=row.insertCell(7);
cell8.innerHTML=notes;


    }

       


    })
    .catch(error=>console.error(error));
};

document.getElementsByClassName('next')[0].onclick=function(){
    pageno=pageno+1;
    var url= "http://localhost:8080/Summer_Internship_Backend/Display?page="+ pageno;
    console.log(url);
    axios.get(url).then(response=>{
    
    console.log("GET users", response.data);
    length= response.data.length;
    for(var i=0; i<length; i++){
      
       
        var name=response.data[i].cust_name;
        var num=response.data[i].cust_no;
        var inv= response.data[i].inv_no;
        var amt=response.data[i].amt;
        var due=response.data[i].due_date;
        var notes=response.data[i].note;
        var predict=response.data[i].predict_date;


        var table=document.getElementById("maintable");

        var che=table.rows[i+1].cells[0].childNodes[0];
        var cn=table.rows[i+1].cells[1];
        var co=table.rows[i+1].cells[2];
        var iv=table.rows[i+1].cells[3];
        var ia=table.rows[i+1].cells[4];
        var dd=table.rows[i+1].cells[5];
        var p=table.rows[i+1].cells[6];
        var n=table.rows[i+1].cells[7];
        che.checked=false;
        cn.innerHTML=name;
        co.innerHTML=num;
        iv.innerHTML=inv;
        ia.innerHTML=amt;
        dd.innerHTML=due;
        p.innerHTML=predict;
        n.innerHTML=notes;
}
    })
//    .catch(error=>console.error(error));
};
document.getElementsByClassName('prev')[0].onclick=function(){
    pageno=pageno-1;
    var url= "http://localhost:8080/Summer_Internship_Backend/Display?page="+ pageno;
    console.log(url);
    axios.get(url).then(response=>{
    
    console.log("GET users", response.data);
    length= response.data.length;
    for(var i=0; i<length; i++){
      
       
        var name=response.data[i].cust_name;
        var num=response.data[i].cust_no;
        var inv= response.data[i].inv_no;
        var amt=response.data[i].amt;
        var due=response.data[i].due_date;
        var notes=response.data[i].note;
        var predict=response.data[i].predict_date;


        var table=document.getElementById("maintable");

        var che=table.rows[i+1].cells[0].childNodes[0];
        var cn=table.rows[i+1].cells[1];
        var co=table.rows[i+1].cells[2];
        var iv=table.rows[i+1].cells[3];
        var ia=table.rows[i+1].cells[4];
        var dd=table.rows[i+1].cells[5];
        var p=table.rows[i+1].cells[6];
        var n=table.rows[i+1].cells[7];
        che.checked=false;
        cn.innerHTML=name;
        co.innerHTML=num;
        iv.innerHTML=inv;
        ia.innerHTML=amt;
        dd.innerHTML=due;
        p.innerHTML=predict;
        n.innerHTML=notes;
}
    })
//    .catch(error=>console.error(error));
};