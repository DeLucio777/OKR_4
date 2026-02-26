//1. C) writable
//2.
function fun(){
for(var i = 0;i<=50;i++){
    console.log(i)
}
}

//3.
const countries = {
    Belarus: ['Минск', 'Брест'],
    USA: ['Нью Йорк', 'Лос Анджелес'],
    Russia: ['Москва', 'Сталинград']
};
function fun2(obj){
    const cityArr = Object.values(obj);
    const allCity = cityArr.flat();
    return allCity.join(', ');
}
console.log(fun2(countries));

//4.

function fun3(arr) {
  return arr.reduce((acc, item) => {
    if (acc[item.category]) {
      acc[item.category] += item.value;
    } else {
      acc[item.category] = item.value;
    }
    return acc;
  }, {});
}
const data = [
  { category: 'фруктыыы', value: 32 },
  { category: 'фруктыыы2', value: 1111 },
  { category: 'фруктыыы', value: 2 },
  { category: 'фруктыыы2', value: 1 },
  { category: 'фруктыыы3', value: 999 }
];
console.log(fun3(data));


