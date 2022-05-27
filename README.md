# react-native-template
Use this project as a base for any react-native projects. Keep existing project structure and follow example files logic and principles while extending it. 

## Install and run
```
yarn
yarn ios
yarn android
```
# Setup CI/CD for Android
[Android documentation here](https://github.com/remdev-studio/react-native-template/blob/main/docs/readme/android.md)

# Setup CI/CD for IOS
[IOS documentation here](https://github.com/remdev-studio/react-native-template/blob/main/docs/readme/ios.md)

# Husky setup

After installing dependencies run 
```
yarn husky install && echo 'PATH=$PATH:'$PATH >> .husky/_/husky.sh
```
# Project renaming

After installing dependencies run 
```
yarn rename <NewProjectName> <BundleIdForAndroid>
```
BundleIdForAndroid is custom Bundle Identifier like com.reactnativetemplate

After the script has finished running search in your IDE old project`s name and replace to new one manually. There are a few places where script cannot replace namings automatically