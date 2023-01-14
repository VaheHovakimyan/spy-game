import data_arm_animal from '../Words/ArmenianWords/ArmAnimal.json';
import data_arm_famous_person from '../Words/ArmenianWords/ArmFamousPerson.json';
import data_arm_fruits_veg from '../Words/ArmenianWords/ArmFruitsVeg.json';
import data_arm_sport from '../Words/ArmenianWords/ArmSport.json';
import data_arm_location from '../Words/ArmenianWords/ArmLocation.json';
import data_arm_profession from '../Words/ArmenianWords/ArmProfession.json';

import data_rus_animal from '../Words/RussianWords/RusAnimal.json';
import data_rus_famous_person from '../Words/RussianWords/RusFamousPerson.json';
import data_rus_fruits_veg from '../Words/RussianWords/RusFruitsVeg.json';
import data_rus_sport from '../Words/RussianWords/RusSport.json';
import data_rus_location from '../Words/RussianWords/RusLocation.json';
import data_rus_profession from '../Words/RussianWords/RusProfession.json';

import data_eng_animal from '../Words/EnglishWords/EngAnimal.json';
import data_eng_famous_person from '../Words/EnglishWords/EngFamousPerson.json';
import data_eng_fruits_veg from '../Words/EnglishWords/EngFruitsVeg.json';
import data_eng_sport from '../Words/EnglishWords/EngSport.json';
import data_eng_location from '../Words/EnglishWords/EngLocation.json';
import data_eng_profession from '../Words/EnglishWords/EngProfession.json';

import { useEffect } from 'react';



export default function (participians, countSpy, done_array, setDone_array, cycle, lang, categories) {


    let word_array = Array(participians);
    let spy_ran = Math.floor(Math.random() * participians);
    let ran_num;
    let ran_array = [spy_ran];
    ran_array.length = countSpy;

    let lrtes_text =  lang === 0 ? "Դուք լրտես եք" :
            lang === 1 ? "Вы шпион" :
                "You are a spy"


let data;


useEffect(() => {

    // Select language

    switch (lang) {
        case 0:
            switch (categories) {
                case 0:
                    data = data_arm_location;
                    break;
                case 1:
                    data = data_arm_sport;
                    break;
                case 2:
                    data = data_arm_animal;
                    break;
                case 3:
                    data = data_arm_fruits_veg;
                    break;
                case 4:
                    data = data_arm_profession;
                    break;
                default:
                    data = data_arm_famous_person;
                    break;
            }
            break;
        case 1:
            switch (categories) {
                case 0:
                    data = data_rus_location;
                    break;
                case 1:
                    data = data_rus_sport;
                    break;
                case 2:
                    data = data_rus_animal;
                    break;
                case 3:
                    data = data_rus_fruits_veg;
                    break;
                case 4:
                    data = data_rus_profession;
                    break;
                default:
                    data = data_rus_famous_person;
                    break;
            }
            break;
        default:
            switch (categories) {
                case 0:
                    data = data_eng_location;
                    break;
                case 1:
                    data = data_eng_sport;
                    break;
                case 2:
                    data = data_eng_animal;
                    break;
                case 3:
                    data = data_eng_fruits_veg;
                    break;
                case 4:
                    data = data_eng_profession;
                    break;
                default:
                    data = data_eng_famous_person;
                    break;
            }
            break;
    }


    // Generating random index for select word

    let word_random_index = Math.ceil(Math.random() * data.length) - 1;

    data.map((item) => {

        if (item.key === word_random_index) {
            word_array.fill(item.word);
        }

    })


    // Creating array with unique numbers

    let bool;

    for (let i = 0; i < ran_array.length; i++) {
        do {

            ran_num = Math.floor(Math.random() * participians);
            bool = true;

            for (let j = 0; j < i; j++) {
                if (ran_array[j] === ran_num) {
                    bool = false;
                }
            }

        } while (!bool);

        ran_array[i] = ran_num;
    }


    // Adding "You are spy" word(s) in array

    word_array.forEach(() => {
        ran_array.map((it) => {
            if (it !== undefined) {
                word_array[it] = lrtes_text;
            }
        })
    })


    localStorage.setItem("word_array", JSON.stringify(word_array));

    setDone_array(word_array);

}, [participians, countSpy, cycle, lang, categories])


return done_array;

}