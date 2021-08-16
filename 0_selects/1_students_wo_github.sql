-- Your task is to get all students without a Github username.
-- select their id, name, email, and cohort_id
-- order by cohort_id


SELECT id, name, email, cohort_id
FROM students
WHERE github IS NULL
ORDER BY cohort_id
