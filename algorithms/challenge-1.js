function romanToDecimal(roman) {
    if(typeof roman !== 'number')
    return false
let digits = String (+roman).split(""),
key =["","C","CC","CCC","CD","CD","D","DC","DCCC","CM","","X","XX","XXX","XL",
"L","LX","LXX","LXXX","XC","","I","II","III","IV","V","VII","VII","VIII","IX"],
roman_num ="",
i =3;
while(i--)
roman_num =(key[+digits.pop() + (i * 10)] || "") + roman_num;
return Array (+digits.join("") +1).join("M") + roman_num;
}
 console.log(romanToDecimal(1))
//module.exports = romanToDecimal
