## IOS setup
- Go to [Apple Developer account](https://developer.apple.com/)

        Select Account -> Certificates, Identifiers & Profiles -> Certificates
    
    Create new certificate and install on device

     ![Create new certificate](https://github.com/remdev-studio/react-native-template/blob/main/docs/images/certificate-create.png?raw=true)

        Select Certificates, Identifiers & Profiles -> Profiles

    Create new profile

     ![Create new profile](https://github.com/remdev-studio/react-native-template/blob/main/docs/images/provisioning-profile-create.png?raw=true)
     ![Select profile type](https://github.com/remdev-studio/react-native-template/blob/main/docs/images/provisioning-profile-distribution.png?raw=true)
     ![Select app id](https://github.com/remdev-studio/react-native-template/blob/main/docs/images/provisioning-profile-app-id.png?raw=true)

    Download Provisioning Profile and install it on device

- In xcode open .xcworkspace

      Select project -> Singing & Capabilities -> Release
  
      Uncheck Automatically manage singing
  
      Select downloaded Provisioning Profile

      Select profile -> General

      Make sure there are correct version and build

      Go to Product -> Archive

      Upload app to TestFlight manually
  
- Add following secrets in github repository:

     IOS_MOBILE_PROVISION_BASE64: 
     
        run in console "openssl base64 < MY_Profile.mobileprovision | tr -d '\n' | tee my-profile.base64.txt" where MY_Profile.mobileprovision - name of downloaded provisioning profile. Copy text of txt file and pass int as value of secret.
  
     IOS_P12_BASE64:

      Open Keychain Access app

      Select My Certificates tab, make sure you have distribution certificate there

     ![](https://github.com/remdev-studio/react-native-template/blob/main/docs/images/keychain-access-1.png?raw=true)

      Select certificate and choose export option

     ![](https://github.com/remdev-studio/react-native-template/blob/main/docs/images/keychain-access-2.png?raw=true)

      Export certificate as p12 file. It requires to create a password we need on next steps

     ![](https://github.com/remdev-studio/react-native-template/blob/main/docs/images/keychain-access-3.png?raw=true)
      
      Then run command "openssl base64 < cert.p12 | tr -d '\n' | tee cert.base64.txt" Copy text of txt file and pass int as value of secret.
  
     IOS_TEAM_ID: 
      
        Id of team https://developer.apple.com/account/#!/membership/
  
     IOS_CERTIFICATE_PASSWORD: 
     
        Password must be created at IOS_P12_BASE64 setup step
  
     APPSTORE_ISSUER_ID:
        
        Users and Access -> API Keys
  
     APPSTORE_API_KEY_ID:
     
        Key ID for AppStore Connect API
  
     APPSTORE_API_PRIVATE_KEY: 
     
        Private key for AppStore Connect API, file like AuthKey_xxxxxx.p8


 ##### More info there https://www.obytes.com/blog/react-native-github-action