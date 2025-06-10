const gradeDADAHarry = 90;
const gradeCOMCHarry = 81;
const gradeCharmsRon = 75;
const gradePotionsNeville = 50;
const gradeHerbologyPeter = 30;

function definePassGrade(name, subject, grade) {
  if (grade >= 90 && grade <= 100) {
    console.log(
      `Hello ${name}! Hats off to you, your grade for ${subject} is Outstanding (O)!`
    );
  } else if (grade >= 80 && grade < 90) {
    console.log(
      `Hello ${name}! Well done, your grade for ${subject} is Exceeding Expectation (E)!`
    );
  } else if (grade >= 75 && grade < 80) {
    console.log(
      `Hello ${name}! Congratulation, you passed ${subject} class with Acceptable (A) grade!`
    );
  } else if (grade >= 60 && grade < 75) {
    console.log(
      `Hello ${name}! Your grade for ${subject} is Poor (P)! Don't give up you're almost there!`
    );
  } else if (grade >= 50 && grade < 60) {
    console.log(
      `Hello ${name}! Your grade for ${subject} is Dreadful (D)! Try harder next time!`
    );
  } else {
    console.log(
      `Hello ${name}! Your grade for ${subject} is Troll (T)! Pay more attention in class, please!`
    );
  }
}

definePassGrade("Harry Potter", "Defence Against the Dark Art", gradeDADAHarry);
definePassGrade("Harry Potter", "Care of Magical Creatures", gradeCOMCHarry);
definePassGrade("Ronald Weasley", "Charms", gradeCharmsRon);
definePassGrade("Neville Longbottom", "Potions", gradePotionsNeville);
definePassGrade("Peter Pettigrew", "Herbology", gradeHerbologyPeter);
