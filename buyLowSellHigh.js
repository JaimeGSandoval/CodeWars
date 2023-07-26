// For this, we can only make one comparison: if right (high) is greater than left (low)? Yes? Calculate the profit. Right (high) is smaller than left (low)? That means it's even smaller than what we thought was the minimum, thus it is the new minimum. We have already calculated what the profit was for the elements between these two. So we freely make l = r. We then increase the right pointer in either of the cases and traverse

function maxProfit(arr) {
  let i = 0;
  let j = 1;
  let maxP = 0;
  let profit = 0;

  while (j < arr.length) {
    if (arr[i] < arr[j]) {
      profit = arr[j] - arr[i];
      maxP = Math.max(maxP, profit);
    } else {
      i = j;
    }
    j++;
  }

  return maxP;
}

console.log(maxProfit([7, 1, 5, 3, 6, 4]));
