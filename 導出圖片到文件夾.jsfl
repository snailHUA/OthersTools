var path = "file:///D|/wuhua/pic/CN/swf/module/" + fl.getDocumentDOM().name + "/";//導出圖片地址url
var lib = fl.getDocumentDom().library;//庫
var items = lib.items;//庫項目數組

var fileName;
var tempPathName;
var tempItem;

//新建fla同名文件夾
FLfile.creatFolder(path + "/");
//遍曆庫項目
for(var i = 0; i<items.length; i++)
{
  //判斷類型，如果是圖片就導出
  tempItem = items[i];
  if(tempItem.itemType == "bitmap")
  {
    var itemName = items[i].name;
    if(itemName.indexOf("文字") == 0)
    {
      var eName = itemName.substring(itemName.indexOf("/") + 1, itemName.length);//獲取本身的名稱
      fileName = "";
      tempPathName = "";
      find(eName);
    }
  }
  if(i == items.length - 1)
  {
    alert("導出完成");
  }
}

function find(itemName)
{
  if(itemName.indexOf("/") >= 0)
  {
    fileName = itemName.substring(0, itemName.indexOf("/"));
    FLfile.createFolder(path + tempPathName + fileName + "/");
    tempPathName += fileName + "/";
    find(itemName.substring(itemName.indexOf("/") + 1, itemName.length));
  }
  else
  {
    if(tempPathName == "")
    {
      tempItem.exportToFile(path + itemName);
    }
    else
    {
      tempItem.exportToFile(path + "/" + tempPathName + "/" + itemName);
    }
  }
}
