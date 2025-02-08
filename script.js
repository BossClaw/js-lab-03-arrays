// LAB 03 - ARRAYS

let lab_arr = [];


function do_task(task_id, output_div) {

    // SET FILL COUNT
    const fill_count = 9;

    // MAKE RETURN OUTPUT TEXT
    var resText = "";

    console.log("\nTASK ID[" + task_id + "] - STARTED\n\n");

    switch (task_id) {
        case 1:
            // Step 1: Declaring Arrays
            // Declare an array that stores a list of at least 5 elements.
            lab_arr = fill_arr(fill_count);

            // LOG IT
            lab_arr.forEach((e, idx) => {
                let itemText = "ITEM[" + idx + "] IS[" + e + "]";
                resText += itemText + "\n";
            });
            break;

        case 2:
            // Step 2: Accessing Arrays
            // Access the first, last, and middle elements of the array you declared.
            // Store these accessed values in separate variables.

            // HANDLE IF lab_arr NOT FILLED YET
            if (lab_arr.length < 1) {
                lab_arr = fill_arr(fill_count);
            }

            // CALC MIDDLE
            // TODO - CHECK FOR LENGTH & CLAMP
            let first_index = 0;
            let middle_index = Math.floor(lab_arr.length / 2);
            let last_index = lab_arr.length - 1;

            resText += "FIRST  INDEX[" + first_index + "] VALUE[" + lab_arr[first_index] + "]\n";
            resText += "MIDDLE INDEX[" + middle_index + "] VALUE[" + lab_arr[middle_index] + "]\n";
            resText += "LAST   INDEX[" + last_index + "] VALUE[" + lab_arr[last_index] + "]\n";
            break;

        case 3:
            // Step 3: Using Array Properties
            // Task: Use the.length property to determine the number of elements in your array and log the result to the console.

            // HANDLE IF lab_arr NOT FILLED YET
            if (lab_arr.length < 1) {
                lab_arr = fill_arr(fill_count);
            }

            resText += "ARRAY LENGTH[" + lab_arr.length + "]\n";
            break;

        case 4:
            // Step 4: Array Methods
            // Experiment with at least three array methods such as .push(), .pop(), .shift(), .unshift(), or.splice().
            // Add new elements to your array, remove an element, and modify an element in place using these methods.

            // MAKE A SHORTER, EASIER TO SEE ARRAY
            const mod_arr = ["B", "C", "D", "E"]
            resText += "UNMODIFIED ARRAY \n[" + mod_arr + "]\n\n";

            mod_arr.push('Z');
            resText += "push('Z')        \n[" + mod_arr + "]\n\n";

            mod_arr.pop();
            resText += "pop()            \n[" + mod_arr + "]\n\n";

            mod_arr.shift();
            resText += "shift()          \n[" + mod_arr + "]\n\n";

            mod_arr.unshift("A", "R");
            resText += "unshift('A','R') \n[" + mod_arr + "]\n\n";

            mod_arr.splice(3, 0, "A");
            resText += "splice(3,0,'A')       \n[" + mod_arr + "]\n\n";
            break;

        case 5:
            // Step 5: Iterating Through Arrays
            // Write a loop(e.g., for loop or forEach method) that goes through each element of your array and logs it to the console.
            // As a challenge, try using both traditional for loops and modern array iteration methods(like forEach or map()).

            // HANDLE IF lab_arr NOT FILLED YET
            if (lab_arr.length < 1) {
                lab_arr = fill_arr(fill_count);
            }

            for (let idx = 0; idx < lab_arr.length; idx++) {
                resText += "FOR[" + idx + "] VALUE[" + lab_arr[idx] + "]\n";
            }
            resText += "\n";

            lab_arr.forEach((val, idx) => {
                resText += "FOREACH[" + idx + "] VALUE[" + val + "]\n";
            });
            resText += "\n";

            var idx = 0;
            lab_arr.map((val) => {
                resText += "MAP[" + idx + "] VALUE[" + val + "]\n";
                idx += 1;
            });
            break;

        case 6:
            // Step 6: Array Destructuring
            // Destructure the first two elements from your array into two separate variables.
            // Also, try using the rest parameter to capture the remaining elements of the array.

            // Hint:
            // You can use the syntax const [first, second, ...rest] = arrayName; to achieve this.

            // HANDLE IF lab_arr NOT FILLED YET
            if (lab_arr.length < 1) {
                lab_arr = fill_arr(fill_count);
            }

            const [val_1, val_2, ...rest] = lab_arr;

            resText += "val_1[" + val_1 + "]\n";
            resText += "val_2[" + val_2 + "]\n\n";

            resText += "rest[" + rest + "]";
            break;
    }


    // SET TEXT ON OUTPUT DIV & LOG
    output_div.innerText = resText;

    // LOG IT
    console.log(resText)
    console.log("");
    console.log("TASK ID[" + task_id + "] - FINISHED");
}

function fill_arr(fill_length) {

    let ret_arr = [];
    let rand_choice = Math.random();

    // FILL WITH 6 RANDOM TYPES
    for (f = 0; f < fill_length; f++) {
        if (rand_choice > 0.9) {
            // NUMBERS
            ret_arr.push(gen_rand_int_str());
        } else if (rand_choice > 0.7) {
            // STRINGS
            ret_arr.push(gen_rand_char_str());
        } else if (rand_choice > 0.5) {
            // BOOLS
            ret_arr.push(gen_rand_bool_str());
        }
        else {
            // MIXTURE
            if (Math.random() > 0.8) {
                ret_arr.push("BOOL[" + gen_rand_bool_str() + "]")
            } else if (Math.random() > 0.6) {
                ret_arr.push("INT[" + gen_rand_int_str() + "]");
            } else {
                ret_arr.push("STRING[" + gen_rand_char_str() + "]");
            }
        }
    }
    return ret_arr;
}


function gen_rand_int_str() {
    return Math.floor(Math.random() * 1000).toString()
}

function gen_rand_bool_str() {
    return Math.floor(Math.random() > 0.5).toString()
}


// FROM : https://www.slingacademy.com/article/ways-to-generate-random-strings-in-javascript/
const gen_rand_char_str = () => {
    return Math.floor(Math.random() * Date.now()).toString(36);
};

