
    // Create a new file named teachers.js.
    // Copy the database connection code from students.js.
    // Use the query from "BootcampX Queries 4" to get all teachers that made an assistance request during a cohort.
    // Accept the cohort name as input from the user.

// const cohortsName = process.argv[2];
// const limit process.argv[3] || 5;
// const values [%${cohortName}, limit]

pool.query(`
SELECT DISTINCT teachers.name as teacher, cohorts.name as cohort
FROM teachers
JOIN assistance_requests ON teacher_id = teachers.id
JOIN students ON student_id = students.id
JOIN cohorts ON cohort_id = cohorts.id
WHERE cohorts.name = '${process.argv[2] || 'JUL02'}'
ORDER BY teacher;
`)
.then(res => {
  res.rows.forEach(row => {
    console.log(`${row.cohort}: ${row.teacher}`);
  })
});