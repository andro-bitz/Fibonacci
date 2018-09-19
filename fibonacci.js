var n = [0, 1, 1];
var i = n.length;
for (i; i<20; i++)
{
  var x = n [(n.length - 2)];
  var y = n [(n.length - 1)];
  n.push(x+y);
}
if(i=20)
{
  console.log(n);
}
