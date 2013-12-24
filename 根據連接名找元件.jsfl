var dom = fl.getDocumentDOM();

if(dom)
{
  var truthBeTold = window.prompt("輸入你要查找的鏈接名：");
  var itemArray = fl.getDocumentDOM().library.items;

  if(truthBeTold != "" && truthBeTold != null)
  {
    find(itemArray, truthBeTold)
  }
  else
  {
    alert("請輸入正確的鏈接名！");
  }
}

function find(arr, truth)
{
  for(var i = 0; i < arr.length; i++)
  {
    if(truth == arr[i].linkageClassName)
    {
      var itemName = arr[i].name;
      alert(itemName);
      dom.library.selectItem(itemName);
      break;
    }
  }
  if(itemName == "" || itemName == null) alert("庫中沒有該元件");
}
