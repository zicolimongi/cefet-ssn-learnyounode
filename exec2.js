var numbers = process.argv.slice(2), sum=0;

for(i in numbers){
  sum += Number(numbers[i]);
}

console.log(sum);