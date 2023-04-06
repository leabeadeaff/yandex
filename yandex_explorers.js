/*

A. Исследователи
Ограничение времени 	1 секунда
Ограничение памяти 	64Mb
Ввод 	стандартный ввод или input.txt
Вывод 	стандартный вывод или output.txt
Дан список, в которой хранятся исследователи и топонимы (имена мест) где они бывали. Список имеет следующий формат:
[  
  [<explorer1>, <toponym1>, <toponym2>, ...],  
  [<explorer2>, <toponym2>, <toponym3>, ...],  
  [<explorer3>, <toponym4>, <toponym1>, ...],  
  ...  
]

Надо развернуть этот список, таким образом, чтобы на первом месте оказался топоним, а на остальных исследователи.

Формат ввода
[  
    ["Mallory", "Everest", "Mont Blanc", "Pillar Rock"],  
    ["Mawson", "South Pole", "New Hebrides"],  
    ["Hillary", "Everest", "South Pole"]  
]

Формат вывода
[  
    ["Everest", "Hillary", "Mallory"],  
    ["South Pole", "Hillary", "Mawson"],  
    ["Mont Blanc", "Mallory"],  
    ["Pillar Rock", "Mallory"],  
    ["New Hebrides", "Mawson"]  
]

*/

module.exports = function (explorers) {

    let places = {};
    let result = [];
    for (let explorer of explorers) {
        for (let i = 1; i < explorer.length; i++) {
            if (places[explorer[i]] === undefined) {
                places[explorer[i]] = '';
            }

            places[explorer[i]] += `${explorer[0]} `;
        }

    }

    for (let place in places) {

        result.push([place, places[place].trimEnd().split(' ').sort()].flat())

    }

    return result;

};
