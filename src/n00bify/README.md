# N00bify

The internet is a very confounding place for some adults. Tom has just joined an online forum and is trying to fit in with all the teens and tweens. It seems like they're speaking in another language! Help Tom fit in by translating his well-formatted English into n00b language.

The following rules should be observed:

* "to" and "too" should be replaced by the number 2, even if they are only part of a word (E.g. today = 2day)
* Likewise, "for" and "fore" should be replaced by the number 4
* Any remaining double o's should be replaced with zeros (E.g. noob = n00b)
* "be", "are", "you", "please", "people", "really", "have", and "know" should be changed to "b", "r", "u", "plz", "ppl", "rly", "haz", and "no" respectively (even if they are only part of the word)
* The letter "s" should always be replaced by a "z", maintaining case
* "LOL" must be added to the beginning of any input string starting with a "w" or "W"
* "OMG" must be added to the beginning (after LOL, if applicable,) of a string 32 characters<sup>3</sup> or longer
* All evenly numbered words<sup>2</sup> must be in ALL CAPS (Example: `Cake is very delicious`. becomes `Cake IZ very DELICIOUZ`)
* If the input string starts with "h" or "H", the entire output string should be in ALL CAPS
* Periods ( . ), commas ( , ), and apostrophes ( ' ) are to be removed
* A question mark ( ? )<sup>3</sup> should have more question marks added to it, equal to the number of words<sup>2</sup> in the sentence (Example: `Are you a foo?` has 4 words, so it would be converted to `r U a F00????`)
* Similarly, exclamation points ( ! )<sup>3</sup> should be replaced by a series of alternating exclamation points and the number 1, equal to the number of words<sup>2</sup> in the sentence (Example: `You are a foo!` becomes `u R a F00!1!1`)

<sup>1</sup>Characters should be counted After: any word conversions, adding additional words, and removing punctuation. Excluding: All punctuation and any 1's added after exclamation marks ( ! ). Character count includes spaces.

<sup>2</sup> For the sake of this kata, "words" are simply a space-delimited substring, regardless of its characters. Since the output may have a different number of words than the input, words should be counted based on the output string.

Example: whoa, `you are my 123 <3` becomes `LOL WHOA u R my 123 <3` = 7 words

<sup>3</sup>The incoming string will be punctuated properly, so punctuation does not need to be validated.
