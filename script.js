const details=[...document.querySelectorAll('.tree details')];
document.getElementById('expandAll').addEventListener('click',()=>details.forEach(d=>d.open=true));
document.getElementById('collapseAll').addEventListener('click',()=>details.forEach(d=>d.open=false));
