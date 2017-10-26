# heykerb.com
Hey, it's a personal website.

# Reminders of github basics


## Making a branch and Pushing/Pulling From It.
Version control is tough. Working on different branches will ensure no one rewrites over someone elses code accidentally. Below are the **terminal commands for branching**.

**Create a branch:**
```
git checkout -b myUserName-featureName
```

When branching, focus on creating small portions of code. Once that code is up and running functionally, commit it. Commit messages detail what you changed/added to the code.

**Commit your changes:**
```
git commit -m "Fixed a stray semicolon - I am a god."
```

**Push your commit to origin:**
```
git push origin myUserName-featureName
```

Now you submit a **pull request**! You may also want to destroy your branch if you're done working on the feature you were implementing.

# To Dos
HIGH severity should be done asap. MEDIUM is something I should do. LOW is
## Main
- ~~make the image load faster~~
  - compressed image - could make it compress it more. Still some lag, but LOW seeverity
- **@media query**: change so CODE and ART are in columns not rows

## Dev Side
#### HIGH
- add work section
- check its browser-friendliness

#### MEDIUM
- seriously, make the image load faster
  - compressed it but it still takes forever to load. Moved severity down.
- double check media queries look good
- fix the weird p --> a (column --> row) bug that occurs.

#### LOW
- clean up css 
  - did round 1, but will need to recurse on it.

## Art Side
#### HIGH
- ~~add drawing section~~
  - added a drawing - flesh out with more.
- ~~add painting section~~
  - added a painting - flesh out with more.
- add music section
- **media queries**

#### MEDIUM
- add https://sorgalla.com/lity/ (lightbox for images)

#### LOW
- add an mp3 of singing/guitar/whatever
- **clean up the css**

## Misc
- .htaccess stuff
