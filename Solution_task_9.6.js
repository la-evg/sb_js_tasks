sum = 0;

for (let i = 2; i < list.length; i++) {
   let flag = true;
   
   for (let j = 2; j < i; j++) {
      if (list[i] % j == 0) {
         flag = false;
         break;
      }
   }

   if (flag) {
      sum += list[i];
   }
}

console.log(sum)