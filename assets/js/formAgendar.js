// (function(){

//     // Corpo
//     let horas = document.querySelector('#horas')
//     // iNPUTS
//     let manha = document.querySelector('#manha')
//     let tarde = document.querySelector('#tarde')
//     let noite = document.querySelector('#noite')

//     const hora = () => {
//         manha.addEventListener('click', () => {
//             horas.textContent = ''
//             if(manha.checked){
//                 // Input 1
//                 let label1 = document.createElement('label')
//                 label1.setAttribute('class','container-hour')
//                 let input1 = document.createElement('input')
//                 input1.type = 'radio'
//                 input1.value = '1'
//                 input1.setAttribute('required', 'required')
//                 input1.setAttribute('name','horario')
//                 let span1 = document.createElement('span')
//                 span1.setAttribute('class','checkmark')
//                 let horario1 = document.createTextNode('7:00 as 9:40')
                
//                 horas.appendChild(label1)
//                 label1.appendChild(input1)
//                 label1.appendChild(span1)
//                 label1.appendChild(horario1)
//                 // Input 2
//                 let label2 = document.createElement('label')
//                 label2.setAttribute('class','container-hour')
//                 let input2 = document.createElement('input')
//                 input2.type = 'radio'
//                 input2.value = '2'
//                 input2.setAttribute('required', 'required')
//                 input2.setAttribute('name','horario')
//                 let span2 = document.createElement('span')
//                 span2.setAttribute('class','checkmark')
//                 let horario2 = document.createTextNode('10:00 as 12:30')
                
//                 horas.appendChild(label2)
//                 label2.appendChild(input2)
//                 label2.appendChild(span2)
//                 label2.appendChild(horario2)
//                 // Input 3
//                 let label3 = document.createElement('label')
//                 label3.setAttribute('class','container-hour')
//                 let input3 = document.createElement('input')
//                 input3.type = 'radio'
//                 input3.value = '3'
//                 input3.setAttribute('required', 'required')
//                 input3.setAttribute('name','horario')
//                 let span3 = document.createElement('span')
//                 span3.setAttribute('class','checkmark')
//                 let horario3 = document.createTextNode('Manhã Toda')
                
//                 horas.appendChild(label3)
//                 label3.appendChild(input3)
//                 label3.appendChild(span3)
//                 label3.appendChild(horario3)
//             }
//         })
//         tarde.addEventListener('click', () => {
//             horas.textContent = ''
//             if(tarde.checked){
//                 // Input 1
//                 let label1 = document.createElement('label')
//                 label1.setAttribute('class','container-hour')
//                 let input1 = document.createElement('input')
//                 input1.type = 'radio'
//                 input1.value = '1'
//                 input1.setAttribute('required', 'required')
//                 input1.setAttribute('name','horario')
//                 let span1 = document.createElement('span')
//                 span1.setAttribute('class','checkmark')
//                 let horario1 = document.createTextNode('13:00 as 15:15')
                
//                 horas.appendChild(label1)
//                 label1.appendChild(input1)
//                 label1.appendChild(span1)
//                 label1.appendChild(horario1)
//                 // Input 2
//                 let label2 = document.createElement('label')
//                 label2.setAttribute('class','container-hour')
//                 let input2 = document.createElement('input')
//                 input2.type = 'radio'
//                 input2.value = '2'
//                 input2.setAttribute('required', 'required')
//                 input2.setAttribute('name','horario')
//                 let span2 = document.createElement('span')
//                 span2.setAttribute('class','checkmark')
//                 let horario2 = document.createTextNode('15:30 as 17:30')
                
//                 horas.appendChild(label2)
//                 label2.appendChild(input2)
//                 label2.appendChild(span2)
//                 label2.appendChild(horario2)
//                 // Input 3
//                 let label3 = document.createElement('label')
//                 label3.setAttribute('class', 'container-hour')
//                 let input3 = document.createElement('input')
//                 input3.type = 'radio'
//                 input3.value = '3'
//                 input3.setAttribute('required', 'required')
//                 input3.setAttribute('name', 'horario')
//                 let span3 = document.createElement('span')
//                 span3.setAttribute('class', 'checkmark')
//                 let horario3 = document.createTextNode('Tarde Toda')

//                 horas.appendChild(label3)
//                 label3.appendChild(input3)
//                 label3.appendChild(span3)
//                 label3.appendChild(horario3)
//             }
//         })
//         noite.addEventListener('click', () => {
//             horas.textContent = ''
//             if(noite.checked){
//                 // Input 1
//                 let label1 = document.createElement('label')
//                 label1.setAttribute('class','container-hour')
//                 let input1 = document.createElement('input')
//                 input1.type = 'radio'
//                 input1.value = '1'
//                 input1.setAttribute('required', 'required')
//                 input1.setAttribute('name','horario')
//                 let span1 = document.createElement('span')
//                 span1.setAttribute('class','checkmark')
//                 let horario1 = document.createTextNode('18:00 as 19:15')
                
//                 horas.appendChild(label1)
//                 label1.appendChild(input1)
//                 label1.appendChild(span1)
//                 label1.appendChild(horario1)
//                 // Input 2
//                 let label2 = document.createElement('label')
//                 label2.setAttribute('class','container-hour')
//                 let input2 = document.createElement('input')
//                 input2.type = 'radio'
//                 input2.value = '2'
//                 input2.setAttribute('required', 'required')
//                 input2.setAttribute('name','horario')
//                 let span2 = document.createElement('span')
//                 span2.setAttribute('class','checkmark')
//                 let horario2 = document.createTextNode('19:30 as 21:30')
                
//                 horas.appendChild(label2)
//                 label2.appendChild(input2)
//                 label2.appendChild(span2)
//                 label2.appendChild(horario2)
//                 // Input 3
//                 let label3 = document.createElement('label')
//                 label3.setAttribute('class', 'container-hour')
//                 let input3 = document.createElement('input')
//                 input3.type = 'radio'
//                 input3.value = '3'
//                 input3.setAttribute('required', 'required')
//                 input3.setAttribute('name', 'horario')
//                 let span3 = document.createElement('span')
//                 span3.setAttribute('class', 'checkmark')
//                 let horario3 = document.createTextNode('Noite Toda')

//                 horas.appendChild(label3)
//                 label3.appendChild(input3)
//                 label3.appendChild(span3)
//                 label3.appendChild(horario3)
//             }
//         })  
//     }

// hora()



// })()