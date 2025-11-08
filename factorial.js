function factorial(num) 
{
  let result = 1;

  for (let i = num; i > 1; i--)
  {
   
    result *= i; 
  }

  return result;
}

//     return 0;
//   else if (num == 0)
//     return 1;
//     else {
//       return (num * factorial(num -1));
//   }
// }

module.exports = factorial;
