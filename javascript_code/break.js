// var roarst = 0;
// while (roarst<10)
// {
//     console.log('roast den');
//     roarst++;
//     if(roarst>4){
//         break;
//     }
// }

var items = ['sunglass', 'mouse', 'pen', 'notebook'];
for (var i = 0; i<items.length; i++){
    var item = items[i];
    if(item =='pen'){
        break;
    }
    console.log(item);
}