import React, {useState, useEffect} from 'react';
import {Text, View, TouchableOpacity, Image} from 'react-native';
import PropTypes from 'prop-types';
import Styles from '../../../styles/Styles';

import QuizzAnswerStyle from '../../../styles/components/QuizzAnswer';
import ExpandableText from '../global/ExpandableText';
import useIsMounted from '../../../hooks/isMounted';

AnswerScreen.propTypes = {
  question: PropTypes.object,
};

export default function AnswerScreen(props) {
  const [content, setContent] = useState({});
  const [isExpanded, setIsExpanded] = useState(false);
  const _currentQuestion = props.question;
  const isMounted = useIsMounted();

  useEffect(() => {
    setContent({
      text: _currentQuestion.explanation,
      numberOfLines: 3,
    });
  }, [_currentQuestion.explanation, isMounted]);

  function _onReadMoreClick() {
    if (content.numberOfLines == 0) {
      setContent(old => {
        return {...old, numberOfLines: 3};
      });
    } else {
      setContent(old => {
        return {...old, numberOfLines: 0};
      });
    }
    setIsExpanded(!isExpanded);
  }

  let _rightAnswer = _currentQuestion.answers.filter(
    _rightAnswer => _rightAnswer.id == _currentQuestion.rightAnswer,
  );

  if (_rightAnswer === undefined || _rightAnswer.length == 0) {
    _rightAnswer = '';
  } else {
    _rightAnswer = _rightAnswer[0].text;
  }

  return (
    <View style={{flex: 3}}>
      {_rightAnswer != '' && (
        <View style={Styles.rightAnswerButton}>
          <View style={[QuizzAnswerStyle.pictureAndTextWrapper]}>
            <View style={{flex: 0.2, maxWidth: 50, justifyContent: 'center'}}>
              <Image
                style={QuizzAnswerStyle.checkPicture}
                source={require('../../../assets/pictures/check.png')}
              />
            </View>
            <View style={{flex: 0.8, justifyContent: 'center'}}>
              <Text style={[Styles.rightAnswerButtonText, {fontSize: 15}]}>
                {_rightAnswer}
              </Text>
            </View>
          </View>
        </View>
      )}
      <View style={[QuizzAnswerStyle.explanationWrapper, {flexGrow: 1}]}>
        <TouchableOpacity
          style={[QuizzAnswerStyle.explanationInnerWrapper, {flexGrow: 1}]}
          onPress={() => {
            _onReadMoreClick();
          }}>
          <ExpandableText
            containerStyle={{backgroundColor: '#FFFFFF', borderRadius: 7}}
            content={content}
            isExpanded={isExpanded}
            textStyle={{marginTop: 0}}
            readMoreStyle={{color: '#D13E72'}}
            purpleMode={true}
            lessPicture={'minus-purple.png'}
            morePicture={'plus-purple.png'}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}
