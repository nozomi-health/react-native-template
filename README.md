# react-native-template
Use this project as a base for any react-native projects. Keep existing project structure and follow example files logic and principles while extending it. For more info check [Notion page](https://www.notion.so/React-Native-project-initialisation-aea5ad3c29d1424b80f6df18de63b8dc)

## Install and run
```
yarn
yarn ios
yarn android
```
## Setup CI/CD for Android
[Android documentation here](https://www.notion.so/Android-CI-CD-Setup-f7d13a94be1f48e187739296b144ed3c)

## Setup CI/CD for IOS
[IOS documentation here](https://www.notion.so/IOS-CI-CD-Setup-9cd6f951ee89479d8f91d8f4ad9db253)

## CI/CD Slack integration
To enable slack notifications on automatic builds, please, follow the instructions in corresponding section of ./.github/workflows/(ios_build/android_build).yml file

## Husky setup

After installing dependencies run 
```
yarn husky install && echo 'PATH=$PATH:'$PATH >> .husky/_/husky.sh
```
## Project renaming

After installing dependencies run 
```
yarn rename <NewProjectName> <BundleIdForAndroid>
```
BundleIdForAndroid is custom Bundle Identifier like com.reactnativetemplate

After the script has finished running search in your IDE old project`s name and replace to new one manually. There are a few places where script cannot replace namings automatically. Red ones should be on lowercase and match your BundleIdForAndroid and yellow ones should match your NewProjectName

![](https://github.com/remdev-studio/react-native-template/blob/main/docs/images/rename.png?raw=true)
