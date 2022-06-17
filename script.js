var array, item, j, item2;

function getNumberOrString(value) {
  // Convert a string value to a number if possible
  let number_value = Number(value);
  if (Number.isNaN(number_value)) {
    return value
  } else {
    return number_value
  }
}


array = [];
item = [];
j = [];
item2 = [];


document.getElementById('button-c').addEventListener('click', (event) => {
  array = getNumberOrString(document.getElementById('list').value);
  if (array > 0) {
    let element_list1 = document.getElementById('list1');
    let new_li = document.createElement('li');
    new_li.innerText = array;

    element_list1.appendChild(new_li);
    item.push(array);
    let element_total = document.getElementById('total');
    element_total.innerText = item.reduce((a,b) => a+b, 0);
    item2.push(array);
  } else {
    let element_list2 = document.getElementById('list2');
    let new_li2 = document.createElement('li');
    new_li2.innerText = array;

    element_list2.appendChild(new_li2);
    j.push(array);
    let element_total2 = document.getElementById('total2');
    element_total2.innerText = j.reduce((a,b) => a+b, 0);
    item2.push(array);
  }
  let element_total3 = document.getElementById('total3');
  element_total3.innerText = item2.reduce((a,b) => a+b, 0);

});