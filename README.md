# DTM_DevOps_final_project
DTM Software Engineering DevOps project
The following project aims to demonstrate the students' understanding about 
the software engineering course (focusing on DevOps principles).
This is built by the DTM students Leonardo Ghiani and Mohamed Alie Kamara.


## IDEA
The main idea is to apply simple DevOps principles in the Data Science field. Here we assume the role 
of a WebDeveloper/full-stack-engineer working with a team of Data Scientist/Analyst or Business Intelligence 
experts in a company where his role is to automate and publish the findings internally/ within a company or 
externally with other stakeholders. For this project we decided to use the free Covid health-data from 
the [WHO official website](https://covid19.who.int/) , and the Tableau software for simple analysis and data visualization. 
The section uses live update data from [our world in Data](https://ourworldindata.org/), an official website trusted 
by top research institutions around the world such as Havard and Oxford. 
Similar demonstration of these principles can be seen also in Finance with realtime stock data websites such as
 [finance.yahoo.com](https://finance.yahoo.com/quote/%5EGSPC/chart?p=%5EGSPC#eyJpbnRlcnZhbCI6ImRheSIsInBlcmlvZGljaXR5IjoxLCJ0aW1lVW5pdCI6bnVsbCwiY2FuZGxlV2lkdGgiOjgsImZsaXBwZWQiOmZhbHNlLCJ2b2x1bWVVbmRlcmxheSI6dHJ1ZSwiYWRqIjp0cnVlLCJjcm9zc2hhaXIiOnRydWUsImNoYXJ0VHlwZSI6ImxpbmUiLCJleHRlbmRlZCI6ZmFsc2UsIm1hcmtldFNlc3Npb25zIjp7fSwiYWdncmVnYXRpb25UeXBlIjoib2hsYyIsImNoYXJ0U2NhbGUiOiJsaW5lYXIiLCJzdHVkaWVzIjp7IuKAjHZvbCB1bmRy4oCMIjp7InR5cGUiOiJ2b2wgdW5kciIsImlucHV0cyI6eyJpZCI6IuKAjHZvbCB1bmRy4oCMIiwiZGlzcGxheSI6IuKAjHZvbCB1bmRy4oCMIn0sIm91dHB1dHMiOnsiVXAgVm9sdW1lIjoiIzAwYjA2MSIsIkRvd24gVm9sdW1lIjoiI2ZmMzMzYSJ9LCJwYW5lbCI6ImNoYXJ0IiwicGFyYW1ldGVycyI6eyJ3aWR0aEZhY3RvciI6MC40NSwiY2hhcnROYW1lIjoiY2hhcnQifX19LCJwYW5lbHMiOnsiY2hhcnQiOnsicGVyY2VudCI6MSwiZGlzcGxheSI6Il5HU1BDIiwiY2hhcnROYW1lIjoiY2hhcnQiLCJpbmRleCI6MCwieUF4aXMiOnsibmFtZSI6ImNoYXJ0IiwicG9zaXRpb24iOm51bGx9LCJ5YXhpc0xIUyI6W10sInlheGlzUkhTIjpbImNoYXJ0Iiwi4oCMdm9sIHVuZHLigIwiXX19LCJzZXRTcGFuIjp7fSwibGluZVdpZHRoIjoyLCJzdHJpcGVkQmFja2dyb3VuZCI6dHJ1ZSwiZXZlbnRzIjp0cnVlLCJjb2xvciI6IiMwMDgxZjIiLCJzdHJpcGVkQmFja2dyb3VkIjp0cnVlLCJldmVudE1hcCI6eyJjb3Jwb3JhdGUiOnsiZGl2cyI6dHJ1ZSwic3BsaXRzIjp0cnVlfSwic2lnRGV2Ijp7fX0sInN5bWJvbHMiOlt7InN5bWJvbCI6Il5HU1BDIiwic3ltYm9sT2JqZWN0Ijp7InN5bWJvbCI6Il5HU1BDIiwicXVvdGVUeXBlIjoiSU5ERVgiLCJleGNoYW5nZVRpbWVab25lIjoiQW1lcmljYS9OZXdfWW9yayJ9LCJwZXJpb2RpY2l0eSI6MSwiaW50ZXJ2YWwiOiJkYXkiLCJ0aW1lVW5pdCI6bnVsbCwic2V0U3BhbiI6e319XX0-), [nasdaq.com](https://www.nasdaq.com/market-activity/stocks/tsla/real-time), [wsj.com](https://www.wsj.com/market-data).
 

## Repository organisation - Branches/TeamWork
  - Branches
       * Main
         The main is the default branch and where the page deployment is done.
       * DeveloperMode
         The developerMode branch is the second and where most of the test is done before
         final deployment of the main.
       * LeoGhiani-patch-1
         This patch provides the READ.me file

  - TeamWork
       * The project is realised by previously cited authors according to DevOps principles
       showed during Module 3 classes.

## CI/CD PipeLine

The yml code can be found [here](https://github.com/Kmohamedalie/DTM_DevOps_final_project/blob/main/.github/workflows/main.yml).
- Steps and detail description on how the code works
<ol type="i">
  <li>Workflow starts immediately when a push or pull_request is made.</li>
  <li>Utilises the actions/checkout@v3 for (CI/CD)</li>
  <li>The workflow then uses the <a href="https://github.com/marketplace/actions/html5-validator">HTML5 Validator</html> to check the codes for invalid HTML code.</li>
</ol>
