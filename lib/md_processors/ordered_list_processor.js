'use strict';

// TODO : Documentation
module.exports = function ordered_list_processor(str) {
    const regex = /^[0-9]+\. .+(\n {1,}.{0,}|\t {1,}.{0,}|\n$|$)+/gm;
    let arrayMatches = str.match(regex);

    // Array with the str splitted by the regex to know if we have to reset the order count
    const splited_str_array = str.split(/^[ ]{0}[0-9]+\. .+(\n( |\t){1,}( |\t){1,}.{0,}|\n$|$)+/gm).filter(v => v != undefined)

    if (arrayMatches != null) {
        let index = 1
        arrayMatches = arrayMatches.map(match => {
            let result = [match, sublist(match).replace(/^[0-9]+\. /gm, "<li>" + index + ".") + "</li>"]
            index = index + 1

            // The count is reset if we have a space gap between two elements or if we have other components
            if (splited_str_array.length > index && splited_str_array[index] == "\n") {
                index = 1
            }
            return result
        })

        arrayMatches.forEach(match => {
            str = str.replace(match[0],  "\n<ul>" + match[1] + "</ul>\n")
        })

        return str;
    }

    return str
}


function sublist(str) {
    var first_line = str.split('\n')[0]
    str = str.replace(first_line, '')

    if (str != '') {
        str = str.replace(/^(\t|[ ]{1,4})/gm, '');

        let arrayMatches = str.match(/^[0-9]+\. .+(\n {1,}.{0,}|\t {1,}.{0,}|\n$|$)+/gm);

        if (arrayMatches != null) {
            let index = 1
            arrayMatches = arrayMatches.map(match =>{
                let result = [match, sublist(match).replace(/^[0-9]+\. /gm, "<li>" + index + ".") + "</li>"]
                index = index + 1
                return result
            })

            arrayMatches.forEach(match => {
                str = str.replace(match[0], match[1])
            })

            return ""+ first_line + "\n<ul>" + str + "</ul>";
        }
    }

    return "" + first_line + str
}
