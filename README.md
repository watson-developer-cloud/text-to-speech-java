# Text to Speech Java Starter Application

  The IBM Watson [Text to Speech][service_url] service is designed for streaming, low latency, synthesis of audio from text. It is the inverse of the automatic speech recognition. The TTS service can be accessed via a REST interface or directly via TCP.

Give it a try! Click the button below to fork into IBM DevOps Services and deploy your own copy of this application on Bluemix.

[![Deploy to Bluemix](https://bluemix.net/deploy/button.png)](https://bluemix.net/deploy)

## Building the application

Use [Apache Maven](https://maven.apache.org/) to build the application.

```sh
$ mvn install
```

## Deploying to Bluemix

1. Create a Bluemix Account

    [Sign up][sign_up] in Bluemix, or use an existing account. Watson Services in Beta are free to use.

2. Download and install the [Cloud-foundry CLI][cloud_foundry] tool

3. Connect to Bluemix in the command line tool.
  ```sh
  $ cf login -a https://api.ng.bluemix.net
  ```

4. Create the `Text to Speech` service in Bluemix.
  ```sh
  $ cf create-service text_to_speech standard text-to-speech-service
  ```

5. [Build the application](#building-the-application).

6. Deploy the application. Ensure the `<application-name>` is something unique.
 
  ```sh
  $ cf push <application-name> -p target/text-to-speech-1.0-SNAPSHOT.war
  ```
 
  Once deployed, the application will be available at `http://<application-name>.mybluemix.net`.

## Running locally

The application uses [WebSphere Liberty](https://developer.ibm.com/wasdev/websphere-liberty/) as its server. Liberty provides the [bluemixUtility](http://www.ibm.com/support/knowledgecenter/SSEQTP_8.5.5/com.ibm.websphere.wlp.doc/ae/rwlp_blmx_utility.html) command line client that makes it easy for applications to use certain Bluemix services.

1. [Build the application](#building-the-application).

2. Initialize Liberty server for the application. Maven will automatically download and install WebSphere Liberty.

  ```sh
  $ mvn liberty:create-server
  ```

3. Log in to Bluemix and create `Text to Speech` service instance as described in [Deploying to Bluemix](#deploying-to-bluemix) steps 1-4.

4. Use `bluemixUtility` to import configuration for the `Text to Speech` service.

  ```sh
  $ ./target/wlp/bin/bluemixUtility import text-to-speech-service
  ```

5. Bind the imported configuration to Liberty server.

  ```sh
  $ ./target/wlp/bin/bluemixUtility bind defaultServer text-to-speech-service
  ```

6. Start the application.

   ```sh
   $ mvn liberty:run-server
   ```

   Once started, the application will be available at [http://localhost:9080/text2speech](http://localhost:9080/text2speech).

## Troubleshooting

  To troubleshoot your Bluemix application, the most useful source of
  information is the log files. To see them, run the following command:

  ```sh
  $ cf logs <application-name> --recent
  ```

## License

  This sample code is licensed under Apache 2.0. Full license text is available in [LICENSE](LICENSE).
  The sample uses jQuery which is licensed under MIT

## Contributing

  See [CONTRIBUTING](CONTRIBUTING.md).

## Open Source @ IBM

  Find more open source projects on the
  [IBM Github Page](http://ibm.github.io/).

[service_url]: http://www.ibm.com/smarterplanet/us/en/ibmwatson/developercloud/text-to-speech.html
[cloud_foundry]: https://github.com/cloudfoundry/cli
[sign_up]: https://apps.admin.ibmcloud.com/manage/trial/bluemix.html?cm_mmc=WatsonDeveloperCloud-_-LandingSiteGetStarted-_-x-_-CreateAnAccountOnBluemixCLI
[liberty]: https://developer.ibm.com/wasdev/downloads/
[liberty_mac]: http://www.stormacq.com/how-to-install-websphere-8-5-liberty-profile-on-mac/
[ant]: http://ant.apache.org/bindownload.cgi
