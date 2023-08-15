const linearSearch=(arr,target)=>{
  //index=0,1
  //i<7
  //i++
for(let i=0;i<arr.length;i++)
{
if(arr[i]==target){
  //[0],10==70
  return i;
}
}
return -1;
}

const UnArr = [10,7,8,4,1,64,2]
const targetElement= 70;

const index = linearSearch(UnArr, targetElement);

if (index !== -1) {
  console.log(`Element ${targetElement} found at index [${index}]`);
} else {
  console.log(`Element ${targetElement} not found in the array`);
}