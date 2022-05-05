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