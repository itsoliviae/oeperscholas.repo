 1. List the names of all NFL teams'
 - select name from teams;

2. List the stadium name and head coach of all NFC teams
- select stadium, head_coach from teams;

3. List the head coaches of the AFC South
-  select teams.head_coach, teams.conference, teams.division from teams where conference like 'A%';

4. The total number of players in the NFL
select id from players;

-- "COMMIT: NFL - queried some NFL stuff"


5. The team names and head coaches of the NFC North and AFC East
- select teams.name, teams.head_coach from teams where conference = 'NFC' and division = 'North';
- select teams.name, teams.head_coach from teams where conference = 'AFC' and division = 'East';

6. The 50 players with the highest salaries
- select * from players order by salary desc limit 50; 

7. The average salary of all NFL players
- select avg(salary) from players;

8. The names and positions of players with a salary above 10_000_000
- select players.name, players.position from players where salary >= 10000000;

-- "COMMIT: NFL - wow there's a lot of nfl data"

