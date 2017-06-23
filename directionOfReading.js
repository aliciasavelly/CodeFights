function directionOfReading(numbers) {
   var matrix = [];
   var len = numbers.length;

   for (var i = 0; i < len; i++) {
      matrix[i] = [];
      for (var j = 0; j < String(numbers[i]).length; j++) {
         matrix[i].push(String(numbers[i])[j]);
      }
   }

   for (var k = 0; k < len; k++) {
      while (matrix[k].length < len) {
         matrix[k].unshift('0');
      }
   }

   var current = "";
   var result = [];
   for (var m = 0; m < len; m++) {
      for (var n = 0; n < len; n++) {
         current += matrix[n][m];
      }

      result.push(Number(current));
      current = "";
   }

   return result;
}
