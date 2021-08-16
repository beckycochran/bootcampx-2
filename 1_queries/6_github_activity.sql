-- Get all graduates without a linked Github account.
--     Get their name, email, and phone.

SELECT name, email, phone
FROM students
WHERE github is NULL
AND end_date IS NOT NULL;