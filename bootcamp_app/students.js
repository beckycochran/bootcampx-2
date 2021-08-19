const { Pool } = require('pg');
const args = argv.process.slice(2);

const pool = new Pool({
  user: 'vagrant',
  password: '123',
  host: 'localhost',
  database: 'bootcampx'
});
 
// const cohortsName = process.argv[2];
// const limit process.argv[3] || 5;
// const values [%${cohortName}, limit]

pool.query(`
SELECT students.id as student_id, students.name as name, cohorts.name as cohort
FROM students
WHERE cohorts.name LIKE '%${process.argv[2]}%'
LIMIT ${process.argv[3] || 5};
`)
.then(res => {
  res.rows.forEach(user => {
    console.log(`${user.name} has an id of ${user.student_id} and was in the ${user.cohort} cohort`);
  })
}).catch(err => console.error('query error', err.stack));