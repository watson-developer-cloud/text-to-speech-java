# Text to Speech Java Starter Application

  The IBM Watson [Text to Speech][service_url] service is designed for streaming, low latency, synthesis of audio from text. It is the inverse of the automatic speech recognition. The TTS service can be accessed via a REST interface or directly via TCP.

## Getting Started

1. Create a Bluemix Account

    [Sign up][sign_up] in Bluemix, or use an existing account. Watson Services in Beta are free to use.

2. Download and install the [Cloud-foundry CLI][cloud_foundry] tool

3. Edit the `manifest.yml` file and change the `<application-name>` to something unique.
  ```none
  applications:
  - services:
    - text-to-speech-service
    name: <application-name>
    path: output/webApp.war
    memory: 512M
  ```

  The name you use determines your initial application URL, e.g.,
  `<application-name>.mybluemix.net`.

4. Connect to Bluemix in the command line tool.
  ```sh
  $ cf api https://api.ng.bluemix.net
  $ cf login -u <your-user-ID>
  ```

5. Create the Text to Speech service in Bluemix.
  ```sh
  $ cf create-service text_to_speech free text-to-speech-service
  ```

6. Download and install the [ant][ant] compiler.

7. Build the project.

   You need to use the Apache `ant` compiler to build the Java application.
   For information about the `ant` compiler and to download a copy for your
   operating system, visit ant.apache.org.

  ```sh
  $ ant
  ```

8. Push it live!
  ```sh
  $ cf push
  ```

   See the full [Getting Started][getting_started] documentation for more
   details, including code snippets and references.

## Running locally

  The application uses the WebSphere Liberty profile runtime as its server,
  so you need to download and install the profile as part of the steps below.

1. Copy the credentials from your `text-to-speech-service` service in Bluemix to
   `DemoServlet.java`. You can use the following command to see the
   credentials:

	    ```sh
	    $ cf env <application-name>
	    ```

	   Example output:

	    ```sh
	    System-Provided:
	    {
	    "VCAP_SERVICES": {
	      "text_to_speech": [{
	          "credentials": {
	            "url": "<url>",
	            "password": "<password>",
	            "username": "<username>"
	          },
	        "label": "text_to_speech",
	        "name": "text-to-speech-service",
	        "plan": "free"
	     }]
	    }
	    }
	    ```

  		You need to copy the `username`, `password`, and `url`.

2. Install the [Liberty profile runtime][liberty] (for Mac OSX, check this
   [guide][liberty_mac]).

3. Create a Liberty profile server in Eclipse.

4. Add the application to the server.

5. Start the server.

6. Go to `http://localhost:9080/app/` to see the running application.

## Certificate Note

  If you get certificate errors when hitting this service, for example:

	PKIX path building failed: java.security.cert.CertPathBuilderException: PKIXCertPathBuilderImpl could not build a valid CertPath.; internal cause is:
		java.security.cert.CertPathValidatorException: The certificate issued by CN=GeoTrust SSL CA - G2, O=GeoTrust Inc., C=US is not trusted; internal cause is: 
		java.security.cert.CertPathValidatorException: Certificate chaining error
	
	then your runtime JRE does not include the latest GeoTrust certificate.
	
	The project includes a cacerts with this certificate already installed at: <ts-java>/WebContent/resources/.java-overlay/.java/jre/lib/security/cacerts that you can drop
	into your JRE at <JAVA_HOME>/jre/lib/security to resolve this issue when running locally.
	
	The ANT build will automatically put this cacerts into a location where BlueMix will overlay it during deployment.	

## Troubleshooting

  To troubleshoot your Bluemix application, the most useful source of
  information is the log files. To see them, run the following command:

  ```sh
  $ cf logs <application-name> --recent
  ```

## License

  This sample code is licensed under Apache 2.0. Full license text is available in [LICENSE](LICENSE).

## Contributing

  See [CONTRIBUTING](CONTRIBUTING.md).

## Open Source @ IBM

  Find more open source projects on the
  [IBM Github Page](http://ibm.github.io/).

[service_url]: http://www.ibm.com/smarterplanet/us/en/ibmwatson/developercloud/text-to-speech.html
[cloud_foundry]: https://github.com/cloudfoundry/cli
[getting_started]: http://www.ibm.com/smarterplanet/us/en/ibmwatson/developercloud/doc/getting_started/
[sign_up]: https://apps.admin.ibmcloud.com/manage/trial/bluemix.html?cm_mmc=WatsonDeveloperCloud-_-LandingSiteGetStarted-_-x-_-CreateAnAccountOnBluemixCLI
[liberty]: https://developer.ibm.com/wasdev/downloads/
[liberty_mac]: http://www.stormacq.com/how-to-install-websphere-8-5-liberty-profile-on-mac/
[ant]: http://ant.apache.org/bindownload.cgi