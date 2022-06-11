var pageno= 1;
var itr=0;






var modalbtn=document.querySelector('.delete');
var modalbg=document.querySelector('.delete-head-modal-bg');
var modalclose=document.querySelector('.modal-close');
var modalcancel=document.querySelector('#cancel');

modalbtn.addEventListener('click',function()
         {
             modalbg.classList.add('bg-active')

         } );



modalclose.addEventListener('click',function()
         {
             modalbg.classList.remove('bg-active')

         } );
modalcancel.addEventListener('click',function()
         {
             modalbg.classList.remove('bg-active')

         } );


var modalbtn1=document.querySelector('.add');
var modalbg1=document.querySelector('.add-head-modal-bg');
var modalclose1=document.querySelector('.modal-close2');
var modalclose3=document.querySelector('.addcan');

modalbtn1.addEventListener('click',function()
         {
             modalbg1.classList.add('bg-active2')
            
         } );



modalclose1.addEventListener('click',function()
         {
             modalbg1.classList.remove('bg-active2')

         } );

         modalclose3.addEventListener('click',function()
         {
             modalbg1.classList.remove('bg-active2')

         } );         


         
     
         
         var modalbtn2=document.querySelector('.edit');
         var modalbg2=document.querySelector('.edit-head-modal-bg');
         var modalclose2=document.querySelector('.modal-close3');
         var editcancel=document.querySelector('.cancel-in-edit');
         var editsave=document.querySelector('.save-in-edit');
         
         modalbtn2.addEventListener('click',function()
                  {
                      modalbg2.classList.add('bg-active3')
         
                  } );
         
         
         
         modalclose2.addEventListener('click',function()
                  {
                      modalbg2.classList.remove('bg-active3')
         
                  } );

                  editcancel.addEventListener('click',function()
                  {
                      modalbg2.classList.remove('bg-active3')
         
                  } );      
                  
                  editsave.addEventListener('click',function()
                  {
                      modalbg2.classList.remove('bg-active3')
         
                  } );         
          


         
      function clearaddinv()
      {
          document.getElementById("add-form").reset()
      }           

      function cleareditform()
      {
        document.getElementById("edtform").reset()
      }




      function deleteRow(maintable) {
        try {
            var table = document.getElementById("maintable");
            var rowCount = table.rows.length;
 
            for (var i = 1; i < rowCount; i++) {
                var row = table.rows[i];
                var chkbox = row.cells[0].childNodes[0];
                if (null != chkbox && true == chkbox.checked) {
                    if (rowCount <= 1) {
                        alert("Cannot delete all the rows.");
                        break;
                    }
                   

                    table.deleteRow(i);
                    rowCount--;
                    i--;
                }
            }
        } catch (e) {
            alert(e);
        }
    }
    document.getElementById('mainchk').onclick = function() {
        var checkboxes = document.getElementsByName('chk');
        for (var checkbox of checkboxes) {
            checkbox.checked = this.checked;
        }
    }


    // editform()
    // {
    //     var mtable=document.getElementById("maintable");
    //     var notes=document.getElementById("input-notes");
    //     var amount=document.getElementById("input-amount");
    //     var RowCount=mtable.rows.length;
    //     for(var i=1;i<RowCount;i++)
    //     {   
    //         var row=mtable.rows[i];
    //         var p=row.cells[0].childNodes[0];

        
    //     if(null !=p && true==p.checked)
    //     {
    //         var x=mtable.rows[i].cells[4].innerHTML;
    //         amount.value=x;
    //         var n=mtable.rows[i].cells[7].innerHTML;
    //         notes.innerHTML=n;
    //     }
    // }
 
    // }



    function addrow() 
    {
    var table=document.getElementsByTagName("table")[0];

    
    var custname = document.getElementById("input").value;
    
    var custno=document.getElementById("input2").value;
    
    var invn=document.getElementById("input3").value;
    
    var inva=document.getElementById("input4").value;
    
    var duedate = document.getElementById("input5").value;
   
    var note=document.getElementById("input6").value;
    
    var newrow=table.insertRow(table.rows.length);
    
    var count=table.rows.length;
    
    var cell0=newrow.insertCell(0);
    
    var element=document.createElement("input")
    
    element.type="checkbox";
    element.name="chk";
    element.value=count;
    cell0.appendChild(element);
    
    var cell1=newrow.insertCell(1); 
    var cell2=newrow.insertCell(2);
    var cell3=newrow.insertCell(3);
    var cell4=newrow.insertCell(4);
    var cell5=newrow.insertCell(5);
    var cell6=newrow.insertCell(6);
    var cell7=newrow.insertCell(7);
 
    cell1.innerHTML=custname;
    cell2.innerHTML=custno;
    cell3.innerHTML=invn;
    cell4.innerHTML=inva;
    cell5.innerHTML=duedate;
    cell6.innerHTML="-";
    cell7.innerHTML=note;

    modelbg1.style.display="None";
}   

// let btnAdd = document.querySelector('.addadd'); 
// let table = document.querySelector('table');

// let nameInput=document.querySelector('#input');

// let custnoInput = document.querySelector('#input2');

// let invnInput = document.querySelector('#input3');

// let invaInput = document.querySelector('#input4');

// let duedateInput = document.querySelector('#input5');
// let noteInput = document.querySelector('#input6');




// btnAdd.addEventListener('click', () => {

// let custname = nameInput.value;

// let custno = custnoInput.value;

// let invn = invnInput.value;

// let inva = invaInput.value;

// let duedate = duedateInput.value;

// let preddate = "-";

// let notes = noteInput.value;

// let template = `
// <tr>
 
// <td><input id"=chkd" name="chk" type="checkbox"></td>
// <td>${custname}</td>

// <td>${custno}</td>

// <td>${invn}</td>
// <td>${inva}</td>
// <td>${duedate}</td>
// <td>${preddate}</td>
// <td>${notes}</td>

// </tr>`;

// maintable.innerHTML +=template;
// });
var rIndex,table= document.getElementsByTagName("table")[0]; 
function selectedRowToInput ()
{

for (var i= 1; i < table.rows.length; i++)
     {
table.rows[i].onclick= function ()
        {
// get the seected row index

                rIndex=this.rowIndex;
//                console.log(rIndex);

                document.getElementById("input-amount").value=this.cells[4].innerHTML;

                document.getElementById("input-notes").value=this.cells[7].innerHTML;

          };
     }
}

selectedRowToInput();

function editHtmlTbleSelectedRow ()
{
      var inpa = document.getElementById("input-amount").value,

       inpn = document.getElementById("input-notes").value;

       

       table.rows[rIndex].cells[4].innerHTML = inpa;

        table.rows[rIndex].cells[7].innerHTML = inpn;
}