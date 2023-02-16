/* function that are common */
function getFeildValue(feildId){
   const feildvalue = document.getElementById(feildId)
   
   const feildvalueString = feildvalue.value;
 
   const value = parseInt(feildvalueString)
   return value
}
function getInnerText(elementId){
   const element = document.getElementById(elementId)
   const elementText = element.innerText
   return elementText
}
 function getSet(get , set){
    const idText = document.getElementById(get)
    idText.innerText = set
 }
/* calculate button */
document.getElementById('btn-caclculate').addEventListener('click',function(){
    const food = getFeildValue('food-feild')
    const rent = getFeildValue('rent-feild')
    const cloths = getFeildValue('cloths-feild')
     
   // console.log(typeof food);
    
         
    const totalExpenses = food + rent + cloths

    getSet('expen-price', totalExpenses )

    const income = getFeildValue('income-feild')
    const balance = income - totalExpenses
    getSet ('balance-price', balance)
   


})

/*  */
document.getElementById('save-button').addEventListener('click', function(){
  const save=  getFeildValue('saving-value')
  const savingpercentage = save /100;
  const income = getFeildValue('income-feild')

   const savingAmonut = savingpercentage * income

   getSet ('saving-amount', savingAmonut) 

   const balance = getInnerText('balance-price')
   const saved = getInnerText('saving-amount')
   
   const remainBalance = balance - saved;

   getSet ('remaining-balance', remainBalance)


})