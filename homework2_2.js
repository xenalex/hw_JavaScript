// 2*:
// Преобразовать задание 1* таким образом, чтобы первым делом в функции проверялся тип данных. И если он не Number - кидалась ошибка.

// 3**:
// Преобразовать 2* таким образом, чтобы значение '2' (строка в которой лежит ТОЛЬКО ЦИФРА) пропускалось, преобразовываясь в number

// 4***:
// Преобразовать задание 3* таким образом, чтобы возраст вводится используя функцию prompt в привязанной верстке
let age_1;

// if (typeof(age_1) == "number") {
    const checkAge = function checkAge(age_1) { 
            let age_2 = 18;
            let age_3 = 60;
            if (age_1 < age_2) {
                console.log("You don’t have access cause your age is " + age_1 + " It’s less then ")   

            }
            else if (age_1 >= age_2 && age_1 < age_3){
                console.log("Welcome  !")
                    
            } 
            else if (age_1 > age_3) {
                console.log("Keep calm and look Culture channel")

            }else {
                console.log("Technical work")
                
            }
        }
// } else if(typeof(age_1) != "number") {
//     console.log("Error")
// }

checkAge(17)
checkAge(18)
checkAge(61)
checkAge("age")