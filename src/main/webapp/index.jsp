<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html>
<html lang="en">
<head>
    <title>Text to Speech</title>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="shortcut icon" href="images/favicon.ico" type="image/x-icon">
    <link rel="icon" href="images/favicon.ico" type="image/x-icon">
    <link rel="stylesheet" href="css/watson-bootstrap-dark.css">
    <link rel="stylesheet" href="css/style.css">
</head>

<body>
    <div class="container">
        <div class="row">
            <div class="col-lg-12">
                <div class="row top-nav">
                    <div class="col-lg-12">
                        <a href="http://www.ibm.com/smarterplanet/us/en/ibmwatson/developercloud/text-to-speech.html"
                            class="left">Learn more about this service</a>
                        <a href="https://github.com/watson-developer-cloud/text-to-speech-python"
                            class="right fork">Fork</a>
                        <a href="https://developer.ibm.com/watson/" class="right">Watson Community</a>
                    </div>
                </div>
                <div style="padding-bottom:0px;" class="row header">
                    <div class="avatar img-container col-lg-1 col-xs-1">
                    	<img src="images/app.png">
                    </div>
                    <div class="col-lg-6 col-xs-6">
                        <h2>Text to Speech Java Starter Application</h2>
                        <p>The Text to Speech service uses IBM's speech synthesis capabilities to convert English or Spanish text to an audio signal. The audio is streamed back to the client with minimal delay. The service can be accessed via a REST interface.</p>
                    </div>
                    <div class="col-lg-4 col-xs-4">
                        <h3>Keep Exploring:</h3><a href="http://www.ibm.com/smarterplanet/us/en/ibmwatson/developercloud/doc/text-to-speech/" class="left">Documentation</a><a href="http://www.ibm.com/smarterplanet/us/en/ibmwatson/developercloud/apis/#!/text-to-speech" class="right">API Details</a>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-lg-7 col-md-7 col-xs-12">
                <h2>Try the service</h2>
                <div class="well">
                    <form method="get" class="form-horizontal">
                        <fieldset>
                            <div class="row">
                                <div class="col-lg-12 col-xs-12">
                                    <label for="textArea" class="control-label">Enter or paste the text to be synthesized into speech:</label>
                                    <textarea id="textArea" name="text" rows="8" required class="form-control"></textarea><span class="help-block"><small>The text language must match the selected voice language:
 Mixing language (English text with a Spanish voice) does not produce valid results.</small></span>
                                </div>
                            </div>
                            <div style="margin-bottom:30px;" class="row">
                                <label for="voice" class="col-lg-12 col-xs-12 control-label">Select the Voice model:</label>
                                <div class="col-lg-12 col-xs-12">
                                    <select class="select-voice" id="voice" style="width:100%" name="voice" required class="form-control">
                                    </select>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-lg-4 col-xs-4 download-container">
                                    <input value="Download" class="btn btn-block download-button">
                                </div>
                                <div class="col-lg-4 col-xs-4 text-center"></div>
                                <div class="col-lg-4 col-xs-4 ie-speak">
                                    <input value="Speak" class="btn btn-block speak-button">
                                    <div class="arrow-box">
                                        <p>This browser cannot play the ogg audio format. Use Chrome or Firefox to play audio.</p>
                                    </div>
                                </div>
                            </div>
                        </fieldset>
                    </form>
                </div>
            </div>
            <div class="col-lg-5 col-md-5 col-xs-12">
                <h2>Output</h2>
                <div class="row">
                    <div class="col-lg-12 col-xs-12">
                        <div style="display:none" class="well result">
                            <div class="text-center">
                                <audio autoplay preload="auto" autobuffer controls class="audio"></audio>
                            </div>
                            <div><span class="help-block">The synthesized audio is streamed to the client as it is being produced, using the HTTP chunked encoding. The audio is returned in the <a href="http://www.vorbis.com/">Ogg Vorbis</a> format which can be played using <a href="http://www.videolan.org/vlc/index.html">VLC</a>, <a href="http://audacity.sourceforge.net/">Audacity</a> and many other players.</span>
                            </div>
                        </div>
                        <div style="display:none" class="well error">
                            <div class="form-group row">
                                <div class="col-lg-12 col-xs-12">
                                    <p class="errorMsg">Error processing the request.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="help-block text-center"><small>Audio output only plays on browsers supporting
ogg audio format, including recent versions of <a href="https://www.google.com/intl/en/chrome/browser/desktop/" target="_blank">Chrome </a>and <a href="https://www.mozilla.org/en-US/firefox/new/" target="_blank">Firefox.</a></small>
            </div>
        </div>
    </div>
    <script type="text/javascript" src="js/browser-detect.js"></script>
    <script type="text/javascript" src="js/jquery-1.11.1.min.js"></script>
    <script type="text/javascript" src="js/constants.js"></script>
    <script type="text/javascript" src="js/demo.js"></script>
</body>

</html>
