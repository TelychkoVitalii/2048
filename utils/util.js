function templateStr(tplString, attributes) {
    for(var i in attributes) {
            if(attributes.hasOwnProperty(i)) {
                tplString = tplString.replace('{{'+ i +'}}', attributes[i])
            }
        }
}

templateStr(' my str {{ item[0][1] }} text {{ name }}', {name: 'qwe', item: [[2, 5], [3]] }); /// my str 5 text qwe

// function templateStr(tplString, attributes) {
//     for(var i in attributes) {
//         if(attributes.hasOwnProperty(i)) {
//             tplString = tplString.replace('{{'+ i +'}}', attributes[i])
//         }
//     }
// }