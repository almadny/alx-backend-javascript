import Building from './5-building.js';

const b = new Building(100);
console.log(b);

class TestBuilding extends Building {
  evacuationWarningMessage(){}
}

try {
    const c = new TestBuilding(200)
    console.log(c);
}
catch(err) {
    console.log(err);
}
