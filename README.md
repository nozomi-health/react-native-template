# react-native-template
Use this project as a base for any react-native projects. Keep existing project structure and follow example files logic and principles while extending it. 

## Install and run
```
yarn
yarn ios
yarn android
```
# Setup CI/CD for Android
1) In console run command: keytool -genkey -v -keystore my_app_keystore.keystore -alias app_sign_key -keyalg RSA -keysize 2048 -validity 10000

      my_app_keystore.keystore - name of keystore.

      app_sign_key - name of the key we will use to retrieve our secret key.

      10000 - key lifetime (about 27 years)

      Pass password(it should be the same for keystore and key) for keystore and for key and metadata

2) In Android Studio:

      In the menu Build -> Generate Signed Bundle / APK.

      Then Next -> Create New and pass passwords, keystore name and key name from previous step.
  
3) In github project repo: Settings->Secrets->Actions add Secret KEYSTORE_PASSWORD with password value for keystore and key


  More there https://habr.com/ru/company/tuturu/blog/530260/

# Setup CI/CD for IOS
1) TODO расписать как сгенерить provisioning profile либо просто прикрепить его к проекту если он будет один

2) In xcode open .xcworkspace

      Select project -> Singing & Capabilities -> Release
  
      Uncheck Automatically manage singing
  
      Select downloaded Provisioning Profile
  
3) Add following secrets in github repository:

      IOS_MOBILE_PROVISION_BASE64: run in console "openssl base64 < MY_Profile.mobileprovision | tr -d '\n' | tee my-profile.base64.txt" where MY_Profile.mobileprovision - name of downloaded provisioning profile. Copy text of txt file and pass int as value of secret.
  
      IOS_P12_BASE64: TODO описать генерацию .p12 файла. Then run command "openssl base64 < cert.p12 | tr -d '\n' | tee cert.base64.txt" Copy text of txt file and pass int as value of secret.
  
      IOS_TEAM_ID: id of team https://developer.apple.com/account/#!/membership/
  
      IOS_CERTIFICATE_PASSWORD: TODO описать как пароль задаем для сертефиката
  
      APPSTORE_ISSUER_ID:  Users and Access -> API Keys
  
      APPSTORE_API_KEY_ID: Key ID for AppStore Connect API
  
      APPSTORE_API_PRIVATE_KEY: Private key for AppStore Connect API, file like AuthKey_xxxxxx.p8


  More info there https://www.obytes.com/blog/react-native-github-action

# Husky setup

yarn husky install
