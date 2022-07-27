import { useEffect } from 'react';
import data from '../Spy_game.json';



export default function(participians,countSpy, done_array, setDone_array) {

    let word_random_index = Math.ceil(Math.random() * data.length) - 1;
    let start_array = [1,1,1,1,1,1,1,1,1,1];
    start_array.length = participians;
    let spy_ran1 = Math.floor(Math.random() * participians);
    let spy_ran2;
    let spy_ran3;
    let spy_ran4;
    let arr = [spy_ran1];
    let finish_array;
    let lrtes_text = <span>Լրտես</span>


    useEffect(() => {

        data.map((item) => {

            if (item.key === word_random_index) {
                finish_array = start_array.map(() => {
                    return item.word;
                })
            }

        })


        if (participians >= 4 && countSpy == 2) {
            spy_ran1 = Math.floor(Math.random() * participians);
            spy_ran2 = Math.floor(Math.random() * participians);
            arr = [spy_ran1,spy_ran2];
            if (spy_ran1 === spy_ran2) {
                New_Rannumbers();
            }
        } else if (participians >= 5 && countSpy == 3) {
            spy_ran1 = Math.floor(Math.random() * participians);
            spy_ran2 = Math.floor(Math.random() * participians);
            spy_ran3 = Math.floor(Math.random() * participians);
            arr = [spy_ran1,spy_ran2,spy_ran3];
            if (spy_ran1 === spy_ran2 || spy_ran1 === spy_ran3 || spy_ran2 === spy_ran3) {
                New_Rannumbers();
            }
        } else if (participians >= 6 && countSpy == 4) {
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
            } else if (spy_ran1 === spy_ran2 || spy_ran1 === spy_ran3 || spy_ran1 === spy_ran4 || spy_ran2 === spy_ran3 || spy_ran2 === spy_ran4 || spy_ran3 === spy_ran4) {
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
            if (countSpy === 1) {
                finish_array[spy_ran1] = lrtes_text;
            } else if (countSpy === 2) {
                finish_array[spy_ran1] = lrtes_text;
                finish_array[spy_ran2] = lrtes_text;
            } else if (countSpy === 3) {
                finish_array[spy_ran1] = lrtes_text;
                finish_array[spy_ran2] = lrtes_text;
                finish_array[spy_ran3] = lrtes_text;
            } else {
                finish_array[spy_ran1] = lrtes_text;
                finish_array[spy_ran2] = lrtes_text;
                finish_array[spy_ran3] = lrtes_text;
                finish_array[spy_ran4] = lrtes_text;
            }
        })



        console.log(finish_array);

        setDone_array(finish_array);
    
        
    },[participians,countSpy])


    return done_array;

}