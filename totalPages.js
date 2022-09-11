const { template } = require('@babel/core')

function totalPages(arrayItems, rowsPerPage) {
  
  if (arrayItems == undefined || arrayItems == null){
    return undefined ;

  }else if (rowsPerPage == null || rowsPerPage == 0 || rowsPerPage == undefined){
    return 1;

  }else{
    let x = arrayItems.length / rowsPerPage
    return Math.ceil(x)
}
}
module.exports = totalPages
