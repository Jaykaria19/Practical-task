function rectArea(arr) {
    const stack = [];
    let maxArea = 0;
  
    for (let i = 0; i <= arr.length; i++) {
      while (stack.length > 0 && (i === arr.length || arr[i] < arr[stack[stack.length - 1]])) {
        const height = arr[stack.pop()];
        const width = stack.length === 0 ? i : i - stack[stack.length - 1] - 1;
        maxArea = Math.max(maxArea, height * width);
      }
      stack.push(i);
    }
  
    return maxArea;
  }
  
  const arr1 = [6, 2, 5, 4, 5, 1, 6];
  console.log(rectArea(arr1));
  
  const arr2 = [7, 2, 8, 9, 1, 3, 6, 5];
  console.log(rectArea(arr2));