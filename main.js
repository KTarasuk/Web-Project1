        const home = document.getElementById('home');
        const skills = document.getElementById('skills');


        function btnSkill(){
            home.style.display = 'none';
            skills.style.display = 'contents';
        }
        function btnHome(){
            home.style.display = 'contents';
            skills.style.display = 'none';
        }