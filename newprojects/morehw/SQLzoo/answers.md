---- 0 SELECT basics -----
1. SELECT population FROM world
  WHERE name = 'Germany'

2. SELECT name, population FROM world
  WHERE name IN ('Sweden', 'Norway', 'Denmark');

3. SELECT name, area FROM world
  WHERE area BETWEEN 200000 AND 250000

---- 1 SELECT name -----
1. SELECT name FROM world
  WHERE name LIKE 'Y%'

2. SELECT name FROM world
  WHERE name LIKE '%Y'

3. SELECT name FROM world
  WHERE name LIKE '%X%'

4. SELECT name FROM world
  WHERE name LIKE '%land'

5. SELECT name FROM world
  WHERE name LIKE 'C%ia'

6. SELECT name FROM world
  WHERE name LIKE '%oo%'

7. SELECT name FROM world
  WHERE name LIKE '%a%a%a%'

8. SELECT name FROM world
 WHERE name LIKE '_t%'
ORDER BY name

9. SELECT name FROM world
 WHERE name LIKE '%o__o%'

10. SELECT name FROM world
 WHERE name LIKE '____'


---- 2 SELECT from World -----
1. SELECT name, continent, population FROM world

2. SELECT name FROM world
WHERE population > 200000000

3. 

4. SELECT name, population FROM world
WHERE continent = 'South America'

5. SELECT name, population FROM world
 WHERE name IN ('France', 'Germany', 'Italy');

 6. SELECT name FROM world
  WHERE name LIKE 'United %'

7. SELECT name, area, population FROM world
  WHERE area BETWEEN 3000000 AND 25000000

8.

10.  SELECT name, LEN(name), continent, LEN(continent), capital, LEN(capital)
  FROM world
 WHERE name LIKE '%______'

 11. 

 

