npm init will just create a package.json file which will show like the index of the file 

first step is to create a server where you will listen means you need to listen to the upcomoing request 

to create server we will use the express js point ...this application will run and will help to listen the incoming request 

package.lock.json and node modules are the 

node modules are the place where when i downloaded express all the code of express js or some other package will come in this node modules folder ...ecpress also has some other dependent library so all the other npm libraries on which express dependent so that libraries will also be put in node modules 

package.lock.json 

version of a package 4.19.2 means major update minor version and patch (kitne changes ) express started froom 1.0.0 and go to 4.19.2  bug fix comes under patching.... not a major version change the previous code will also be working without any break in code 4.19.2 => 4.20.3 work karega (backward compatablile rahega ) but eventually 4.19.3 => 5.x.x so nhi rahega  
^ :- carot our project will automatically update if there is a new update // it will allow to auto update to 4.x.x major varsion pe shift nhi karega 
^4.19.2 in package json is not logged agar minor change aaya to fir woh auto update karega but package json me change mhi hoga so to know the exact version of our project it will be in the package lock json will tell you the exact version 
~ :- 
if i dont use 

~: Allows updates within the same minor version.
^: Allows updates within the same major version.




create a repository and push the code 