/**
 * Copyright 2014 IBM Corp. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/*global $, VOICES, SAMPLE_TEXT */

'use strict';

$(document).ready(function() {
  var audio = $('.audio').get(0),
    textArea = $('#textArea');

  Object.keys(VOICES).forEach(function(key) {
    $('<option>', { value : key })
    .appendTo($('.select-voice'))
    .text(VOICES[key]);
  });

  function updateSampleText() {
    var lang = $('.select-voice').val().substr(0,5);
    $('#textArea').text(SAMPLE_TEXT[lang]);
  }
  $('.select-voice').change(updateSampleText);
  updateSampleText();

  // IE and Safari not supported disabled Speak button
  if ($('body').hasClass('ie') || $('body').hasClass('safari')) {
    $('.speak-button').prop('disabled', true);
  }

  if ($('.speak-button').prop('disabled')) {
    $('.ie-speak .arrow-box').show();
  }

  $('.audio').on('error', function () {
    $('.result').hide();
    $('.errorMgs').text('Error processing the request.');
    $('.errorMsg').css('color','red');
    $('.error').show();
  });

  $('.audio').on('loadeddata', function () {
    $('.result').show();
    $('.error').hide();
  });

  $('.download-button').click(function() {
    textArea.focus();
    if (validText(textArea.val())) {
      window.location.href = '/synthesize?download=true&' + $('form').serialize();
    }
  });

  $('.speak-button').click(function() {
    $('.result').hide();
    audio.pause();

    $('#textArea').focus();
    if (validText(textArea.val())) {
      audio.setAttribute('src','/synthesize?' + $('form').serialize());
    }
  });

  function validText(text) {
    $('.error').hide();
    $('.errorMsg').css('color','#5a5a5a');

    if ($.trim(text).length === 0) {
      $('.errorMsg').text('Please enter the text you would like to synthesize in the text window.');
      $('.errorMsg').css('color','#5a5a5a');
      $('.error').show();
      return false;
    }

    if (!containsAllLatin1(text)) {
      $('.errorMsg').text('Language not supported. Please use only ISO 8859 characters');
      $('.error').show();
      return false;
    }

    return true;
  }

  /**
   * Check that the text doesn't contains non latin-1 characters.
   * @param  String  The string to test
   * @return true if the string is latin-1
   */
  function containsAllLatin1(str) {
    return  /^[A-z\u00C0-\u00ff\s?@¿''\.,-\/#!$%\^&\*;:{}=\-_`~()0-9]+$/.test(str);
  }

});
