import React from 'react';
import {
    Text,
    View,
    TouchableOpacity,
    YellowBox,
	Image,
	ImageBackground
	} from 'react-native';

import Styles from '../styles/Styles';
import Colors from '../styles/Color';

export default class QuizzScreen extends React.Component {
	state = {
		loading	  	 	: true,
		displayQuestion	: true,
		displayAnswer	: false,
		questions 	 	: [],
		currentIndex 	: 0,
		total 		 	: 0,
		givenAnswers 	: [],
	}
	
    constructor(props) {
		super(props);

	    this.state.questions = this.props.questions;
		this.state.total 	 = this.props.questions.length;
		
		YellowBox.ignoreWarnings([
			'Warning: componentWillMount is deprecated',
			'Warning: componentWillReceiveProps is deprecated',
		]);
    }

    componentDidMount() {
		
	}    

    componentWillUnmount() {
        
    }
    
    _answerQuestion = (key) => 
    {
	    const currentQuestion = this.state.questions[this.state.currentIndex];
	    const localAnswer = {
		    'questionId'  : currentQuestion.id,
		    'givenAnswer' : currentQuestion.answers[key].id
	    }
		
		this.setState(prevState => (
		{
			displayAnswer 	: !this.state.displayAnswer,
			givenAnswers	: [...prevState.givenAnswers, localAnswer]
		}
		));
		
    }
    
    _nextQuestion = () => 
    {
	    if( this.state.currentIndex+1 >= this.state.total )
	    {
		    this.props.onFinishedQuizz(this.state.givenAnswers);
	    }
	    else
	    {
			this.setState({ currentIndex : this.state.currentIndex + 1, displayAnswer : !this.state.displayAnswer });
	    }
    }
    
    _onDone = () => 
  	{
    	this.props.navigation.navigate("SecondQuestion");
  	}
  	
  	_renderAnswer = ( currentQuestion ) => 
  	{
	  	const _rightAnswer = currentQuestion.answers[currentQuestion.rightAnswer].text;
	  	return <View style={{ flex: 2 }}>
				  	<View style={ Styles.rightAnswerButton}>
						<View style={ Styles.wrongAnswerButtonInnerWrapper }>
							<View style={ Styles.rightAnswerButtonIconWrapper }>
								<Image 
							    	style={{ 
								    	width: 25,
										height: 25,
										resizeMode: 'contain',
										marginLeft:2
									}}
									source={require('../assets/pictures/check.png')} 
								/>
							</View>
							<Text style={ Styles.rightAnswerButtonText }>{ _rightAnswer }</Text>
						</View>
					</View>
					<View style={{ flex: 1, width: '100%', paddingLeft: 15, paddingRight: 15 }}>
						<View style={{ flex:1, backgroundColor: '#FFFFFF', borderRadius: 7, padding: 20 }}>
							<Text style={{ flex:1.5, flexWrap: 'wrap', fontSize: 16 }}>
								{ currentQuestion.explanation }
							</Text>
							<TouchableOpacity style={{ flex : 0.5, marginBottom	: 10, marginTop : 10, paddingLeft : 15,padding : 5, flexDirection : 'row', borderWidth: 0, borderRadius	: 7 }}>
			
			                    <View style={{flex: 1, flexDirection: 'row',  justifyContent: 'flex-end'}}>
			                        <Image style={{ marginRight: 5, width: 30, height: 30, marginTop: -4, paddingTop: 0, resizeMode: 'contain'}} source={require('../assets/pictures/plus.png')} />
			                        <Text style={{ fontSize: 16, textDecorationLine: 'underline', color : Colors.mainButton}}>
			                            En savoir plus
			                        </Text>
			                    </View>
			                </TouchableOpacity>
		                </View>
					</View>
				</View>
  	}
  	
  	_renderAnswersButtons = ( answers )  => 
  	{
		return answers.map((item, key) => {
	        return (
	            <TouchableOpacity
	            	key={key}
					style={{ flex: 2, paddingTop: 2, paddingBottom: 2, maxHeight: 55 }}
					onPress={this._answerQuestion.bind(this,key)}
				>
					<View style={ Styles.bottomButton }>
						<Text style={ Styles.bottomButtonText }>{ item.text }</Text>
					</View>
				</TouchableOpacity>
	        );
	    });
  	}
  	
  	_renderNextButton = () =>
  	{
	  	return (
	            <TouchableOpacity
					style={{ flex: 2, justifyContent: 'center', alignItems: 'center', paddingTop: 2, paddingBottom: 2, maxHeight: 55, marginBottom: 20 }}
					onPress={this._nextQuestion}
				>
					<View style={{
						width: 46,
						height: 46,
						paddingLeft: 12,
						paddingTop: 12,
						borderRadius: 25,
				    	backgroundColor: Colors.mainButton,
					}}>
						<Image 
					    	style={{ 
						    	width: 23,
						    	height: 23,
								resizeMode: 'contain' 
							}}
					    	
							source={require('../assets/pictures/right-arrow.png')} />
					</View>

				</TouchableOpacity>
	        );
  	}
  	
	render()
	{
		const _currentQuestion = this.state.questions[this.state.currentIndex];

		return (
			<ImageBackground imageStyle={{ borderRadius: 7 }} style={{width: '100%', height: '100%' }} source={_currentQuestion.background}> 
				<View style={ Styles.flexOne }>
				    <View style={{ flex: 1}}>
			    		
				    </View>
					<View style={{ flex: 2}}>
						<View style={{ paddingLeft: 20, paddingRight: 20, marginTop: 20,  alignSelf: "center" }}>
							<Text  style={ Styles.questionText  }>{_currentQuestion.question}</Text>
						</View>

					</View>
					
					<View style={{ flex: 2 }}>
						<View style={{ flex: 1, flexDirection: "column" }}
						>
							{ !this.state.displayAnswer && _currentQuestion.answers.length <= 2 && <View style={ Styles.flexOne }></View>}
							{ !this.state.displayAnswer && this._renderAnswersButtons( _currentQuestion.answers )}       
							{ !this.state.displayAnswer && _currentQuestion.answers.length <= 2 && <View style={ Styles.flexOne }></View>}
							
							{ this.state.displayAnswer && this._renderAnswer( _currentQuestion )}       
							

						</View>
					</View>
					
					<View style={{ flex: 2 }}>
						
					</View>
					
					<View style={{ position: 'absolute', bottom: 15, width: '100%' }}>
						{ this.state.displayAnswer && this._renderNextButton() }
						
						<Text style={{ marginTop: 0, textAlign: 'center', color: '#FFFFFF', fontSize: 18 }} >{ this.state.currentIndex + 1 } / { this.state.total }</Text>
					</View>
				</View>
            </ImageBackground>
		);
	}
}