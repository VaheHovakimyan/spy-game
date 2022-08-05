import data_arm_location from '../Words/Armenian_words/Arm_location.json';
import data_arm_funny_words from '../Words/Armenian_words/Arm_funny_words.json';

import data_rus_location from '../Words/Russian_words/Rus_location.json';

import data_eng_location from '../Words/English_words/Eng_location.json';

import { useEffect } from 'react';




export default function(participians,countSpy, done_array, setDone_array, time_value, cycle, setCycle) {

    let word_random_index = Math.ceil(Math.random() * data_arm_location.length) - 1;
    let start_array = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1];
    start_array.length = participians;
    let spy_ran1 = Math.floor(Math.random() * participians);
    let spy_ran2;
    let spy_ran3;
    let spy_ran4;
    let arr = [spy_ran1];
    let finish_array;
    let lrtes_text = <span>Լրտես</span>

    
    useEffect(() => {

        data_arm_location.map((item) => {

            if (item.key === word_random_index) {
                finish_array = start_array.map(() => {
                    return item.word;
                })
            }

        })


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
                if(it !== undefined){
                    finish_array[it] = lrtes_text;
                }
            })
        })

        // function AddSpy(){
        //     arr.map((it) => {
        //         if(it !== undefined){
        //             finish_array[it] = lrtes_text;
        //         }
        //     })
            
        // }

        console.log(`arr ${arr}`);
        console.log(finish_array);

        setDone_array(finish_array);
    
        
    },[participians,countSpy,cycle])


    return done_array;

}