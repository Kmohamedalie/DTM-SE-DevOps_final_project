# DTM_DevOps_final_project
DTM Software Engineering devOps project
The following project is aims to demonstrate the students' understanding about 
software engineering/DevOps principles. It was build by Leonardo Ghiani and Mohamed Alie Kamara.


## IDEA
The main idea is apply simple DevOps principles in the field of Data Science. Here we assume the role 
of a WebDeveloper/full-stack-engineer working with a team of Data Scientist/Analyst or Business Intelligence 
experts in a company and his role is to automate and publish the findings internally/ within a company or 
externally with other stackholders. As for this project we decided to use the free Covid health-data from 
the [WHO official website](https://covid19.who.int/) , and Tableau software for simple analysis and visualization. 
The section uses live update data from [our world in Data](https://ourworldindata.org/) an official website trusted 
by top research institution around the world such as Havard and Oxford. 
Similar demonstration of these principles can be seen also in Finance with realtime stock data websites such as
 [finance.yahoo.com](https://finance.yahoo.com/quote/%5EGSPC/chart?p=%5EGSPC#eyJpbnRlcnZhbCI6ImRheSIsInBlcmlvZGljaXR5IjoxLCJ0aW1lVW5pdCI6bnVsbCwiY2FuZGxlV2lkdGgiOjgsImZsaXBwZWQiOmZhbHNlLCJ2b2x1bWVVbmRlcmxheSI6dHJ1ZSwiYWRqIjp0cnVlLCJjcm9zc2hhaXIiOnRydWUsImNoYXJ0VHlwZSI6ImxpbmUiLCJleHRlbmRlZCI6ZmFsc2UsIm1hcmtldFNlc3Npb25zIjp7fSwiYWdncmVnYXRpb25UeXBlIjoib2hsYyIsImNoYXJ0U2NhbGUiOiJsaW5lYXIiLCJzdHVkaWVzIjp7IuKAjHZvbCB1bmRy4oCMIjp7InR5cGUiOiJ2b2wgdW5kciIsImlucHV0cyI6eyJpZCI6IuKAjHZvbCB1bmRy4oCMIiwiZGlzcGxheSI6IuKAjHZvbCB1bmRy4oCMIn0sIm91dHB1dHMiOnsiVXAgVm9sdW1lIjoiIzAwYjA2MSIsIkRvd24gVm9sdW1lIjoiI2ZmMzMzYSJ9LCJwYW5lbCI6ImNoYXJ0IiwicGFyYW1ldGVycyI6eyJ3aWR0aEZhY3RvciI6MC40NSwiY2hhcnROYW1lIjoiY2hhcnQifX19LCJwYW5lbHMiOnsiY2hhcnQiOnsicGVyY2VudCI6MSwiZGlzcGxheSI6Il5HU1BDIiwiY2hhcnROYW1lIjoiY2hhcnQiLCJpbmRleCI6MCwieUF4aXMiOnsibmFtZSI6ImNoYXJ0IiwicG9zaXRpb24iOm51bGx9LCJ5YXhpc0xIUyI6W10sInlheGlzUkhTIjpbImNoYXJ0Iiwi4oCMdm9sIHVuZHLigIwiXX19LCJzZXRTcGFuIjp7fSwibGluZVdpZHRoIjoyLCJzdHJpcGVkQmFja2dyb3VuZCI6dHJ1ZSwiZXZlbnRzIjp0cnVlLCJjb2xvciI6IiMwMDgxZjIiLCJzdHJpcGVkQmFja2dyb3VkIjp0cnVlLCJldmVudE1hcCI6eyJjb3Jwb3JhdGUiOnsiZGl2cyI6dHJ1ZSwic3BsaXRzIjp0cnVlfSwic2lnRGV2Ijp7fX0sInN5bWJvbHMiOlt7InN5bWJvbCI6Il5HU1BDIiwic3ltYm9sT2JqZWN0Ijp7InN5bWJvbCI6Il5HU1BDIiwicXVvdGVUeXBlIjoiSU5ERVgiLCJleGNoYW5nZVRpbWVab25lIjoiQW1lcmljYS9OZXdfWW9yayJ9LCJwZXJpb2RpY2l0eSI6MSwiaW50ZXJ2YWwiOiJkYXkiLCJ0aW1lVW5pdCI6bnVsbCwic2V0U3BhbiI6e319XX0-), [nasdaq.com](https://www.nasdaq.com/market-activity/stocks/tsla/real-time), [wsj.com](https://www.wsj.com/market-data).
 

## Repository organisation - Branches/TeamWork
  - Branches
       * Main
       * DeveloperMode
       * LeoGhiani-patch-1


  - TeamWork
     

## CI/CD PipeLine

- Code
<!-- *
# This is a basic workflow to help you Validate your html codes in all branches
name: CI

# Controls when the workflow will run
on:
  # Triggers the workflow on push or pull request events but only for the "master" branch
  push:
    branches: [ "*" ]
  pull_request:
    branches: [ "*" ]

  # Allows you to run this workflow manually from the Actions tab
  workflow_dispatch:

# A workflow run is made up of one or more jobs that can run sequentially or in parallel
jobs:
  # This workflow contains a single job called "build"
  build:
    # The type of runner that the job will run on
    runs-on: ubuntu-latest

    # Steps represent a sequence of tasks that will be executed as part of the job
    steps:
      # Checks-out your repository under $GITHUB_WORKSPACE, so your job can access it
      - uses: actions/checkout@v3

      # Runs a single command using the runners shell
      - name: Run a one-line script
        run: echo Hello, world!

      # Runs a set of commands using the runners shell
      - name: Run a multi-line script
        run: |
          echo Add other actions to build,
          echo test, and deploy your project.
          
      - name: HTML5 Validator
      # You may pin to the exact commit or the version.
        uses: Cyb3r-Jak3/html5validator-action@9b2d5145278274ecc8b7577f18f7d0f4482d2624
      #  uses: Cyb3r-Jak3/html5validator-action@v7.1.1
        with:
          # Path of the files to test
          root: ./
 
* --/>
