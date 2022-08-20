import data_arm_animal from '../Words/Armenian_words/Arm_animal.json';
import data_arm_famous_person from '../Words/Armenian_words/Arm_famous_person.json';
import data_arm_fruits_veg from '../Words/Armenian_words/Arm_fruits_veg.json';
import data_arm_sport from '../Words/Armenian_words/Arm_sport.json';
import data_arm_location from '../Words/Armenian_words/Arm_location.json';
import data_arm_profession from '../Words/Armenian_words/Arm_profession.json';

import data_rus_animal from '../Words/Russian_words/Rus_animal.json';
import data_rus_famous_person from '../Words/Russian_words/Rus_famous_person.json';
import data_rus_fruits_veg from '../Words/Russian_words/Rus_fruits_veg.json';
import data_rus_sport from '../Words/Russian_words/Rus_sport.json';
import data_rus_location from '../Words/Russian_words/Rus_location.json';
import data_rus_profession from '../Words/Russian_words/Rus_profession.json';

import data_eng_animal from '../Words/English_words/Eng_animal.json';
import data_eng_famous_person from '../Words/English_words/Eng_famous_person.json';
import data_eng_fruits_veg from '../Words/English_words/Eng_fruits_veg.json';
import data_eng_sport from '../Words/English_words/Eng_sport.json';
import data_eng_location from '../Words/English_words/Eng_location.json';
import data_eng_profession from '../Words/English_words/Eng_profession.json';

import { useEffect } from 'react';




export default function (participians,countSpy,done_array,setDone_array,cycle,lang,categories) {


    let start_array = [1,1,1,1,1,1,1,1,1,1,
                       1,1,1,1,1,1,1,1,1,1];
    start_array.length = participians;
    let spy_ran1 = Math.floor(Math.random() * participians);
    let spy_ran2;
    let spy_ran3;
    let spy_ran4;
    let arr = [spy_ran1];
    let finish_array;
    let lrtes_text = <span>{lang === 0 ? <span className='spy_text'>Դուք լրտես եք</span> : lang === 1 ? <span className='spy_text'>Вы шпион</span> : <span className='spy_text'>You are a spy</span> } </span>
    let data;




    useEffect(() => {


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
                console.log("Hesa Hayerena");
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
                console.log("Hesa Ruserena");
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
                console.log("Hesa Anglerena");
                break;
        }


        let word_random_index = Math.ceil(Math.random() * data.length) - 1;

        data.map((item) => {

            if (item.key === word_random_index) {
                finish_array = start_array.map(() => {
                    return item.word;
                })
            }

        })

        // function Spy_random_index_generator(){

        // }


        if (participians >= 4 && countSpy === 2) {
            spy_ran1 = Math.floor(Math.random() * participians);
            spy_ran2 = Math.floor(Math.random() * participians);
            arr = [spy_ran1,spy_ran2];
            if (spy_ran1 === spy_ran2) {
                New_Rannumbers();
            }
        } else if (participians >= 5 && countSpy === 3) {
            spy_ran1 = Math.floor(Math.random() * participians);
            spy_ran2 = Math.floor(Math.random() * participians);
            spy_ran3 = Math.floor(Math.random() * participians);
            arr = [spy_ran1,spy_ran2,spy_ran3];
            if (spy_ran1 === spy_ran2 || spy_ran1 === spy_ran3 || spy_ran2 === spy_ran3) {
                New_Rannumbers();
            }
        } else if (participians >= 6 && countSpy === 4) {
            spy_ran1 = Math.floor(Math.random() * participians);
            spy_ran2 = Math.floor(Math.random() * participians);
            spy_ran3 = Math.floor(Math.random() * participians);
            spy_ran4 = Math.floor(Math.random() * participians);
            arr = [spy_ran1,spy_ran2,spy_ran3,spy_ran4];
            if (spy_ran1 === spy_ran2 || spy_ran1 === spy_ran3 || spy_ran1 === spy_ran4 || spy_ran2 === spy_ran3 || spy_ran2 === spy_ran4 || spy_ran3 === spy_ran4) {
                New_Rannumbers();
            }
        }


        function New_Rannumbers() {

            if (spy_ran1 === spy_ran2 && spy_ran3 === undefined && spy_ran4 === undefined) {
                spy_ran1 = Math.floor(Math.random() * participians);
                spy_ran2 = Math.floor(Math.random() * participians);
                arr = [spy_ran1,spy_ran2];

                New_Rannumbers();
            } else if ((spy_ran1 === spy_ran2 || spy_ran1 === spy_ran3 || spy_ran2 === spy_ran3) && (arr.length === 3 && spy_ran4 === undefined)) {
                spy_ran1 = Math.floor(Math.random() * participians);
                spy_ran2 = Math.floor(Math.random() * participians);
                spy_ran3 = Math.floor(Math.random() * participians);
                arr = [spy_ran1,spy_ran2,spy_ran3];

                New_Rannumbers();
            } else if (spy_ran1 === spy_ran2 || spy_ran1 === spy_ran3 || spy_ran1 === spy_ran4 || spy_ran2 === spy_ran3 || spy_ran2 === spy_ran4 || spy_ran3 === spy_ran4 && (arr.length === 4)) {
                spy_ran1 = Math.floor(Math.random() * participians);
                spy_ran2 = Math.floor(Math.random() * participians);
                spy_ran3 = Math.floor(Math.random() * participians);
                spy_ran4 = Math.floor(Math.random() * participians);
                arr = [spy_ran1,spy_ran2,spy_ran3,spy_ran4];

                New_Rannumbers();
            } else {
                return arr;
            }

        }


        finish_array.forEach(() => {
            arr.map((it) => {
                if (it !== undefined) {
                    finish_array[it] = lrtes_text;
                }
            })
        })


        console.log(`arr ${arr}`);
        console.log(finish_array);

        setDone_array(finish_array);


    },[participians,countSpy,cycle,lang,categories])


    return done_array;

}