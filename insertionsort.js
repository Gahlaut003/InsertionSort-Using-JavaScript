function insertion(arr)
{
var len=arr.length;
for(var i=1;i<len;i++)//number of pass
{
  var tmp=arr[i];//copying the  current element.
  for(var j=i-1;j>=0 && (arr[j]>tmp); j--)//checking through elements & comparing with tmp
  {
    arr[j+1]=arr[j]//Swapping
  }
  arr[j+1]=tmp;
}

}
var arr=[4,6,1,9,10,7]
insertion(arr);
console.log(arr);
