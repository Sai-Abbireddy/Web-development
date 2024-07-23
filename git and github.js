//1



Task-1 


1.Open your terminal.

2.Navigate to your project FileSystemDirectoryEntry.
for example:
             cd path/to/your/project

3.Initialize a new Git repository



Task-2

1. Create the file.In your terminal,run:

2.Open the file in your preferred text editor and add a simple javascript function
  for example:
             //script.js
             function great(){
                console.log("Hello,World");
             }




Task-3

1.Add the file to the staging area.

2. comment the changes




//2





Task-1

1.Create the new branch.
        
           git branch feature-greeting


Task-2

1.Switch to the new branch.
               
             git checkout feature-greeting


Task-3

1.Open 'script.js' in your preferred text editor and add the new function.For example
              

          //Script.js
        function greet(){
            console.log("Hello, World");
        }

        function personalizedGreet(name){
            console.log('Hello, ${name}!');
        }



Task-4


1.Add the changes to the staging area.
         
          git add Script.js

2.Comment the changes.
           
          git commit -m "Add personalizedGreet function to script.js"




Task-5



1.Switch back to the main branch.

         git checkout main


2.Merge the feature branch into the main branch.

         git merge feature-greeting



Task-6


1.Ensure you are on the main branch.(This step is actually redundant since we switched to main in the previous step,but for clarity and confirmation)

          git checkout main







//3




Task-1

1.Log in to github and go to your profile.

2.Click the "New" button to create a new repository.

3.Fill in the repository details,such as:
        
        . Repository name:e.g.,'My javascript project'
        .Description:e.g.,'A simple javascript project'
        .choose "public" or "private"




Task -2


1.Add the remote repository URL to your local repository.Replace '<your-username>'
  and '<repository-name>' with your github username and the repository name,respectively.
       git remote add origin https://github.com/<your-username>/<repository-name>.git


2.Push your local repository to github.
       git push -u origin main



Task-3



1.Go to your repository on github.

2.Click on the "Settings" toolbar.

3.In the left sidebar, click on "Manage access".

4.Click on the "Invite a collaborator" button.

5.Enter your team members github username and click "Add <username> to this repository".




Task-4



1.Your team member should clone the repository.

     git clone https://github.com/<your-username>/<repository-name>.git


2.Navigate to the project directory.

     cd <repository-name>

3.Make a change in 'script.js'.For example,they could add a new function:

        function farewell(){
            console.log("Goodbye,World!");
        }


4.Add the commit the change.

       git add script.js
       git commit -m "Add farewel function"


5.Push the changes to github
      git push origin main



Task-5

1.Fetch the changes from the remote repository.

      git fetch origin


2.Merge the changes into your local branch.
  
      git merge origin/main






//4





Task-1

1.Create the new branch.

         git branch feature-update


Task-2


1.Switch to the new branch.

         git checkout feature-update


2.Make changes to script.js. For example, you could modify the greet function:


function greet() {
    console.log("Hello, Universe!");
}

function personalizedGreet(name) {
    console.log(`Hello, ${name}!`);
}

function farewell() {
    console.log("Goodbye, World!");
}


Task-3


1.Add the changes to the staging area.

         git add script.js

2.Commit the changes.

        git commit -m "Update greet function in script.js"




Task-4

1.Switch back to the main branch.
          git checkout main


2.Make different changes to script.js. For example, you could modify the personalizedGreet function:


Copy code
function greet() {
    console.log("Hello, World!");
}

function personalizedGreet(name) {
    console.log(`Hi, ${name}! How are you?`);
}

function farewell() {
    console.log("Goodbye, World!");
}



Task-5


1.Add the changes to the staging area.

         git add script.js



2.Commit the changes.

        git commit -m "Update personalizedGreet function in script.js"




Task-6


1.Attempt to merge the feature branch into the main branch.

        git merge feature-update





Task-7



1.Open script.js in your text editor. You will see conflict markers like this:


<<<<<< HEAD
function personalizedGreet(name) {
    console.log(`Hi, ${name}! How are you?`);
}
=======
function greet() {
    console.log("Hello, Universe!");
}

function personalizedGreet(name) {
    console.log(`Hello, ${name}!`);
}
>>>>>>> feature-update




2.Resolve the conflict by editing the file to the desired state. For example:


function greet() {
    console.log("Hello, Universe!");
}

function personalizedGreet(name) {
    console.log(`Hi, ${name}! How are you?`);
}

function farewell() {
    console.log("Goodbye, World!");
}




3.Add the resolved file to the staging area.


        git add script.js



4.Complete the merge with a commit.


        git commit -m "Resolve merge conflict between main and feature-update"








        //5




        Step 1: Create a New File Named 'obsolete.js'


       1. Create the file. In your terminal, run:
        
           touch obsolete.js

       2' Add some content to obsolete.js. Open the file in your text editor and add something simple, like:
        
            // obsolete.js
            console.log("This file is obsolete.");    





            Step 2: Add and Commit the File to the Repository


            1.Add the file to the staging area.
            
                   git add obsolete.js


            2.Commit the file.
            
                   git commit -m "Add obsolete.js"






                   Step 3: Realize that obsolete.js is Unnecessary and Should Be Removed


                   1. Remove the file from the repository.

                         git rm obsolete.js


                   2.Commit the removal.
            
                         git commit -m "Remove obsolete.js"








                         Step 4: Undo the Last Commit Where obsolete.js was Added


                         1. Undo the last commit while keeping the changes in the working directory.
                
                              git reset --soft HEAD~1



                        2. Remove obsolete.js again if necessary (since it might still be in your working directory).
                         
                             rm obsolete.js



                        3.Stage the removal (if needed).

                            git add obsolete.js



                        4.Commit the removal (this step might not be needed if you have already committed the removal before undoing the commit).
                        
                            git commit -m "Undo the commit that added obsolete.js"