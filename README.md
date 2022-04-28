# react-native-template
Use this project as a base for any react-native projects. Keep existing project structure and follow example files logic and principles while extending it. 

## Install and run
```
yarn
yarn ios
yarn android
```
# Настройка CI/CD для Android
1) В консоли пишем: keytool -genkey -v -keystore my_app_keystore.keystore -alias app_sign_key -keyalg RSA -keysize 2048 -validity 10000

  my_app_keystore.keystore - это название самого хранилища, которое мы создаем.

  app_sign_key - название ключа, по которому мы будем доставать наш секретный ключ.

  10000 - время жизни ключа в днях (примерно 27 лет).

  Вводим пароль на хранилище, пароль на ключ и потом по желанию метаданные о владельце. Всё, хранилище готово, можно пользоваться.

2) В Android Studio:

  В меню студии заходим в Build -> Generate Signed Bundle / APK.

  Дальше Next -> Create New и вводим всё то же самое: пароли, имя хранилища и имя ключа в хранилище.
  
3) В гитхабе в репозитории проекта: Settings->Secrets->Actions и добавляем Secret KEYSTORE_PASSWORD со значением пароля, который раньше задавали


  Подробнее тут https://habr.com/ru/company/tuturu/blog/530260/

# Настройка CI/CD для IOS
1) TODO расписать как сгенерить provisioning profile либо просто прикрепить его к проекту если он будет один
2) В xcode открываем .xcworkspace

  Выбираем проект -> Singing & Capabilities -> Release
  
  Убираем галочку с Automatically manage singing
  
  В Provisioning Profile выбираем профиль, который установили
  
3) В секретные ключи репозитория добавляем:

  IOS_MOBILE_PROVISION_BASE64: выполняем команду openssl base64 < MY_Profile.mobileprovision | tr -d '\n' | tee my-profile.base64.txt где MY_Profile.mobileprovision - название скачаного профиля. Соджержимое текстового документа копируем и добавляем в значение секрета.
  
  IOS_P12_BASE64: TODO описать генерацию .p12 файла. После этого openssl base64 < cert.p12 | tr -d '\n' | tee cert.base64.txt и опять же значение текстового файла помещаем в значение секрета
  
  IOS_TEAM_ID: айди команды https://developer.apple.com/account/#!/membership/
  
  IOS_CERTIFICATE_PASSWORD: TODO описать как пароль задаем для сертефиката
  
  APPSTORE_ISSUER_ID:  Users and Access -> API Keys
  
  APPSTORE_API_KEY_ID: Key ID для AppStore Connect API
  
  APPSTORE_API_PRIVATE_KEY: Приватный ключ для AppStore Connect API, находится в файле AuthKey_xxxxxx.p8
  

  Подробнее тут https://www.obytes.com/blog/react-native-github-action

# Настройка husky

1) yarn add husky
2) yarn husky install
3) npx husky add .husky/pre-commit "yarn lint"
