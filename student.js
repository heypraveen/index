// Sample student data
const students = [
    {
      name: "John",
      chemistryMarks: 80,
      biologyMarks: 90,
      dob: "15-02-2000"
    },
    {
      name: "Sarah",
      chemistryMarks: 70,
      biologyMarks: 80,
      dob: "10-03-2001"
    },
    // Add more student objects here...
  ];
  
  // Custom sort function based on the given rules
  const sortStudents = (a, b) => {
    if (a.chemistryMarks + a.biologyMarks > b.chemistryMarks + b.biologyMarks) {
      return -1; // a should come before b
    } else if (a.chemistryMarks + a.biologyMarks < b.chemistryMarks + b.biologyMarks) {
      return 1; // a should come after b
    } else {
      if (a.biologyMarks > b.biologyMarks) {
        return -1; // a should come before b
      } else if (a.biologyMarks < b.biologyMarks) {
        return 1; // a should come after b
      } else {
        return 0; // no priority, any order is acceptable
      }
    }
  };
  
  // Sorting the array of student objects
  const sortedStudents = students.sort(sortStudents);
  
  // Printing the sorted array
  console.log(sortedStudents);
  