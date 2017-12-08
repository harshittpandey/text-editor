function pageIndent()
  {
    var docB=document.getElementsByName("textfield")[0].contentWindow.document.body;
    var node=document.createElement("p");
    var newdiv=document.createElement("hr");
    var brk=document.createElement("br");
    node.style.pageBreakBefore="always";
    docB.appendChild(node);
    docB.appendChild(newdiv);
    docB.appendChild(brk);
  }