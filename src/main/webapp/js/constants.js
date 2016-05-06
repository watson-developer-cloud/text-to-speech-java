/**
 * Copyright 2015 IBM Corp. All Rights Reserved.
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

'use strict';

// Sample text values
var SAMPLE_TEXT = {
  'es-ES': "Consciente de su patrieso espiritual y moral, la Unión está fundada sobre los valores indivisibles y universales de la dignidad humana, la libertad, la igualdad y la solidaridad, y se basa en los principios de la democracia y el Estado de Derecho. Al instituir la ciudadanía de la Unión y crear un espacio de libertad, seguridad y justicia, sitúa a la persona en el centro de su actuación.",
  'fr-FR': "Consciente de son patrimoine spirituel et moral, l'Union se fonde sur les valeurs indivisibles et universelles de dignité humaine, de liberté, d'égalité et de solidarité; elle repose sur le principe de la démocratie et le principe de l'État de droit. Elle place la personne au coeur de son action en instituant la citoyenneté de l'Union et en créant un espace de liberté, de sécurité et de justice.",
  'en-US': "Conscious of its spiritual and moral heritage, the Union is founded on the indivisible, universal values of human dignity, freedom, equality and solidarity; it is based on the principles of democracy and the rule of law. It places the individual at the heart of its activities, by establishing the citizenship of the Union and by creating an area of freedom, security and justice.",
  'de-DE': "In dem Bewusstsein ihres geistig-religiösen und sittlichen Erbes gründet sich die Union auf die unteilbaren und universellen Werte der Würde des Menschen, der Freiheit, der Gleichheit und der Solidarität. Sie beruht auf den Grundsätzen der Demokratie und der Rechtsstaatlichkeit. Sie stellt den Menschen in den Mittelpunkt ihres Handelns, indem sie die Unionsbürgerschaft und einen Raum der Freiheit, der Sicherheit und des Rechts begründet.",
  'it-IT': "Consapevole del suo patrimonio spirituale e morale, l'Unione si fonda sui valori indivisibili e universali della dignità umana, della libertà, dell'uguaglianza e della solidarietà; essa si basa sul principio della democrazia e sul principio dello Stato di diritto. Pone la persona al centro della sua azione istituendo la cittadinanza dell'Unione e creando uno spazio di libertà, sicurezza e giustizia."
};

SAMPLE_TEXT['es-US'] = SAMPLE_TEXT['es-ES'];

var VOICES = {
   'en-US_AllisonVoice'  : 'English (en-US): Allison (female)',
   'en-US_LisaVoice'     : 'English (en-US): Lisa (female)',
   'en-US_MichaelVoice'  : 'English (en-US): Michael (male)',
   'fr-FR_ReneeVoice'    : 'French (fr-FR): Renee (female)',
   'de-DE_BirgitVoice'   : 'German (de-DE): Birgit (female)',
   'de-DE_DieterVoice'   : 'German (de-DE): Dieter (male)',
   'it-IT_FrancescaVoice': 'Italian (it-IT): Francesca (female)',
   'es-ES_LauraVoice'    : 'Spanish (es-US): Laura (female)',
   'es-US_SofiaVoice'    : 'Spanish (en-US): Sofia (female)',
   'es-ES_EnriqueVoice'  : 'Spanish (es-ES): Enrique (male)'
 };