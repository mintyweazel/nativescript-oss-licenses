# nativescript-oss-licenses

This is a nativescript plugin to utilize the android library com.google.gms:oss-licenses   
which lists up all of the oss licenses of native library targeted for android. 

As for now, this plugin is only for android, and works only for native libraries.

## How to use

### 1. Install this plugin

Run this command in your project.

```
tns plugin add nativescript-oss-licenses
```


### 2. Modify local AndroidManifest.xml

The library `com.google.gms:oss-licenses` prepares the activity which shows oss licenses in your project in handy.  
In order to use this feature, you have to modify `<project-root>/app/App_Resources/Android/AndroidManifest.xml` as follows.

```
  <activity android:name="com.tns.ErrorReportActivity"/>
+ <activity
+   android:theme="@style/Theme.AppCompat.Light.DarkActionBar" 
+   android:name="com.google.android.gms.oss.licenses.OssLicensesActivity"
+ />
+ <activity
+   android:theme="@style/Theme.AppCompat.Light.DarkActionBar" 
+   android:name="com.google.android.gms.oss.licenses.OssLicensesMenuActivity"
+ />
```

### 3. Add some codes to start the activity which shows the oss licenses

```
  startOSSLicenceActivity(){
    const ossLicensesMenuActivity = com.google.android.gms.oss.licenses.OssLicensesMenuActivity;
    const intent = new android.content.Intent(
      utils.ad.getApplicationContext(),
      ossLicensesMenuActivity.class
    );
    ossLicensesMenuActivity.setActivityTitle("TITLE");
    application.android.foregroundActivity.startActivity(intent);
  }
```

## License

This project is licensed under the MIT License.

## References

[Including Open Source Notices](https://developers.google.com/android/guides/opensource)
