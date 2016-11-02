# ne-sendgrid changelog

## Change Tags

Feature
- FN Feature New: Added a new feature

Bug
- BF Bug fix: Fixed a bug

Optimisation
- OO Optimisation: The internal workings of the module is improved 
- OR Refactor: The internal code is refactored

Change
- CI Input change: What is required as input for the module is changed
- CO Output change: What is output by the module is changed

Dependencies
- DN New Dependency: A new dependency is added to the package
- DR Remove Dependency: A  dependency is removed from the package
- DU Update Dependency: A dependency is updated in the package

## 1.1.0

Release date:

[DR] Removed what was left of the database save functions and updated the version number properly


## 1.0.6

Release date:

[DR] Removed the safe to database directly function. This is to be replaced with a api call to the part of the app that controls the database.


## 1.0.5

Release date: NOT released

[BF] /ne-data/nesendgrid.js
- Fixed the labels


## 1.0.4

Release date: 20151023

[BF]
Bug fix

Updated docs


## 1.0.3

Release date: 20151023

[BF]
Bug fix



## 1.0.2

Release date: 20151023

[BF]
Bug fix


## 1.0.1

Release date: 20151023

[BF]
Bug fix


## 1.0.0

Release date: 20151023

Initial

[CI]
process.env.SENDGRID_APIKEY is required

[DN]
Uses ne-data to store emails after they have been sent (optional)
