# Matter Supply Code Challenge
Aryeh Kempler-DeLugach, 9/3/2021

## Environment 
The following environment variables will need to be included to run the app
| Env Var | Description | 
| ----------- | ----------- | 
| GIST_ACCESS_TOKEN | Github access token used for Auth |

## Running Locally 
From the root directory

install dependencies (runs for both client and server): 
```
npm run install
```

start the app (runs for both client and server): 
```
npm run start
```

The React app will start at `http://localhost:3000/`

## Running Tests
run tests (runs for only client): 
```
npm run test
```

## Architecture
The Matter Supply Code Challenge architecture is comprised of two applications. The first is a React app (scaffolded using CRA) that included the front end features of the blog. The second application is a small express server that, when called by the front end, makes requests to the Github API using the Nodejs Octokit Github SDK. 

## Questions 

- What are your thoughts around continuous integration, where & how you would deploy this application?

I think any application needs CI/CD. I add this to every project, even personal projects, because humans have the tendency to push code without running tests locally. A pipeline would catch any failing tests before code gets merged into the database. I normally use cloudbuild for pipelines and set up at least two pipelines for each environment. The first are merge checks that run when a PR is created. The second is a deploy pipeline that automatically deploys all parts of the app. Both pipelines should run all tests. 

- What do you think you would do differently if you had 2 weeks to complete this assignment and no requirement to use Github. What would your backend solution look like?

I would have spent more time adding meaningful e2e testing. I would have added CI/CD for merge checks and deployment. I would have used a database to store the blog posts. I would use a NoSQL database like firestore, but thats personal preference. 

- How and where do you feel like this application should be deployed to?

I would deploy the front end to Firebase Hosting. The backend could be run in a container as a cloud run app although with the low traffic nature of this app, the functionality could be achieved lower overhead if cloud functions were used instead.  

- Are you happy with your own solutions? If yes, which parts do you think are really well done, if not, what would you want to change?

I am happy with my solution. I am happy that I was able to make the design of the blog clean and simple. I am happy with the basic ability to search for and create new posts. I am happy with the structure of the code. The components, pages, hooks, interfaces and utils are organized and should be easy to read.  

I left some features mentioned in the prompt out of my final submission to ensure that I delivered a set of working features. 

## Missing Features:

> Sign in / authentication

> Ability to edit posts

> Ability to display .md files (displayed as plaintext)
