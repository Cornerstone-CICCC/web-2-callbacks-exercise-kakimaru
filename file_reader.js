const fs = require("fs");

fs.readFile("./firstname.txt", "utf-8", (err, data1) => {
  if (err) {
    console.error(err);
    return;
  }
  fs.readFile("./lastname.txt", "utf-8", (err, data2) => {
    if (err) {
      console.error(err);
      return;
    }
    fs.readFile("./age.txt", "utf-8", (err, data3) => {
      if (err) {
        console.error(err);
        return;
      }
      fs.readFile("./hobbies.txt", "utf-8", (err, data4) => {
        if (err) {
          console.error(err);
          return;
        }
        const fullName = `${data1} ${data2}`;
        const age = `${data3}`;
        const hobbies = JSON.parse(data4); // [ 'swimming', 'dancing', 'reading' ]
        // console.log(hobbies);

        let hobbiesText = "";

        if(hobbies.length === 1) {
          hobbiesText = hobbies[0];
        } else if (hobbies.length >= 2) {
          hobbiesText = hobbies.join(' and ');
        }

        // console.log(hobbiesText); // swimming and dancing and reading
        console.log(
          `${fullName} is ${age} years old and his hobbies are ${hobbiesText}.`
        );
      });
    });
  });
});
